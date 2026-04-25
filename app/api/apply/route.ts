import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateRef, saveSubmission } from '@/lib/submissions';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = Record<string, unknown> & { email?: string; firstName?: string; lastName?: string };

async function postWebhook(url: string, payload: unknown): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { ok: false, error: `Webhook returned ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Webhook fetch failed' };
  }
}

async function sendApplicantEmail(opts: { to: string; ref: string; firstName?: string }): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return; // Silently skip when not configured

  const resend = new Resend(apiKey);
  const greet = opts.firstName ? `Hi ${opts.firstName},` : 'Hello,';
  await resend.emails.send({
    from,
    to: opts.to,
    subject: `Your Herita application — ${opts.ref}`,
    text: `${greet}

Thank you — we have received your application. A specialist will be in touch within one business day.

Your reference number: ${opts.ref}

If anything is urgent, reply to this email and a member of our team will respond.

— The Herita team`,
  });
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  // Minimal validation — server-side trust nothing
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  const ref = generateRef();
  const receivedAt = new Date().toISOString();
  const payload = {
    ref,
    receivedAt,
    source: 'herita.com.au',
    ...body,
  };

  // Primary webhook (required)
  const primaryUrl = process.env.WEBHOOK_URL;
  let webhookResult: { ok: boolean; error?: string } = { ok: true };
  if (primaryUrl) {
    webhookResult = await postWebhook(primaryUrl, payload);
  } else if (process.env.NODE_ENV === 'production') {
    // In production, no webhook configured = misconfiguration. We still 200
    // so the user has a smooth experience, but log it loudly.
    console.error('[apply] WEBHOOK_URL not set — submission stored locally only');
  }

  // Optional secondary webhook (Slack / Sheets via Apps Script / Zapier)
  const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    void postWebhook(sheetsUrl, payload).catch((e) => {
      console.error('[apply] sheets webhook failed', e);
    });
  }

  // Confirmation email (best-effort)
  void sendApplicantEmail({
    to: email,
    ref,
    firstName: typeof body.firstName === 'string' ? body.firstName : undefined,
  }).catch((e) => {
    console.error('[apply] confirmation email failed', e);
  });

  // Store for /admin
  saveSubmission({
    ref,
    receivedAt,
    status: webhookResult.ok ? 'webhook-ok' : 'webhook-failed',
    webhookError: webhookResult.error,
    data: body,
  });

  return NextResponse.json({ ok: true, ref });
}

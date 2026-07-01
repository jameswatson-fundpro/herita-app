import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateRef, saveSubmission } from '@/lib/submissions';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Body = Record<string, unknown> & {
  email?: string;
  firstName?: string;
  lastName?: string;
  applicationId?: string;
  step?: string;
  stepIndex?: number;
  partial?: boolean;
};

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
    subject: `Your Inherita application — ${opts.ref}`,
    text: `${greet}

Thank you — we have received your application. A specialist will be in touch within one business day.

Your reference number: ${opts.ref}

If anything is urgent, reply to this email and a member of our team will respond.

— The Inherita team`,
  });
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const isPartial = body.partial === true;
  const stepLabel = typeof body.step === 'string' ? body.step : 'unknown';

  // Validation:
  //   • Final submit: require a valid email (existing behaviour).
  //   • Partial save (per-step): only require email when the step is the
  //     applicant step (where email is collected). For other partial saves
  //     we accept whatever is given so executor/lawyer-only steps still
  //     post through.
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const needsEmail = !isPartial || stepLabel === 'applicant';
  if (needsEmail && (!email || !/.+@.+\..+/.test(email))) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  // applicationId reuses the same ref across partial saves so backend
  // systems can upsert by it. The first partial save assigns one and the
  // client echoes it back on subsequent calls.
  const incomingId = typeof body.applicationId === 'string' && body.applicationId ? body.applicationId : null;
  const firstName = typeof body.firstName === 'string' ? body.firstName : undefined;
  const lastName = typeof body.lastName === 'string' ? body.lastName : undefined;
  const applicationId = incomingId || generateRef(firstName, lastName);
  const ref = applicationId; // user-facing ref == applicationId for simplicity
  const receivedAt = new Date().toISOString();

  // Build a flat, Zapier-friendly payload. Explicit fields win over raw body;
  // useOfFunds array is joined to a string so Zapier doesn't see JSON arrays.
  // Empty strings are omitted so partial saves don't flood Zapier with blanks.
  const rawBody = { ...body } as Record<string, unknown>;
  delete rawBody.applicationId; // use the canonical one below
  delete rawBody.partial;
  delete rawBody.step;
  delete rawBody.stepIndex;

  const useOfFunds = Array.isArray(rawBody.useOfFunds)
    ? (rawBody.useOfFunds as string[]).join(', ')
    : typeof rawBody.useOfFunds === 'string'
    ? rawBody.useOfFunds
    : '';
  delete rawBody.useOfFunds;

  // Strip empty strings so Zapier field-mapping stays clean on partial saves
  const bodyFields = Object.fromEntries(
    Object.entries(rawBody).filter(([, v]) => v !== '' && v !== null && v !== undefined)
  );

  const payload = {
    ref,
    applicationId,
    receivedAt,
    source: 'inherita.com.au',
    partial: isPartial,
    step: stepLabel,
    stepIndex: typeof body.stepIndex === 'number' ? body.stepIndex : undefined,
    ...bodyFields,
    ...(useOfFunds ? { useOfFunds } : {}),
  };

  // Primary webhook (required) — fires for every step (partial + final)
  const primaryUrl = process.env.WEBHOOK_URL;
  let webhookResult: { ok: boolean; error?: string } = { ok: true };
  if (primaryUrl) {
    webhookResult = await postWebhook(primaryUrl, payload);
  } else if (process.env.NODE_ENV === 'production') {
    console.error('[apply] WEBHOOK_URL not set — submission stored locally only');
  }

  // Optional secondary webhook (Slack / Sheets via Apps Script / Zapier)
  const sheetsUrl = process.env.SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    void postWebhook(sheetsUrl, payload).catch((e) => {
      console.error('[apply] sheets webhook failed', e);
    });
  }

  // Confirmation email — only on final submit, never on partial saves.
  if (!isPartial && email) {
    void sendApplicantEmail({
      to: email,
      ref,
      firstName: typeof body.firstName === 'string' ? body.firstName : undefined,
    }).catch((e) => {
      console.error('[apply] confirmation email failed', e);
    });
  }

  // Store for /admin. Each save is appended; the admin view can group by
  // applicationId to see the latest version of each application.
  saveSubmission({
    ref,
    receivedAt,
    status: webhookResult.ok ? 'webhook-ok' : 'webhook-failed',
    webhookError: webhookResult.error,
    data: { ...body, applicationId, partial: isPartial, step: stepLabel },
  });

  return NextResponse.json({ ok: true, ref, applicationId });
}

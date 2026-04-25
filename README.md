# Herita

Production-grade marketing site and application portal for Herita — an Australian inheritance lender.

Built with **Next.js 14 (App Router)**, TypeScript, and zero-runtime CSS. Deploys to Vercel in one click.

## What's inside

- **Marketing pages** — Home, Inheritance Advance, Executor Loan, Partners
- **Calculator** — three visualisations (donut split, repayment timeline, detail bars), URL-shareable state
- **Application wizard** — 6-step form, localStorage-backed, validated server-side
- **API route** — `/api/apply` posts to a CRM webhook, optional Sheets/Slack webhook, sends a Resend confirmation email
- **Admin** — `/admin` password-gated table of submissions
- **Legal** — Privacy, Credit Guide, Terms, Complaints, Target Market Determination
- **Theme + density tweaks** — light/dark + compact/comfortable/spacious, persisted to localStorage

## Getting started

```bash
pnpm install        # or npm install / yarn
cp .env.example .env
pnpm dev
```

Open <http://localhost:3000>.

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `WEBHOOK_URL` | yes (production) | POST destination for every submission. Your CRM, Zapier, n8n, etc. |
| `SHEETS_WEBHOOK_URL` | no | Secondary fire-and-forget webhook (Google Apps Script, Slack incoming webhook, etc). |
| `RESEND_API_KEY` | no | Enables the applicant confirmation email. Get one at <https://resend.com>. |
| `RESEND_FROM_EMAIL` | required if `RESEND_API_KEY` is set | Verified sender address. |
| `ADMIN_PASSWORD` | yes (for `/admin`) | Long random string. |
| `NEXT_PUBLIC_SITE_URL` | no | Used for canonical / OG metadata. |

## Submissions

Out of the box, submissions are kept in an in-memory store (`lib/submissions.ts`) for the `/admin` view. **This resets on every cold start.** For production, replace the store with a real database — Postgres, Supabase, KV, etc. The webhook is the source of truth; the in-memory store is a convenience.

## Google Sheets via Apps Script (5 minutes)

1. Open Google Sheets → Extensions → Apps Script.
2. Paste:

```js
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(Object.keys(data));
  }
  sheet.appendRow(Object.values(data).map(v => Array.isArray(v) ? v.join(', ') : String(v ?? '')));
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Deploy → New deployment → Web app → Anyone → Deploy.
4. Copy the URL into `SHEETS_WEBHOOK_URL`.

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin git@github.com:YOUR/herita.git
git push -u origin main

# 2. Import at vercel.com/new — accept defaults
# 3. Add the env vars above in Project Settings → Environment Variables
# 4. Redeploy
```

## Routes

| Path | Purpose |
|---|---|
| `/` | Home |
| `/inheritance-advance` | Beneficiary product page |
| `/executor-loan` | Executor product page |
| `/partners` | For estate professionals |
| `/apply` | 6-step application wizard |
| `/legal/[slug]` | Privacy / Credit Guide / Terms / Complaints / Target Market |
| `/admin` | Submissions table (password-gated) |
| `/api/apply` | POST endpoint for the wizard |

## Design system

Tokens live in `app/globals.css`. The brand is **Editorial Estate** — Fraunces display + Inter body, cream paper (`#f4efe6`), forest green (`#1f3a2c`), brass (`#b07a3a`), terracotta accent (`#a8492a`). Light + dark themes both ship; density (`compact` / `comfortable` / `spacious`) is reflected via `data-density` on `<html>`.

## License

Proprietary. © Herita Lending Pty Ltd.

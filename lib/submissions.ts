// In-memory submissions store. Resets on every cold start — fine for
// development and small deployments. For production, swap for a real DB
// (Postgres, KV, Supabase, etc).
//
// Usage:
//   import { saveSubmission, listSubmissions } from '@/lib/submissions';
//
// To use a different backend, set SUBMISSIONS_STORE in .env and add a branch
// in saveSubmission/listSubmissions.

export type Submission = {
  ref: string;
  receivedAt: string; // ISO
  status: 'received' | 'webhook-ok' | 'webhook-failed';
  webhookError?: string;
  data: Record<string, unknown>;
};

// Module-scoped store. Survives across requests in the same Node instance.
declare global {
  // eslint-disable-next-line no-var
  var __HERITA_SUBMISSIONS__: Submission[] | undefined;
}

function store(): Submission[] {
  if (!globalThis.__HERITA_SUBMISSIONS__) {
    globalThis.__HERITA_SUBMISSIONS__ = [];
  }
  return globalThis.__HERITA_SUBMISSIONS__;
}

export function saveSubmission(s: Submission): void {
  store().unshift(s);
  // Cap to 500 to avoid unbounded growth in memory
  if (store().length > 500) {
    globalThis.__HERITA_SUBMISSIONS__ = store().slice(0, 500);
  }
}

export function listSubmissions(): Submission[] {
  return [...store()];
}

export function generateRef(): string {
  // Short human-readable reference: HRT-YYMMDD-XXXX
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `HRT-${yy}${mm}${dd}-${rand}`;
}

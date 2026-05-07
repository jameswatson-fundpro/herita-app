'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { AddressAutocomplete } from './address-autocomplete';

const STEPS = [
  { id: 'applicant', title: 'About you', desc: '' },
  { id: 'estate', title: 'The estate', desc: 'Probate, executor and lawyer' },
  { id: 'loan', title: 'Your loan request', desc: 'Amount, purpose and history' },
] as const;

const USE_OF_FUNDS = [
  'Funeral expenses',
  'Legal fees',
  'Probate costs',
  'Property repairs',
  'Rates or utilities',
  'Debt consolidation',
  'Living expenses',
  'Other',
];

const ESTATE_LOCATIONS = [
  { group: 'Australia', options: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'] },
  { group: 'Other', options: ['New Zealand', 'United Kingdom', 'Other Overseas'] },
];

export type WizardForm = {
  // Section 1 — About you
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  consentElectronic: boolean;
  consentPrivacy: boolean;

  // Section 2 — The estate
  applicantRole: string;
  relationshipToDeceased: string;
  deceasedName: string;
  probateStatus: string;
  estateLocation: string;
  executorName: string;
  executorEmail: string;
  executorPhone: string;
  lawyerName: string;
  lawyerEmail: string;
  lawyerPhone: string;

  // Section 3 — Loan request
  estimatedAmount: string;
  useOfFunds: string[];
  useOfFundsOther: string;
  priorCreditIssues: string;
  additionalNotes: string;
};

const initialForm: WizardForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  consentElectronic: false,
  consentPrivacy: false,

  applicantRole: 'beneficiary',
  relationshipToDeceased: '',
  deceasedName: '',
  probateStatus: 'not-started',
  estateLocation: 'NSW',
  executorName: '',
  executorEmail: '',
  executorPhone: '',
  lawyerName: '',
  lawyerEmail: '',
  lawyerPhone: '',

  estimatedAmount: '',
  useOfFunds: [],
  useOfFundsOther: '',
  priorCreditIssues: 'no',
  additionalNotes: '',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: 'inherit',
  fontSize: 15,
  background: 'var(--surface)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};

export function Wizard() {
  const [stepIdx, setStepIdx] = useState(0);
  const [form, setForm] = useState<WizardForm>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{ ok: boolean; ref?: string; error?: string } | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [savingStep, setSavingStep] = useState(false);
  const applicationIdRef = useRef<string | null>(null);

  const params = useSearchParams();
  // Prefill amount from /apply?inheritance=...&pct=...
  useEffect(() => {
    if (!params) return;
    const inh = params.get('inheritance');
    const pct = params.get('pct');
    if (inh && pct) {
      const inhN = Number(inh);
      const pctN = Number(pct);
      if (Number.isFinite(inhN) && Number.isFinite(pctN)) {
        const requested = Math.round(inhN * (pctN / 100));
        setForm((f) => ({
          ...f,
          estimatedAmount: f.estimatedAmount || requested.toLocaleString('en-AU'),
        }));
      }
    }
  }, [params]);

  const step = STEPS[stepIdx];
  const pct = ((stepIdx + 1) / STEPS.length) * 100;

  const set =
    <K extends keyof WizardForm>(k: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const v = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [k]: v as WizardForm[K] }));
    };

  const setMulti = (k: 'useOfFunds', v: string) =>
    setForm((f) => ({
      ...f,
      [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v],
    }));

  const setCurrency =
    (k: 'estimatedAmount') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^\d]/g, '');
      setForm((f) => ({
        ...f,
        [k]: raw ? Number(raw).toLocaleString('en-AU') : '',
      }));
    };

  // ── Validation per step ─────────────────────────────────────────────
  const validateStep = (idx: number): string | null => {
    if (idx === 0) {
      if (!form.firstName.trim()) return 'First name is required.';
      if (!form.lastName.trim()) return 'Last name is required.';
      if (!form.email.trim() || !/.+@.+\..+/.test(form.email)) return 'A valid email is required.';
      if (!form.phone.trim()) return 'Phone is required.';
      if (!form.address.trim()) return 'Address is required.';
      if (!form.consentElectronic) return 'Please consent to electronic communications.';
      if (!form.consentPrivacy) return 'Please consent to the Privacy Consent Form.';
    }
    if (idx === 1) {
      if (!form.applicantRole) return 'Please select your role.';
      if (!form.deceasedName.trim()) return 'Deceased name is required.';
      if (!form.probateStatus) return 'Please select probate status.';
      if (!form.estateLocation) return 'Please select estate location.';
    }
    if (idx === 2) {
      if (!form.estimatedAmount.trim()) return 'Please enter the amount you want to borrow.';
    }
    return null;
  };

  // ── Per-step partial save ───────────────────────────────────────────
  const saveStep = async (idx: number): Promise<boolean> => {
    setSavingStep(true);
    setStepError(null);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...form,
          step: STEPS[idx].id,
          stepIndex: idx,
          partial: idx < STEPS.length - 1,
          applicationId: applicationIdRef.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        ref?: string;
        applicationId?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setStepError(data.error || `Server returned ${res.status}`);
        return false;
      }
      if (data.applicationId && !applicationIdRef.current) {
        applicationIdRef.current = data.applicationId;
      }
      return true;
    } catch (err) {
      setStepError(err instanceof Error ? err.message : 'Network error');
      return false;
    } finally {
      setSavingStep(false);
    }
  };

  const goNext = async () => {
    const v = validateStep(stepIdx);
    if (v) {
      setStepError(v);
      return;
    }
    const ok = await saveStep(stepIdx);
    if (!ok) return;
    setStepError(null);
    setStepIdx((i) => Math.min(STEPS.length - 1, i + 1));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validateStep(stepIdx);
    if (v) {
      setStepError(v);
      return;
    }
    setSubmitting(true);
    setSubmitted(null);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...form,
          step: 'final',
          stepIndex: STEPS.length - 1,
          partial: false,
          applicationId: applicationIdRef.current,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        ref?: string;
        applicationId?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setSubmitted({ ok: false, error: data.error || `Server returned ${res.status}` });
      } else {
        setSubmitted({ ok: true, ref: data.ref });
      }
    } catch (err) {
      setSubmitted({
        ok: false,
        error: err instanceof Error ? err.message : 'Network error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success state ────────────────────────────────────────────────
  if (submitted?.ok) {
    return (
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'calc(48px * var(--pad-scale, 1))',
          textAlign: 'center',
          maxWidth: 720,
          margin: '0 auto',
        }}
      >
        <div className="eyebrow eyebrow-brand">Application received</div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'calc(40px * var(--head-scale, 1))',
            margin: '14px 0 16px',
            lineHeight: 1.1,
          }}
        >
          Thank you. We&rsquo;ll be in touch.
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: 16, maxWidth: 540, margin: '0 auto 20px' }}>
          A specialist will be in contact within one business day, often sooner. A confirmation has been sent to {form.email || 'your email'}.
        </p>
        {submitted.ref && (
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'var(--surface-2)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              color: 'var(--muted)',
            }}
          >
            Reference: <strong style={{ color: 'var(--ink)' }}>{submitted.ref}</strong>
          </div>
        )}
        <div
          style={{
            marginTop: 36,
            paddingTop: 24,
            borderTop: '1px solid var(--hairline)',
            textAlign: 'left',
            maxWidth: 540,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div className="eyebrow eyebrow-brand" style={{ marginBottom: 10 }}>While you wait</div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 22,
              margin: '0 0 10px',
              lineHeight: 1.2,
            }}
          >
            You can start compiling the documents we&rsquo;ll need.
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 14px' }}>
            No need to send anything yet &mdash; your specialist will guide you. Having these to hand will speed things up:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {[
              'ID for the borrower',
              'Copy of the Will',
              'Copy of the Death Certificate',
              'Evidence of estate assets and liabilities',
            ].map((d) => (
              <li
                key={d}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '10px 0',
                  borderTop: '1px solid var(--hairline)',
                  fontSize: 15,
                  color: 'var(--text)',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    flex: '0 0 auto',
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: 'color-mix(in oklab, var(--brand) 12%, var(--surface))',
                    color: 'var(--brand)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    marginTop: 1,
                  }}
                >
                  ✓
                </span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid-2"
      style={{
        display: 'grid',
        gridTemplateColumns: '260px minmax(0, 1fr)',
        gap: 'calc(40px * var(--space-scale, 1))',
        alignItems: 'start',
      }}
    >
      {/* Stepper */}
      <aside className="wizard-aside" style={{ position: 'sticky', top: 100 }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          Application · Step {stepIdx + 1} of {STEPS.length}
        </div>
        <div
          style={{
            height: 4,
            background: 'var(--surface-2)',
            borderRadius: 999,
            overflow: 'hidden',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${pct}%`,
              background: 'var(--brand)',
              transition: 'width 250ms ease',
            }}
          />
        </div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {STEPS.map((s, i) => {
            const done = i < stepIdx;
            const active = i === stepIdx;
            const reachable = i <= stepIdx;
            return (
              <li key={s.id} style={{ position: 'relative', paddingLeft: 36, paddingBottom: 22 }}>
                {i < STEPS.length - 1 && (
                  <span
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: 24,
                      bottom: 0,
                      width: 1,
                      background: done ? 'var(--brand)' : 'var(--hairline)',
                    }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => reachable && setStepIdx(i)}
                  disabled={!reachable}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    cursor: reachable ? 'pointer' : 'default',
                    opacity: reachable ? 1 : 0.5,
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      background: active || done ? 'var(--brand)' : 'var(--surface)',
                      border: `1.5px solid ${active || done ? 'var(--brand)' : 'var(--border-strong)'}`,
                      color: active || done ? 'var(--surface)' : 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    {done ? '✓' : i + 1}
                  </span>
                  <div
                    style={{
                      fontWeight: active ? 700 : 600,
                      fontSize: 14,
                      color: active ? 'var(--ink)' : 'var(--text)',
                    }}
                  >
                    {s.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{s.desc}</div>
                </button>
              </li>
            );
          })}
        </ol>
      </aside>

      {/* Panel */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'calc(40px * var(--pad-scale, 1))',
        }}
      >
        <div style={{ marginBottom: 28, paddingBottom: 20, borderBottom: '1px solid var(--hairline)' }}>
          <div className="eyebrow" style={{ color: 'var(--brand)' }}>
            {step.id.toUpperCase()}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'calc(36px * var(--head-scale, 1))',
              margin: '6px 0 6px',
              lineHeight: 1.1,
            }}
          >
            {step.title}
          </h2>
          <p style={{ color: 'var(--muted)', margin: 0 }}>{step.desc}.</p>
        </div>

        {/* ── Section 1 — About you ───────────────────────────────── */}
        {step.id === 'applicant' && (
          <>
            <Row2>
              <Field label="First name" required>
                <input value={form.firstName} onChange={set('firstName')} placeholder="Jane" style={inputStyle} required />
              </Field>
              <Field label="Last name" required>
                <input value={form.lastName} onChange={set('lastName')} placeholder="Citizen" style={inputStyle} required />
              </Field>
            </Row2>
            <Row2>
              <Field label="Email" required>
                <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" style={inputStyle} required />
              </Field>
              <Field label="Phone" required>
                <input value={form.phone} onChange={set('phone')} placeholder="0400 000 000" style={inputStyle} required />
              </Field>
            </Row2>
            <Field label="Address" required>
              <AddressAutocomplete
                value={form.address}
                onChange={(v) => setForm((f) => ({ ...f, address: v }))}
                placeholder="1 Example Street, Sydney NSW 2000"
                inputStyle={inputStyle}
                required
              />
            </Field>

            <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 20, marginTop: 20 }}>
              <FieldLabel>Consents</FieldLabel>
              <ConsentRow checked={form.consentElectronic} onChange={set('consentElectronic')}>
                I consent to receiving notices, statements, disclosures and other documents from Trivaro electronically using the email address provided above. I must check my email account regularly for electronic communications from Herita.
              </ConsentRow>
              <ConsentRow checked={form.consentPrivacy} onChange={set('consentPrivacy')}>
                I have read and agree to Trivaro&rsquo;s <a href="/legal/privacy" target="_blank" rel="noreferrer" style={{ color: 'var(--brand)' }}>Privacy Consent Form</a> and consent to the collection, use, holding and disclosure of my personal information as set out in that document.
              </ConsentRow>
            </div>
          </>
        )}

        {/* ── Section 2 — The estate ─────────────────────────────── */}
        {step.id === 'estate' && (
          <>
            <Row2>
              <Field label="Your role" required>
                <select value={form.applicantRole} onChange={set('applicantRole')} style={inputStyle}>
                  <option value="beneficiary">Beneficiary</option>
                  <option value="executor">Executor</option>
                  <option value="beneficiary-executor">Beneficiary and executor</option>
                  <option value="other">Other authorised party</option>
                </select>
              </Field>
              <Field label="Relationship to deceased">
                <input value={form.relationshipToDeceased} onChange={set('relationshipToDeceased')} placeholder="Daughter, son, spouse, sibling" style={inputStyle} />
              </Field>
            </Row2>
            <Row2>
              <Field label="Full name of the deceased" required>
                <input value={form.deceasedName} onChange={set('deceasedName')} placeholder="Alex Citizen" style={inputStyle} required />
              </Field>
              <Field label="Probate status" required>
                <select value={form.probateStatus} onChange={set('probateStatus')} style={inputStyle}>
                  <option value="not-started">Process has not started</option>
                  <option value="solicitor-working">Application will be filed soon (solicitor is working on it)</option>
                  <option value="filed">Application has been filed</option>
                  <option value="granted">Probate has been granted</option>
                  <option value="unsure">Unsure</option>
                </select>
              </Field>
            </Row2>
            <Field label="Estate location" hint="Where the estate is being administered." required>
              <select value={form.estateLocation} onChange={set('estateLocation')} style={inputStyle}>
                {ESTATE_LOCATIONS.map((g) => (
                  <optgroup key={g.group} label={g.group}>
                    {g.options.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </Field>

            <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 20, marginTop: 8 }}>
              <FieldLabel>Executor details</FieldLabel>
              <Field label="Name">
                <input value={form.executorName} onChange={set('executorName')} placeholder="Executor name" style={inputStyle} />
              </Field>
              <Row2>
                <Field label="Email">
                  <input type="email" value={form.executorEmail} onChange={set('executorEmail')} placeholder="executor@example.com" style={inputStyle} />
                </Field>
                <Field label="Phone">
                  <input value={form.executorPhone} onChange={set('executorPhone')} placeholder="0400 000 000" style={inputStyle} />
                </Field>
              </Row2>
            </div>

            <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 20, marginTop: 8 }}>
              <FieldLabel>Estate lawyer details</FieldLabel>
              <Field label="Lawyer name">
                <input value={form.lawyerName} onChange={set('lawyerName')} placeholder="Sam Solicitor" style={inputStyle} />
              </Field>
              <Row2>
                <Field label="Email">
                  <input type="email" value={form.lawyerEmail} onChange={set('lawyerEmail')} placeholder="lawyer@example.com" style={inputStyle} />
                </Field>
                <Field label="Phone">
                  <input value={form.lawyerPhone} onChange={set('lawyerPhone')} placeholder="(02) 0000 0000" style={inputStyle} />
                </Field>
              </Row2>
            </div>
          </>
        )}

        {/* ── Section 3 — Loan request ───────────────────────────── */}
        {step.id === 'loan' && (
          <>
            <Field label="How much do you want to borrow?" required>
              <PrefixedInput value={form.estimatedAmount} onChange={setCurrency('estimatedAmount')} placeholder="75,000" />
            </Field>
            <Field label="How do you intend to use your Inheritance Advance?" hint="Select all that apply.">
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                {USE_OF_FUNDS.map((o) => (
                  <PillCheck key={o} label={o} checked={form.useOfFunds.includes(o)} onChange={() => setMulti('useOfFunds', o)} />
                ))}
              </div>
              {form.useOfFunds.includes('Other') && (
                <div style={{ marginTop: 12 }}>
                  <input
                    value={form.useOfFundsOther}
                    onChange={set('useOfFundsOther')}
                    placeholder="Please specify"
                    style={inputStyle}
                  />
                </div>
              )}
            </Field>
            <Field
              label="Do you have any prior credit issues that we should know about?"
              hint="Prior credit issues do not automatically disqualify you."
            >
              <select value={form.priorCreditIssues} onChange={set('priorCreditIssues')} style={inputStyle}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="unsure">Unsure</option>
              </select>
            </Field>
            <Field label="Any other information you would like to share?">
              <textarea
                rows={5}
                value={form.additionalNotes}
                onChange={set('additionalNotes')}
                placeholder="Disputes, caveats, expected property sale dates — anything relevant."
                style={inputStyle}
              />
            </Field>

            {submitted && !submitted.ok && (
              <div
                role="alert"
                style={{
                  marginTop: 16,
                  padding: 14,
                  borderRadius: 'var(--radius-md)',
                  background: 'color-mix(in oklab, var(--accent) 14%, var(--surface))',
                  border: '1px solid var(--accent)',
                  fontSize: 14,
                  color: 'var(--ink)',
                }}
              >
                <strong>Could not submit:</strong> {submitted.error}
              </div>
            )}
          </>
        )}

        {/* ── Step error ─────────────────────────────────────────── */}
        {stepError && (
          <div
            role="alert"
            style={{
              marginTop: 16,
              padding: 12,
              borderRadius: 'var(--radius-md)',
              background: 'color-mix(in oklab, var(--accent) 14%, var(--surface))',
              border: '1px solid var(--accent)',
              fontSize: 14,
              color: 'var(--ink)',
            }}
          >
            {stepError}
          </div>
        )}

        {/* ── Footer nav ─────────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 8,
            marginTop: 32,
            paddingTop: 20,
            borderTop: '1px solid var(--hairline)',
            flexWrap: 'wrap',
          }}
        >
          {stepIdx > 0 && (
            <button type="button" className="btn btn-ghost" onClick={() => setStepIdx((i) => i - 1)} disabled={submitting || savingStep}>
              ← Back
            </button>
          )}
          {stepIdx < STEPS.length - 1 ? (
            <button type="button" className="btn btn-primary" onClick={goNext} disabled={savingStep}>
              {savingStep ? 'Saving…' : 'Continue →'}
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit application'}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

function PrefixedInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div style={{ position: 'relative' }}>
      <span
        style={{
          position: 'absolute',
          left: 14,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--muted)',
          fontSize: 15,
        }}
      >
        $
      </span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode="numeric"
        style={{ ...inputStyle, paddingLeft: 26 }}
      />
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, color: 'var(--ink)' }}>{children}</div>;
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <FieldLabel>
        {label}
        {required && <span style={{ color: 'var(--accent)', marginLeft: 4 }} aria-hidden>*</span>}
      </FieldLabel>
      {hint && <div style={{ fontSize: 13, color: 'var(--muted)', fontStyle: 'italic', marginTop: -4, marginBottom: 8 }}>{hint}</div>}
      {children}
    </div>
  );
}

function Row2({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {children}
    </div>
  );
}

function Row3({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
      {children}
    </div>
  );
}

function PillCheck({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '12px 14px',
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border)'}`,
        background: checked ? 'color-mix(in oklab, var(--brand) 8%, var(--surface))' : 'var(--surface)',
        fontSize: 14,
        transition: 'all 0.15s',
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--brand)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '0 0 auto',
        }}
      >
        {checked && <span style={{ color: 'var(--surface)', fontSize: 12, fontWeight: 700 }}>✓</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}

function ConsentRow({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <label style={{ display: 'flex', gap: 12, padding: '12px 0', cursor: 'pointer', alignItems: 'flex-start' }}>
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          marginTop: 2,
          flex: '0 0 auto',
          border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--brand)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {checked && <span style={{ color: 'var(--surface)', fontSize: 12, fontWeight: 700 }}>✓</span>}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.5 }}>{children}</span>
    </label>
  );
}

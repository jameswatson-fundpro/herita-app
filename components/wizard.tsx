'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

const STEPS = [
  { id: 'product', title: 'Product & amount', desc: 'What you need from us' },
  { id: 'applicant', title: 'About you', desc: 'Identity and contact' },
  { id: 'estate', title: 'The estate', desc: 'Probate and entitlement' },
  { id: 'financial', title: 'Funding context', desc: 'Urgency and credit' },
  { id: 'documents', title: 'Documents', desc: 'Evidence and consent' },
  { id: 'review', title: 'Review', desc: 'Confirm & submit' },
] as const;

const URGENT_COSTS = [
  'Funeral expenses',
  'Legal fees',
  'Probate costs',
  'Property repairs',
  'Rates or utilities',
  'Debt consolidation',
  'Living expenses',
];
const DOCUMENTS = [
  'Will',
  'Death certificate',
  'Grant of probate',
  'Estate asset schedule',
  'Executor ID',
  'Beneficiary ID',
  'Property sale contract',
];

export type WizardForm = {
  product: 'inheritance-advance' | 'executor-loan';
  purpose: string;
  estimatedAmount: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  residentialAddress: string;
  city: string;
  state: string;
  postcode: string;
  applicantRole: string;
  relationshipToDeceased: string;
  deceasedName: string;
  probateStatus: string;
  estateValue: string;
  inheritanceShare: string;
  executorName: string;
  executorContact: string;
  propertyInEstate: string;
  urgentCosts: string[];
  bankruptcyHistory: string;
  documentsAvailable: string[];
  additionalNotes: string;
  consentPrivacy: boolean;
  consentCredit: boolean;
  consentCommunication: boolean;
};

const initialForm: WizardForm = {
  product: 'inheritance-advance',
  purpose: '',
  estimatedAmount: '',
  title: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  phone: '',
  residentialAddress: '',
  city: '',
  state: 'NSW',
  postcode: '',
  applicantRole: 'beneficiary',
  relationshipToDeceased: '',
  deceasedName: '',
  probateStatus: 'not-started',
  estateValue: '',
  inheritanceShare: '',
  executorName: '',
  executorContact: '',
  propertyInEstate: 'unknown',
  urgentCosts: [],
  bankruptcyHistory: 'no',
  documentsAvailable: [],
  additionalNotes: '',
  consentPrivacy: false,
  consentCredit: false,
  consentCommunication: false,
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

  const params = useSearchParams();
  // Prefill from /apply?inheritance=...&pct=...&months=...
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
          estateValue: f.estateValue || inhN.toLocaleString('en-AU'),
          inheritanceShare: f.inheritanceShare || inhN.toLocaleString('en-AU'),
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

  const setMulti = (k: 'urgentCosts' | 'documentsAvailable', v: string) =>
    setForm((f) => ({
      ...f,
      [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v],
    }));

  const setCurrency =
    (k: 'estimatedAmount' | 'estateValue' | 'inheritanceShare') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^\d]/g, '');
      setForm((f) => ({
        ...f,
        [k]: raw ? Number(raw).toLocaleString('en-AU') : '',
      }));
    };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(null);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; ref?: string; error?: string };
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
          A specialist will review your application and reply within one business day, often sooner. A confirmation has been sent to {form.email || 'your email'}.
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
      <aside style={{ position: 'sticky', top: 100 }}>
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

        {step.id === 'product' && (
          <>
            <FieldLabel>Which product fits?</FieldLabel>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              <RadioCard
                checked={form.product === 'inheritance-advance'}
                onClick={() => setForm((f) => ({ ...f, product: 'inheritance-advance' }))}
                title="Inheritance Advance"
                desc="For beneficiaries — advance up to 50% of your share."
              />
              <RadioCard
                checked={form.product === 'executor-loan'}
                onClick={() => setForm((f) => ({ ...f, product: 'executor-loan' }))}
                title="Executor Estate Loan"
                desc="For executors — fund administration costs from the estate."
              />
            </div>
            <Field label="What will the funds be used for?" hint="One sentence is fine.">
              <input
                value={form.purpose}
                onChange={set('purpose')}
                placeholder="e.g. Living costs while probate proceeds"
                style={inputStyle}
              />
            </Field>
            <Field label="Approximate amount you need" hint="A round figure — we refine this in the conversation that follows.">
              <PrefixedInput value={form.estimatedAmount} onChange={setCurrency('estimatedAmount')} placeholder="75,000" />
            </Field>
          </>
        )}

        {step.id === 'applicant' && (
          <>
            <Row3>
              <Field label="Title">
                <select value={form.title} onChange={set('title')} style={inputStyle}>
                  <option value="">Select</option>
                  {['Mr', 'Mrs', 'Ms', 'Dr', 'Other'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="First name">
                <input value={form.firstName} onChange={set('firstName')} placeholder="Jane" style={inputStyle} required />
              </Field>
              <Field label="Last name">
                <input value={form.lastName} onChange={set('lastName')} placeholder="Citizen" style={inputStyle} required />
              </Field>
            </Row3>
            <Row3>
              <Field label="Date of birth">
                <input type="date" value={form.dateOfBirth} onChange={set('dateOfBirth')} style={inputStyle} />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={set('email')} placeholder="jane@example.com" style={inputStyle} required />
              </Field>
              <Field label="Phone">
                <input value={form.phone} onChange={set('phone')} placeholder="0400 000 000" style={inputStyle} required />
              </Field>
            </Row3>
            <Field label="Residential address">
              <input value={form.residentialAddress} onChange={set('residentialAddress')} placeholder="1 Example Street" style={inputStyle} />
            </Field>
            <Row3>
              <Field label="Suburb / city">
                <input value={form.city} onChange={set('city')} placeholder="Sydney" style={inputStyle} />
              </Field>
              <Field label="State">
                <select value={form.state} onChange={set('state')} style={inputStyle}>
                  {['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Postcode">
                <input value={form.postcode} onChange={set('postcode')} placeholder="2000" style={inputStyle} />
              </Field>
            </Row3>
          </>
        )}

        {step.id === 'estate' && (
          <>
            <Row2>
              <Field label="Your role">
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
              <Field label="Full name of the deceased">
                <input value={form.deceasedName} onChange={set('deceasedName')} placeholder="Alex Citizen" style={inputStyle} />
              </Field>
              <Field label="Probate status">
                <select value={form.probateStatus} onChange={set('probateStatus')} style={inputStyle}>
                  <option value="not-started">Not started</option>
                  <option value="with-solicitor">In progress with solicitor</option>
                  <option value="filed">Filed</option>
                  <option value="granted">Granted</option>
                  <option value="estate-administered">Estate being administered</option>
                  <option value="unsure">Unsure</option>
                </select>
              </Field>
            </Row2>
            <Row2>
              <Field label="Estimated estate value">
                <PrefixedInput value={form.estateValue} onChange={setCurrency('estateValue')} placeholder="1,200,000" />
              </Field>
              <Field label={form.product === 'executor-loan' ? 'Requested estate facility' : 'Your expected share'}>
                <PrefixedInput value={form.inheritanceShare} onChange={setCurrency('inheritanceShare')} placeholder="250,000" />
              </Field>
            </Row2>
            <Row2>
              <Field label="Executor / solicitor name (optional)">
                <input value={form.executorName} onChange={set('executorName')} placeholder="Executor or law firm" style={inputStyle} />
              </Field>
              <Field label="Executor email (optional)">
                <input type="email" value={form.executorContact} onChange={set('executorContact')} placeholder="executor@example.com" style={inputStyle} />
              </Field>
            </Row2>
          </>
        )}

        {step.id === 'financial' && (
          <>
            <Field label="Which costs are most urgent?" hint="Select any that apply.">
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                {URGENT_COSTS.map((o) => (
                  <PillCheck key={o} label={o} checked={form.urgentCosts.includes(o)} onChange={() => setMulti('urgentCosts', o)} />
                ))}
              </div>
            </Field>
            <Field label="Any prior credit issues?">
              <select value={form.bankruptcyHistory} onChange={set('bankruptcyHistory')} style={inputStyle}>
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="unsure">Unsure</option>
              </select>
            </Field>
          </>
        )}

        {step.id === 'documents' && (
          <>
            <Field label="Which documents can you provide today?" hint="Tick anything you have to hand. Missing items are fine — we'll guide you.">
              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                {DOCUMENTS.map((o) => (
                  <PillCheck key={o} label={o} checked={form.documentsAvailable.includes(o)} onChange={() => setMulti('documentsAvailable', o)} />
                ))}
              </div>
            </Field>
            <Field label="Anything else you'd like to tell us?">
              <textarea
                rows={4}
                value={form.additionalNotes}
                onChange={set('additionalNotes')}
                placeholder="Disputes, caveats, expected property sale dates — anything relevant."
                style={inputStyle}
              />
            </Field>
            <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 20, marginTop: 8 }}>
              <FieldLabel>Consents</FieldLabel>
              <ConsentRow checked={form.consentPrivacy} onChange={set('consentPrivacy')}>
                I consent to the collection and use of my information to assess this application.
              </ConsentRow>
              <ConsentRow checked={form.consentCredit} onChange={set('consentCredit')}>
                I authorise Herita to verify estate and identity information.
              </ConsentRow>
              <ConsentRow checked={form.consentCommunication} onChange={set('consentCommunication')}>
                I agree to receive updates by email and phone about this application.
              </ConsentRow>
            </div>
          </>
        )}

        {step.id === 'review' && (
          <>
            <ReviewBlock
              heading="Product"
              rows={[
                ['Product', form.product === 'inheritance-advance' ? 'Inheritance Advance' : 'Executor Estate Loan'],
                ['Requested', form.estimatedAmount ? `$${form.estimatedAmount}` : '—'],
                ['Purpose', form.purpose || '—'],
              ]}
            />
            <ReviewBlock
              heading="Applicant"
              rows={[
                ['Name', [form.title, form.firstName, form.lastName].filter(Boolean).join(' ') || '—'],
                ['Email', form.email || '—'],
                ['Phone', form.phone || '—'],
              ]}
            />
            <ReviewBlock
              heading="Estate"
              rows={[
                ['Deceased', form.deceasedName || '—'],
                ['Probate', form.probateStatus],
                ['Estate value', form.estateValue ? `$${form.estateValue}` : '—'],
                ['Your share', form.inheritanceShare ? `$${form.inheritanceShare}` : '—'],
              ]}
            />
            <div
              style={{
                padding: 16,
                borderRadius: 'var(--radius-lg)',
                background: 'color-mix(in oklab, var(--brand-2) 10%, var(--surface))',
                border: '1px solid var(--border)',
                marginTop: 16,
                fontSize: 14,
                color: 'var(--text)',
              }}
            >
              <strong style={{ display: 'block', marginBottom: 4 }}>What happens next</strong>
              A specialist reviews your file and replies within one business day with an indicative offer.
            </div>
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            marginTop: 32,
            paddingTop: 20,
            borderTop: '1px solid var(--hairline)',
            flexWrap: 'wrap',
          }}
        >
          <button type="button" className="btn btn-ghost" disabled>
            Save draft
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            {stepIdx > 0 && (
              <button type="button" className="btn btn-ghost" onClick={() => setStepIdx((i) => i - 1)} disabled={submitting}>
                ← Back
              </button>
            )}
            {stepIdx < STEPS.length - 1 ? (
              <button type="button" className="btn btn-primary" onClick={() => setStepIdx((i) => i + 1)}>
                Continue →
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit application'}
              </button>
            )}
          </div>
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

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <FieldLabel>{label}</FieldLabel>
      {hint && <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: -4, marginBottom: 8 }}>{hint}</div>}
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

function RadioCard({ checked, onClick, title, desc }: { checked: boolean; onClick: () => void; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left',
        padding: '18px 20px',
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
        background: checked ? 'color-mix(in oklab, var(--brand) 8%, var(--surface))' : 'var(--surface)',
        transition: 'all 0.15s',
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 999,
          border: `2px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--brand)' : 'transparent',
          boxShadow: checked ? 'inset 0 0 0 3px var(--surface)' : 'none',
          marginBottom: 12,
        }}
      />
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--muted)' }}>{desc}</div>
    </button>
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
      <span style={{ fontSize: 14, color: 'var(--text)' }}>{children}</span>
    </label>
  );
}

function ReviewBlock({ heading, rows }: { heading: string; rows: [string, string][] }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div className="eyebrow" style={{ marginBottom: 8 }}>{heading}</div>
      <div
        style={{
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg)',
          overflow: 'hidden',
        }}
      >
        {rows.map(([k, v], i) => (
          <div
            key={k}
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: 16,
              padding: '12px 16px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--hairline)' : 'none',
            }}
          >
            <span style={{ color: 'var(--muted)', fontSize: 14 }}>{k}</span>
            <strong style={{ fontSize: 14 }}>{v}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

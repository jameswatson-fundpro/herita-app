'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const fmtCurrency = (n: number) =>
  new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
  }).format(n);

const MIN_ADVANCE = 30000;

type CalcResult = {
  advance: number;
  setupFee: number;
  interest: number;
  totalRepay: number;
  remaining: number;
  costOfFunds: number;
  belowMinimum: boolean;
};

function useCalc({
  inheritance,
  advancePct,
  months,
}: {
  inheritance: number;
  advancePct: number;
  months: number;
}): CalcResult {
  return useMemo(() => {
    const rawAdvance = inheritance * (advancePct / 100);
    const belowMinimum = rawAdvance < MIN_ADVANCE;
    const advance = Math.max(rawAdvance, MIN_ADVANCE);
    const setupFee = Math.max(advance * 0.02, 1500);
    const interest = advance * 0.02 * months;
    const totalRepay = advance + setupFee + interest;
    const remaining = inheritance - totalRepay;
    return { advance, setupFee, interest, totalRepay, remaining, costOfFunds: setupFee + interest, belowMinimum };
  }, [inheritance, advancePct, months]);
}

function PrettySlider({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 'calc(20px * var(--space-scale, 1))' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 10,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '0.01em' }}>{label}</span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 22,
            color: 'var(--brand)',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {valueLabel}
        </span>
      </div>
      <div style={{ position: 'relative', height: 28, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '50%',
            height: 4,
            borderRadius: 999,
            background: 'var(--surface-2)',
            transform: 'translateY(-50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            height: 4,
            width: `${pct}%`,
            borderRadius: 999,
            background: 'var(--brand)',
            transform: 'translateY(-50%)',
            transition: 'width 80ms linear',
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            appearance: 'none',
            background: 'transparent',
            margin: 0,
            cursor: 'pointer',
          }}
        />
      </div>
    </div>
  );
}

function CalcDonut({ inheritance, calc }: { inheritance: number; calc: CalcResult }) {
  const { advance, costOfFunds, remaining } = calc;
  const total = inheritance;
  const a1 = advance / total;
  const a2 = costOfFunds / total;
  const a3 = remaining / total;
  const r = 80;
  const cx = 110;
  const cy = 110;
  const C = 2 * Math.PI * r;
  const seg = (start: number, frac: number, color: string) => (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke={color}
      strokeWidth="22"
      strokeDasharray={`${frac * C} ${C}`}
      strokeDashoffset={-start * C}
      transform={`rotate(-90 ${cx} ${cy})`}
      style={{ transition: 'stroke-dasharray 250ms ease' }}
    />
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
      <svg width="220" height="220" viewBox="0 0 220 220">
        {seg(0, a1, 'var(--brand)')}
        {seg(a1, a2, 'var(--brand-2)')}
        {seg(a1 + a2, a3, 'var(--surface-2)')}
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-display)" fontSize="14" fill="var(--muted)">
          You receive
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontFamily="var(--font-display)" fontSize="26" fill="var(--ink)" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {fmtCurrency(advance)}
        </text>
      </svg>
      <div style={{ flex: '1 1 200px', minWidth: 200 }}>
        <LegendRow color="var(--brand)" label="Advance to you" value={fmtCurrency(advance)} />
        <LegendRow color="var(--brand-2)" label="Fees + interest" value={fmtCurrency(costOfFunds)} />
        <LegendRow color="var(--surface-2)" label="Remaining inheritance" value={fmtCurrency(remaining)} bold />
      </div>
    </div>
  );
}

function LegendRow({ color, label, value, bold }: { color: string; label: string; value: string; bold?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 0',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <span style={{ width: 12, height: 12, borderRadius: 3, background: color, flex: '0 0 auto' }} />
      <span style={{ flex: 1, color: 'var(--muted)', fontSize: 14 }}>{label}</span>
      <span style={{ fontWeight: bold ? 700 : 600, fontVariantNumeric: 'tabular-nums', fontSize: 15 }}>{value}</span>
    </div>
  );
}

function CalcTimeline({ months, calc }: { months: number; calc: CalcResult }) {
  const ticks = Array.from({ length: months + 1 }, (_, i) => i);
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Today</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--brand)' }}>+{fmtCurrency(calc.advance)}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>You receive funds</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Inheritance received · {months}mo</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26 }}>{fmtCurrency(calc.totalRepay)}</div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>Repaid from estate</div>
        </div>
      </div>
      <div style={{ position: 'relative', height: 60, padding: '0 6px' }}>
        <div style={{ position: 'absolute', left: 6, right: 6, top: 28, height: 2, background: 'var(--hairline)' }} />
        <div
          style={{
            position: 'absolute',
            left: 6,
            top: 28,
            height: 2,
            width: 'calc(100% - 12px)',
            backgroundImage: 'repeating-linear-gradient(90deg, var(--brand) 0 8px, transparent 8px 12px)',
          }}
        />
        {ticks.map((m) => {
          const left = `${(m / months) * 100}%`;
          const isStart = m === 0;
          const isEnd = m === months;
          const isMonth = !isStart && !isEnd && (months <= 12 || m % 2 === 0);
          return (
            <div key={m} style={{ position: 'absolute', left, top: 22, transform: 'translateX(-50%)', textAlign: 'center' }}>
              <div
                style={{
                  width: isStart || isEnd ? 14 : 6,
                  height: isStart || isEnd ? 14 : 6,
                  margin: isStart || isEnd ? '0 auto' : '4px auto',
                  borderRadius: 999,
                  background: isStart ? 'var(--brand)' : isEnd ? 'var(--ink)' : 'var(--muted)',
                  opacity: isMonth || isStart || isEnd ? 1 : 0,
                }}
              />
              {(isStart || isEnd) && (
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, fontVariantNumeric: 'tabular-nums' }}>
                  {isStart ? 'Now' : `Mo ${m}`}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 20 }}>
        <Stat label="Setup fee" value={fmtCurrency(calc.setupFee)} />
        <Stat label="Interest" value={fmtCurrency(calc.interest)} />
        <Stat label="Remaining to you" value={fmtCurrency(calc.remaining)} accent />
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 12 }}>
      <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em' }}>{label}</div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          marginTop: 2,
          fontVariantNumeric: 'tabular-nums',
          color: accent ? 'var(--brand)' : 'var(--ink)',
        }}
      >
        {value}
      </div>
    </div>
  );
}

function CalcBars({ inheritance, calc }: { inheritance: number; calc: CalcResult }) {
  const rows: [string, number, string][] = [
    ['Your inheritance', inheritance, 'var(--surface-2)'],
    ['Advance to you', calc.advance, 'var(--brand)'],
    ['Setup fee', calc.setupFee, 'var(--brand-2)'],
    ['Interest accrued', calc.interest, 'var(--brand-2)'],
    ['Total repaid at settlement', calc.totalRepay, 'var(--accent)'],
    ['Remaining to you', calc.remaining, 'var(--brand)'],
  ];
  const max = inheritance;
  return (
    <div>
      {rows.map(([label, value, color]) => (
        <div
          key={label}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 100px',
            gap: 12,
            alignItems: 'center',
            padding: '11px 0',
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          <div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 6 }}>{label}</div>
            <div style={{ height: 6, background: 'var(--surface-2)', borderRadius: 999, overflow: 'hidden' }}>
              <div
                style={{
                  width: `${Math.max(0, (value / max) * 100)}%`,
                  height: '100%',
                  background: color,
                  transition: 'width 200ms ease',
                }}
              />
            </div>
          </div>
          <div style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>
            {fmtCurrency(value)}
          </div>
        </div>
      ))}
    </div>
  );
}

type Viz = 'donut' | 'timeline' | 'bars';

export function Calculator({
  initialViz = 'donut',
  showVizSwitcher = true,
}: {
  initialViz?: Viz;
  showVizSwitcher?: boolean;
}) {
  const [inheritance, setInheritance] = useState(1000000);
  const [advancePct, setAdvancePct] = useState(10);
  const [months, setMonths] = useState(6);
  const [viz, setViz] = useState<Viz>(initialViz);
  const calc = useCalc({ inheritance, advancePct, months });

  const params = useSearchParams();
  // Hydrate from URL params if present (used when arriving from /apply CTA back)
  useEffect(() => {
    if (!params) return;
    const i = Number(params.get('inheritance'));
    const p = Number(params.get('pct'));
    const m = Number(params.get('months'));
    if (i >= 100000 && i <= 5000000) setInheritance(i);
    if (p >= 1 && p <= 50) setAdvancePct(p);
    if (m >= 1 && m <= 24) setMonths(m);
  }, [params]);

  const applyHref =
    `/apply?inheritance=${inheritance}&pct=${advancePct}&months=${months}`;

  return (
    <div
      className="grid-2"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
        gap: 'calc(28px * var(--space-scale, 1))',
        alignItems: 'stretch',
      }}
    >
      {/* Controls */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'calc(28px * var(--pad-scale, 1))',
        }}
      >
        <div className="eyebrow" style={{ marginBottom: 6 }}>Estimate</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, margin: '0 0 24px' }}>
          Tell us about your inheritance
        </h3>
        <PrettySlider
          label="Your expected inheritance"
          valueLabel={fmtCurrency(inheritance)}
          min={100000}
          max={5000000}
          step={100000}
          value={inheritance}
          onChange={setInheritance}
        />
        <PrettySlider
          label="Advance percentage"
          valueLabel={`${advancePct}%`}
          min={1}
          max={50}
          step={1}
          value={advancePct}
          onChange={setAdvancePct}
        />
        {calc.belowMinimum && (
          <div style={{ fontSize: 13, color: 'var(--muted)', background: 'var(--surface-2)', padding: '8px 12px', borderRadius: 8, marginTop: -12, marginBottom: 20 }}>
            Minimum advance of {fmtCurrency(MIN_ADVANCE)} applies at this combination.
          </div>
        )}
        <PrettySlider
          label="Months until inheritance received"
          valueLabel={`${months} months`}
          min={1}
          max={24}
          step={1}
          value={months}
          onChange={setMonths}
        />
      </div>

      {/* Output */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'calc(28px * var(--pad-scale, 1))',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, margin: 0 }}>
            Your estimate
          </h3>
          {showVizSwitcher && (
            <div
              style={{
                display: 'inline-flex',
                background: 'var(--surface-2)',
                borderRadius: 999,
                padding: 3,
                gap: 2,
              }}
            >
              {(
                [
                  ['donut', 'Split'],
                  ['timeline', 'Timeline'],
                  ['bars', 'Detail'],
                ] as const
              ).map(([k, l]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setViz(k)}
                  style={{
                    padding: '6px 12px',
                    fontSize: 12,
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: 999,
                    background: viz === k ? 'var(--surface)' : 'transparent',
                    color: viz === k ? 'var(--ink)' : 'var(--muted)',
                    boxShadow: viz === k ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                    transition: 'all 0.15s',
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>
        <div style={{ flex: 1 }}>
          {viz === 'donut' && <CalcDonut inheritance={inheritance} calc={calc} />}
          {viz === 'timeline' && <CalcTimeline months={months} calc={calc} />}
          {viz === 'bars' && <CalcBars inheritance={inheritance} calc={calc} />}
        </div>
        <div
          style={{
            marginTop: 24,
            paddingTop: 18,
            borderTop: '1px solid var(--hairline)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: 'var(--muted)', maxWidth: 280 }}>
            Indicative only. A personalised quote follows your application.
          </div>
          <a className="btn btn-primary" href={applyHref}>
            Get a personalised quote →
          </a>
        </div>
      </div>
    </div>
  );
}

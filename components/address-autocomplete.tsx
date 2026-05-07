'use client';

import { useEffect, useRef, useState } from 'react';

type Prediction = {
  place_id: string;
  description: string;
  structured_formatting?: { main_text: string; secondary_text: string };
};

export type AddressAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  inputStyle?: React.CSSProperties;
  countries?: string[];
};

export function AddressAutocomplete({
  value,
  onChange,
  placeholder = 'Start typing your address',
  required,
  inputStyle,
}: AddressAutocompleteProps) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!value || value.length < 3) {
      setPredictions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/places?input=${encodeURIComponent(value)}`);
        const data = (await res.json()) as { predictions: Prediction[] };
        const preds = data.predictions || [];
        setPredictions(preds);
        setOpen(preds.length > 0);
        setActiveIdx(-1);
      } catch {
        setPredictions([]);
        setOpen(false);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const select = (description: string) => {
    onChange(description);
    setOpen(false);
    setPredictions([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || predictions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, predictions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIdx >= 0) {
      e.preventDefault();
      select(predictions[activeIdx].description);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        style={inputStyle}
      />
      {open && predictions.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            marginTop: 4,
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          {predictions.map((p, i) => (
            <div
              key={p.place_id}
              onMouseDown={() => select(p.description)}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: 14,
                lineHeight: 1.4,
                borderTop: i === 0 ? 'none' : '1px solid var(--hairline)',
                background: i === activeIdx ? 'var(--surface-2)' : 'transparent',
              }}
            >
              <span style={{ fontWeight: 500, color: 'var(--ink)' }}>
                {p.structured_formatting?.main_text ?? p.description.split(',')[0]}
              </span>
              {p.structured_formatting?.secondary_text && (
                <span style={{ color: 'var(--muted)', marginLeft: 6, fontSize: 13 }}>
                  {p.structured_formatting.secondary_text}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

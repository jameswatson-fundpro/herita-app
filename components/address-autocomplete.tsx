'use client';

/**
 * AddressAutocomplete
 * ────────────────────────────────────────────────────────────────────
 * Single-input address field powered by the Google Places Autocomplete
 * (legacy JS API — works with the standard "Maps JavaScript API" + Places
 * library). Loads the Google script lazily on first focus so the page
 * isn't billed for users who never reach this field.
 *
 * Setup
 *   1. Add to .env.local:           NEXT_PUBLIC_GOOGLE_PLACES_KEY=...
 *   2. In Google Cloud Console:     enable "Maps JavaScript API"
 *                                   enable "Places API"
 *                                   restrict the key to your domain
 *
 * The component falls back gracefully (plain input) if the key is missing
 * or the script fails — the user can still type an address by hand.
 */

import { useEffect, useId, useRef, useState } from 'react';

// Minimal types — we don't pull the full @types/google.maps package.
type GooglePlace = {
  formatted_address?: string;
  address_components?: Array<{
    long_name: string;
    short_name: string;
    types: string[];
  }>;
};

type GoogleAutocomplete = {
  addListener: (event: string, fn: () => void) => void;
  getPlace: () => GooglePlace;
  setComponentRestrictions: (r: { country: string[] }) => void;
};

declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: new (
            input: HTMLInputElement,
            opts?: Record<string, unknown>,
          ) => GoogleAutocomplete;
        };
      };
    };
    __heritaGoogleMapsLoading?: Promise<void>;
  }
}

function loadGoogleMaps(apiKey: string): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.google?.maps?.places) return Promise.resolve();
  if (window.__heritaGoogleMapsLoading) return window.__heritaGoogleMapsLoading;

  window.__heritaGoogleMapsLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps'));
    document.head.appendChild(script);
  });

  return window.__heritaGoogleMapsLoading;
}

export type AddressAutocompleteProps = {
  value: string;
  onChange: (value: string, components?: GooglePlace) => void;
  placeholder?: string;
  required?: boolean;
  inputStyle?: React.CSSProperties;
  /**
   * Restrict suggestions to these ISO country codes. Default: AU + NZ + GB
   * (matches the Estate location options).
   */
  countries?: string[];
};

export function AddressAutocomplete({
  value,
  onChange,
  placeholder = 'Start typing your address',
  required,
  inputStyle,
  countries = ['au', 'nz', 'gb'],
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const acRef = useRef<GoogleAutocomplete | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const id = useId();

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;

  // Lazy-load the script on first focus.
  const handleFocus = async () => {
    if (status !== 'idle' || !apiKey || !inputRef.current) return;
    setStatus('loading');
    try {
      await loadGoogleMaps(apiKey);
      if (!inputRef.current || !window.google?.maps?.places) {
        setStatus('error');
        return;
      }
      const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ['formatted_address', 'address_components'],
        types: ['address'],
        componentRestrictions: { country: countries },
      });
      ac.addListener('place_changed', () => {
        const place = ac.getPlace();
        const formatted = place.formatted_address || inputRef.current?.value || '';
        onChange(formatted, place);
      });
      acRef.current = ac;
      setStatus('ready');
    } catch {
      setStatus('error');
    }
  };

  // Defensive: clean up the pac-container Google injects on body
  useEffect(() => {
    return () => {
      document.querySelectorAll('.pac-container').forEach((el) => el.remove());
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        placeholder={placeholder}
        required={required}
        autoComplete="street-address"
        style={inputStyle}
      />
      {!apiKey && (
        <div
          style={{
            fontSize: 12,
            color: 'var(--muted)',
            marginTop: 6,
            fontStyle: 'italic',
          }}
        >
          Address autocomplete unavailable — set NEXT_PUBLIC_GOOGLE_PLACES_KEY to enable.
        </div>
      )}
      {status === 'error' && (
        <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 6 }}>
          Address suggestions unavailable — please type your address.
        </div>
      )}
    </div>
  );
}

'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type Density = 'compact' | 'comfortable' | 'spacious';

type ThemeCtx = {
  theme: Theme;
  density: Density;
  setTheme: (t: Theme) => void;
  setDensity: (d: Density) => void;
  toggleTheme: () => void;
};

const Ctx = createContext<ThemeCtx | null>(null);

const THEME_KEY = 'herita.theme';
const DENSITY_KEY = 'herita.density';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [density, setDensityState] = useState<Density>('comfortable');

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const t = localStorage.getItem(THEME_KEY) as Theme | null;
      const d = localStorage.getItem(DENSITY_KEY) as Density | null;
      if (t === 'light' || t === 'dark') setThemeState(t);
      if (d === 'compact' || d === 'comfortable' || d === 'spacious') setDensityState(d);
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect onto <html>
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.density = density;
  }, [theme, density]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem(THEME_KEY, t); } catch { /* ignore */ }
  }, []);

  const setDensity = useCallback((d: Density) => {
    setDensityState(d);
    try { localStorage.setItem(DENSITY_KEY, d); } catch { /* ignore */ }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Ctx.Provider value={{ theme, density, setTheme, setDensity, toggleTheme }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      // Gate scope: the files covered by the first test suite. The audit
      // report (2026-08-06T22-09-30Z) recommends "the default 80% overall
      // for the covered targets"; the whole src/** tree (~8k lines, mostly
      // UI code without tests yet) is reported in .github/coverage/ but is
      // not gated until more suites land.
      include: [
        'src/config/tune.ts',
        'src/config/analytics.ts',
        'src/components/TuneEditions.tsx',
        'src/components/TuneFunnel.tsx',
        // Cycle_04 (audit 2026-08-13): behavior-focused suites landed for the
        // most regression-prone untested code — consent matrix, language
        // detection + t() fallback, and hash routing / document titles.
        'src/components/CookieConsent.tsx',
        'src/context/LanguageContext.tsx',
        'src/App.tsx',
      ],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/**/*.d.ts'],
      reporter: ['text'],
      thresholds: { lines: 80 },
    },
  },
});

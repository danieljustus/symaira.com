// Central feature flags for symaira.com.
// SHOW_PRO hides all Pro pages, tiles, nav links, and pricing comparisons
// without deleting them — set VITE_SHOW_PRO=true at build time to bring
// everything back. (Env-driven so the guard is not a compile-time constant.)
export const SHOW_PRO = import.meta.env.VITE_SHOW_PRO === 'true';

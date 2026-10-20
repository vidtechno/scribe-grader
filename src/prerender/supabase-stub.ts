// Stand-in for the Supabase client while pages are rendered to HTML at build time: effects never run there, so nothing is requested.
const noop: unknown = new Proxy(function () { /* no-op */ }, {
  get: (_t, prop) => (prop === 'then' ? undefined : noop),
  apply: () => noop,
});
export const supabase = noop as never;

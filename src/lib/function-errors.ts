/** Supabase wraps non-2xx function responses; preserve the actionable message. */
export async function functionError(error: unknown, fallback: string): Promise<Error> {
  if (error && typeof error === 'object' && 'context' in error && error.context instanceof Response) {
    try {
      const body: unknown = await error.context.clone().json();
      if (body && typeof body === 'object' && 'error' in body && typeof body.error === 'string') {
        return new Error(body.error);
      }
    } catch { /* Non-JSON gateway errors use the supplied fallback. */ }
  }
  return new Error(error instanceof Error ? error.message : fallback);
}

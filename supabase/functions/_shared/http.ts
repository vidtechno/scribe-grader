const DEFAULT_ORIGINS = [
  "https://scorify.uz",
  "https://www.scorify.uz",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const ALLOWED_HEADERS = "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version";

function allowedOrigins(): Set<string> {
  const extra = (Deno.env.get("CORS_ALLOWED_ORIGINS") ?? "")
    .split(",").map((origin) => origin.trim()).filter(Boolean);
  return new Set([...DEFAULT_ORIGINS, ...extra]);
}

export function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin");
  const headers: Record<string, string> = { Vary: "Origin" };
  if (origin && allowedOrigins().has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Headers"] = ALLOWED_HEADERS;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
  }
  return headers;
}

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("Origin");
  return !origin || allowedOrigins().has(origin);
}

export function preflight(req: Request): Response | null {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: isAllowedOrigin(req) ? 204 : 403, headers: corsHeaders(req) });
  }
  if (!isAllowedOrigin(req)) return json(req, { error: "Origin not allowed" }, 403);
  if (req.method !== "POST") return json(req, { error: "Method not allowed" }, 405);
  return null;
}

export function json(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(req), "Content-Type": "application/json" },
  });
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function boundedString(value: unknown, max: number, min = 1): value is string {
  return typeof value === "string" && value.trim().length >= min && value.length <= max;
}

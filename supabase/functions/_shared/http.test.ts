import assert from "node:assert/strict";
import { corsHeaders, preflight } from "./http.ts";

Deno.test("CORS permits production and local development origins", () => {
  for (const origin of ["https://scorify.uz", "https://www.scorify.uz", "http://localhost:8080", "http://localhost:5173"]) {
    const req = new Request("https://example.test", {
      method: "OPTIONS", headers: { Origin: origin },
    });
    const response = preflight(req);
    assert.equal(response?.status, 204);
    assert.equal(response?.headers.get("Access-Control-Allow-Origin"), origin);
  }
});

Deno.test("CORS rejects unrelated browser origins and unsupported methods", () => {
  const foreign = new Request("https://example.test", {
    method: "OPTIONS", headers: { Origin: "https://untrusted.example" },
  });
  assert.equal(preflight(foreign)?.status, 403);
  assert.equal(corsHeaders(foreign)["Access-Control-Allow-Origin"], undefined);
  assert.equal(preflight(new Request("https://example.test", { method: "GET" }))?.status, 405);
});

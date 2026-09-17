import assert from "node:assert/strict";
import { getRequestUser, serviceClient } from "./quota.ts";

Deno.test("JWT helper accepts only a Bearer token and uses the verified user", async () => {
  let receivedToken = "";
  const client = {
    auth: {
      getUser: (token: string) => {
        receivedToken = token;
        return Promise.resolve({ data: { user: { id: "verified-user" } }, error: null });
      },
    },
  } as unknown as ReturnType<typeof serviceClient>;

  const unauthorized = new Request("https://example.test", {
    method: "POST", headers: { Authorization: "Basic untrusted" },
  });
  assert.equal(await getRequestUser(unauthorized, client), null);
  assert.equal(receivedToken, "");

  const authorized = new Request("https://example.test", {
    method: "POST", headers: { Authorization: "Bearer valid-token" },
    body: JSON.stringify({ userId: "forged-user" }),
  });
  assert.equal((await getRequestUser(authorized, client))?.id, "verified-user");
  assert.equal(receivedToken, "valid-token");
});

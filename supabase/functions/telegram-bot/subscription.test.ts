import assert from "node:assert/strict";
import { GATE_KEYBOARD, isMemberStatus } from "./subscription.ts";

Deno.test("channel members, admins and the owner pass; people who left or were removed do not", () => {
  for (const s of ["creator", "administrator", "member"]) assert.equal(isMemberStatus(s), true);
  for (const s of ["left", "kicked"]) assert.equal(isMemberStatus(s), false);
});

Deno.test("a restricted member counts only while still in the channel", () => {
  assert.equal(isMemberStatus("restricted", true), true);
  assert.equal(isMemberStatus("restricted", false), false);
  assert.equal(isMemberStatus("restricted"), false);
});

Deno.test("the gate offers the channel link and a re-check button", () => {
  const flat = GATE_KEYBOARD.inline_keyboard.flat();
  assert.ok(flat.some((b) => "url" in b && b.url === "https://t.me/scorify_uz"));
  assert.ok(flat.some((b) => "callback_data" in b && b.callback_data === "sub:check"));
});

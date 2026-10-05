import assert from "node:assert/strict";
import { esc, randomCode, safeEqual, truncate, validateInitData } from "./telegram.ts";
import { streakDays, weekStart } from "../telegram-bot/data.ts";
import { dailySet, quizOptions, WORDS } from "../telegram-bot/content.ts";

const TOKEN = "123456:TEST-token";

async function sign(fields: Record<string, string>, token = TOKEN): Promise<string> {
  const enc = new TextEncoder();
  const hmac = async (key: BufferSource, data: string) =>
    crypto.subtle.sign("HMAC", await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), enc.encode(data));
  const check = Object.keys(fields).sort().map((k) => `${k}=${fields[k]}`).join("\n");
  const secret = await hmac(enc.encode("WebAppData"), token);
  const hash = Array.from(new Uint8Array(await hmac(secret, check))).map((b) => b.toString(16).padStart(2, "0")).join("");
  return new URLSearchParams({ ...fields, hash }).toString();
}

Deno.test("Mini App init data with a valid signature is accepted", async () => {
  const now = Date.now();
  const initData = await sign({
    auth_date: String(Math.floor(now / 1000) - 60),
    query_id: "AAE",
    user: JSON.stringify({ id: 6117815120, first_name: "Diyor", username: "diyor" }),
    start_param: "results",
  });
  const result = await validateInitData(initData, TOKEN, 86_400, now);
  assert.equal(result?.user.id, 6117815120);
  assert.equal(result?.startParam, "results");
});

Deno.test("Mini App init data is rejected when tampered, signed with another token or expired", async () => {
  const now = Date.now();
  const fields = { auth_date: String(Math.floor(now / 1000)), user: JSON.stringify({ id: 1, first_name: "A" }) };
  const valid = await sign(fields);
  const tampered = valid.replace("%22id%22%3A1", "%22id%22%3A2");
  assert.equal(await validateInitData(tampered, TOKEN, 86_400, now), null);
  assert.equal(await validateInitData(await sign(fields, "999:other"), TOKEN, 86_400, now), null);
  const old = await sign({ ...fields, auth_date: String(Math.floor(now / 1000) - 2 * 86_400) });
  assert.equal(await validateInitData(old, TOKEN, 86_400, now), null);
  assert.equal(await validateInitData("user=%7B%7D", TOKEN, 86_400, now), null);
});

Deno.test("HTML escaping and helpers", () => {
  assert.equal(esc("<b>a & b</b>"), "&lt;b&gt;a &amp; b&lt;/b&gt;");
  assert.equal(truncate("one two three", 7), "one tw…");
  assert.ok(safeEqual("abc", "abc"));
  assert.ok(!safeEqual("abc", "abd"));
  assert.match(randomCode(12), /^[A-Za-z0-9_-]{16}$/);
});

Deno.test("streak counts consecutive Tashkent days including yesterday", () => {
  const now = new Date("2026-10-05T10:00:00Z"); // 15:00 in Tashkent
  const at = (iso: string) => ({ id: iso, score: 6, created_at: iso, topic: "", label: "" });
  assert.equal(streakDays([at("2026-10-04T08:00:00Z"), at("2026-10-03T08:00:00Z"), at("2026-10-01T08:00:00Z")], now), 2);
  // 20:00Z on the 4th is already the 5th in Tashkent, so both results fall on the same day.
  assert.equal(streakDays([at("2026-10-05T05:00:00Z"), at("2026-10-04T20:00:00Z")], now), 1);
  assert.equal(streakDays([at("2026-10-05T05:00:00Z"), at("2026-10-04T18:00:00Z")], now), 2);
  assert.equal(streakDays([at("2026-10-02T08:00:00Z")], now), 0);
});

Deno.test("week starts on Monday in Tashkent time", () => {
  assert.equal(weekStart(new Date("2026-10-05T10:00:00Z")), "2026-10-05"); // Monday
  assert.equal(weekStart(new Date("2026-10-04T20:00:00Z")), "2026-10-05"); // Sunday 20:00Z = Monday 01:00 Tashkent
  assert.equal(weekStart(new Date("2026-10-11T12:00:00Z")), "2026-10-05"); // Sunday
});

Deno.test("quiz options contain the answer once and four distinct words", () => {
  for (let i = 0; i < 50; i++) {
    const correct = i % WORDS.length;
    const options = quizOptions(correct);
    assert.equal(options.length, 4);
    assert.equal(new Set(options).size, 4);
    assert.ok(options.includes(correct));
  }
  const day = dailySet(Date.UTC(2026, 9, 5));
  assert.ok(day.word.word && day.task2 && day.speaking.text && day.grammar);
});

// The voice of Scorify's study messages: short, warm, a little cheeky. Wording is picked per user and day from a
// bank, so neighbours do not get the same text and nobody gets the same text every day.
import { esc } from "../_shared/telegram.ts";
import { hint, quote } from "./ui.ts";

export interface LearnSummary {
  started?: boolean; today_done?: boolean; today_xp?: number; daily_goal?: number; xp?: number; week_xp?: number;
  streak?: number; streak_info?: { current: number; best: number; at_risk: boolean; broken: boolean; days_left?: number };
  lessons_done?: number; next_lesson_title?: string | null; idle_days?: number | null; access?: { allowed?: boolean };
}

export type Slot = "morning" | "afternoon" | "evening";
export type Phase = "daily" | "comeback" | "weekly" | "last";

export const pick = <T>(items: T[], v: number): T => items[Math.abs(Math.trunc(v)) % items.length];
const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));

const MORNING = [
  "☀️😄 Xayrli tong! Ingliz tili 10 daqiqa kutyapti — choy yonida boshlaymizmi?",
  "🌤😊 Salom! Bugungi dars hali yo'q. Birinchi qadam eng oson — bir bosish yetadi 😁",
  "☕️😃 Tong, choy, bitta dars. Yaxshi uchlik, shunday emasmi? 🤭",
  "🌱😆 Yangi kun — yangi 10 ta so'z. Ularni siz olmasangiz, kim oladi?",
  "🐦😄 Erta turgan ingliz so'zini yutadi (maqol shunday emas, lekin bo'lishi kerak edi) 😂",
];
// Tone by time of day: morning cheerful, noon a little hurt, evening angry (a learner who has not studied yet today).
const AFTERNOON = [
  "😔 Tushdan keyin ham dars yo'q. Ertalab reja tuzgan edingiz-ku... 10 daqiqa topa olmayapsizmi?",
  "🥺 Kun yarmi o'tdi, ingliz tili esa hali sizni kutyapti. Shunchalik band emassiz-ku?",
  "😞 «Keyin qilaman» deganlar odatda kechqurun ham shuni deydi. Hozir bitta dars qilsangiz-chi.",
  "😒 Telefonda lenta aylantirishga vaqt bor, darsga esa yo'q. Hozir 10 daqiqa — va ko'nglim joyiga tushadi.",
  "😕 Bugun natija hali nol. Shu holat davom etsa, ertaga ham nol bo'ladi.",
];
const EVENING_STREAK = [
  "😡 {streak} kunlik streak o'chib ketyapti! Hozir bitta dars qiling, bo'lmasa hammasi behuda ketadi!",
  "🤬 Kun tugayapti, {streak} kunlik mehnat esa xavfda! Bitta dars, hoziroq!",
  "😤 {streak} kun ketma-ket o'rgandingiz, endi bugun bo'sh qoldirmoqchimisiz? Yo'q! Bitta dars qiling!",
  "👿 Streak {streak} kun... Uni bugun yo'qotsangiz, o'zingizni kechirmaysiz. Hoziroq darsga!",
  "💢 {streak} kunlik yutuq bir dars uchun yo'qolmasin! Telefonni oling va boshlang!",
];
const EVENING_PLAIN = [
  "😡 Bugun ingliz tiliga bir daqiqa ham bermadingiz. Ertaga ham shu bo'lsa, o'rganishingiz to'xtagan hisoblanadi. Hozir bitta dars!",
  "🤬 Kun tugadi, dars esa yo'q! Hamma o'rganmoqda, siz esa eslatmalarni o'qiyapsiz xolos. Bitta dars qiling!",
  "😤 Bugungi sahifa bo'm-bo'sh. 10 daqiqa topmasangiz, bu kun hisobga o'tmaydi. Hozir boshlang!",
  "👿 Yana «vaqtim bo'lmadi» deysizmi? Yo'q! Telefon qo'lingizda — bitta dars bilan boshlang.",
  "💢 Oxirgi marta aytaman: bugun bitta dars. Hoziroq. Keyin uxlaysiz.",
];
const COMEBACK = [
  "👋 {idle} kundan beri ko'rinmayapsiz. Hammasi joyidami? Ingliz tili sizni sog'indi 🥺",
  "🤗 Qaytish hech qachon kech emas! Bitta oddiy dars bilan qayta boshlaymiz.",
  "🐢 Sekin bo'lsa ham — to'xtamaslik muhim. Bugun 5 daqiqa?",
  "🌦 Hamma tanaffus qiladi. Eng muhimi — qaytish. Bugun qaytamizmi?",
];
const WEEKLY = [
  "📚 Bir haftadan oshdi. Ingliz tili «unutilganlar» ro'yxatiga o'tib ketmasin 😅 Natijalaringiz joyida — qaytsangiz bo'ldi.",
  "🌟 Darslaringiz saqlanib turibdi{done}. Davom ettiramizmi?",
  "🧳 Yo'lni to'xtatgan joyingizdan davom ettirish mumkin. Hech narsa yo'qolmagan!",
];
const LAST = "👋 Sizni ortiqcha bezovta qilmayman — bu oxirgi eslatma. Tayyor bo'lganingizda darslar shu yerda turibdi. Xohlasangiz, eslatmalarni o'chirib qo'yishingiz mumkin 🌿";

/** Text of a study reminder for this slot and inactivity phase. */
export function reminderText(slot: Slot, phase: Phase, s: LearnSummary, v: number): string {
  const streak = s.streak_info?.current ?? s.streak ?? 0;
  const idle = s.idle_days ?? 0;
  const vars = { streak, idle };
  let line: string;
  if (phase === "last") line = LAST;
  else if (phase === "weekly") line = fill(pick(WEEKLY, v), { done: s.lessons_done ? ` (${s.lessons_done} ta dars tugatgansiz)` : "" });
  else if (phase === "comeback") {
    line = fill(pick(COMEBACK, v), vars);
    if (idle >= 4) line += "\n🎁 Qaytganingiz uchun +25 XP sovg'a.";
  } else if (slot === "morning") line = pick(MORNING, v);
  else if (slot === "afternoon") line = pick(AFTERNOON, v);
  else line = streak >= 2 ? fill(pick(EVENING_STREAK, v), vars) : pick(EVENING_PLAIN, v);

  const extra: string[] = [];
  if (phase === "daily" && slot === "evening" && streak >= 2 && s.streak_info?.days_left === 1) {
    extra.push(hint("⏳ Bugun streak uchun oxirgi kun — XP va o'rgangan so'zlaringiz esa hech qachon yo'qolmaydi."));
  }
  if (phase !== "last" && s.next_lesson_title) extra.push(quote(`▶️ Keyingi dars: <b>${esc(s.next_lesson_title)}</b>`));
  return [line, ...extra].join("\n");
}

const PRAISE_FIRST = [
  "🎉 Barakalla! Bugungi dars bajarildi.",
  "✅ Mana bu boshqa gap! Bugun o'qidingiz.",
  "👏 Yaxshi ish! Miyangiz buning uchun rahmat aytadi 🧠",
  "🌟 Bugungi kunni bo'sh o'tkazmadingiz — zo'r!",
];
const PRAISE_STREAK = [
  "🔥 {streak} kun ketma-ket! To'xtamang 😎",
  "💥 {streak} kunlik streak — endi sizni to'xtatib bo'lmaydi!",
  "🏃 {streak} kun ketma-ket o'qiyapsiz. Hurmatim ortdi!",
];
const PRAISE_GOAL = [
  "🎯 Kunlik maqsad bajarildi! Endi dam olsangiz ham bo'ladi (yoki yana bitta dars? 😏)",
  "🏆 Maqsad — bajarildi. Bugungi ish tamom, ertaga yana ko'rishamiz!",
];

/** Praise after the first study of the day. The tone is warmer than the reminders. */
export function praiseText(s: LearnSummary, v: number): string {
  const streak = s.streak_info?.current ?? s.streak ?? 0;
  const goal = s.daily_goal ?? 30, today = s.today_xp ?? 0;
  const reached = today >= goal;
  const head = reached ? pick(PRAISE_GOAL, v) : streak >= 3 ? fill(pick(PRAISE_STREAK, v), { streak }) : pick(PRAISE_FIRST, v);
  const lines = [head, hint(`Bugun: ${today}/${goal} XP${streak > 0 ? ` · 🔥 ${streak} kun` : ""}`)];
  if (!reached) lines.push(hint(`Maqsadga yana ${goal - today} XP qoldi.`));
  return lines.join("\n");
}

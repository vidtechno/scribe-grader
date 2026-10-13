/** The Telegram account that answers support questions and takes payments (the same one the "buy" buttons open). */
export const SUPPORT_USERNAME = 'scorify_support';

export interface SupportTopic { id: string; title: string; text: string; message: string }

export const SUPPORT_TOPICS: SupportTopic[] = [
  { id: 'payment', title: "To'lov va tarif", text: "Tarif sotib olish, to'lov, muddat yoki chek", message: "Salom! To'lov yoki tarif bo'yicha savolim bor." },
  { id: 'lesson', title: 'Darsdagi xato', text: "Dars, mashq yoki testdagi noto'g'ri javob, tushunarsiz joy", message: 'Salom! Darsda xato topdim.' },
  { id: 'technical', title: 'Texnik muammo', text: "Sayt ochilmayapti, ovoz yoki mikrofon ishlamayapti, ekran oppoq", message: 'Salom! Saytda texnik muammo bor.' },
  { id: 'account', title: 'Hisob va kirish', text: 'Parol, Telegram orqali kirish, profil', message: 'Salom! Hisobga kirish bo\'yicha yordam kerak.' },
  { id: 'other', title: 'Boshqa savol', text: "Taklif, hamkorlik yoki boshqa savol", message: 'Salom! Savolim bor.' },
];

/** Link to the support chat with the question and some context filled in, so nobody has to explain who they are. */
export function supportLink(topic: SupportTopic | string | null | undefined, ctx: { publicId?: string | null; email?: string | null; plan?: string | null; page?: string | null } = {}) {
  const t = typeof topic === 'string' ? SUPPORT_TOPICS.find((x) => x.id === topic) : topic;
  const lines = [t?.message ?? 'Salom! Yordam kerak.'];
  if (ctx.publicId) lines.push(`ID: #${ctx.publicId}`);
  else if (ctx.email && !ctx.email.endsWith('.telegram') && !ctx.email.includes('@telegram')) lines.push(`Email: ${ctx.email}`);
  if (ctx.plan) lines.push(`Tarif: ${ctx.plan}`);
  if (ctx.page) lines.push(`Sahifa: ${ctx.page}`);
  return `https://t.me/${SUPPORT_USERNAME}?text=${encodeURIComponent(lines.join('\n'))}`;
}

// Tells the browser which country the request comes from (Vercel adds the header), so the site can open in Uzbek in Uzbekistan.
export default function handler(req: { headers: Record<string, string | string[] | undefined> }, res: {
  setHeader(k: string, v: string): void; status(c: number): { json(b: unknown): void };
}) {
  const raw = req.headers['x-vercel-ip-country'];
  const country = (Array.isArray(raw) ? raw[0] : raw)?.toUpperCase() ?? '';
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(200).json({ country: /^[A-Z]{2}$/.test(country) ? country : '' });
}

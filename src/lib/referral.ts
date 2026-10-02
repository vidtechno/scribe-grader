const KEY = 'scorify:ref';
const CODE = /^[A-Za-z0-9]{4,16}$/;

/** Remember a ?ref=CODE link so it can be claimed after the visitor signs in with Google. */
export function captureReferralFromUrl(search = window.location.search) {
  try {
    const code = new URLSearchParams(search).get('ref');
    if (code && CODE.test(code)) localStorage.setItem(KEY, code.toUpperCase());
  } catch { /* storage unavailable */ }
}

export function getStoredReferral(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

export function clearStoredReferral() {
  try { localStorage.removeItem(KEY); } catch { /* storage unavailable */ }
}

import { supabase } from '@/integrations/supabase/client';
import { isTelegramWebApp } from '@/lib/telegram';

export interface DeviceSession {
  id: string;
  name: string;
  last_seen: string;
  created_at: string;
  current: boolean;
}
export interface DeviceState {
  status: 'active' | 'pending' | 'revoked';
  max: number;
  sessions: DeviceSession[];
}

const KEY = 'scorify:device-id';
let memoryId: string | null = null;

/** A random id that stays in this browser: signing in again here replaces this device's older session instead of using a second slot. */
export function getDeviceId(): string {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && /^[a-z0-9-]{8,64}$/.test(saved)) return saved;
    const id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
    return id;
  } catch {
    return (memoryId ??= crypto.randomUUID());
  }
}

/** "Chrome · Windows", "Safari · iPhone", "Telegram · Android"… for the list of active devices. */
export function deviceName(ua = navigator.userAgent): string {
  const os = /iPhone|iPad|iPod/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows'
    : /Mac OS X|Macintosh/.test(ua) ? 'Mac' : /Linux|CrOS/.test(ua) ? 'Linux' : 'Qurilma';
  const browser = isTelegramWebApp() ? 'Telegram' : /Edg\//.test(ua) ? 'Edge' : /OPR\/|Opera/.test(ua) ? 'Opera'
    : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\/|CriOS/.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Brauzer';
  return `${browser} · ${os}`;
}

type Rpc = (fn: string, args?: Record<string, unknown>) => Promise<{ data: unknown; error: { message: string } | null }>;
const rpc = (fn: string, args?: Record<string, unknown>) => (supabase.rpc.bind(supabase) as unknown as Rpc)(fn, args);

export async function registerDevice(): Promise<DeviceState> {
  const { data, error } = await rpc('device_register', { _device_id: getDeviceId(), _name: deviceName() });
  if (error) throw new Error(error.message);
  return data as DeviceState;
}

export async function revokeDevice(sessionId: string): Promise<DeviceState> {
  const { data, error } = await rpc('device_revoke', { _session_id: sessionId });
  if (error) throw new Error(error.message);
  return data as DeviceState;
}

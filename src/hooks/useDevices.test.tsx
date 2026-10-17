import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import { DevicesProvider, useDevices } from './useDevices';

const mocks = vi.hoisted(() => ({ rpc: vi.fn(), signOut: vi.fn(), authSignOut: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: { rpc: mocks.rpc, auth: { signOut: mocks.authSignOut } },
}));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'u1' }, signOut: mocks.signOut }) }));
vi.mock('sonner', () => ({ toast: { info: vi.fn(), success: vi.fn(), error: vi.fn() } }));

const two = [
  { id: 's1', name: 'Chrome · Windows', last_seen: new Date().toISOString(), created_at: new Date().toISOString(), current: false },
  { id: 's2', name: 'Safari · iPhone', last_seen: new Date().toISOString(), created_at: new Date().toISOString(), current: false },
];

let api: ReturnType<typeof useDevices>;
function Probe() {
  api = useDevices();
  return <p>status:{api.status}</p>;
}
const mount = () => render(<DevicesProvider><Probe /></DevicesProvider>);

describe('device limit', () => {
  afterEach(() => { cleanup(); vi.clearAllMocks(); });

  it('lets a registered device in', async () => {
    mocks.rpc.mockResolvedValue({ data: { status: 'active', max: 2, sessions: two }, error: null });
    mount();
    await waitFor(() => expect(screen.getByText('status:active')).toBeInTheDocument());
    expect(mocks.rpc).toHaveBeenCalledWith('device_register', expect.objectContaining({ _device_id: expect.any(String) }));
  });

  it('holds a third device and lets it in after another one is signed out', async () => {
    mocks.rpc.mockImplementation(async (fn: string) => fn === 'device_register'
      ? { data: { status: 'pending', max: 2, sessions: two }, error: null }
      : { data: { status: 'active', max: 2, sessions: [two[1]] }, error: null });
    mount();
    await waitFor(() => expect(screen.getByText('status:pending')).toBeInTheDocument());
    expect(api.sessions).toHaveLength(2);
    await act(async () => { await api.revoke('s1'); });
    expect(mocks.rpc).toHaveBeenCalledWith('device_revoke', { _session_id: 's1' });
    expect(screen.getByText('status:active')).toBeInTheDocument();
  });

  it('signs this device out when it was removed elsewhere', async () => {
    mocks.authSignOut.mockResolvedValue({}); mocks.signOut.mockResolvedValue(undefined);
    mocks.rpc.mockResolvedValue({ data: { status: 'revoked', max: 2, sessions: [] }, error: null });
    mount();
    await waitFor(() => expect(mocks.signOut).toHaveBeenCalled());
  });

  it('does not lock anyone out when the check fails', async () => {
    mocks.rpc.mockResolvedValue({ data: null, error: { message: 'boom' } });
    mount();
    await waitFor(() => expect(screen.getByText('status:active')).toBeInTheDocument());
  });
});

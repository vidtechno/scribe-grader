import { describe, expect, it, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BroadcastTab } from './BroadcastTab';

const counts = { trial_ending: 4, inactive_3d: 53, paid_ending: 2, all_linked: 67 };
const history = [{ id: 'b1', audience: 'inactive_3d', created_at: '2026-11-10T10:00:00Z', total: 10, sent: 7, failed: 1, pending: 2 }];
const adminRpc = vi.hoisted(() => vi.fn());

vi.mock('./adminApi', () => ({ adminRpc }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
vi.mock('sonner', () => ({ toast: { success: vi.fn(), error: vi.fn() } }));

const renderTab = () => render(
  <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}><BroadcastTab /></QueryClientProvider>,
);

describe('BroadcastTab', () => {
  beforeEach(() => {
    adminRpc.mockReset();
    adminRpc.mockImplementation(async (fn: string) => (fn === 'admin_broadcast_counts' ? counts : fn === 'admin_broadcast_history' ? history : { id: 'x', total: 53 }));
  });

  it('shows counts, confirm step and sends with the chosen audience', async () => {
    renderTab();
    expect(await screen.findByText('53')).toBeTruthy();
    expect(screen.getByText('Jami 10 · yuborildi 7 · xato 1 · navbatda 2')).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: /3 kundan beri kirmaganlar/ }));
    const area = screen.getByLabelText('Xabar matni') as HTMLTextAreaElement;
    expect(area.value.length).toBeGreaterThan(10);
    fireEvent.change(area, { target: { value: 'Salom, qaytib keling' } });
    expect(screen.getByTestId('bc-preview').textContent).toBe('Salom, qaytib keling');

    fireEvent.click(screen.getByRole('button', { name: /^Yuborish/ }));
    expect(screen.getByText('53 kishiga yuborilsin?')).toBeTruthy();
    expect(adminRpc).not.toHaveBeenCalledWith('admin_broadcast_send', expect.anything());

    fireEvent.click(screen.getByRole('button', { name: /Ha, yuborish/ }));
    await waitFor(() => expect(adminRpc).toHaveBeenCalledWith('admin_broadcast_send', { _audience: 'inactive_3d', _text: 'Salom, qaytib keling' }));
  });
});

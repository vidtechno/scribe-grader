import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mocks = vi.hoisted(() => ({ signInWithOAuth: vi.fn(), error: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: { auth: { signInWithOAuth: mocks.signInWithOAuth } } }));
vi.mock('sonner', () => ({ toast: { error: mocks.error, success: vi.fn() } }));
import Auth from './Auth';

function mount() {
  render(<MemoryRouter initialEntries={['/auth']}><Routes><Route path="/auth" element={<Auth />} /></Routes></MemoryRouter>);
}

describe('Google-only authentication', () => {
  beforeEach(() => { vi.clearAllMocks(); localStorage.clear(); });
  afterEach(() => { cleanup(); });

  it('offers Google as the only sign-in method', () => {
    mount();
    expect(screen.getByRole('button', { name: /Continue with Google/ })).toBeInTheDocument();
    expect(screen.queryByLabelText(/Password/)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Age/)).not.toBeInTheDocument();
  });

  it('starts the Google OAuth flow with the callback URL', async () => {
    mocks.signInWithOAuth.mockResolvedValue({ error: null });
    mount();
    fireEvent.click(screen.getByRole('button', { name: /Continue with Google/ }));
    await waitFor(() => expect(mocks.signInWithOAuth).toHaveBeenCalledWith({
      provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` },
    }));
  });

  it('shows a readable error when Google sign-in fails', async () => {
    mocks.signInWithOAuth.mockResolvedValue({ error: { message: 'provider is not enabled' } });
    mount();
    fireEvent.click(screen.getByRole('button', { name: /Continue with Google/ }));
    await waitFor(() => expect(mocks.error).toHaveBeenCalledWith('provider is not enabled'));
  });

  it('tells invited visitors that their referral is remembered', () => {
    localStorage.setItem('scorify:ref', 'ABCD1234');
    mount();
    expect(screen.getByText(/invited by a friend/)).toBeInTheDocument();
  });
});

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mocks = vi.hoisted(() => ({ signInWithOAuth: vi.fn(), invoke: vi.fn(), error: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signInWithOAuth: mocks.signInWithOAuth }, functions: { invoke: mocks.invoke } },
}));
vi.mock('sonner', () => ({ toast: { error: mocks.error, success: vi.fn() } }));
import Auth from './Auth';

function mount() {
  render(<MemoryRouter initialEntries={['/auth']}><Routes><Route path="/auth" element={<Auth />} /></Routes></MemoryRouter>);
}

describe('Google and Telegram authentication', () => {
  beforeEach(() => { vi.clearAllMocks(); localStorage.clear(); sessionStorage.clear(); });
  afterEach(() => { cleanup(); });

  it('offers Telegram and Google sign-in without passwords', () => {
    mount();
    expect(screen.getByRole('button', { name: /Continue with Google/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue with Telegram/ })).toBeInTheDocument();
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

  it('starts a Telegram sign-in request and links to the bot', async () => {
    mocks.invoke.mockResolvedValue({ data: { code: 'abcdefgh1234', secret: 's', url: 'https://t.me/scorify_bot?start=login_abcdefgh1234', expires_in: 600 }, error: null });
    mount();
    fireEvent.click(screen.getByRole('button', { name: /Continue with Telegram/ }));
    await waitFor(() => expect(mocks.invoke).toHaveBeenCalledWith('telegram-auth', { body: { action: 'login_start' } }));
    const link = await screen.findByRole('link');
    expect(link).toHaveAttribute('href', 'https://t.me/scorify_bot?start=login_abcdefgh1234');
  });
});

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
const mocks = vi.hoisted(() => ({ signUp: vi.fn(), signIn: vi.fn(), error: vi.fn(), success: vi.fn(), resetPasswordForEmail: vi.fn() }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: { auth: { resetPasswordForEmail: mocks.resetPasswordForEmail } } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => mocks }));
vi.mock('sonner', () => ({ toast: { error: mocks.error, success: mocks.success } }));
import Auth from './Auth';

function mount() {
  render(<MemoryRouter initialEntries={['/auth']}><Routes><Route path="/auth" element={<Auth />} /><Route path="/dashboard" element={<p>Dashboard reached</p>} /></Routes></MemoryRouter>);
}
function fillSignup() {
  fireEvent.click(screen.getByRole('button', { name: 'Create Account' }));
  for (const [label, value] of [['Full Name *', 'Test User'], ['Age *', '22'], ['City *', 'Tashkent'], ['Email *', 'test@example.com'], ['Password *', 'test-password']]) {
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  }
  fireEvent.submit(screen.getByLabelText('Email *').closest('form')!);
}
describe('signup confirmation flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  afterEach(() => { cleanup(); });
  it('keeps unconfirmed users on the confirmation screen', async () => {
    mocks.signUp.mockResolvedValue({ error: null, confirmationRequired: true });
    mount(); fillSignup();
    expect(await screen.findByText('Check your email')).toBeInTheDocument();
    expect(screen.queryByText('Dashboard reached')).not.toBeInTheDocument();
    expect(mocks.success).not.toHaveBeenCalled();
  });
  it('shows only email authentication', () => {
    mount();
    expect(screen.queryByRole('button', { name: 'Continue with Google' })).not.toBeInTheDocument();
  });
  it('displays email quota errors and never reports signup success', async () => {
    mocks.signUp.mockResolvedValue({ error: new Error('email rate limit exceeded') });
    mount(); fillSignup();
    await waitFor(() => expect(mocks.error).toHaveBeenCalledWith(expect.stringContaining('temporarily unavailable')));
    expect(mocks.success).not.toHaveBeenCalled();
    expect(screen.queryByText('Dashboard reached')).not.toBeInTheDocument();
  });
  it('redirects only when signup provides an authenticated session', async () => {
    mocks.signUp.mockResolvedValue({ error: null, confirmationRequired: false });
    mount(); fillSignup();
    expect(await screen.findByText('Dashboard reached')).toBeInTheDocument();
  });
  it('requests a password reset without requiring the forgotten password', async () => {
    mocks.resetPasswordForEmail.mockResolvedValue({ error: null });
    mount();
    fireEvent.click(screen.getByRole('button', { name: 'Forgot password?' }));
    fireEvent.change(screen.getByLabelText('Email *'), { target: { value: 'owner@example.com' } });
    expect(screen.queryByLabelText('Password *')).not.toBeInTheDocument();
    fireEvent.submit(screen.getByLabelText('Email *').closest('form')!);
    await waitFor(() => expect(mocks.resetPasswordForEmail).toHaveBeenCalledWith('owner@example.com', { redirectTo: `${window.location.origin}/reset-password` }));
    expect(await screen.findByText(/If this email has an account/)).toBeInTheDocument();
  });
});

import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DesktopWorkspace } from './DesktopWorkspace';

vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ profile: { full_name: 'Diyorbek Anorboyev' } }) }));
vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'en', t: (key: string) => ({ 'learn.home.tabWords': 'My words', 'nav.grammar': 'Daily Grammar', 'nav.leaderboard': 'Leaderboard', 'nav.profile': 'Profile', 'nav.help': 'Help centre', 'nav.signOut': 'Sign out' })[key] ?? key }) }));
vi.mock('./LanguageSwitcher', () => ({ LanguageSwitcher: () => <span>EN / UZ</span> }));
vi.mock('./ThemeToggle', () => ({ ThemeToggle: () => null }));

afterEach(cleanup);
describe('desktop workspace navigation', () => {
  it('keeps word review distinct from the course even though both share /learn', () => {
    render(<MemoryRouter initialEntries={['/learn?tab=words']}><DesktopWorkspace isAdmin={false} onSignOut={() => undefined} /></MemoryRouter>);
    expect(screen.getByRole('link', { name: 'My words' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'My learning' })).not.toHaveAttribute('aria-current');
    fireEvent.click(screen.getByRole('link', { name: 'My learning' }));
    expect(screen.getByRole('link', { name: 'My learning' })).toHaveAttribute('aria-current', 'page');
  });
  it('opens the IELTS hub and highlights it on individual practice pages', () => {
    render(<MemoryRouter initialEntries={['/writing']}><DesktopWorkspace isAdmin={false} onSignOut={() => undefined} /></MemoryRouter>);
    expect(screen.getByRole('link', { name: 'IELTS practice' })).toHaveAttribute('href', '/practice');
    expect(screen.getByRole('link', { name: 'IELTS practice' })).toHaveAttribute('aria-current', 'page');
    expect(screen.queryByRole('link', { name: 'Admin' })).toBeNull();
  });
  it('preserves sign out and the admin link', () => {
    const signOut = vi.fn();
    render(<MemoryRouter initialEntries={['/dashboard']}><DesktopWorkspace isAdmin onSignOut={signOut} /></MemoryRouter>);
    expect(screen.getByRole('link', { name: 'Admin' })).toHaveAttribute('href', '/admin');
    fireEvent.click(screen.getByRole('button', { name: 'Sign out' }));
    expect(signOut).toHaveBeenCalledOnce();
  });
});

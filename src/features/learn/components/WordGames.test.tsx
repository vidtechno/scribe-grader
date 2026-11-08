import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { WordGames } from './WordGames';
vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'en' }) }));
const words = Array.from({ length: 8 }, (_, i) => ({ en: `word ${i}`, uz: `meaning ${i}` }));
afterEach(() => { cleanup(); vi.useRealTimers(); });
describe('word game rounds', () => {
  it('stops the sprint on time and starts a fresh timer on replay', () => {
    vi.useFakeTimers();
    render(<WordGames words={words} locked={false} />);
    fireEvent.click(screen.getByRole('button', { name: /60-second Word Sprint/ }));
    expect(screen.getByText('60s')).toBeTruthy();
    act(() => vi.advanceTimersByTime(60_000));
    expect(screen.getByText('0 / 8 correct')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'New round' }));
    expect(screen.getByText('60s')).toBeTruthy();
    expect(screen.queryByText('0 / 8 correct')).toBeNull();
  });
  it('lets the learner match every pair and ends the round once', () => {
    render(<WordGames words={words} locked={false} />);
    fireEvent.click(screen.getByRole('button', { name: /Match & Remember/ }));
    const dialog = within(screen.getByRole('dialog'));
    const selected = dialog.getAllByRole('button', { name: /^word \d$/ }).map(button => button.textContent!);
    expect(selected).toHaveLength(6);
    for (const english of selected) {
      fireEvent.click(dialog.getByRole('button', { name: english }));
      fireEvent.click(dialog.getByRole('button', { name: english.replace('word', 'meaning') }));
    }
    expect(screen.getByText('6 / 6 correct')).toBeTruthy();
  });
  it('shows the correction, advances automatically, then repeats a missed word', () => {
    vi.useFakeTimers();
    render(<WordGames words={words} locked={false} />);
    fireEvent.click(screen.getByRole('button', { name: /60-second Word Sprint/ }));
    const original = screen.getByRole('heading', { level: 3 }).textContent!;
    const meaning = original.replace('word', 'meaning');
    const dialog = within(screen.getByRole('dialog'));
    const wrong = dialog.getAllByRole('button', { name: /^meaning \d$/ }).find(button => button.textContent !== meaning)!;
    fireEvent.click(wrong);
    expect(screen.getByRole('status')).toHaveTextContent(`${original} — ${meaning}`);
    expect(screen.queryByRole('button', { name: 'Next' })).toBeNull();
    act(() => vi.advanceTimersByTime(1700));
    expect(screen.getByRole('heading', { level: 3 })).not.toHaveTextContent(original);
    let returnedAfter = 0;
    while (returnedAfter < 3 && screen.getByRole('heading', { level: 3 }).textContent !== original) {
      const current = screen.getByRole('heading', { level: 3 }).textContent!;
      fireEvent.click(dialog.getByRole('button', { name: current.replace('word', 'meaning') }));
      act(() => vi.advanceTimersByTime(850));
      returnedAfter++;
    }
    expect([2, 3]).toContain(returnedAfter);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(original);
  });
  it('prevents entry when the course is locked or there are too few words', () => {
    const { rerender } = render(<WordGames words={words} locked />);
    expect(screen.getAllByRole('button').every(button => (button as HTMLButtonElement).disabled)).toBe(true);
    rerender(<WordGames words={words.slice(0, 1)} locked={false} />);
    expect(screen.getAllByRole('button').every(button => (button as HTMLButtonElement).disabled)).toBe(true);
  });
  it('clears a mismatched pair before allowing another try', () => {
    vi.useFakeTimers();
    render(<WordGames words={words} locked={false} />);
    fireEvent.click(screen.getByRole('button', { name: /Match & Remember/ }));
    const dialog = within(screen.getByRole('dialog'));
    const english = dialog.getAllByRole('button', { name: /^word \d$/ })[0].textContent!;
    const wrongMeaning = dialog.getAllByRole('button', { name: /^meaning \d$/ }).find(button => button.textContent !== english.replace('word', 'meaning'))!;
    fireEvent.click(dialog.getByRole('button', { name: english }));
    fireEvent.click(wrongMeaning);
    expect(screen.getByText('Not a match. Try again!')).toBeTruthy();
    act(() => vi.advanceTimersByTime(650));
    expect(screen.queryByText('Not a match. Try again!')).toBeNull();
    act(() => vi.advanceTimersByTime(90_000));
    expect(screen.getByText('0 / 6 correct')).toBeTruthy();
  });
});

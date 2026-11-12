import { describe, expect, it, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { Lesson } from '../types';

const invoke = vi.fn();
vi.mock('@/integrations/supabase/client', () => ({ supabase: { functions: { invoke: (...a: unknown[]) => invoke(...a) } } }));
vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'uz', t: (k: string, v?: Record<string, unknown>) => `${k}${v ? JSON.stringify(v) : ''}` }) }));

import { LessonHelp } from './LessonHelp';

const lesson = { id: 'u2-l4', title: 'To be: questions', titleUz: 'To be: savollar', goal: 'Savol tuzish', words: [{ en: 'colleague', uz: 'hamkasb' }] } as unknown as Lesson;

beforeEach(() => invoke.mockReset());

describe('LessonHelp', () => {
  it('stays hidden while the admin switch is off', async () => {
    invoke.mockResolvedValue({ data: { enabled: false }, error: null });
    const { container } = render(<LessonHelp lesson={lesson} phase="theory" />);
    await waitFor(() => expect(invoke).toHaveBeenCalled());
    expect(container.textContent).toBe('');
  });

  it('asks the server, shows the answer and the remaining questions', async () => {
    invoke.mockImplementation(async (_n: string, opts: { body: { action: string } }) => opts?.body?.action === 'status'
      ? { data: { enabled: true, lessonLeft: 3, dayLeft: 15 }, error: null }
      : { data: { reply: '**Hamkasb** = colleague\n- misol', lessonLeft: 2, dayLeft: 14 }, error: null });
    render(<LessonHelp lesson={lesson} phase="practice" />);
    fireEvent.click(await screen.findByText('learn.help.button'));
    fireEvent.click(await screen.findByText('learn.help.explain'));
    expect(await screen.findByText(/colleague/)).toBeTruthy();
    await waitFor(() => expect(screen.getByText(/learn.help.left\{"n":2,"day":14\}/)).toBeTruthy());
    const ask = invoke.mock.calls.map((c) => c[1].body).find((b: { action: string }) => b.action === 'ask');
    expect(ask).toMatchObject({ lessonId: 'u2-l4', kind: 'explain', phase: 'practice' });
  });

  it('shows the limit message from the server and keeps the input disabled at zero', async () => {
    invoke.mockImplementation(async (_n: string, opts: { body: { action: string } }) => opts?.body?.action === 'status'
      ? { data: { enabled: true, lessonLeft: 0, dayLeft: 9 }, error: null } : { data: {}, error: null });
    render(<LessonHelp lesson={lesson} phase="theory" />);
    fireEvent.click(await screen.findByText('learn.help.button'));
    expect(await screen.findByText('learn.help.none')).toBeTruthy();
    expect((screen.getByPlaceholderText('learn.help.placeholder') as HTMLInputElement).disabled).toBe(true);
  });
});

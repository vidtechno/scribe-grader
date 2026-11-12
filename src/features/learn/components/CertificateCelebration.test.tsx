import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

const i18n = { lang: 'uz' as const, t: (k: string, v?: Record<string, unknown>) => (v ? `${k} ${Object.values(v).join('|')}` : k) };
vi.mock('@/i18n', () => ({ useT: () => i18n }));
const motion = vi.hoisted(() => ({ reduced: false }));
vi.mock('framer-motion', async (orig) => ({ ...(await orig<object>()), useReducedMotion: () => motion.reduced }));
vi.mock('./CertificateShare', () => ({ CertificateShare: () => <div>share-buttons</div> }));

import { CertificateCelebration } from './CertificateCelebration';

const data = { name: 'Ali Valiyev', levelTitle: 'Upper-Intermediate', cefr: 'B2', percent: 87, date: new Date(2026, 10, 12), number: 'SC-B2-K7M2Q9XA', lang: 'uz' as const };

describe('CertificateCelebration', () => {
  beforeEach(() => { motion.reduced = false; });

  it('shows the headline, the level, the motivation and counts up to the percent', async () => {
    render(<CertificateCelebration data={data} previewSrc="data:x" nextLevel={{ title: 'Advanced', cefr: 'C1' }} onDone={() => {}} />);
    expect(screen.getByText('learn.certParty.headline')).toBeTruthy();
    expect(screen.getByText('Upper-Intermediate · B2')).toBeTruthy();
    expect(screen.getByText('learn.certParty.next Advanced|C1')).toBeTruthy();
    await waitFor(() => expect(screen.getByText('87%')).toBeTruthy(), { timeout: 3000 });
  });

  it('uses the general line when there is no next level', () => {
    render(<CertificateCelebration data={data} previewSrc="data:x" onDone={() => {}} />);
    expect(screen.getByText('learn.certParty.general')).toBeTruthy();
  });

  it('skips on the skip button and on a tap', () => {
    const onDone = vi.fn();
    const { container } = render(<CertificateCelebration data={data} previewSrc="data:x" onDone={onDone} />);
    fireEvent.click(screen.getByText('learn.certParty.skip'));
    expect(onDone).toHaveBeenCalledTimes(1);
    fireEvent.click(container.firstElementChild!);
    expect(onDone).toHaveBeenCalledTimes(2);
  });

  it('with reduced motion: no confetti, the final percent at once, share buttons after a short fade', async () => {
    motion.reduced = true;
    const { container } = render(<CertificateCelebration data={data} previewSrc="data:x" onDone={() => {}} />);
    expect(screen.getByText('87%')).toBeTruthy();
    expect(container.querySelectorAll('span.absolute')).toHaveLength(0);
    await waitFor(() => expect(screen.getByText('share-buttons')).toBeTruthy(), { timeout: 2000 });
    expect(screen.queryByText('learn.certParty.skip')).toBeNull();
  });

  it('shows confetti with normal motion', () => {
    const { container } = render(<CertificateCelebration data={data} previewSrc="data:x" onDone={() => {}} />);
    expect(container.querySelectorAll('span.absolute').length).toBeGreaterThan(20);
  });
});

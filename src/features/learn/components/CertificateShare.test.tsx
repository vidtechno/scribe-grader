import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Stable references: a new object on every render would loop effects.
const i18n = { lang: 'uz' as const, t: (k: string) => k };
vi.mock('@/i18n', () => ({ useT: () => i18n }));
const toast = vi.hoisted(() => ({ info: vi.fn(), success: vi.fn(), error: vi.fn() }));
vi.mock('sonner', () => ({ toast }));
vi.mock('../certificate', () => ({
  certificateImage: vi.fn(async () => new Blob(['jpg'], { type: 'image/jpeg' })),
  certificateStoryImage: vi.fn(async () => new Blob(['png'], { type: 'image/png' })),
}));

import { CertificateShare } from './CertificateShare';

const data = { name: 'Ali Valiyev', levelTitle: 'Upper-Intermediate', cefr: 'B2', percent: 87, date: new Date(2026, 10, 12), number: 'SC-B2-K7M2Q9XA', lang: 'uz' as const };
const link = 'https://www.scorify.uz/certificate/SC-B2-K7M2Q9XA';
const nav = navigator as unknown as Record<string, unknown>;

describe('CertificateShare', () => {
  let open: ReturnType<typeof vi.fn>;
  beforeEach(() => {
    open = vi.fn();
    window.open = open as unknown as typeof window.open;
    URL.createObjectURL = vi.fn(() => 'blob:x');
    URL.revokeObjectURL = vi.fn();
    HTMLAnchorElement.prototype.click = vi.fn();
    Object.assign(toast, { info: vi.fn(), success: vi.fn(), error: vi.fn() });
  });
  afterEach(() => { delete nav.share; delete nav.canShare; delete nav.clipboard; });

  it('opens Telegram and LinkedIn share links in a new tab', () => {
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.telegram'));
    expect(open.mock.calls[0][0]).toContain('https://t.me/share/url?url=' + encodeURIComponent(link));
    expect(open.mock.calls[0][0]).toContain('87%25');
    fireEvent.click(screen.getByText('learn.certShare.linkedin'));
    expect(open.mock.calls[1][0]).toBe(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`);
    expect(open.mock.calls[1][1]).toBe('_blank');
    expect(screen.getByText('learn.certShare.addToLinkedin').getAttribute('href')).toContain('certId=SC-B2-K7M2Q9XA');
  });

  it('copies the link', async () => {
    const writeText = vi.fn(async () => {});
    nav.clipboard = { writeText };
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.copy'));
    await waitFor(() => expect(toast.success).toHaveBeenCalled());
    expect(writeText).toHaveBeenCalledWith(link);
  });

  it('shares the story picture to Instagram when files can be shared', async () => {
    const share = vi.fn(async (..._a: unknown[]) => {});
    nav.share = share; nav.canShare = vi.fn(() => true);
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.instagram'));
    await waitFor(() => expect(share).toHaveBeenCalled());
    const arg = share.mock.calls[0][0] as { files: File[]; url: string; text: string };
    expect(arg.files[0].type).toBe('image/png');
    expect(arg.url).toBe(link);
    expect(toast.info).not.toHaveBeenCalled();
  });

  it('downloads the story picture and explains what to do when files cannot be shared', async () => {
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.instagram'));
    await waitFor(() => expect(toast.info).toHaveBeenCalledWith('learn.certShare.igHint', expect.anything()));
    expect(HTMLAnchorElement.prototype.click).toHaveBeenCalled();
  });

  it('"More" uses the share sheet with the image, or only the link when files are not supported', async () => {
    const share = vi.fn(async (..._a: unknown[]) => {});
    nav.share = share; nav.canShare = vi.fn(() => true);
    const { unmount } = render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.more'));
    await waitFor(() => expect(share).toHaveBeenCalledTimes(1));
    expect((share.mock.calls[0][0] as { files: File[] }).files[0].type).toBe('image/jpeg');
    unmount();
    nav.canShare = vi.fn(() => false);
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.more'));
    await waitFor(() => expect(share).toHaveBeenCalledTimes(2));
    expect(share.mock.calls[1][0]).toMatchObject({ url: link });
    expect(share.mock.calls[1][0]).not.toHaveProperty('files');
  });

  it('stays quiet when the share sheet is dismissed', async () => {
    const share = vi.fn(async () => { throw new DOMException('closed', 'AbortError'); });
    nav.share = share; nav.canShare = vi.fn(() => false);
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.more'));
    await waitFor(() => expect(share).toHaveBeenCalled());
    expect(toast.error).not.toHaveBeenCalled();
  });

  it('downloads the certificate image', async () => {
    render(<CertificateShare data={data} />);
    fireEvent.click(screen.getByText('learn.certShare.download'));
    await waitFor(() => expect(HTMLAnchorElement.prototype.click).toHaveBeenCalled());
  });
});

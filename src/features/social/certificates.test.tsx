import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const tr = { lang: 'en', t: (k: string, v?: Record<string, unknown>) => (v ? `${k}:${JSON.stringify(v)}` : k) };
vi.mock('@/i18n', () => ({ useT: () => tr }));
const my = { data: [{ level_id: 'a1', full_name: 'Ali Valiyev', percent: 90, passed_at: '2026-10-01T00:00:00Z', issued_at: '2026-10-02T10:00:00Z', number: 'SC-A1-AAAA' }] as unknown[] };
vi.mock('./api', () => ({ useMyCertificates: () => my }));
vi.mock('@/features/learn/components/CertificateDialog', () => ({ CertificateDialog: ({ levelId }: { levelId: string }) => <div>dialog-{levelId}</div> }));

import { CertificateBadges, MyCertificates, certificateLabel } from './certificates';

describe('certificate badges', () => {
  it('shows nothing without certificates', () => {
    const { container } = render(<CertificateBadges certificates={[]} />);
    expect(container).toBeEmptyDOMElement();
    expect(render(<CertificateBadges />).container).toBeEmptyDOMElement();
  });
  it('lists level, CEFR, date and percent for each certificate', () => {
    render(<CertificateBadges certificates={[{ level_id: 'beginner', percent: 85, issued_at: '2026-10-12T10:00:00Z', number: 'SC-BEG-1' }, { level_id: 'a1', percent: null, issued_at: '2026-10-13T10:00:00Z', number: 'SC-A1-1' }]} />);
    expect(screen.getAllByTestId('certificate-badge')).toHaveLength(2);
    expect(screen.getByText(certificateLabel('beginner'))).toBeTruthy();
    expect(certificateLabel('beginner')).toContain('A0–A1');
    expect(screen.getByText(/12\.10\.2026 · cert\.result/)).toBeTruthy();
  });
  it('opens the certificate dialog from the owner list', () => {
    render(<MyCertificates />);
    expect(screen.queryByText('dialog-a1')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'cert.view' }));
    expect(screen.getByText('dialog-a1')).toBeTruthy();
  });
  it('renders nothing for the owner without certificates', () => {
    my.data = [];
    expect(render(<MyCertificates />).container).toBeEmptyDOMElement();
  });
});

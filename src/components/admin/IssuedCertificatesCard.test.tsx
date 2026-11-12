import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it, vi } from 'vitest';

const payload = {
  total: 2,
  by_level: [{ level: 'a1', issued: 1, level_tests_taken: 4, level_tests_passed: 1 }],
  rows: [
    { number: 'SC-A1-1', level_id: 'a1', full_name: 'Ali Valiyev', percent: 90, issued_at: '2026-10-02T10:00:00Z', email: 'ali@example.com', public_id: '1', user_id: 'u1' },
    { number: 'SC-BEG-2', level_id: 'beginner', full_name: 'Vali Aliyev', percent: null, issued_at: '2026-10-01T10:00:00Z', email: null, public_id: null, user_id: 'u2' },
  ],
};
vi.mock('./adminApi', () => ({ adminRpc: async () => payload, LEVEL_LABEL: { a1: 'Elementary', beginner: 'Beginner' } }));

import { IssuedCertificatesCard } from './LearningTab';

describe('IssuedCertificatesCard', () => {
  it('shows the total, the per-level pass rate and the recipients', async () => {
    const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
    render(<QueryClientProvider client={qc}><IssuedCertificatesCard /></QueryClientProvider>);
    expect(await screen.findByText('Berilgan sertifikatlar (2)')).toBeTruthy();
    expect(screen.getByText('25%')).toBeTruthy();
    expect(screen.getByText('Ali Valiyev')).toBeTruthy();
    expect(screen.getByText('ali@example.com')).toBeTruthy();
    expect(screen.getByText('Vali Aliyev')).toBeTruthy();
  });
});

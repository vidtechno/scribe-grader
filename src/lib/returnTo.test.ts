import { describe,it,expect } from 'vitest';
import { safeReturnTo } from './returnTo';

describe('post-auth return destination',()=>{
  it('falls back to the dashboard for any destination',()=>{
    expect(safeReturnTo('/dashboard')).toBe('/dashboard');
    expect(safeReturnTo(null)).toBe('/dashboard');
  });
  it('rejects open redirects and unrelated paths',()=>{
    for (const value of ['//evil.com','https://evil.com/x','/\\evil.com','/admin'])
      expect(safeReturnTo(value)).toBe('/dashboard');
  });
});

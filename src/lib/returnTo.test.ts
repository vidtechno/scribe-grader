import { describe,it,expect } from 'vitest';
import { safeReturnTo } from './returnTo';

describe('invite return destination',()=>{
  it('preserves a secure assessment invite',()=>{
    expect(safeReturnTo('/t/1234567890abcdef1234567890abcdef')).toBe('/t/1234567890abcdef1234567890abcdef');
    expect(safeReturnTo('/my-tests')).toBe('/my-tests');
    expect(safeReturnTo('/teacher')).toBe('/teacher');
  });
  it('rejects open redirects and unrelated paths',()=>{
    for (const value of ['//evil.com','https://evil.com/t/1234567890abcdef','/\\evil.com','/t/short','/admin','/t/1234567890abcdef%2F..'])
      expect(safeReturnTo(value)).toBe('/dashboard');
  });
});

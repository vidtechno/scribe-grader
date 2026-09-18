import { describe,it,expect } from 'vitest';
import { strFromU8,unzipSync } from 'fflate';
import { makeResultsXlsx } from './xlsx';

describe('Teacher Pro export',()=>{
  it('creates a valid XLSX with literal text rather than formulas',()=>{
    const files=unzipSync(makeResultsXlsx(['student','score'],[{student:'=HYPERLINK("bad") <&',score:6.5}]));
    expect(Object.keys(files)).toContain('xl/worksheets/sheet1.xml');
    const sheet=strFromU8(files['xl/worksheets/sheet1.xml']);
    expect(sheet).toContain('=HYPERLINK(&quot;bad&quot;) &lt;&amp;');
    expect(sheet).toContain('<v>6.5</v>');
    expect(sheet).not.toContain('<f>');
  });
});

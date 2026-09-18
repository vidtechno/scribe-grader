import { strToU8, zipSync } from 'fflate';

// XML 1.0 forbids these control characters, even inside literal string cells.
// eslint-disable-next-line no-control-regex
const xml = (value: unknown) => String(value ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const column = (index:number) => { let s='';let n=index+1;while(n){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26);}return s;};

/** Small, dependency-light XLSX writer; all user text is stored as literal strings. */
export function makeResultsXlsx(headers:string[], rows:Record<string,unknown>[]):Uint8Array {
  const cell=(value:unknown,col:number,row:number,numeric=false)=>{
    const ref=`${column(col)}${row}`;
    return numeric&&typeof value==='number'&&Number.isFinite(value)
      ? `<c r="${ref}"><v>${value}</v></c>`
      : `<c r="${ref}" t="inlineStr"><is><t>${xml(value)}</t></is></c>`;
  };
  const grid=[`<row r="1">${headers.map((h,i)=>cell(h,i,1)).join('')}</row>`];
  for (let i=0;i<rows.length;i++) grid.push(`<row r="${i+2}">${headers.map((h,j)=>cell(rows[i][h],j,i+2,['attempt','score','task','coherence','lexical','grammar'].includes(h))).join('')}</row>`);
  const sheet=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${grid.join('')}</sheetData></worksheet>`;
  const files:Record<string,Uint8Array>={
    '[Content_Types].xml':strToU8('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>'),
    '_rels/.rels':strToU8('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'),
    'xl/workbook.xml':strToU8('<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Results" sheetId="1" r:id="rId1"/></sheets></workbook>'),
    'xl/_rels/workbook.xml.rels':strToU8('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'),
    'xl/worksheets/sheet1.xml':strToU8(sheet),
  };
  return zipSync(files,{level:6});
}

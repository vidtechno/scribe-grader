// Isolated PostgreSQL WASM verification. No credentials, network, or production DB.
// Install @electric-sql/pglite in /tmp and set WRITING_PGLITE_MODULE to its dist/index.js.
import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
process.on('uncaughtException', e => { console.error(e.message, e.detail || '', e.where || '', e.position || ''); process.exit(1); });
const { PGlite } = await import(pathToFileURL(process.env.WRITING_PGLITE_MODULE).href);
const db = new PGlite();
await db.exec(`
create role anon; create role authenticated; create role service_role;
create schema auth; create table auth.users(id uuid primary key);
create function auth.uid() returns uuid language sql as $$select nullif(current_setting('test.uid',true),'')::uuid$$;
create function auth.jwt() returns jsonb language sql as $$select jsonb_build_object('role',coalesce(nullif(current_setting('test.role',true),''),'authenticated'))$$;
create table public.essays(id uuid primary key,user_id uuid,task_type text,topic text,essay_text text,word_count int,status text,score numeric,feedback jsonb,error_message text,created_at timestamptz default now());
create table public.mock_tests(id uuid primary key,user_id uuid,status text default 'in_progress',current_step text default 'task1',task1_essay text,task2_essay text,task1_word_count int,task2_word_count int);
create table public.test_quota(user_id uuid primary key,used int default 0,lim int default 2);
create function public.consume_quota(_user_id uuid,_kind text) returns jsonb language plpgsql as $$
declare q public.test_quota%rowtype; begin
select * into q from public.test_quota where user_id=_user_id for update;
if q.used>=q.lim then return '{"allowed":false,"reason":"limit_reached"}'::jsonb; end if;
update public.test_quota set used=used+1 where user_id=_user_id;
return jsonb_build_object('allowed',true,'used',q.used+1,'limit',q.lim); end;$$;
create function public.refund_quota(_user_id uuid,_kind text) returns void language sql as $$update public.test_quota set used=greatest(0,used-1) where user_id=_user_id$$;
`);
const alice = '11111111-1111-4111-8111-111111111111';
const bob = '22222222-2222-4222-8222-222222222222';
const id = '33333333-3333-4333-8333-333333333333';
const token = '44444444-4444-4444-8444-444444444444';
const mock = '55555555-5555-4555-8555-555555555555';
const essay = 'word '.repeat(250).trim();
await db.query('insert into auth.users values ($1),($2)', [alice,bob]);
await db.query('insert into test_quota(user_id) values ($1),($2)', [alice,bob]);
await db.exec(`insert into essays values ('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa','${alice}','Task 2','Old','Untouched',1,'completed',7,'{"overallBand":7}',null,now())`);
const historical = (await db.query('select * from essays')).rows;
await db.exec(await readFile(new URL('../supabase/migrations/20261108140343_writing_attempt_recovery.sql', import.meta.url), 'utf8'));
assert.deepEqual((await db.query('select * from essays')).rows,historical);
await db.query("select set_config('test.uid',$1,false)",[alice]);
const save = async (text=essay, rev=0, more={}) => (await db.query(
  'select save_writing_attempt($1,$2,$3,$4,$5,$6,$7,$8,$9) as r',
  [more.id||id,more.mock||null,more.task||'Task 2','Topic',text,new Date().toISOString(),new Date(Date.now()+2_400_000).toISOString(),rev,more.finish||false])).rows[0].r;
await assert.rejects(save(''));
const first = await save(); assert.equal(first.attempt.revision,1);
assert.equal((await db.query('select used from test_quota where user_id=$1',[alice])).rows[0].used,0);
assert.equal((await save()).attempt.revision,1); // lost acknowledgement
const changed = await save(essay+' new',1);
assert.equal(changed.attempt.revision,2);
assert.equal(changed.attempt.deadline_at,first.attempt.deadline_at);
assert.equal((await save('Other device',1)).conflict,true);
await db.query("select set_config('test.uid',$1,false)",[bob]);
await assert.rejects(save('Hijack',2));
await db.query("select set_config('test.uid',$1,false)",[alice]);
await assert.rejects(db.query('update essays set essay_text=$1 where id=$2',['Bypass',id]));
await db.query("select set_config('test.role','service_role',false)");
const claim = async (uid=alice) => (await db.query('select claim_writing_grade($1,$2,$3) as r',[id,uid,token])).rows[0].r;
assert.equal((await claim(bob)).state,'missing');
const claims = await Promise.all([claim(),claim()]);
assert.deepEqual(claims.map(c=>c.state).sort(),['claimed','grading']);
assert.equal((await db.query('select used from test_quota where user_id=$1',[alice])).rows[0].used,1);
await db.query('select finish_writing_grade($1,$2,$3,$4,null)',[id,alice,token,JSON.stringify({overallBand:6.5})]);
assert.equal((await claim()).state,'completed');
await db.query('select finish_writing_grade($1,$2,$3,$4,null)',[id,alice,token,JSON.stringify({overallBand:6.5})]);
assert.equal((await db.query('select count(*)::int as n from essays where id=$1',[id])).rows[0].n,1);
assert.equal((await db.query('select used from test_quota where user_id=$1',[alice])).rows[0].used,1);
await db.query("select set_config('test.role','authenticated',false)");
await db.query('insert into mock_tests(id,user_id) values($1,$2)',[mock,alice]);
const mid='66666666-6666-4666-8666-666666666666';
await save(essay,0,{id:mid,mock,task:'Task 1'});
assert.equal((await db.query('select current_step from mock_tests')).rows[0].current_step,'task1');
await assert.rejects(save('too short',1,{id:mid,mock,task:'Task 1',finish:true}));
await save(essay,1,{id:mid,mock,task:'Task 1',finish:true});
await save(essay,1,{id:mid,mock,task:'Task 1',finish:true});
assert.equal((await db.query('select current_step from mock_tests')).rows[0].current_step,'task2');
assert.equal((await db.query('select used from test_quota where user_id=$1',[alice])).rows[0].used,1);
await db.query("select set_config('test.role','service_role',false)");
const rejected='77777777-7777-4777-8777-777777777777';
await save(essay,0,{id:rejected});
await db.query('select claim_writing_grade($1,$2,$3)',[rejected,alice,token]);
await db.query("select finish_writing_grade($1,$2,$3,null,'rejected')",[rejected,alice,token]);
await db.query("select finish_writing_grade($1,$2,$3,null,'rejected')",[rejected,alice,token]);
assert.equal((await db.query('select used from test_quota where user_id=$1',[alice])).rows[0].used,1);
await db.query('select claim_writing_grade($1,$2,$3)',[rejected,alice,token]);
await db.query("select finish_writing_grade($1,$2,$3,null,'ambiguous')",[rejected,alice,token]);
assert.equal((await db.query('select claim_writing_grade($1,$2,$3) as r',[rejected,alice,token])).rows[0].r.state,'review_required');
const denied='88888888-8888-4888-8888-888888888888';
await save(essay,0,{id:denied});
assert.equal((await db.query('select claim_writing_grade($1,$2,$3) as r',[denied,alice,token])).rows[0].r.state,'quota');
assert.equal((await db.query('select essay_text from essays where id=$1',[denied])).rows[0].essay_text,essay);
// API permissions: authenticated can read only its own rows, never grade directly.
await db.exec(`grant usage on schema auth to authenticated; grant execute on function auth.uid() to authenticated; set role authenticated;`);
await db.query("select set_config('test.uid',$1,false)",[bob]);
assert.equal((await db.query('select * from writing_attempts')).rows.length,0);
await assert.rejects(db.query('select claim_writing_grade($1,$2,$3)',[denied,alice,token]));
await assert.rejects(db.query("insert into writing_attempts(id,user_id,task_type,topic,essay_text) values($1,$2,'Task 2','X','X')",['99999999-9999-4999-8999-999999999999',bob]));
await db.exec('reset role');
assert.deepEqual((await db.query("select * from essays where id='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa'")).rows,historical);
await db.close();
console.log('Writing SQL checks passed: recovery, revision conflict, fixed deadline, ownership/RLS, atomic quota, idempotent result/refund, ambiguous failure, mock save-before-advance, untouched history.');

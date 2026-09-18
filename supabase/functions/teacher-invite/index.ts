import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { serviceClient } from '../_shared/quota.ts';
import { isRecord, json, preflight } from '../_shared/http.ts';

// Public endpoint: only the minimum invite metadata is returned.
serve(async req => {
  const early=preflight(req); if (early) return early;
  try {
    const body:unknown=await req.json();
    if (!isRecord(body) || typeof body.code!=='string' || !/^[a-f0-9]{32}$/.test(body.code)) return json(req,{error:'Invalid invite'},400);
    const db=serviceClient();
    const {data:t,error}=await db.from('teacher_tests').select('id,teacher_id,type,title,description,settings,published_at,invite_code')
      .eq('invite_code',body.code).not('published_at','is',null).maybeSingle();
    if (error) return json(req,{error:'Invite temporarily unavailable'},503);
    if (!t) return json(req,{error:'Invite not found'},404);
    const {data:p}=await db.from('profiles').select('full_name').eq('user_id',t.teacher_id).maybeSingle();
    const s=t.settings as Record<string,unknown>;
    const now=Date.now();
    const state=s.startsAt && Date.parse(String(s.startsAt))>now?'scheduled':s.deadline && Date.parse(String(s.deadline))<now?'finished':'active';
    return json(req,{id:t.id,type:t.type,title:t.title,description:t.description,settings:{
      timeLimit:s.timeLimit,attempts:s.attempts,startsAt:s.startsAt,deadline:s.deadline },
      teacherName:p?.full_name||'Scorify Teacher',state });
  } catch { return json(req,{error:'Invite temporarily unavailable'},503); }
});

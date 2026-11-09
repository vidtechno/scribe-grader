import { supabase } from '@/integrations/supabase/client';
import { DraftConflict, type SaveReply, type WritingDraft } from './writing-drafts';

// Narrow RPC boundary for the accompanying, not-yet-deployed migration.
export async function writingRpc(name: string, args: Record<string, unknown>) {
  const { data, error } = await supabase.rpc(name as never, args as never);
  if (error) throw new Error(error.code === 'PGRST202' ? 'writing.setup' :
    error.code === '42501' || error.code === 'PGRST301' ? 'writing.session' : 'writing.saveError');
  return data as unknown as Record<string, any>;
}
export function fromServer(row: Record<string, any>): WritingDraft {
  return { id: row.id, userId: row.user_id, mockId: row.mock_id, task: row.task_type,
    topic: row.topic, text: row.essay_text, startedAt: row.started_at ? Date.parse(row.started_at) : null,
    deadline: row.deadline_at ? Date.parse(row.deadline_at) : null,
    updatedAt: Date.parse(row.updated_at), version: row.revision, serverVersion: row.revision,
    phase: row.state === 'grading' || row.state === 'review_required' ? 'submitting' :
      row.deadline_at && Date.parse(row.deadline_at) <= Date.now() ? 'expired' : 'writing' };
}
export async function loadWritingAttempt(id: string, userId: string, mockId: string | null = null, task?: string) {
  // All reads include ownership in addition to RLS.
  let query = supabase.from('writing_attempts' as never).select('*').eq('user_id', userId);
  query = mockId ? query.eq('mock_id', mockId).eq('task_type', task!) : query.eq('id', id).is('mock_id', null);
  const { data, error } = await query.maybeSingle();
  if (error) throw new Error(error.code === 'PGRST205' ? 'writing.setup' : 'writing.saveError');
  return data as Record<string, any> | null;
}
export async function saveWritingAttempt(d: WritingDraft, finishMock = false): Promise<SaveReply> {
  const session = await supabase.auth.getUser();
  if (!session.data.user || session.data.user.id !== d.userId) throw new Error('writing.session');
  const result = await writingRpc('save_writing_attempt', {
    _id: d.id, _mock_id: d.mockId, _task: d.task, _topic: d.topic, _text: d.text,
    _started_at: d.startedAt ? new Date(d.startedAt).toISOString() : null,
    _deadline_at: d.deadline ? new Date(d.deadline).toISOString() : null,
    _expected_revision: d.serverVersion, _finish_mock: finishMock,
  });
  if (result.conflict) {
    const remote = fromServer(result.attempt);
    if (finishMock) throw new DraftConflict(remote);
    return { ok: false, remote };
  }
  const saved = fromServer(result.attempt);
  return { ok: true, version: saved.serverVersion, deadline: saved.deadline, startedAt: saved.startedAt };
}

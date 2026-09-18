import { supabase } from '@/integrations/supabase/client';

export type AssessmentType = 'grammar' | 'writing_task_1' | 'writing_task_2';
export type Question = { text:string; options:string[]; correct:number; explanation?:string; topic?:string };
export type Settings = { timeLimit:number; attempts:number; startsAt?:string|null; deadline?:string|null;
  questionOrder:'fixed'|'random'; optionOrder:'fixed'|'random'; resultVisibility:'immediate'|'after_deadline'|'hidden';
  answerVisibility:'immediate'|'after_deadline'|'never'; late:'allow'|'block'; resume:'allow'|'block'; passScore?:number|null };
export type Test = { id:string; teacher_id?:string; title:string; type:AssessmentType; description:string; prompt?:string;
  teacherName?:string;
  questions?:Question[]; settings:Settings; invite_code?:string|null; inviteCode?:string|null;
  published_at?:string|null; publishedAt?:string|null; first_started_at?:string|null; firstStartedAt?:string|null;
  created_at?:string; createdAt?:string; state?:string };
export type Attempt = { id:string; test_id:string; student_id?:string; attempt_number:number; started_at:string;
  submitted_at:string|null; grade_status:string; score:number|null; test?:Test|null };
export const defaultSettings:Settings = { timeLimit:30,attempts:1,questionOrder:'fixed',optionOrder:'fixed',
  resultVisibility:'immediate',answerVisibility:'never',late:'block',resume:'allow' };
export const typeName:Record<AssessmentType,string> = { grammar:'Grammar',writing_task_1:'IELTS Writing Task 1',writing_task_2:'IELTS Writing Task 2' };

export async function teacherApi<T>(action:string, payload:Record<string,unknown> = {}):Promise<T> {
  const {data,error}=await supabase.functions.invoke(action==='invite'?'teacher-invite':'teacher-mode',{body:{action,...payload}});
  if (error) {
    const response = error.context as Response | undefined;
    if (response?.json) {
      try { const message=await response.json(); throw new Error(message.error ?? error.message); } catch (e) { if (e instanceof Error && e.message!==error.message) throw e; }
    }
    throw new Error(error.message);
  }
  if (data?.error) throw new Error(data.error);
  return data as T;
}

export function inviteUrl(code:string) { return `${window.location.origin}/t/${code}`; }
export function formatDeadline(value?:string|null) { return value ? new Date(value).toLocaleString() : 'No deadline'; }

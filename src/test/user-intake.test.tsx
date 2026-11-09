import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { UserIntakeGate, UserIntakeModal } from '@/components/UserIntake';
import { intakeError, intakeSafeRoute, intakeSnoozed, normalizePhone, snoozeIntake, type IntakeAnswers } from '@/lib/user-intake';
const mock = vi.hoisted(() => ({ owner:'alice', getUser:vi.fn(), rpc:vi.fn(), read:vi.fn(), later:vi.fn(), done:vi.fn() }));
vi.mock('@/hooks/useAuth',()=>({ useAuth:()=>({user:{id:mock.owner,created_at:'2024-01-01',user_metadata:{}},profile:{phone:null},loading:false,refreshProfile:async()=>{}}) }));
vi.mock('@/hooks/useDevices',()=>({useDevices:()=>({status:'ready'})}));
vi.mock('@/i18n',()=>({useT:()=>({t:(key:string)=>key})}));
vi.mock('@/integrations/supabase/client',()=>({supabase:{
  auth:{getUser:(...args:unknown[])=>mock.getUser(...args)}, rpc:(...args:unknown[])=>mock.rpc(...args),
  from:()=>({select:()=>({eq:()=>({maybeSingle:()=>mock.read()})})}),
}}));
const blank: IntakeAnswers = {phone:'',telegram:'',noUsername:false,age:'',source:''};
const provider=(child:React.ReactNode,path='/dashboard')=><QueryClientProvider client={new QueryClient({defaultOptions:{queries:{retry:false}}})}><MemoryRouter initialEntries={[path]}>{child}</MemoryRouter></QueryClientProvider>;
function show() { render(provider(<UserIntakeModal userId="alice" onLater={mock.later} onDone={mock.done} />)); }
function next() { fireEvent.click(screen.getByRole('button',{name:'intake.next'})); }
function contactsSkipped() { fireEvent.click(screen.getByRole('button',{name:'intake.skip'}));fireEvent.click(screen.getByRole('button',{name:'intake.skip'})); }
describe('Intake survey',()=>{
 beforeEach(()=>{localStorage.clear();vi.clearAllMocks();mock.owner='alice';mock.getUser.mockResolvedValue({data:{user:{id:'alice'}}});mock.read.mockResolvedValue({data:null,error:null});mock.rpc.mockResolvedValue({data:{user_id:'alice',completed_at:new Date().toISOString()},error:null});});
 afterEach(cleanup);
 it('normalizes optional contacts and rejects incomplete Uzbek numbers',()=>{
   expect(normalizePhone('90 123 45 67')).toBe('+998901234567');
   expect(intakeError(0,{...blank,phone:'+998 90 12'})).toBe('intake.phoneError');
   expect(intakeError(0,blank)).toBeNull();expect(intakeError(1,blank)).toBeNull();
   expect(intakeError(1,{...blank,telegram:'@username'})).toBeNull();
   expect(intakeError(1,{...blank,telegram:'https://evil.test'})).toBe('intake.telegramError');
 });
 it('asks one question at a time; source has no preselected answer',()=>{
   show();expect(screen.getByRole('textbox',{name:'intake.phone'})).toBeVisible();expect(screen.queryByRole('combobox')).toBeNull();
   contactsSkipped();fireEvent.click(screen.getByRole('radio',{name:'intake.age.19_24'}));next();
   expect(screen.getByRole('combobox',{name:'intake.source'})).toHaveValue('');
   fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));expect(screen.getByRole('alert')).toHaveTextContent('intake.sourceError');expect(mock.rpc).not.toHaveBeenCalled();
 });
 it('skips contacts and saves all answers in exactly one call without a request-body user ID',async()=>{
   show();contactsSkipped();fireEvent.click(screen.getByRole('radio',{name:'intake.age.16_18'}));next();
   fireEvent.change(screen.getByRole('combobox'),{target:{value:'friend'}});
   fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));
   await waitFor(()=>expect(mock.done).toHaveBeenCalledTimes(1));
   expect(mock.rpc).toHaveBeenCalledTimes(1);expect(mock.rpc).toHaveBeenCalledWith('complete_user_intake',{
     _phone:null,_telegram_username:null,_no_telegram_username:false,_age_range:'16_18',_discovery_source:'friend',
   });
 });
 it('remembers the no-username choice without confusing it with skipping',async()=>{
   show();fireEvent.click(screen.getByRole('button',{name:'intake.skip'}));
   fireEvent.change(screen.getByRole('textbox',{name:'intake.telegram'}),{target:{value:'@example_user'}});
   fireEvent.click(screen.getByRole('checkbox',{name:'intake.noUsername'}));
   expect(screen.getByRole('textbox',{name:'intake.telegram'})).toBeDisabled();next();
   fireEvent.click(screen.getByRole('radio',{name:'intake.age.35plus'}));next();fireEvent.change(screen.getByRole('combobox'),{target:{value:'search'}});
   fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));await waitFor(()=>expect(mock.done).toHaveBeenCalled());
   expect(mock.rpc.mock.calls[0][1]._no_telegram_username).toBe(true);expect(mock.rpc.mock.calls[0][1]._telegram_username).toBeNull();
 });
 it('retains answers after save failure and supports retry',async()=>{
   show();contactsSkipped();fireEvent.click(screen.getByRole('radio',{name:'intake.age.under16'}));next();
   fireEvent.change(screen.getByRole('combobox'),{target:{value:'instagram'}});mock.rpc.mockResolvedValueOnce({data:null,error:{message:'offline'}});
   fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));await screen.findByRole('alert');
   expect(screen.getByRole('combobox')).toHaveValue('instagram');expect(mock.done).not.toHaveBeenCalled();
   fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));await waitFor(()=>expect(mock.done).toHaveBeenCalledTimes(1));
 });
 it('does not submit personal data when the account changes',async()=>{
   show();contactsSkipped();fireEvent.click(screen.getByRole('radio',{name:'intake.age.25_34'}));next();fireEvent.change(screen.getByRole('combobox'),{target:{value:'telegram'}});
   mock.getUser.mockResolvedValue({data:{user:{id:'bob'}}});fireEvent.click(screen.getByRole('button',{name:'intake.finish'}));await screen.findByRole('alert');expect(mock.rpc).not.toHaveBeenCalled();
 });
 it('lets people defer without a database write and stores no contact details locally',()=>{
   show();fireEvent.change(screen.getByRole('textbox',{name:'intake.phone'}),{target:{value:'+998901234567'}});fireEvent.click(screen.getByRole('button',{name:'intake.later'}));
   expect(mock.later).toHaveBeenCalledOnce();expect(mock.rpc).not.toHaveBeenCalled();snoozeIntake('alice');
   expect(intakeSnoozed('alice')).toBe(true);expect(intakeSnoozed('bob')).toBe(false);expect(JSON.stringify(localStorage)).not.toContain('901234567');
 });
 it('shows for existing accounts, not just freshly-created ones',async()=>{
   render(provider(<UserIntakeGate onBusyChange={()=>{}}/>));expect(await screen.findByText('intake.title')).toBeVisible();
 });
 it('never asks again after a confirmed response',async()=>{
   mock.read.mockResolvedValue({data:{user_id:'alice',completed_at:new Date().toISOString()},error:null});render(provider(<UserIntakeGate onBusyChange={()=>{}}/>));
   await act(async()=>{});expect(screen.queryByText('intake.title')).not.toBeInTheDocument();
 });
 it('does not interrupt active lessons, exams, recording or authentication',()=>{
   for(const path of ['/exam','/mock-test/exam/123','/learn/lesson/u1','/speaking','/auth/callback','/tg'])expect(intakeSafeRoute(path)).toBe(false);
   render(provider(<UserIntakeGate onBusyChange={()=>{}}/>,'/exam'));expect(mock.read).not.toHaveBeenCalled();
 });
});

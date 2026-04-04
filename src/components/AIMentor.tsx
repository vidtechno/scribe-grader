import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PricingModal } from '@/components/PricingModal';
import {
  MessageCircle, X, Send, Loader2, Plus, Trash2, Edit3,
  Check, Crown, ChevronLeft, Bot, User, Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface Chat {
  id: string;
  title: string;
  created_at: string;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

interface AIMentorProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

export function AIMentor({ externalOpen, onExternalOpenChange }: AIMentorProps = {}) {
  const { user } = useAuth();
  const { subscription } = useSubscription();
  const planType = subscription?.plan_type || 'free';

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (externalOpen) {
      setIsOpen(true);
      onExternalOpenChange?.(false);
    }
  }, [externalOpen]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [editingChatId, setEditingChatId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [showPricing, setShowPricing] = useState(false);
  const [dailyUsage, setDailyUsage] = useState({ used: 0, limit: planType === 'pro_plus' ? 30 : 10 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const fetchChats = useCallback(async () => {
    if (!user) return;
    const { data } = await supabase
      .from('mentor_chats')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });
    setChats((data as any[]) || []);
  }, [user]);

  const fetchMessages = useCallback(async (chatId: string) => {
    const { data } = await supabase
      .from('mentor_messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });
    setMessages((data as any[]) || []);
  }, []);

  const fetchUsage = useCallback(async () => {
    if (!user) return;
    const today = new Date().toISOString().split('T')[0];
    const { data } = await supabase
      .from('mentor_daily_usage')
      .select('messages_used')
      .eq('user_id', user.id)
      .eq('date', today)
      .single();
    const limit = planType === 'pro_plus' ? 30 : 10;
    setDailyUsage({ used: (data as any)?.messages_used || 0, limit });
  }, [user, planType]);

  useEffect(() => {
    if (isOpen && user) {
      fetchChats();
      fetchUsage();
    }
  }, [isOpen, user, fetchChats, fetchUsage]);

  useEffect(() => {
    if (activeChat) fetchMessages(activeChat.id);
  }, [activeChat, fetchMessages]);

  const createNewChat = async () => {
    if (!user) return;
    const { data, error } = await supabase
      .from('mentor_chats')
      .insert({ user_id: user.id, title: 'New Chat' })
      .select()
      .single();
    if (error) { toast.error('Failed to create chat'); return; }
    const chat = data as any as Chat;
    setChats(prev => [chat, ...prev]);
    setActiveChat(chat);
    setMessages([]);
    setShowHistory(false);
  };

  const deleteChat = async (chatId: string) => {
    await supabase.from('mentor_chats').delete().eq('id', chatId);
    setChats(prev => prev.filter(c => c.id !== chatId));
    if (activeChat?.id === chatId) {
      setActiveChat(null);
      setMessages([]);
    }
    toast.success('Chat deleted');
  };

  const renameChat = async (chatId: string) => {
    if (!editTitle.trim()) return;
    await supabase.from('mentor_chats').update({ title: editTitle.trim() }).eq('id', chatId);
    setChats(prev => prev.map(c => c.id === chatId ? { ...c, title: editTitle.trim() } : c));
    if (activeChat?.id === chatId) setActiveChat(prev => prev ? { ...prev, title: editTitle.trim() } : null);
    setEditingChatId(null);
  };

  const sendMessage = async () => {
    if (!input.trim() || sending || !user) return;
    if (dailyUsage.used >= dailyUsage.limit) {
      toast.error(`Daily limit reached (${dailyUsage.limit} messages)`);
      return;
    }

    let chatId = activeChat?.id;

    if (!chatId) {
      const { data, error } = await supabase
        .from('mentor_chats')
        .insert({ user_id: user.id, title: input.trim().slice(0, 40) })
        .select().single();
      if (error) { toast.error('Failed to create chat'); return; }
      const chat = data as any as Chat;
      setChats(prev => [chat, ...prev]);
      setActiveChat(chat);
      chatId = chat.id;
    }

    const userMessage = input.trim();
    setInput('');
    setSending(true);

    const tempUserMsg: Message = { id: 'temp-user', role: 'user', content: userMessage, created_at: new Date().toISOString() };
    setMessages(prev => [...prev, tempUserMsg]);

    const { data: savedMsg } = await supabase
      .from('mentor_messages')
      .insert({ chat_id: chatId, user_id: user.id, role: 'user', content: userMessage })
      .select().single();

    if (savedMsg) {
      setMessages(prev => prev.map(m => m.id === 'temp-user' ? (savedMsg as any as Message) : m));
    }

    const essayLimit = planType === 'pro_plus' ? 5 : 3;
    const { data: essays } = await supabase
      .from('essays')
      .select('task_type, topic, score, feedback')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(essayLimit);

    const essayContext = (essays || []).map((e: any) => ({
      task_type: e.task_type,
      topic: e.topic,
      score: e.score,
      feedback_summary: e.feedback ? `TA:${e.feedback.taskAchievement?.score}, CC:${e.feedback.coherenceCohesion?.score}, LR:${e.feedback.lexicalResource?.score}, GR:${e.feedback.grammaticalRange?.score}` : null,
    }));

    try {
      const { data: result, error } = await supabase.functions.invoke('ai-mentor', {
        body: { message: userMessage, chatId, essayContext },
      });

      if (error) throw error;
      if (result?.error) {
        toast.error(result.error);
        setSending(false);
        return;
      }

      const assistantMsg: Message = { id: 'temp-assistant', role: 'assistant', content: result.reply, created_at: new Date().toISOString() };

      const { data: savedAssistant } = await supabase
        .from('mentor_messages')
        .insert({ chat_id: chatId, user_id: user.id, role: 'assistant', content: result.reply })
        .select().single();

      setMessages(prev => [...prev, savedAssistant ? (savedAssistant as any as Message) : assistantMsg]);
      setDailyUsage(prev => ({ ...prev, used: result.usage || prev.used + 1 }));

      if (messages.length <= 1 && activeChat?.title === 'New Chat') {
        const autoTitle = userMessage.slice(0, 40);
        await supabase.from('mentor_chats').update({ title: autoTitle }).eq('id', chatId);
        setChats(prev => prev.map(c => c.id === chatId ? { ...c, title: autoTitle } : c));
        setActiveChat(prev => prev ? { ...prev, title: autoTitle } : null);
      }
    } catch (err: any) {
      toast.error(err.message || 'Failed to get response');
    } finally {
      setSending(false);
    }
  };

  if (!user) return null;

  const isFree = planType === 'free';

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Bot className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 md:bottom-6 right-2 md:right-6 z-50 w-[380px] max-w-[calc(100vw-1rem)] md:max-w-[calc(100vw-3rem)] h-[calc(100vh-6rem)] md:h-[560px] max-h-[calc(100vh-6rem)] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <div className="flex items-center gap-2">
                {(activeChat || showHistory) && (
                  <button onClick={() => { setActiveChat(null); setShowHistory(false); setMessages([]); }} className="hover:opacity-80">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}
                <Bot className="h-5 w-5" />
                <span className="font-semibold text-sm">
                  {activeChat ? activeChat.title : 'AI Mentor'}
                </span>
              </div>
              <div className="flex items-center gap-1">
                {!isFree && (
                  <span className="text-xs opacity-80 mr-2">{dailyUsage.used}/{dailyUsage.limit}</span>
                )}
                <button onClick={() => setIsOpen(false)} className="hover:opacity-80 p-1">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {isFree ? (
              <div className="flex-1 flex items-center justify-center p-6 text-center">
                <div>
                  <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Unlock AI Mentor</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized IELTS coaching based on your essay history. Available for Pro and Pro Plus subscribers.
                  </p>
                  <Button variant="glow" size="sm" onClick={() => { setShowPricing(true); setIsOpen(false); }}>
                    <Sparkles className="h-4 w-4 mr-1" /> Upgrade Now
                  </Button>
                </div>
              </div>
            ) : !activeChat && !showHistory ? (
              <div className="flex-1 flex flex-col p-4 gap-3">
                <p className="text-sm text-muted-foreground text-center mb-2">
                  Your personal IELTS writing coach 🎓
                </p>
                <Button onClick={createNewChat} className="gap-2 w-full" variant="glow">
                  <Plus className="h-4 w-4" /> New Conversation
                </Button>
                <Button onClick={() => setShowHistory(true)} variant="outline" className="gap-2 w-full">
                  <MessageCircle className="h-4 w-4" /> Chat History
                </Button>
                <div className="mt-4 space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Quick Actions:</p>
                  {[
                    'How can I improve my Task 2 score? 📈',
                    'Give me a daily homework assignment 📝',
                    'What are my most common mistakes? 🔍',
                    'Tips for time management in IELTS ⏰',
                  ].map(q => (
                    <button
                      key={q}
                      onClick={async () => {
                        await createNewChat();
                        setInput(q);
                      }}
                      className="w-full text-left text-xs p-2.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : showHistory ? (
              <ScrollArea className="flex-1 p-3">
                {chats.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No conversations yet</p>
                ) : (
                  <div className="space-y-1">
                    {chats.map(chat => (
                      <div key={chat.id} className="flex items-center gap-2 group">
                        {editingChatId === chat.id ? (
                          <div className="flex-1 flex items-center gap-1">
                            <Input
                              value={editTitle}
                              onChange={e => setEditTitle(e.target.value)}
                              className="h-8 text-xs"
                              autoFocus
                              onKeyDown={e => e.key === 'Enter' && renameChat(chat.id)}
                            />
                            <button onClick={() => renameChat(chat.id)} className="p-1 text-primary"><Check className="h-3.5 w-3.5" /></button>
                            <button onClick={() => setEditingChatId(null)} className="p-1 text-muted-foreground"><X className="h-3.5 w-3.5" /></button>
                          </div>
                        ) : (
                          <>
                            <button
                              onClick={() => { setActiveChat(chat); setShowHistory(false); }}
                              className="flex-1 text-left text-sm p-2 rounded-lg hover:bg-secondary/50 transition-colors truncate"
                            >
                              {chat.title}
                            </button>
                            <div className="hidden group-hover:flex items-center gap-0.5">
                              <button onClick={() => { setEditingChatId(chat.id); setEditTitle(chat.title); }} className="p-1 text-muted-foreground hover:text-foreground">
                                <Edit3 className="h-3 w-3" />
                              </button>
                              <button onClick={() => deleteChat(chat.id)} className="p-1 text-muted-foreground hover:text-destructive">
                                <Trash2 className="h-3 w-3" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            ) : (
              <>
                <ScrollArea className="flex-1 p-3">
                  {messages.length === 0 && (
                    <div className="text-center py-8">
                      <Bot className="h-10 w-10 text-primary mx-auto mb-3 opacity-60" />
                      <p className="text-sm text-muted-foreground">Hi! 👋 I'm your IELTS Writing Mentor.<br />Ask me anything about IELTS writing!</p>
                    </div>
                  )}
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-2 mb-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.role === 'assistant' && (
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Bot className="h-3.5 w-3.5 text-primary" />
                        </div>
                      )}
                      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tr-md'
                          : 'bg-secondary/70 text-foreground rounded-tl-md'
                      }`}>
                        {msg.content.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? 'mt-1.5' : ''}>{line}</p>
                        ))}
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <User className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </div>
                  ))}
                  {sending && (
                    <div className="flex gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="bg-secondary/70 rounded-2xl rounded-tl-md px-4 py-3">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </ScrollArea>

                <div className="p-3 border-t border-border">
                  <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
                    <Input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder="Ask your IELTS mentor..."
                      className="flex-1 text-sm"
                      disabled={sending}
                    />
                    <Button type="submit" size="icon" disabled={sending || !input.trim()} className="shrink-0">
                      {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                  </form>
                  {dailyUsage.used >= dailyUsage.limit && (
                    <p className="text-xs text-destructive mt-2 text-center">
                      Daily message limit reached ({dailyUsage.limit}). Come back tomorrow!
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </>
  );
}

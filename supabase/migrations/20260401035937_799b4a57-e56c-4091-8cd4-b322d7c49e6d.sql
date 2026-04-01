
-- Mentor chats table
CREATE TABLE public.mentor_chats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL DEFAULT 'New Chat',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.mentor_chats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own chats" ON public.mentor_chats FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own chats" ON public.mentor_chats FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own chats" ON public.mentor_chats FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own chats" ON public.mentor_chats FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all chats" ON public.mentor_chats FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'));

-- Mentor messages table
CREATE TABLE public.mentor_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chat_id UUID NOT NULL REFERENCES public.mentor_chats(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.mentor_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own messages" ON public.mentor_messages FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own messages" ON public.mentor_messages FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Daily usage tracking for mentor
CREATE TABLE public.mentor_daily_usage (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  messages_used INTEGER NOT NULL DEFAULT 0,
  UNIQUE (user_id, date)
);

ALTER TABLE public.mentor_daily_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own usage" ON public.mentor_daily_usage FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own usage" ON public.mentor_daily_usage FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own usage" ON public.mentor_daily_usage FOR UPDATE TO authenticated USING (auth.uid() = user_id);

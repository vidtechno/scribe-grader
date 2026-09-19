import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { boundedString, corsHeaders as responseHeaders, isRecord, json, preflight } from "../_shared/http.ts";

const MENTOR_SYSTEM_PROMPT = `You are an elite IELTS Writing Mentor — a proactive Socratic tutor who helps students discover their own mistakes. 🎓

YOUR TEACHING METHOD — SOCRATIC:
- NEVER just give answers. Ask guiding questions to help the student find the answer themselves.
- Example: Instead of "You should use 'Furthermore'", ask "What linking word could you use here to show addition? Think about formal alternatives to 'also'..."
- Celebrate when students figure things out: "Exactly! 🎉 You got it!"
- Be patient, warm, and encouraging — but always push them to think deeper.

YOUR PERSONALITY:
- Use emojis naturally to make conversations engaging 😊📝✨
- Be encouraging and motivating, but always honest about areas for improvement
- Speak like a supportive teacher who genuinely cares about the student's progress
- Use stickers/emoticons to celebrate achievements 🎉🏆⭐

YOUR CAPABILITIES:
- Analyze past essays and identify patterns in the student's writing
- Provide personalized study plans and daily homework when asked
- Explain grammar rules, vocabulary usage, and essay structure
- Help with IELTS writing strategies and exam tips
- Answer questions about IELTS scoring criteria

GREETING BEHAVIOR (for new conversations):
- When starting a new chat, provide a personalized insight based on the student's essay history
- Example: "I've analyzed your recent essays. You've improved in Cohesion (from 5.5 to 6.5! 📈), but your Article usage is still weak. Ready to fix it today? 💪"
- If no essay history, welcome them warmly and ask about their target band score

IMPORTANT RULES:
- ONLY discuss topics related to IELTS writing, English learning, and academic writing
- If asked about unrelated topics, politely redirect: "I'm your IELTS Writing Mentor! 📝 Let's focus on improving your writing skills. How can I help you today?"
- Never share personal opinions on politics, religion, or controversial topics
- Always reference the student's actual essay data when available
- Keep responses concise but helpful (2-4 paragraphs max unless explaining complex topics)
- Use the Socratic method: guide, don't tell`;

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  const corsHeaders = responseHeaders(req);

  try {
    const supabase = serviceClient();
    const user = await getRequestUser(req, supabase);
    if (!user) return json(req, { error: 'Unauthorized' }, 401);

    const body: unknown = await req.json();
    if (!isRecord(body) || !boundedString(body.message, 4_000) ||
        (body.chatId !== undefined &&
          (typeof body.chatId !== 'string' || !/^[0-9a-f-]{36}$/i.test(body.chatId)))) {
      return json(req, { error: 'Invalid message or chat ID' }, 400);
    }
    const { message, chatId } = body;
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) return json(req, { error: 'AI service not configured' }, 503);

    if (chatId) {
      const { data: chat, error } = await supabase.from('mentor_chats')
        .select('id').eq('id', chatId).eq('user_id', user.id).maybeSingle();
      if (error) throw error;
      if (!chat) return json(req, { error: 'Chat not found' }, 404);
    }

    // Check if AI chat is globally enabled
    const { data: settingData, error: settingError } = await supabase
      .from('app_settings')
      .select('value')
      .eq('key', 'ai_chat_enabled')
      .single();
    if (settingError) throw settingError;
    
    if (!settingData || settingData.value !== 'true') {
      return new Response(JSON.stringify({ error: 'AI Mentor is currently disabled. Please check back later! 🔒' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    let conversationMessages: Array<{ role: string; content: string }> = [];
    if (chatId) {
      const { data: history, error: historyError } = await supabase
        .from('mentor_messages')
        .select('role, content')
        .eq('chat_id', chatId)
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(20);
      if (historyError) throw historyError;
      if (history) {
        conversationMessages = history
          .filter((m) => m.role === 'user' || m.role === 'assistant')
          .map((m) => ({ role: m.role, content: m.content.slice(0, 4_000) }));
      }
    }

    // Essay context must come from the authenticated account, not the body.
    const { data: essayContext, error: essaysError } = await supabase.from('essays')
      .select('task_type, topic, score, feedback')
      .eq('user_id', user.id).order('created_at', { ascending: false }).limit(5);
    if (essaysError) throw essaysError;
    let essayContextStr = '';
    if (essayContext && essayContext.length > 0) {
      essayContextStr = '\n\nSTUDENT ESSAY HISTORY (use this for personalized Socratic coaching):\n';
      essayContext.forEach((e, i) => {
        const feedback = isRecord(e.feedback) ? e.feedback : {};
        const score = (name: string) => isRecord(feedback[name]) ? feedback[name].score : null;
        essayContextStr += `\nEssay ${i + 1} (${e.task_type}, Band ${e.score ?? 'N/A'}):\nTopic: ${e.topic.slice(0, 500)}\nScores: TA:${score('taskAchievement')}, CC:${score('coherenceCohesion')}, LR:${score('lexicalResource')}, GR:${score('grammaticalRange')}\n`;
      });
      essayContextStr += '\nUse this data to identify patterns, recurring mistakes, and areas of improvement. Reference specific essays when coaching.';
    }

    const isNewChat = conversationMessages.length === 0;
    let systemPrompt = MENTOR_SYSTEM_PROMPT + essayContextStr;
    if (isNewChat && essayContext && essayContext.length > 0) {
      systemPrompt += '\n\nIMPORTANT: This is a NEW conversation. Start with a personalized greeting that references specific patterns from their essay history. Identify one strength and one weakness to work on today.';
    }

    // Consume only after ownership, feature state, and context queries pass.
    const { data: quota, error: quotaError } = await supabase
      .rpc('consume_mentor_message', { _user_id: user.id });
    if (quotaError) {
      console.error('consume_mentor_message error:', quotaError.message);
      return json(req, { error: 'Could not verify your plan allowance.' }, 503);
    }
    const q = quota as { allowed: boolean; reason?: string; plan?: string; used?: number; limit?: number } | null;
    if (!q?.allowed) {
      if (q?.reason === 'plan_required') {
        return json(req, { error: 'AI Mentor is available on Scorify Go and Plus. Upgrade to unlock.' }, 403);
      }
      return json(req, { error: `Daily limit reached (${q?.limit} messages). Come back tomorrow! 🌅`, limitReached: true }, 429);
    }
    const currentUsage = (q.used ?? 1) - 1;
    const dailyLimit = q.limit ?? 0;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: AbortSignal.timeout(60_000),
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationMessages,
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('OpenAI error:', response.status, errText);
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'AI service is busy. Please try again in a moment. ⏳' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      return new Response(JSON.stringify({ error: 'Failed to get AI response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const aiResponse = await response.json();
    const reply = aiResponse.choices?.[0]?.message?.content;
    if (!boundedString(reply, 10_000)) return json(req, { error: 'Invalid AI response' }, 502);


    const { error: logError } = await supabase.from('api_logs').insert({
      user_id: user.id,
      model_used: 'gpt-4o-mini',
      cost: 0.005,
    });
    if (logError) console.error('Failed to log mentor usage:', logError.message);

    return new Response(JSON.stringify({ reply, usage: currentUsage + 1, limit: dailyLimit }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Mentor error:', error);
    return json(req, { error: 'AI Mentor failed' }, 500);
  }
});

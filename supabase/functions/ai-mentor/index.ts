import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const MENTOR_SYSTEM_PROMPT = `You are an expert IELTS Writing Mentor — a professional, friendly, and encouraging tutor who helps students improve their writing skills. 🎓

Your personality:
- Use emojis naturally to make conversations engaging 😊📝✨
- Be encouraging and motivating, but always honest about areas for improvement
- Speak like a supportive teacher who genuinely cares about the student's progress
- Use stickers/emoticons to celebrate achievements 🎉🏆⭐

Your capabilities:
- Analyze past essays and identify patterns in the student's writing
- Provide personalized study plans and daily homework when asked
- Explain grammar rules, vocabulary usage, and essay structure
- Help with IELTS writing strategies and exam tips
- Answer questions about IELTS scoring criteria

IMPORTANT RULES:
- ONLY discuss topics related to IELTS writing, English learning, and academic writing
- If asked about unrelated topics, politely redirect: "I'm your IELTS Writing Mentor! 📝 Let's focus on improving your writing skills. How can I help you today?"
- Never share personal opinions on politics, religion, or controversial topics
- Always reference the student's actual essay data when available
- Keep responses concise but helpful (2-4 paragraphs max unless explaining complex topics)`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, chatId, essayContext } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Auth check
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Check subscription & daily limits
    const { data: subData } = await supabase
      .from('subscriptions').select('plan_type').eq('user_id', user.id).single();
    const planType = subData?.plan_type || 'free';

    if (planType === 'free') {
      return new Response(JSON.stringify({ error: 'AI Mentor is available for Pro and Pro Plus subscribers. Upgrade to unlock! 🔓' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const dailyLimit = planType === 'pro_plus' ? 50 : 10;
    const today = new Date().toISOString().split('T')[0];

    const { data: usageData } = await supabase
      .from('mentor_daily_usage')
      .select('messages_used')
      .eq('user_id', user.id)
      .eq('date', today)
      .single();

    const currentUsage = usageData?.messages_used || 0;
    if (currentUsage >= dailyLimit) {
      return new Response(JSON.stringify({ 
        error: `Daily limit reached (${dailyLimit} messages). ${planType === 'pro' ? 'Upgrade to Pro Plus for 50 messages/day! ⚡' : 'Come back tomorrow! 🌅'}`,
        limitReached: true 
      }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Fetch conversation history
    let conversationMessages: Array<{ role: string; content: string }> = [];
    if (chatId) {
      const { data: history } = await supabase
        .from('mentor_messages')
        .select('role, content')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true })
        .limit(20);
      if (history) {
        conversationMessages = history.map(m => ({ role: m.role, content: m.content }));
      }
    }

    // Build essay context
    let essayContextStr = '';
    if (essayContext && essayContext.length > 0) {
      essayContextStr = '\n\nSTUDENT ESSAY HISTORY (for personalized feedback):\n';
      essayContext.forEach((e: any, i: number) => {
        essayContextStr += `\nEssay ${i + 1} (${e.task_type}, Band ${e.score || 'N/A'}):\nTopic: ${e.topic}\nFeedback summary: ${e.feedback_summary || 'N/A'}\n`;
      });
    }

    const systemPrompt = MENTOR_SYSTEM_PROMPT + essayContextStr;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
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
    const reply = aiResponse.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Update daily usage
    if (usageData) {
      await supabase.from('mentor_daily_usage')
        .update({ messages_used: currentUsage + 1 })
        .eq('user_id', user.id)
        .eq('date', today);
    } else {
      await supabase.from('mentor_daily_usage')
        .insert({ user_id: user.id, date: today, messages_used: 1 });
    }

    // Log cost
    await supabase.from('api_logs').insert({
      user_id: user.id,
      model_used: 'gpt-4o-mini',
      cost: 0.005,
    });

    return new Response(JSON.stringify({ reply, usage: currentUsage + 1, limit: dailyLimit }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error) {
    console.error('Mentor error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SPEAKING_SYSTEM_PROMPT = `You are an expert IELTS Speaking examiner. You will receive a transcript of a candidate's spoken response to an IELTS Speaking topic.

Evaluate the response based on the four official IELTS Speaking criteria and return a JSON object with this EXACT structure:

{
  "overallBand": <number 1-9, can use 0.5 increments>,
  "fluencyCoherence": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "lexicalResource": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "grammaticalRange": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "pronunciation": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "suggestions": ["<suggestion 1>", "<suggestion 2>", "<suggestion 3>"],
  "errorCorrections": [
    { "original": "<what they said>", "corrected": "<correct version>", "explanation": "<why>", "type": "error" }
  ],
  "vocabularyHighlights": [
    { "word": "<good word used>", "context": "<how it was used>", "rating": "good" | "excellent" | "could_improve" }
  ],
  "fluencyNotes": {
    "fillerWords": ["um", "uh"],
    "fillerCount": <number>,
    "averageSentenceLength": <number>,
    "topicDevelopment": "<comment on how well they developed the topic>"
  },
  "sampleAnswer": "<a short model answer paragraph showing how to improve>"
}

Be strict but fair. Base scores on IELTS band descriptors. The transcript may contain transcription errors - evaluate the content and language, not transcription accuracy.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { transcript, topic, part, userId } = await req.json();

    if (!transcript || !topic) {
      return new Response(JSON.stringify({ error: "Missing transcript or topic" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) {
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const userPrompt = `IELTS Speaking ${part || 'Part 2'} Topic: "${topic}"

Candidate's transcript:
"""
${transcript}
"""

Please evaluate this speaking response according to IELTS Speaking band descriptors. Return ONLY the JSON object.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SPEAKING_SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI error:", errText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const aiData = await response.json();
    const feedback = JSON.parse(aiData.choices[0].message.content);

    // Ensure arrays exist
    feedback.strengths = feedback.strengths || [];
    feedback.suggestions = feedback.suggestions || [];
    feedback.errorCorrections = feedback.errorCorrections || [];
    feedback.vocabularyHighlights = feedback.vocabularyHighlights || [];

    // Log API usage
    if (userId) {
      try {
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseKey);
        await supabase.from("api_logs").insert({
          user_id: userId,
          model_used: "Speaking AI",
          cost: 0.005,
        });
      } catch (e) {
        console.error("Failed to log API usage:", e);
      }
    }

    return new Response(JSON.stringify(feedback), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("grade-speaking error:", e);
    return new Response(JSON.stringify({ error: e.message || "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

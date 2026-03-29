import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const systemPrompt = `You are an expert IELTS Writing examiner with years of experience. You will evaluate essays according to the official IELTS Writing band descriptors.

For each essay, you must provide:
1. An overall band score (0-9, can use .5 increments)
2. Individual scores for each criterion (0-9, can use .5 increments):
   - Task Achievement/Response
   - Coherence and Cohesion
   - Lexical Resource
   - Grammatical Range and Accuracy
3. Specific feedback for each criterion
4. 3-5 key strengths of the essay
5. 3-5 specific suggestions for improvement
6. Error corrections: Find ALL grammatical errors, spelling mistakes, incorrect word usage, and awkward phrasing in the essay. For each error:
   - Provide the original wrong text
   - Provide the corrected version
   - Provide a brief explanation of WHY it's wrong (grammar rule, style issue, etc.)
   - Provide a "type" field: either "error" (for mistakes) or "improvement" (for high-band alternatives/style upgrades)
7. Vocabulary Range Analysis: Identify repeated common/basic words and suggest academic high-band synonyms. For each:
   - "word": the repeated basic word
   - "count": how many times it appears
   - "suggestions": array of 2-3 academic synonyms
8. Coherence Check: Analyze paragraph transitions and linking words usage. For each paragraph transition:
   - "location": e.g. "Between paragraph 1 and 2"
   - "status": "strong", "weak", or "missing"
   - "suggestion": recommended linking phrase if weak/missing
9. Sentence Complexity Map: Categorize each sentence by complexity:
   - "sentence": the sentence text (first 80 chars)
   - "type": "simple", "compound", or "complex"

Be accurate, fair, and constructive in your feedback. Base your scoring strictly on the IELTS band descriptors.

You must respond ONLY with a valid JSON object in this exact format:
{
  "overallBand": number,
  "taskAchievement": { "score": number, "feedback": "string" },
  "coherenceCohesion": { "score": number, "feedback": "string" },
  "lexicalResource": { "score": number, "feedback": "string" },
  "grammaticalRange": { "score": number, "feedback": "string" },
  "strengths": ["string"],
  "suggestions": ["string"],
  "errorCorrections": [
    { "original": "wrong text", "corrected": "corrected text", "explanation": "why", "type": "error or improvement" }
  ],
  "vocabularyAnalysis": [
    { "word": "basic word", "count": number, "suggestions": ["synonym1", "synonym2"] }
  ],
  "coherenceCheck": [
    { "location": "Between paragraph X and Y", "status": "strong/weak/missing", "suggestion": "linking phrase" }
  ],
  "sentenceComplexity": [
    { "sentence": "first 80 chars...", "type": "simple/compound/complex" }
  ]
}`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { essay, taskType, topic, planType } = await req.json();

    if (!essay || !taskType || !topic) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: essay, taskType, topic' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Model routing based on plan
    const model = planType === 'pro_plus' ? 'gpt-4o' : 'gpt-4o-mini';
    const cost = planType === 'pro_plus' ? 0.20 : 0.005;

    const userPrompt = `Please evaluate this IELTS ${taskType} essay.

Topic: ${topic}

Essay:
${essay}

Provide your evaluation as a JSON object following the exact format specified. Make sure to:
- Find and list ALL errors in the errorCorrections array
- Include "improvement" type entries for high-band alternatives
- Analyze vocabulary range and find repeated basic words with academic synonyms
- Check coherence between all paragraphs
- Categorize every sentence by complexity (simple/compound/complex)`;

    console.log(`Calling OpenAI (${model}) for essay grading...`);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Failed to get AI response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      return new Response(
        JSON.stringify({ error: 'Invalid AI response' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let gradeResult;
    try {
      gradeResult = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      return new Response(
        JSON.stringify({ error: 'Failed to parse grading result' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!gradeResult.overallBand || !gradeResult.taskAchievement) {
      return new Response(
        JSON.stringify({ error: 'Invalid grading result structure' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Ensure arrays exist
    if (!gradeResult.errorCorrections) gradeResult.errorCorrections = [];
    if (!gradeResult.vocabularyAnalysis) gradeResult.vocabularyAnalysis = [];
    if (!gradeResult.coherenceCheck) gradeResult.coherenceCheck = [];
    if (!gradeResult.sentenceComplexity) gradeResult.sentenceComplexity = [];

    // Log API usage
    try {
      const authHeader = req.headers.get('Authorization');
      if (authHeader) {
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const token = authHeader.replace('Bearer ', '');
        const { data: { user } } = await supabase.auth.getUser(token);
        
        if (user) {
          await supabase.from('api_logs').insert({
            user_id: user.id,
            model_used: model,
            cost: cost,
          });
        }
      }
    } catch (logError) {
      console.error('Failed to log API usage:', logError);
    }

    // Use abstracted model labels
    gradeResult.modelUsed = planType === 'pro_plus' ? 'Elite AI' : 'Standard AI';

    console.log('Essay graded successfully:', gradeResult.overallBand);

    return new Response(
      JSON.stringify(gradeResult),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Grade essay error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

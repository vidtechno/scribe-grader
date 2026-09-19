type Db = { from: (table: string) => any };

type Usage = {
  prompt_tokens?: number;
  completion_tokens?: number;
  input_tokens?: number;
  output_tokens?: number;
};

const TEXT_PRICES: Record<string, { input: number; output: number }> = {
  'gpt-4o': { input: 2.5, output: 10 },
  'gpt-4o-mini': { input: 0.15, output: 0.6 },
};

export async function logTextUsage(
  db: Db,
  userId: string,
  feature: string,
  model: string,
  usage?: Usage,
  metadata: Record<string, unknown> = {},
) {
  const inputTokens = Number(usage?.prompt_tokens ?? usage?.input_tokens ?? 0);
  const outputTokens = Number(usage?.completion_tokens ?? usage?.output_tokens ?? 0);
  const price = TEXT_PRICES[model] ?? { input: 0, output: 0 };
  const costUsd = (inputTokens * price.input + outputTokens * price.output) / 1_000_000;
  const { error } = await db.from('ai_usage_events').insert({
    user_id: userId, feature, model, input_tokens: inputTokens,
    output_tokens: outputTokens, audio_seconds: 0, cost_usd: costUsd, metadata,
  });
  if (error) console.error('AI usage log failed:', error.message);
}

export async function logAudioUsage(
  db: Db,
  userId: string,
  feature: string,
  model: string,
  audioSeconds: number,
  metadata: Record<string, unknown> = {},
) {
  const seconds = Number.isFinite(audioSeconds) ? Math.max(0, audioSeconds) : 0;
  const perMinute = model === 'whisper-1' ? 0.006 : model === 'gpt-4o-mini-transcribe' ? 0.003 : 0;
  const { error } = await db.from('ai_usage_events').insert({
    user_id: userId, feature, model, input_tokens: 0, output_tokens: 0,
    audio_seconds: seconds, cost_usd: (seconds / 60) * perMinute, metadata,
  });
  if (error) console.error('AI audio usage log failed:', error.message);
}

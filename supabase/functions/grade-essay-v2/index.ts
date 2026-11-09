// Versioned rollout: existing open browser tabs keep using the deployed v1 API.
// New Writing sessions use the persisted-attempt/idempotent grading handler.
import '../grade-essay/index.ts';

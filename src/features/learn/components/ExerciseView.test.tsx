import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

vi.mock('../speech', () => ({ speak: vi.fn(), speakable: () => true, listenOnce: vi.fn(), speechRecognitionSupported: () => false, cleanText: (t: string) => t }));
vi.mock('../api', () => ({ callLearning: vi.fn() }));
vi.mock('../recognition', () => ({ canRecord: () => false, startRecording: vi.fn(), transcribeClip: vi.fn() }));
vi.mock('./SpeakButton', () => ({ SpeakButton: () => null }));

import { ExerciseView } from './ExerciseView';

describe('match exercise', () => {
  const ex = { k: 'match' as const, pairs: [['apple', 'olma'], ['book', 'kitob']] as [string, string][] };
  it('accepts the Uzbek word first, then the English one', () => {
    const done = vi.fn();
    render(<ExerciseView ex={ex} mode="practice" onDone={done} />);
    fireEvent.click(screen.getByText('olma'));
    fireEvent.click(screen.getByText('apple'));
    fireEvent.click(screen.getByText('kitob'));
    fireEvent.click(screen.getByText('book'));
    expect(screen.getByText(/Davom etish/i)).toBeTruthy();
    expect(screen.queryByText(/xato bilan/)).toBeNull();
  });
  it('still accepts English first', () => {
    render(<ExerciseView ex={ex} mode="practice" onDone={vi.fn()} />);
    fireEvent.click(screen.getByText('apple'));
    fireEvent.click(screen.getByText('olma'));
    fireEvent.click(screen.getByText('book'));
    fireEvent.click(screen.getByText('kitob'));
    expect(screen.getByText(/Davom etish/i)).toBeTruthy();
  });
});

describe('fill help', () => {
  const ex = { k: 'fill' as const, q: 'My teacher ___ busy.', a: ['is'] };
  it('helps step by step and only then offers the answer, which counts as a mistake', () => {
    const done = vi.fn();
    render(<ExerciseView ex={ex} mode="practice" onDone={done} />);
    expect(screen.queryByText(/Javobni bilmayman/)).toBeNull();
    fireEvent.click(screen.getByText('Yordam'));
    expect(screen.getByText(/2 harfdan iborat/)).toBeTruthy();
    fireEvent.click(screen.getByText('Yana yordam'));
    expect(screen.getByText(/i_/)).toBeTruthy();
    fireEvent.click(screen.getByText('Javobni bilmayman'));
    fireEvent.click(screen.getByText(/Ha, javobni ko'rsat/));
    fireEvent.click(screen.getByText(/Davom etish/i));
    expect(done).toHaveBeenCalledWith(false);
  });
});

"""Turns ElevenLabs character timings into scene marks and captions: python3 build-timeline.py to-be"""
import json, sys
vid = sys.argv[1] if len(sys.argv) > 1 else 'to-be'
d = json.load(open(f'out/{vid}.json'))
text, a = d['text'], d['alignment']
start, end = a['character_start_times_seconds'], a['character_end_times_seconds']
at = lambda s: start[text.index(s)]
# (caption text, first words of the sentence in the narration)
sentences = [
    ("Inglizcha gapda fe'l shart!", "Inglizcha"),
    ("Men — I am.", "Men —"),
    ("U — he is, she is.", "U —"),
    ("Biz, ular — we are, they are.", "Biz,"),
    ("Masalan: I am a student.", "Masalan"),
    ("O'zbekcha: Men talabaman.", "O'zbekcha"),
]
caps = []
for i, (cap, key) in enumerate(sentences):
    frm = at(key)
    to = at(sentences[i + 1][1]) if i + 1 < len(sentences) else end[-1] + 0.4
    caps.append({'from': round(frm, 2), 'to': round(to, 2), 'text': cap})
marks = {'rows': at('Men —'), 'r1': at('Men —'), 'r2': at('U —'), 'r3': at('Biz,'), 'example': at('Masalan'), 'compare': at('O\'zbekcha'), 'fixed': at("O'zbekcha") + 1.3}
json.dump({'duration': round(end[-1], 2), 'marks': {k: round(v, 2) for k, v in marks.items()}, 'captions': caps}, open(f'out/{vid}.timeline.json', 'w'), ensure_ascii=False)
print(marks)

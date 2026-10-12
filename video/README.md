# Dars videolari

Qisqa animatsion videolar: ovoz ElevenLabs'dan, animatsiya HTML (`scene.html`), render Chromium + ffmpeg orqali.

```bash
# 1. Ovoz + so'zlar vaqti (ELEVENLABS_API_KEY kerak; Zilola: cyPun3bl9MxcpLBX6pT0, pullik tarifda)
#    out/<id>.mp3 va out/<id>.json (matn + alignment) yoziladi
# 2. Sahna vaqtlari: python3 build-timeline.py <id>
# 3. Render:        npm i && node render.mjs <id>     ->  out/<id>.mp4
```

`ln -s` bilan `node_modules` ni o'rnatmasdan ham ishlatish mumkin: `npm i` yetarli. Chromium yo'li: `CHROME_PATH`.

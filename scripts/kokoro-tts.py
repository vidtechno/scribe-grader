"""
Batch text-to-speech with the free Kokoro model (Apache-2.0) through sherpa-onnx. Called by generate-lesson-audio.ts.

  pip install sherpa-onnx numpy soundfile
  python scripts/kokoro-tts.py jobs.json            # jobs.json: [{"out": "public/audio/<key>.mp3", "text": "..."}]

Model folder (kokoro-int8-en-v0_19: model.int8.onnx, voices.bin, tokens.txt, espeak-ng-data): set KOKORO_DIR.
The folder ships inside the npm package `n8n-nodes-ttsbro` (kokoro-int8-en-v0_19/) if huggingface.co is not reachable.
Voice: KOKORO_SID (default 9 = bm_george, British male; 3 = af_sarah, 5 = am_adam, 7 = bf_emma).
"""
import json, os, subprocess, sys
import numpy as np
import sherpa_onnx

d = os.environ["KOKORO_DIR"].rstrip("/") + "/"
sid = int(os.environ.get("KOKORO_SID", "9"))
speed = float(os.environ.get("KOKORO_SPEED", "0.92"))
cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
    kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(model=d + "model.int8.onnx", voices=d + "voices.bin", tokens=d + "tokens.txt", data_dir=d + "espeak-ng-data"),
    num_threads=int(os.environ.get("KOKORO_THREADS", "2"))))
tts = sherpa_onnx.OfflineTts(cfg)
jobs = json.load(open(sys.argv[1]))
failed = 0
for n, job in enumerate(jobs, 1):
    try:
        g = tts.generate(job["text"], sid=sid, speed=speed)
        pcm = np.array(g.samples, dtype=np.float32)
        if pcm.size == 0:
            raise RuntimeError("empty audio")
        # A little silence at the end so playback is not cut off by the phone.
        pcm = np.concatenate([pcm, np.zeros(int(g.sample_rate * 0.15), dtype=np.float32)])
        pcm16 = (np.clip(pcm, -1, 1) * 32767).astype("<i2").tobytes()
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "s16le", "-ar", str(g.sample_rate), "-ac", "1", "-i", "-",
                        "-ar", "22050", "-codec:a", "libmp3lame", "-b:a", "48k", job["out"]], input=pcm16, check=True)
    except Exception as e:  # keep going: the caller lists what is still missing
        failed += 1
        print("FAILED", repr(job["text"]), e, file=sys.stderr)
    if n % 100 == 0:
        print(f"  {n}/{len(jobs)}", flush=True)
sys.exit(1 if failed else 0)

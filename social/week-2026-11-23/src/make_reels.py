"""Builds the reel MP4s from the rendered scene PNGs, with a synthesized beat.

Usage: python3 src/make_reels.py   (run from social/week-2026-11-23, after render.js)
"""
import pathlib
import subprocess
import wave

import numpy as np

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "out"
SR = 44100
BPM = 112
SCENE = 3.2   # seconds each scene stays on screen
FADE = 0.5    # crossfade between scenes
FPS = 30


def beat(seconds: float) -> np.ndarray:
    n = int(seconds * SR)
    t = np.arange(n) / SR
    out = np.zeros(n)
    spb = 60 / BPM
    rng = np.random.default_rng(7)

    def add(sig, start):
        i = int(start * SR)
        if i >= n:
            return
        j = min(n, i + len(sig))
        out[i:j] += sig[: j - i]

    # kick
    kt = np.arange(int(0.35 * SR)) / SR
    kick = np.sin(2 * np.pi * (45 + 120 * np.exp(-kt * 30)) * kt) * np.exp(-kt * 9)
    # clap / snare
    st = np.arange(int(0.2 * SR)) / SR
    snare = rng.normal(0, 1, len(st)) * np.exp(-st * 22) * 0.45
    # hat
    ht = np.arange(int(0.05 * SR)) / SR
    hat = np.diff(rng.normal(0, 1, len(ht) + 1)) * np.exp(-ht * 90) * 0.18

    b = 0
    while b * spb < seconds:
        start = b * spb
        add(kick, start)
        if b % 2 == 1:
            add(snare, start)
        add(hat, start + spb / 2)
        b += 1

    # pad chords (Am - F - C - G), one per bar
    chords = [[220.0, 261.63, 329.63], [174.61, 220.0, 261.63], [196.0, 261.63, 329.63], [196.0, 246.94, 293.66]]
    bar = spb * 4
    pad = np.zeros(n)
    for k in range(int(seconds / bar) + 1):
        s, e = int(k * bar * SR), min(n, int((k + 1) * bar * SR))
        if s >= n:
            break
        tt = t[s:e] - k * bar
        env = np.minimum(1, tt / 0.3) * np.minimum(1, (bar - tt) / 0.3)
        for f in chords[k % 4]:
            pad[s:e] += (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt)) * env
    out += pad * 0.06
    # bass on the root, eighth notes
    roots = [110.0, 87.31, 98.0, 98.0]
    for b8 in range(int(seconds / (spb / 2)) + 1):
        start = b8 * spb / 2
        f = roots[int(start / bar) % 4]
        bt = np.arange(int(spb / 2 * SR)) / SR
        add(np.sin(2 * np.pi * f * bt) * np.exp(-bt * 6) * 0.35, start)

    # fade in/out and normalise
    fade = np.minimum(1, t / 0.5) * np.minimum(1, (seconds - t) / 1.0)
    out *= fade
    return out / np.max(np.abs(out)) * 0.85


def write_wav(path: pathlib.Path, data: np.ndarray) -> None:
    pcm = (data * 32767).astype(np.int16)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def build(dir_: pathlib.Path) -> None:
    scenes = sorted(dir_.glob("scene-*.png"), key=lambda p: int(p.stem.split("-")[1]))
    k = len(scenes)
    total = k * SCENE - (k - 1) * FADE
    wav = dir_ / "beat.wav"
    write_wav(wav, beat(total))

    frames = int(SCENE * FPS)
    args = ["ffmpeg", "-loglevel", "error", "-y"]
    for s in scenes:
        args += ["-loop", "1", "-t", str(SCENE), "-i", str(s)]
    args += ["-i", str(wav)]

    fc = []
    for i in range(k):
        # gentle push-in on every scene
        fc.append(
            f"[{i}]scale=2160:3840,zoompan=z='1+0.04*on/{frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'"
            f":d={frames}:s=1080x1920:fps={FPS},setsar=1,format=yuv420p[v{i}]"
        )
    prev = "v0"
    for i in range(1, k):
        off = i * (SCENE - FADE)
        fc.append(f"[{prev}][v{i}]xfade=transition=fade:duration={FADE}:offset={off:.2f}[x{i}]")
        prev = f"x{i}"
    args += [
        "-filter_complex", ";".join(fc),
        "-map", f"[{prev}]", "-map", f"{k}:a",
        "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-r", str(FPS), "-b:v", "6M",
        "-c:a", "aac", "-b:a", "192k", "-ar", "44100",
        "-movflags", "+faststart", "-shortest",
        str(dir_ / "reel.mp4"),
    ]
    subprocess.run(args, check=True)
    wav.unlink()
    print("built", dir_.name, f"{total:.1f}s")


if __name__ == "__main__":
    for d in sorted(OUT.iterdir()):
        if "reel" in d.name:
            build(d)

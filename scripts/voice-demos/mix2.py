# Mixer v2: voice lines + SFX + ONE music track per scene.
# Music is loudness-matched to the voice minus `music_lu` (default 9 LU), then ducked
# gently under speech (≈ -4 dB) and allowed to swell in the gaps. Total length is the
# longer of the voice timeline and the music, with a 3 s fade at the end. Opus out.
import json, subprocess, sys

def dur(p):
    return float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",p]).decode())

def lufs(p):
    out = subprocess.run(["ffmpeg","-hide_banner","-i",p,"-af","ebur128","-f","null","-"],capture_output=True,text=True).stderr
    return float([l for l in out.splitlines() if l.strip().startswith("I:")][-1].split()[1])

def timeline(plan, lines_dir):
    t, voices, sfx = 0.6, [], []
    for step in plan:
        t += step.get("gap", 0.35)
        p = f"{lines_dir}/{step['line']}.mp3"
        voices.append((p, t))
        for name, off, gain in step.get("sfx", []):
            sfx.append((f"sfx/{name}.mp3", max(0.0, t + off), gain))
        t += dur(p) + step.get("hold", 0.0)
    return voices, sfx, t

def build(spec, lines_dir="lines"):
    voices, sfx, end = timeline(spec["plan"], lines_dir)
    music = spec["music"]
    total = max(end + 4.5, dur(music))
    inputs, f = [], []
    for i, (p, st) in enumerate(voices):
        inputs += ["-i", p]; f.append(f"[{i}:a]aresample=48000,adelay={int(st*1000)}:all=1[v{i}]")
    n = len(voices)
    f.append("".join(f"[v{i}]" for i in range(n)) + f"amix=inputs={n}:normalize=0:dropout_transition=0,apad=whole_dur={total:.2f}[voice]")
    for j, (p, st, g) in enumerate(sfx):
        k = n + j; inputs += ["-i", p]
        f.append(f"[{k}:a]aresample=48000,volume={g}dB,adelay={int(st*1000)}:all=1,apad=whole_dur={total:.2f}[s{k}]")
    m = n + len(sfx)
    inputs += ["-i", music]
    # music gain: bring the track to (voice-only loudness - music_lu) before ducking
    music_gain = spec["voice_lufs"] - spec.get("music_lu", 9) - lufs(music)
    # the final line must land clearly: music dips a further 8 dB from just before it until the end
    last_start = voices[-1][1]
    duck = f"volume=enable='gte(t,{last_start-0.8:.2f})':volume=-8dB"
    f.append(f"[{m}:a]aresample=48000,volume={music_gain:.2f}dB,{duck},apad=whole_dur={total:.2f},afade=t=out:st={total-3:.2f}:d=3[mraw]")
    f.append("[voice]asplit=2[voiceA][voiceKey]")
    f.append("[mraw][voiceKey]sidechaincompress=threshold=0.05:ratio=2.5:attack=40:release=600:makeup=1[music]")
    sl = "".join(f"[s{n+j}]" for j in range(len(sfx)))
    f.append(f"[voiceA]{sl}[music]amix=inputs={2+len(sfx)}:normalize=0:dropout_transition=0,loudnorm=I=-18:TP=-1.5:LRA=11,aresample=48000[out]")
    subprocess.run(["ffmpeg","-loglevel","error","-y",*inputs,"-filter_complex",";".join(f),"-map","[out]","-ac","2",
                    "-c:a","libopus","-b:a","64k","-vbr","on","-application","audio","-t",f"{total:.2f}",spec["out"]], check=True)
    return total, music_gain

def voice_only_lufs(spec, lines_dir="lines"):
    voices, _, end = timeline(spec["plan"], lines_dir)
    inputs, f = [], []
    for i, (p, st) in enumerate(voices):
        inputs += ["-i", p]; f.append(f"[{i}:a]aresample=48000,adelay={int(st*1000)}:all=1[v{i}]")
    f.append("".join(f"[v{i}]" for i in range(len(voices))) + f"amix=inputs={len(voices)}:normalize=0[o]")
    subprocess.run(["ffmpeg","-loglevel","error","-y",*inputs,"-filter_complex",";".join(f),"-map","[o]","/tmp/elv/_voice.wav"], check=True)
    return lufs("/tmp/elv/_voice.wav")

if __name__ == "__main__":
    specs = json.load(open(sys.argv[1]))
    lines_dir = sys.argv[2] if len(sys.argv) > 2 else "lines"
    for name, spec in specs.items():
        spec["voice_lufs"] = voice_only_lufs(spec, lines_dir)
        total, g = build(spec, lines_dir)
        print(f"{spec['out']} {total:.1f}s voice {spec['voice_lufs']:.1f} LUFS, music gain {g:+.1f} dB")

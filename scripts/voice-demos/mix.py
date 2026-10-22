# Assemble one demo: voice lines in order with gaps, SFX placed before their line,
# a looping ambient bed (crossfaded halfway) ducked under the voice, loudness-normalised, Opus out.
import json, subprocess, sys

def dur(p):
    return float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",p]).decode())

def build(name, plan, beds, out, bed_db=-25):
    # plan: list of dicts {line: id, gap: s before line, sfx: [(name, offset_from_line_start, gain_db)]}
    t = 0.6
    voice_inputs, sfx_events = [], []
    for step in plan:
        t += step.get("gap", 0.35)
        p = f"lines/{step['line']}.mp3"
        voice_inputs.append((p, t))
        for s_name, offset, gain in step.get("sfx", []):
            sfx_events.append((f"sfx/{s_name}.mp3", max(0.0, t + offset), gain))
        t += dur(p) + step.get("hold", 0.0)
    total = t + 2.5

    inputs, filters, labels = [], [], []
    idx = 0
    for p, start in voice_inputs:
        inputs += ["-i", p]
        filters.append(f"[{idx}:a]aresample=48000,adelay={int(start*1000)}:all=1[v{idx}]"); labels.append(f"[v{idx}]"); idx += 1
    nv = idx
    filters.append("".join(labels) + f"amix=inputs={nv}:normalize=0:dropout_transition=0,apad=whole_dur={total:.2f}[voice]")
    for p, start, gain in sfx_events:
        inputs += ["-i", p]
        filters.append(f"[{idx}:a]aresample=48000,volume={gain}dB,adelay={int(start*1000)}:all=1,apad=whole_dur={total:.2f}[s{idx}]"); idx += 1
    sfx_labels = "".join(f"[s{i}]" for i in range(nv, idx))
    # beds: first bed for the first half, second for the rest, 4 s crossfade, looped to length
    half = total / 2
    b0, b1 = idx, idx + 1
    inputs += ["-stream_loop", "-1", "-i", f"sfx/{beds[0]}.mp3", "-stream_loop", "-1", "-i", f"sfx/{beds[1]}.mp3"]
    filters.append(f"[{b0}:a]aresample=48000,atrim=0:{half+2:.2f},asetpts=PTS-STARTPTS[bA]")
    filters.append(f"[{b1}:a]aresample=48000,atrim=0:{total-half+2:.2f},asetpts=PTS-STARTPTS[bB]")
    filters.append(f"[bA][bB]acrossfade=d=4:c1=tri:c2=tri,atrim=0:{total:.2f},afade=t=in:d=2,afade=t=out:st={total-3:.2f}:d=3,volume={bed_db}dB[bedraw]")
    filters.append("[voice]asplit=2[voiceA][voiceKey]")
    filters.append("[bedraw][voiceKey]sidechaincompress=threshold=0.02:ratio=6:attack=20:release=400[bed]")
    mix_in = f"[voiceA]{sfx_labels}[bed]"
    filters.append(f"{mix_in}amix=inputs={2 + len(sfx_events)}:normalize=0:dropout_transition=0,loudnorm=I=-18:TP=-1.5:LRA=11,aresample=48000[out]")
    cmd = ["ffmpeg", "-loglevel", "error", "-y", *inputs, "-filter_complex", ";".join(filters), "-map", "[out]",
           "-ac", "2", "-c:a", "libopus", "-b:a", "48k", "-vbr", "on", "-application", "audio", "-t", f"{total:.2f}", out]
    subprocess.run(cmd, check=True)
    print(out, f"{total:.1f}s")

plans = json.load(open(sys.argv[1]))
for name, spec in plans.items():
    build(name, spec["plan"], spec["beds"], spec["out"], spec.get("bed_db", -25))

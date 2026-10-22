# For every language and scene: Whisper (language forced) must hear the last line's final words
# in the FINISHED mix, and the file must run past the end of speech.
import json, re, subprocess
from faster_whisper import WhisperModel
dur=lambda p: float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",p]).decode())
texts = json.load(open("/tmp/elv/i18n/texts.json"))
EN = {"wintrow":"The handprints on that glass were on the inside.","obsidian":"Fall? Oh, Cornelius. I learned to fly."}
m = WhisperModel("small", device="cpu", compute_type="int8")
norm = lambda t, lang: list(re.sub(r"[\W\d_]+", "", t)) if lang=="ja" else re.sub(r"[^\w]+"," ",t.lower()).split()
for lang in ["en","ru","he","uk","de","fr","ja","es"]:
    plans = json.load(open("/tmp/elv/plans-v3.json" if lang=="en" else f"/tmp/elv/plans-{lang}.json"))
    ld = "lines" if lang=="en" else f"lines-{lang}"
    row=[]
    for scene,key in (("wintrow","w-22"),("obsidian","o-16")):
        t=0.6
        for s in plans[scene]["plan"]:
            t+=s.get("gap",0.35); st=t; t+=dur(f"/tmp/elv/{ld}/{s['line']}.mp3")
        mix = f"/tmp/elv/mix/{'mr-wintrow' if scene=='wintrow' else 'obsidian'}-demo-{lang}.opus"
        subprocess.run(["ffmpeg","-loglevel","error","-y","-ss",f"{st-0.8}","-i",mix,"/tmp/elv/_end.wav"],check=True)
        segs,_ = m.transcribe("/tmp/elv/_end.wav", language=lang, word_timestamps=True)
        heard=" ".join(x.text.strip() for x in segs)
        exp = EN[scene] if lang=="en" else re.sub(r"\[[^\]]*\]","",texts[lang][key])
        k = 4 if lang=="ja" else 2
        ok = norm(exp,lang)[-k:] == norm(heard,lang)[-k:]
        row.append(f"{scene} {'OK ' if ok else 'CHECK'} end@{t:.1f}/{dur(mix):.1f}s heard '…{heard[-28:]}'")
    print(lang, " | ".join(row))

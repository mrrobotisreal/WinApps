# Per language: transcribe every line in that language. Flag (a) detected language mismatch,
# (b) transcript length far off the text (doubling / truncation), (c) English tag words spoken.
import json, sys, re, subprocess
from faster_whisper import WhisperModel
texts = json.load(open("/tmp/elv/i18n/texts.json"))
m = WhisperModel("small", device="cpu", compute_type="int8")
TAGWORDS = {"nervous","dread","horrified","whisper","frantic","shaking","breathless","quiet","despair","defeated","shaky","terrified","trembling","coaxing","haunted","chilling","deliberate","menacing","slow","defiant","amused","stern","anger","cold","venomous","firm","determined","mocking","scoffs","furious","shouting","straining","grunting","unsettling","gentle","sorrowful","stunned","shaken","rage","screaming","fury","calm","resolute","sinister","chuckle","laughs","gasps","sobbing","relieved","darkly","storyteller","relaxed","puzzled","uneasy","whispering","panicked","screams","exhale","snorts"}
units = lambda s, lang: len(re.sub(r"[\s\W\d_]+", "", s)) if lang == "ja" else len(re.findall(r"[^\W\d_]+", s))
langs = sys.argv[1:] or list(texts)
for lang in langs:
    bad = []
    for lid, text in texts[lang].items():
        p = f"/tmp/elv/lines-{lang}/{lid}.mp3"
        clean = re.sub(r"\[[^\]]*\]", " ", text)
        segs, info = m.transcribe(p, language=None if lang != "uk" else None, vad_filter=False)
        heard = " ".join(s.text for s in segs).strip()
        det = info.language
        ratio = units(heard, lang) / max(1, units(clean, lang))
        leak = sorted(set(re.findall(r"[a-z]+", heard.lower())) & TAGWORDS)
        flags = []
        okdet = det == lang or (lang == "uk" and det in ("uk", "ru")) or (lang == "ru" and det in ("ru", "uk"))
        if not okdet and len(clean) > 15: flags.append(f"lang={det}")
        if ratio > 1.45: flags.append(f"LONG x{ratio:.2f}")
        if ratio < 0.55 and len(clean) > 12: flags.append(f"SHORT x{ratio:.2f}")
        if leak: flags.append("LEAK " + ",".join(leak))
        if flags: bad.append(f"  {lid} {' '.join(flags)} | {heard[:90]}")
    print(f"{lang}: {len(texts[lang])} lines, {len(bad)} flagged")
    for b in bad: print(b)

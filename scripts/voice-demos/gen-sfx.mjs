import { sfx } from "./sfx.mjs";
const jobs = [
  // ambient beds (looping, 30 s)
  ["bed-night-road", "dark ambient horror underscore, low droning synth pad, faint distant wind, night, slow and subtle, no drums, no melody", 30, { loop: true, prompt_influence: 0.35 }],
  ["bed-dread", "tense horror underscore, low pulsing heartbeat drone, dissonant strings, creeping dread, subtle, no melody", 30, { loop: true, prompt_influence: 0.35 }],
  ["bed-tower", "dark fantasy ambient, ominous low choir drone, storm outside a stone tower, rumbling thunder far away, subtle, cinematic", 30, { loop: true, prompt_influence: 0.35 }],
  ["bed-battle", "epic dark fantasy battle underscore, low brass drones, deep taiko pulse, magical tension, subtle, cinematic", 30, { loop: true, prompt_influence: 0.35 }],
  // one-shot effects for the narration
  ["car-start", "old pickup truck engine starting and revving, then driving steadily", 4, {}],
  ["radio-static", "car radio losing signal into hissing static", 3, {}],
  ["brakes", "car brakes screeching hard to a stop on asphalt", 2.5, {}],
  ["glass", "car side window shattering, glass falling", 2, {}],
  ["shotgun", "single pump shotgun blast, close, outdoors at night", 2, {}],
  ["ricochet", "shotgun pellets ricocheting off a car hood, metal pings", 1.5, {}],
  ["tire", "car tire punctured, loud pop then air hissing out", 2.5, {}],
  ["running", "footsteps running fast on asphalt road at night, heavy breathing", 4, {}],
  ["door-slam", "heavy wooden door slammed shut, bolt sliding into place", 1.5, {}],
  ["knock", "three slow knocks on a glass window, eerie", 3, {}],
  // one-shot effects for the wizard duel
  ["thunder", "deep rolling thunder crack, close", 3, {}],
  ["magic-blast", "magical energy blast, crackling lightning, whoosh", 2, {}],
  ["wind", "howling magical wind vortex rising", 3, {}],
  ["explosion", "large stone explosion, tower wall crumbling, rubble falling", 3.5, {}],
  ["spell-light", "holy light spell charging, shimmering bright chime", 2, {}],
];
for (const [name, text, dur, opts] of jobs) console.log(name, await sfx(name, text, dur, opts));

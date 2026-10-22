import { sfx } from "./sfx.mjs";
const jobs = [
  ["v2-shot-hood", "one shotgun blast at night, buckshot sparking off a car hood, single metallic clang", 2.5, { prompt_influence: 0.6 }],
  ["v2-scrape", "long fingernail slowly scraping along a rubber car tire, then a small puncture", 3, { prompt_influence: 0.6 }],
  ["v2-hiss", "air slowly hissing out of a punctured car tire, quiet, fading", 4, { prompt_influence: 0.6 }],
  ["v2-knock-one", "a single knuckle knock on a glass window, close, dry, eerie", 0.8, { prompt_influence: 0.7 }],
  ["v2-glass-squeak", "palm slowly sliding on a glass window, faint squeak", 2, { prompt_influence: 0.6 }],
];
for (const [name, text, dur, opts] of jobs) console.log(name, await sfx(name, text, dur, opts));

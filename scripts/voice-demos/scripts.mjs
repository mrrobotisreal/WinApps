// The two demo scripts. Each line is one v4 request: [tags] + text, tags ≤ ~8 words,
// effect tag first, emotion tag second (v4 rules from the Sumrak pipeline).
export const W = "HQ4Xi3gPf8Q6bJUlao6z"; // Mr. Wintrow
export const O = "QjEdRoRdZC2i3ncmFpNy"; // Obsidian
export const C = "6sFKzaJr574YWVu4UuJF"; // Cornelius (good wizard)

// "The Last Exit": a night drive, a figure in the road, and a long way home.
export const wintrow = [
  [W, "[calm, storyteller] It was a quarter past midnight when I took the old county road. Just me, the radio, and forty miles of nothing."],
  [W, "[car engine revving] [relaxed, amused] I remember laughing at some stupid song. [laughs] I actually sang along."],
  [W, "[tires on gravel] [puzzled] Then the radio cut to static. Every station. Just... hiss."],
  [W, "[uneasy, quiet] And in the headlights, maybe a hundred yards out, someone was standing in the middle of the road."],
  [W, "[whispering] Arms at its sides. Head tilted. Too tall. Far too tall."],
  [W, "[gulps] [nervous] I eased off the gas. I told myself it was a deer. [nervous laugh] Deer don't wave."],
  [W, "[brakes screeching] [panicked] It was suddenly at the window. [gasps] It was RIGHT THERE."],
  [W, "[glass shattering] [screams] No! No, get away from me!"],
  [W, "[shotgun blast] [breathless, shaking] Grandpa's shotgun. I didn't even remember grabbing it."],
  [W, "[shotgun blast, metal ricochet] [frantic] The second shot sparked off the hood, and the thing just... smiled."],
  [W, "[tire bursting, air hissing] [despair] And then my front tire went. Of course it did."],
  [W, "[footsteps running on asphalt] [heavy breathing] So I ran. Down the centre line, lungs burning, not looking back."],
  [W, "[sobbing, broken] I could hear it behind me. Not running. Walking. It didn't need to run."],
  [W, "[door slams] [whispering, trembling] I made it to the old gas station and barricaded the door."],
  [W, "[long exhale] [relieved, shaky laugh] Silence. Five minutes. Ten. I started to think I'd lost it."],
  [W, "[snorts] [darkly amused] Lost it. Right."],
  [W, "[soft knocking on glass] [terrified whisper] Then came the knock. Three slow taps. On the window behind me."],
  [W, "[quiet, haunted] I still drive that road sometimes. And every time I pass the old gas station... [pause] the window is open."],
];

// "The Tower at Vaelmoor": Obsidian, the necromancer, vs Cornelius, the old wizard.
export const obsidian = [
  [O, "[thunder rumbling] [slow, menacing] So. The old man finally climbs my tower."],
  [C, "[breathless, defiant] Obsidian. It ends tonight. Release the souls you've bound."],
  [O, "[low, amused laugh] Release them? Cornelius, they are the only thing keeping these walls standing."],
  [C, "[stern, rising anger] You were my finest student. Look at what you've become."],
  [O, "[cold, venomous] I became what you were too afraid to be. Powerful. Unafraid. Eternal."],
  [C, "[firm, determined] Then I am sorry for what I must do. Lux aeterna!"],
  [O, "[magic blast, crackling energy] [mocking] Light? [scoffs] You brought a candle to a storm."],
  [O, "[roaring wind] [furious, shouting] Rise, all of you! Rise and drag him down!"],
  [C, "[straining, grunting] They're... not yours to command. Remember who you were!"],
  [O, "[whispering, unsettling] I remember everything, old man. The cold. The silence. Your door, closed in my face."],
  [C, "[gentle, sorrowful] I closed that door to save you. I was wrong. Forgive me."],
  [O, "[stunned silence] [quiet, shaken] ...Forgive you?"],
  [O, "[growing rage] No. No! You don't get to be sorry NOW!"],
  [O, "[explosion, stone crumbling] [screaming in fury] I will tear this tower down on both of us!"],
  [C, "[calm, resolute] Then we fall together. Like we should have, long ago."],
  [O, "[sinister chuckle] [cold, final] Fall? [laughs] Oh, Cornelius. I learned to fly."],
];

// "The Last Exit" v2: same story; the deer beat, the hood/tire beat and the ending are rewritten.
// Lines marked keep reuse the v1 render (lines/wintrow-NN.mp3). New lines carry NO effect tags:
// every sound effect is a separate clip placed in the mix, so nothing renders twice.
const W = "HQ4Xi3gPf8Q6bJUlao6z";
export const v2 = [
  { id: "01", keep: true },
  { id: "02", keep: true },
  { id: "03", keep: true },
  { id: "04", keep: true },
  { id: "05", keep: true },
  { id: "06a", text: "[nervous] I eased off the gas. Told myself it was just a deer." },
  { id: "06b", text: "[slow, dawning dread] Then it lifted one long arm... and waved at me." },
  { id: "06c", text: "[horrified whisper] Deer don't wave." },
  { id: "07", keep: true },
  { id: "08", keep: true },
  { id: "09", keep: true },
  { id: "10a", text: "[frantic, shaking] I fired again. It went wide and sparked right off my own hood." },
  { id: "10b", text: "[breathless, quiet] And the thing just... smiled at me." },
  { id: "11a", text: "[despair] Then it bent down, slow and lazy, and dragged one long nail across my front tire." },
  { id: "11b", text: "[defeated, shaky] There went my ride home." },
  { id: "12", keep: true },
  { id: "13", keep: true },
  { id: "14", keep: true },
  { id: "15", keep: true },
  { id: "16", keep: true },
  { id: "17", text: "[terrified whisper] Three knocks. Slow. On the window right behind my head." },
  { id: "18", text: "[trembling whisper] Then a voice, my own voice, whispered through the glass." },
  { id: "19", text: "[soft, coaxing whisper] You can let me in now." },
  { id: "20", text: "[shaky, quiet] I didn't move. I didn't breathe. I sat there until the sun came up." },
  { id: "21", text: "[quiet, haunted] A trucker found me at dawn. He asked why I'd locked myself in there. I just pointed at the window." },
  { id: "22", text: "[clear, chilling] The handprints on that glass were on the inside." },
].map((l) => ({ ...l, voice: W }));

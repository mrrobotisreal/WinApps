import { Profile } from "./schema";
import { site } from "./site";

export const profile = Profile.parse({
  name: "Mitchell Wintrow",
  shortName: "Mitch Wintrow",
  title: "Senior Software Engineer",
  positioning:
    "I build mobile ad tech for the People app by day and ship my own products at night: a browser video editor, a creator video platform, and a Russian-learning app built for one student.",
  bio: [
    "I'm a senior software engineer who works across mobile, web, and backend systems. At People Inc. I'm on the People mobile app's ad revenue team, where I own the prebidding integrations and the ad configuration backend.",
    "Outside work I build products end to end. Media Manipulator is a browser media toolkit with a multi-track video editor called Darkroom, running on GPU servers I operate myself. CreaTV is a creator-first video platform I founded. Сумрак (Sumrak) is a Russian-learning app I built for myself, and it is the most complete piece of software I've made.",
    "I'm learning Russian seriously, with Ukrainian and Hebrew alongside it. Most of what I build outside work exists to help me learn faster.",
  ],
  email: "mitchellwintrow@gmail.com",
  location: "Colorado, USA",
  socials: site.footer.socials,
  resume: {
    pdf: "/MitchellWintrow_Resume.pdf",
    docx: "/MitchellWintrow_Resume.docx",
  },
  education: [
    {
      school: "Western Governors University",
      credential: "B.S. Computer Science",
    },
    {
      school: "Hack Reactor",
      credential: "Software Engineering Immersive",
      dates: { start: "2022-02", end: "2022-05" },
      note: "Voted class president.",
    },
  ],
  languages: [
    { name: "Russian", level: "Primary focus" },
    { name: "Ukrainian", level: "Studying" },
    { name: "Hebrew", level: "Studying" },
  ],
  personal: [
    "I run a home-lab GPU server that hosts my AI workloads and Winny, this site's assistant.",
  ],
});

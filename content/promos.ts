import { PromoSlot } from "./schema";

// CreaTV fills both slots until a Media Manipulator creative exists (D04).
// The original 6 MB GIF is on R2 (`${R2}/CreaTV_VideoAd_Leaderboard.gif`); the site
// serves a 400 KB looping MP4 of it with a poster (W11).
const creatvLeaderboard = {
  kind: "video" as const,
  src: "/creatv/promo-leaderboard.mp4",
  poster: "/creatv/promo-leaderboard-poster.webp",
  alt: "CreaTV, a creator-first video platform: where ideas are brought to life",
  width: 728,
  height: 90,
};

export const promos: PromoSlot[] = [
  {
    id: "home-top",
    product: "creatv",
    creative: creatvLeaderboard,
    href: "https://www.creatv.io",
    referral: "MITCHELLWINTROW4331",
    enabled: true,
  },
  {
    id: "home-bottom",
    product: "creatv",
    creative: creatvLeaderboard,
    href: "https://www.creatv.io",
    referral: "MITCHELLWINTROW4331",
    enabled: true,
  },
].map((slot) => PromoSlot.parse(slot));

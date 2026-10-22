import { R2 } from "./cdn";
import { PromoSlot } from "./schema";

// CreaTV fills both slots until a Media Manipulator creative exists (D04).
const creatvLeaderboard = {
  kind: "image" as const,
  src: `${R2}/CreaTV_VideoAd_Leaderboard.gif`,
  alt: "CreaTV, a creator-first video platform",
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

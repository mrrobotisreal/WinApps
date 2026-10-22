import type { Project } from "../schema";
import { aspireToExpand } from "./aspire-to-expand";
import { creatv } from "./creatv";
import { financeFlow } from "./finance-flow";
import { journeyApp } from "./journey-app";
import { mediaManipulator } from "./media-manipulator";
import { mp3DrivePlayer } from "./mp3-drive-player";
import { quantumRiver } from "./quantum-river";
import { sumrak } from "./sumrak";
import { textFormatter } from "./text-formatter";
import { voizy } from "./voizy";

/** Every project, validated at import and sorted by `order`. */
export const projects: Project[] = [
  sumrak,
  mediaManipulator,
  creatv,
  financeFlow,
  mp3DrivePlayer,
  journeyApp,
  voizy,
  quantumRiver,
  textFormatter,
  aspireToExpand,
].sort((a, b) => a.order - b.order);

export const projectsByTier = (tier: Project["tier"]) => projects.filter((p) => p.tier === tier);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

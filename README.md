# winapps_next

Source for [www.winapps.io](https://www.winapps.io), Mitch Wintrow's portfolio: projects, client and employer work, and Winny, the site's AI assistant.

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · framer-motion · PostHog. Winny's backend lives in the separate `winapps-api` repo.

## Scripts
| Command | What it does |
|---|---|
| `npm run dev` | Dev server (Turbopack) on http://localhost:3000 |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | `eslint .` (flat config, `eslint-config-next`) |
| `npm run test` | Vitest (`content/**`, `lib/**`) |
| `npm run check` | typecheck + lint + test; run with `build` before every commit |

Requires Node 24 (`.nvmrc`; `nvm use`). `scripts/convert.*` are local media helpers (video → GIF), not part of the build.

## Environment variables
Set in `.env.local` for development and in Vercel for production. Names only, never commit values.
- `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`: analytics
- `NEXT_PUBLIC_WINNY_API_URL`: Winny backend base URL (defaults to `https://winny-ai.winapps.dev`)
- `NEXT_PUBLIC_FB_API_KEY`, `NEXT_PUBLIC_FB_AUTH_DOMAIN`, `NEXT_PUBLIC_FB_PROJECT_ID`, `NEXT_PUBLIC_FB_STORAGE_BUCKET`, `NEXT_PUBLIC_FB_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FB_APP_ID`, `NEXT_PUBLIC_FB_MEASUREMENT_ID`, `NEXT_PUBLIC_MP_TOKEN`: legacy Firebase / Mixpanel analytics, slated for removal
- `NEXT_PUBLIC_NODE_ENV`: gates the ad banner in `components/ad-banner.tsx`

## Deploy
Vercel, from `main`. Images and video are served from Cloudflare R2 (hosts listed in `next.config.ts`).

## Plans
The 2026 revamp plan, tickets and decisions live in [`../docs-winapps/`](../docs-winapps/README.md).

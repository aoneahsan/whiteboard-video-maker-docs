# Whiteboard Video Maker Docs — Agent Rules

Public documentation site for **Whiteboard Video Maker** (app: https://wbamai.aoneahsan.com).
Built with **Docusaurus 3**. This is a **PUBLIC** repo — it must contain **NO secrets**.

| Property | Value |
|----------|-------|
| Type | Docusaurus 3 documentation site |
| App docs URL | https://docs.wbamai.aoneahsan.com |
| App (product) URL | https://wbamai.aoneahsan.com |
| Hosting | Firebase Hosting + GitHub Pages (dual-host, same `build/`) |
| Package manager | yarn ONLY |
| Repo visibility | PUBLIC (no secrets, ever) |

## Rules

- **yarn only** — no npm/pnpm; only `yarn.lock`. `nvm`→`npm`(global)→`yarn`(local) hierarchy.
- **No secrets in this repo** (it is public). No `.env` committed; keep it gitignored.
- **Honest content only** — document the REAL product. Export is **WebM + animated GIF, NOT MP4**.
  State limits as clearly as features (Task Speed Over Docs still applies to meta-work).
- **SEO floor** — `static/robots.txt` (AI-bot allowlist + `Sitemap:`), Docusaurus-generated
  `sitemap.xml`, `static/llms.txt`, JSON-LD (WebSite + SoftwareApplication + Organization) in
  `docusaurus.config.ts`, per-page front-matter `description` + `keywords`.
- **Verify** with `yarn build` + `yarn typecheck` (never run dev servers as a "verification").
- **Deploy is USER-ONLY** — see `DEPLOY.md`. The agent never deploys.
- **Content tracker:** `docs/tracking/whiteboard-video-maker-docs-content-tracker.json` (resumable
  long-tail SEO enrichment).

## Commands

```bash
yarn install
yarn build       # static build into ./build  (verification gate)
yarn typecheck   # tsc --noEmit
yarn start       # dev server (port 5962) — USER runs this, not the agent
```

_Last Updated: 2026-06-24_


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

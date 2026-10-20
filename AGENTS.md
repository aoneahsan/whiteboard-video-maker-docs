# Whiteboard Video Maker — public docs

**Last Updated:** 2026-10-20
**Context pass:** 2026-10-14; next routine optimization eligible 2026-11-13.

This is the independent, public `aoneahsan/whiteboard-video-maker-docs` repository on `main`, nested under `../whiteboard-animation-maker-root/`. It uses Docusaurus 3.10.2 and Yarn 4. Read the target page and current product behavior before updating a claim. The product app is the sibling `../whiteboard-animation-maker/` checkout; its old Firebase backend is outside this maintenance pass.

## Routing and content

- `docs/` holds guides and reference material; `src/pages/index.tsx` and `src/pages/index.module.css` own the docs landing page; `src/css/custom.css` owns shared theme tokens.
- Keep feature and export claims factual. Browser export is WebM and animated GIF, not MP4. Do not invent measurements, testimonials, supported integrations or platform status.
- Pages need front matter and working links. `docusaurus.config.ts`, `static/robots.txt`, `static/llms.txt` and generated sitemap define search metadata. Check visible content against schema claims.
- This public repository must not contain secrets or a working `.env`. Use optional GitHub Actions secrets only through the workflow; keep source files secret-free.

## Verification and release

Use `yarn install --immutable`, `yarn typecheck`, and `yarn build`. Preview built output in a controlled desktop and mobile browser before pushing. The `.github/workflows/deploy-pages.yml` workflow publishes `build/` to GitHub Pages on each `main` push; custom domain is `wbamai-docs.aoneahsan.com` with HTTPS enforced. `DEPLOY.md` gives the current check path. An older Firebase Hosting deployment is historical and is not the target of this pass.

Fetch and merge remote changes immediately before committing and pushing directly to `main`. Review the full diff and confirm the Pages workflow and live URL after push. Never force-push. Follow the workspace 30-day context cadence rather than the older three-day instructions.

## Stop-work Git gate

<!-- RULE:stop-work-git-gate v2026-10-20 -->

Before stopping, commit every legitimate change and work-progress checkpoint in this repository and each independent nested repository, fetch and merge the designated upstream, push the documented working branch, then verify an empty worktree and `0 0` ahead/behind. Never stash, discard, reset, rebase, or force-push. If synchronization is blocked, report the exact repository, branch, blocker, and next action instead of calling the work complete. The full workflow remains authoritative in `~/.claude/rules/git-workflow.md`.

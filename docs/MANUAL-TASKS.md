# Manual / User-Only Tasks — Whiteboard Video Maker Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-10-14

## ⏳ Pending manual tasks

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| 1 | **Confirm DNS ownership.** The live hostname currently resolves to GitHub Pages and returns HTTPS 200; confirm the intended Hostinger record is under your control. | Only you control the DNS zone. | ☐ Owner confirmation pending |
| 2 | **Confirm Pages settings.** GitHub's API currently reports the custom domain and HTTPS enforcement; confirm the intended repository settings. | Repo settings are owner-only. | ☐ Owner confirmation pending |

`static/CNAME` ships the custom domain inside `build/`, and `.github/workflows/deploy-pages.yml` publishes on each `main` push. The agent's 2026-10-14 checks observed DNS, GitHub Pages configuration and a live HTTPS response; these owner-only confirmations remain unchecked until the owner closes them.

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| — | — | — | — |

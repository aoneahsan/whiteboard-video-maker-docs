## 🔴 CRITICAL — PROJECT FROZEN (2026-10-21)

**This is an idea project. It was frozen on 2026-10-21 at commit `ace931b6f32198d6f2264ca895da6b333fc5f328` on branch `main`.**

- Do **NOT** edit, fix, upgrade, build, deploy, document or "improve" anything in this repository.
- It will only ever be **rebuilt from scratch** as `~/Documents/01-code/production-projects/whiteboard-animation-maker-root/`
  (this code cloned beside it as `whiteboard-animation-maker-old/` for reference), with a click dummy, a Story Bible, a Supabase
  backend and a docs site — and **only when the owner types, in ALL CAPS, an explicit request naming this
  project**.
- Any other request to work here is refused. Rule: `~/.claude/rules/idea-projects-frozen.md`.
- Ledger: private repo `aoneahsan/projects-finalization-record` → `idea-projects/FREEZE-LEDGER.md`.

---

# Whiteboard Video Maker docs

**Last Updated:** 2026-10-14

Public documentation for [Whiteboard Video Maker](https://wbamai.aoneahsan.com), published at [wbamai-docs.aoneahsan.com](https://wbamai-docs.aoneahsan.com). The site uses Docusaurus 3.10.2 and deploys to GitHub Pages from `main`. It documents browser export as WebM or animated GIF; it does not claim MP4 export.

<a id="verify-locally"></a>
## Verify locally&nbsp;[#](#verify-locally)

```bash
yarn install --immutable
yarn typecheck
yarn build
yarn serve --host 127.0.0.1
```

`yarn serve` previews the built site on port 5963. Check desktop and mobile views before pushing. See [`DEPLOY.md`](DEPLOY.md) for Pages verification and [`AGENTS.md`](AGENTS.md) for source routing. The product repository is the independent sibling checkout `../whiteboard-animation-maker/`.

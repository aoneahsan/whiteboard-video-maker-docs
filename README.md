# Whiteboard Video Maker — Documentation

Public documentation site for **[Whiteboard Video Maker](https://wbamai.aoneahsan.com)**, a free
browser- and mobile-based whiteboard-animation video editor.

- **App:** https://wbamai.aoneahsan.com
- **Docs (this site):** https://docs.wbamai.aoneahsan.com
- **Built with:** [Docusaurus 3](https://docusaurus.io)
- **Hosting:** Firebase Hosting **and** GitHub Pages (dual-host — same `build/` output)

## Local development

```bash
yarn install
yarn start     # dev server on http://localhost:5962
yarn build     # static build into ./build
yarn typecheck # tsc --noEmit
```

> This repo is **yarn-only**. Do not commit `package-lock.json` or `pnpm-lock.yaml`.

## Structure

```
docs/                 Markdown docs (intro, getting-started, features, guides, reference, faq, author)
src/pages/index.tsx   Landing page
src/css/custom.css    Violet brand theme
static/               robots.txt, llms.txt, CNAME, img/ (logo, favicon, social-card)
docusaurus.config.ts  Site config + SEO head tags + JSON-LD
sidebars.ts           Sidebar layout
firebase.json         Firebase Hosting config
.github/workflows/    GitHub Pages deploy workflow
```

## Deploying

See [`DEPLOY.md`](./DEPLOY.md). Both hosting paths are **user-only** actions.

## License

Documentation © Ahsan Mahmood. Built with Docusaurus.

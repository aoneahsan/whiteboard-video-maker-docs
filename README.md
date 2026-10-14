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

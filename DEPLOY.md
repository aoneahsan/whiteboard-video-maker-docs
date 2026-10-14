# Deploy Whiteboard Video Maker docs

**Last Updated:** 2026-10-14

The public docs repository deploys through [GitHub Pages](https://github.com/aoneahsan/whiteboard-video-maker-docs/actions/workflows/deploy-pages.yml) on pushes to `main`. The workflow uses Node 24, runs `yarn install --immutable` and `yarn build`, uploads `build/`, then publishes with the official Pages action. The repository's Pages settings name `wbamai-docs.aoneahsan.com` and enforce HTTPS. `static/CNAME` is copied into the build.

Before pushing, run `yarn typecheck`, `yarn build`, and inspect the built home at desktop and mobile widths. After pushing, confirm the Pages workflow succeeds, then check the live home, `/sitemap.xml`, `/robots.txt`, and `/llms.txt` over HTTPS.

The July 2026 Firebase Hosting deployment at `whiteboard-video-maker-docs.web.app` is historical. It is not redeployed in this maintenance pass. Do not attach billing or change hosting targets as part of a docs update. No secret is committed to this public repository.

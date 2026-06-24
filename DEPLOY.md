# Deploying the docs (USER-ONLY)

The docs build is automated; **deploying is a user-only action.** Two hosting targets serve the
same `build/` output. Pick one as canonical (DNS can only point `docs.wbamai.aoneahsan.com` at one);
the other is a redundant mirror.

## Prerequisites

```bash
yarn install
yarn build      # outputs ./build
```

## Option A — Firebase Hosting

1. Create/confirm a Firebase Hosting site named **`whiteboard-video-maker-docs`** (see `.firebaserc`).
2. Deploy:
   ```bash
   yarn firebase:deploy
   # = yarn build && npx -y firebase-tools@latest deploy --only hosting --project whiteboard-video-maker-docs
   ```
3. Attach the custom domain `docs.wbamai.aoneahsan.com` in the Firebase Hosting console and add the
   DNS records it shows.

## Option B — GitHub Pages

1. In the repo: **Settings → Pages → Source = GitHub Actions**.
2. Push to `main` — `.github/workflows/deploy-pages.yml` builds and publishes automatically.
3. The custom domain comes from `static/CNAME` (`docs.wbamai.aoneahsan.com`). Add the matching DNS
   `CNAME` record at your DNS provider and enable "Enforce HTTPS" in the Pages settings.

> Use **one** target for the custom domain; the DNS `CNAME`/A records can only resolve to one host.

## Post-deploy checks

- `https://docs.wbamai.aoneahsan.com/robots.txt` resolves and lists the AI bots + `Sitemap:`.
- `https://docs.wbamai.aoneahsan.com/sitemap.xml` resolves (Docusaurus generates it at build).
- `https://docs.wbamai.aoneahsan.com/llms.txt` resolves.
- Submit the sitemap in Google Search Console + Bing Webmaster Tools.

## Secrets

This is a **public** repo — never commit secrets. No deploy secrets are stored here; Firebase auth
uses your local CLI login, and GitHub Pages uses the repo's built-in `GITHUB_TOKEN`.

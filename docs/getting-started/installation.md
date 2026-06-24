---
id: installation
title: Installation & Access
sidebar_label: Installation
sidebar_position: 1
description: Open Whiteboard Video Maker in any browser, or install the Android and iOS apps. No download is required to use the web editor.
keywords: [whiteboard video maker install, web app, android app, ios app, capacitor]
---

# Installation & Access

**You do not need to install anything to use Whiteboard Video Maker — the editor runs in any modern web browser.** Native Android and iOS builds wrap the same app for an installable, full-screen experience.

## Use it on the web (no install)

1. Open **[wbamai.aoneahsan.com](https://wbamai.aoneahsan.com)** in Chrome, Edge, Firefox, or Safari.
2. Click **Open the Editor** (or visit `/editor`).
3. Start drawing — no account is required for a one-off video.

The web app is a Progressive Web App, so you can also use your browser's **"Install app"** / **"Add to Home Screen"** option to get an app-like window and launcher icon.

### Browser support

| Browser | Editing | WebM export | GIF export |
|---|---|---|---|
| Chrome / Edge (desktop) | Full | Full (WebCodecs) | Full |
| Firefox (desktop) | Full | Supported (MediaRecorder fallback) | Full |
| Safari (desktop) | Full | Supported (MediaRecorder fallback) | Full |
| Chrome / Safari (mobile web) | Full | Supported | Full |

WebCodecs gives the fastest, highest-quality WebM encode. Where it is unavailable the app automatically falls back to `MediaRecorder`. See [Export formats](../reference/export-formats.md) for details.

## Install the mobile app

The Android and iOS apps are the same React app wrapped with **Capacitor 8**. Install from your platform's store when published, then open it like any native app — no separate setup is needed.

On mobile you get a full-screen editor, native share sheet, splash screen, and edge-to-edge layout. Functionality matches the web app; export still happens on-device.

## Sign in (optional)

Signing in with Google unlocks:

- Saving projects to the cloud (Firebase Firestore)
- Syncing projects across your devices
- Version history

Everything else — drawing, narration, and export — works without an account. See [Save & sync projects](../guides/save-and-sync-projects.md).

## What it costs

Nothing. Whiteboard Video Maker is free with no usage caps and no watermark. If it saves you time, you can [support the project](https://aoneahsan.com/payment?project-id=wbamai&project-identifier=com.aoneahsan.wbamai) — entirely optional.

## Next

- **[Quick Start →](./quick-start.md)** — your first animation in a few minutes.

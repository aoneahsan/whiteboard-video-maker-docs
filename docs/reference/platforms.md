---
id: platforms
title: Platforms
sidebar_label: Platforms
sidebar_position: 2
description: Whiteboard Video Maker runs on the web and as native Android and iOS apps via Capacitor 8, sharing one React codebase with on-device export everywhere.
keywords: [web app, android, ios, capacitor 8, cross platform, pwa]
---

# Platforms

**Whiteboard Video Maker is one React app that runs on the web and ships to Android and iOS through Capacitor 8.** The feature set is the same across platforms; differences come from the underlying browser/OS.

## Web

- Runs in Chrome, Edge, Firefox, and Safari.
- Installable as a PWA ("Add to Home Screen").
- Best export performance on Chromium browsers (WebCodecs).

## Android & iOS

- Native shells built with **Capacitor 8** wrapping the same web app.
- Full-screen editor, native splash screen, and native share sheet.
- **Edge-to-edge layout** is handled so content sits correctly below the status bar and above the navigation bar on Android 15+.
- Export still happens **on-device** — no cloud render.

## What's shared vs platform-specific

| Area | Shared | Platform-specific |
|---|---|---|
| Editor, timeline, export logic | Yes | — |
| Storage (Preferences) | API shared | Native KV on mobile, localStorage-equivalent on web |
| Share | Same contract | Web modal vs native share sheet |
| Sign-in | Google | Web popup is the primary path today |
| Text-to-speech voices | Web Speech API | Voice sets differ per OS/browser |

## Capacitor plugins in use

The mobile builds use official Capacitor and Capawesome plugins for app lifecycle, share, splash screen, preferences, network, device info, haptics, browser, clipboard, dialog, toast, privacy screen, badge, app review, app update, app shortcuts, and Android edge-to-edge support.

## Performance expectations

Because rendering and encoding run on the device, mobile and lower-powered machines take longer to export long, high-resolution projects. For drafts on mobile, prefer 480p/720p.

## Related

- [Export formats](./export-formats.md)
- [Privacy & data](./privacy-and-data.md)

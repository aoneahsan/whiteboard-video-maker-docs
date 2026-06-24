---
id: privacy-and-data
title: Privacy & Data
sidebar_label: Privacy & data
sidebar_position: 3
description: What Whiteboard Video Maker stores and what stays on your device — exported videos never touch the developer's servers; projects sync only when you sign in.
keywords: [privacy, data, gdpr, account deletion, firestore, fileshub, local rendering]
---

# Privacy & Data

**Whiteboard Video Maker renders and exports on your device, and your exported videos are never stored on the developer's servers.** This page summarizes what is stored and where. The authoritative legal text lives in the app's [Privacy Policy](https://wbamai.aoneahsan.com/privacy), [Terms](https://wbamai.aoneahsan.com/terms), and [Data Deletion](https://wbamai.aoneahsan.com/data-deletion) pages.

## What stays on your device

- **Rendering & encoding** — every export frame is rendered and encoded in your browser.
- **Exported WebM / GIF files** — they download straight to your device. They are never uploaded to render or stored server-side.
- **Signed-out projects** — exist only in the current session.

## What is stored when you sign in

| Data | Where | Why |
|---|---|---|
| Project structure (elements, timeline, settings) | Firebase Firestore | So you can save, reopen, and sync projects |
| Uploaded images ("My Assets") | FilesHub storage | So your asset library follows you |
| Account profile (name, email, photo from Google) | Firestore | To identify your account |
| Preferences (theme, etc.) | Device + Firestore | To restore your settings across devices |

## Analytics & error tracking

The app can use privacy-respecting analytics (Firebase Analytics, Microsoft Clarity, Amplitude) and error tracking (Sentry) **only when their keys are configured**, and analytics respects your cookie-consent choice. A GDPR consent banner governs analytics opt-in.

## Permissions

- **Microphone** — only if you use the in-app voice recorder; requested at that moment, not at launch.
- No camera, location, contacts, or other sensitive permissions are required for the core editor.

## Deleting your data

Use the in-app account-deletion flow at [`/data-deletion`](https://wbamai.aoneahsan.com/data-deletion) to remove your account, stored projects, and uploaded assets.

## Honest framing

The app describes itself as privacy-first because rendering is local and exports never leave your device. It does **not** claim end-to-end encryption or that "no data ever leaves your device" — signed-in users do sync project metadata and uploaded media to Firestore/FilesHub by design. Use it signed-out if you want nothing stored.

## Related

- [Save & sync projects](../guides/save-and-sync-projects.md)
- [Platforms](./platforms.md)

---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
sidebar_position: 90
description: Answers to common questions about Whiteboard Video Maker — cost, export formats, platforms, accounts, narration, privacy, and limits.
keywords: [whiteboard video maker faq, is it free, export format, mp4, webm, gif, watermark]
---

# Frequently Asked Questions

## Is Whiteboard Video Maker free?

Yes. It is free with no usage caps and no watermark. There is an optional way to [support the project](https://aoneahsan.com/payment?project-id=wbamai&project-identifier=com.aoneahsan.wbamai), but every feature works for free.

## Does it add a watermark to my videos?

No. Exported videos and GIFs have no watermark.

## What video format does it export?

It exports **WebM** video (VP9 video, Opus audio) and **animated GIF**. It does **not** export MP4 directly. WebM plays in modern browsers and most platforms; if you need MP4, convert the exported WebM with a separate converter. See [Export formats](./reference/export-formats.md).

## Why WebM instead of MP4?

WebM/VP9 is royalty-free and can be encoded entirely in the browser via the WebCodecs API, which keeps the app free and fully client-side. MP4/H.264 browser encoding is encumbered and inconsistent across browsers.

## Do I need an account?

No — drawing, narration, and export work signed-out. Signing in with Google adds saving, cross-device sync, and version history. See [Save & sync projects](./guides/save-and-sync-projects.md).

## Where are my videos stored?

Nowhere but your own device. Rendering happens in your browser and the exported file downloads directly to you. Project metadata and uploaded images sync to the cloud only when you are signed in. See [Privacy & data](./reference/privacy-and-data.md).

## Can I use it on my phone?

Yes. It runs in mobile browsers and as native Android and iOS apps (Capacitor). Export runs on-device, so longer/high-resolution clips take more time on phones. See [Platforms](./reference/platforms.md).

## How does narration work without a paid TTS service?

It uses your browser/OS **Web Speech API** for text-to-speech, so there is no paid API. You can also record your own voice and mix audio tracks. Available voices vary by platform. See [Audio & narration](./features/audio-narration.md).

## What board styles are available?

Whiteboard, blackboard, glassboard, and greenscreen. Greenscreen is handy for compositing the animation over other footage. See [Board styles](./features/board-styles.md).

## Why is my export slow?

Rendering and encoding use your device's CPU/GPU rather than a server. Long, high-resolution projects take longer, especially on phones or older machines. Try a lower resolution (480p/720p) for drafts, and keep the tab in the foreground during export.

## Can I composite the animation over a video?

Yes — use the **greenscreen** board, export to WebM, then chroma-key the green out in your video editor.

## How do I delete my data?

Use the in-app account-deletion flow at [`/data-deletion`](https://wbamai.aoneahsan.com/data-deletion); it removes your account, projects, and uploaded assets.

## Who makes it?

It is built and maintained by Ahsan Mahmood. See [About the author](./about-the-author.md).

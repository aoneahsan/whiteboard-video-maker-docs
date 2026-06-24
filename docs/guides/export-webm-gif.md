---
id: export-webm-gif
title: Export to WebM or GIF
sidebar_label: Export WebM / GIF
sidebar_position: 2
description: How export works in Whiteboard Video Maker — choose WebM video or animated GIF, pick a resolution and quality, include audio, and understand the limits.
keywords: [export webm, export gif, whiteboard video export, webcodecs, resolution, render]
---

# Export to WebM or GIF

**Whiteboard Video Maker renders your animation in the browser and exports it as a WebM video or an animated GIF — there is no cloud render and no watermark.** This page explains the options and the trade-offs.

## Choose a format

| Format | Audio | Best for | Notes |
|---|---|---|---|
| **WebM** | Yes | The final video you publish/upload | VP9 video + Opus audio, muxed in-browser. Plays in modern browsers and most platforms. |
| **Animated GIF** | No | Short loops, embeds, previews | Larger file size per second; no sound; limited colors. |

> **There is no MP4 export.** WebM is the video output. If a destination strictly needs MP4, convert the exported WebM with a separate converter afterward.

## Choose a resolution

- **480p** (854×480) — fastest, smallest files, good for drafts and quick shares.
- **720p** (1280×720) — the balanced default for most uses.
- **1080p** (1920×1080) — sharpest, but the largest files and the longest encode.

## Quality & audio options

- **Quality** — low / medium / high trades file size against fidelity.
- **Include audio** — mux your mixed narration/music into the WebM (WebM only).

## How the render works

1. The app deterministically renders each frame of your timeline on the canvas.
2. Frames are encoded with the **WebCodecs API** and packaged with **webm-muxer** into a WebM container.
3. Where WebCodecs is unavailable, the app falls back to **MediaRecorder**.
4. GIFs are encoded with **gif.js** using a web worker.

Everything happens on your device, so nothing is uploaded to render.

## Frame export

Need stills or a frame sequence (e.g. to assemble in another tool)? Use **frame export** to save individual frames or a numbered sequence.

## Embed & share

- **Embed code** — generate a snippet to embed the result.
- **Share** — on mobile the native share sheet; on the web an in-app share modal (copy link + social).

## Practical limits (honest)

- **Long, high-res projects take longer to encode** because the render uses your CPU/GPU, not a server. Expect more time on slower devices.
- **Very long GIFs get large fast.** Prefer WebM for anything beyond a few seconds with audio.
- **Keep the tab active** during export so the browser doesn't throttle the worker.

## Related

- [Export formats reference](../reference/export-formats.md)
- [Audio & narration](../features/audio-narration.md)

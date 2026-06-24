---
id: export-formats
title: Export Formats Reference
sidebar_label: Export formats
sidebar_position: 1
description: Technical reference for Whiteboard Video Maker export — WebM (VP9/Opus via WebCodecs + webm-muxer), animated GIF (gif.js), resolutions, and browser fallbacks.
keywords: [webm vp9 opus, gif export, webcodecs, mediarecorder, webm-muxer, gif.js, export reference]
---

# Export Formats Reference

**Whiteboard Video Maker exports two formats — WebM video and animated GIF — both encoded in the browser.** This page is the technical detail behind the [export guide](../guides/export-webm-gif.md).

## WebM video

| Property | Value |
|---|---|
| Container | WebM |
| Video codec | VP9 |
| Audio codec | Opus (when audio is included) |
| Encoder | WebCodecs API → `webm-muxer` |
| Fallback | `MediaRecorder` when WebCodecs is unavailable |
| Audio | Muxed in-browser into the WebM |

WebM is widely supported in modern browsers and on most platforms. It is the recommended output for publishing.

## Animated GIF

| Property | Value |
|---|---|
| Format | Animated GIF |
| Encoder | `gif.js` (runs in a web worker) |
| Audio | None (GIF has no audio) |
| Color | Palette-limited (inherent to GIF) |

GIF is ideal for short, silent loops and embeds. File size grows quickly with length and resolution.

## Resolutions

| Preset | Dimensions |
|---|---|
| 480p | 854 × 480 |
| 720p | 1280 × 720 |
| 1080p | 1920 × 1080 |

## Quality

Low / medium / high control the encoder's bitrate/effort, trading file size against visual fidelity.

## Why no MP4?

MP4/H.264 encoding in the browser is encumbered and not consistently available across browsers without large extra dependencies. WebM (VP9) is royalty-free and natively encodable via WebCodecs, which keeps the app free, dependency-light, and fully client-side. **To get MP4, export WebM and convert it** with any standard converter.

## Browser support notes

- **Chrome / Edge** — best path; WebCodecs gives fast, high-quality WebM.
- **Firefox / Safari** — supported via the `MediaRecorder` fallback; encode characteristics differ slightly.
- **Mobile web** — supported; longer encodes are CPU-bound on the device.

Keep the tab in the foreground during export so the browser does not throttle the encoding worker.

## Related

- [Export to WebM or GIF](../guides/export-webm-gif.md)
- [Platforms](./platforms.md)

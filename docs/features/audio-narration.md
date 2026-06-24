---
id: audio-narration
title: Audio & Narration
sidebar_label: Audio & narration
sidebar_position: 5
description: Add voiceovers with browser text-to-speech, record your own narration, mix and trim audio tracks, and add sound effects — all without paid audio APIs.
keywords: [text to speech, narration, voice recording, audio mixer, sound effects, web speech api]
---

# Audio & Narration

**You can narrate a whiteboard animation without any paid text-to-speech service — Whiteboard Video Maker uses the browser's built-in Web Speech API, plus in-app voice recording and audio mixing.**

## Text-to-speech narration

Type your script and generate a voiceover with the **Web Speech API** (the same speech engine your browser/OS already provides). Because it is built into the platform, it is free and requires no API key.

- **Voice selection** — choose from the voices your browser/OS exposes.
- **Per-element timing** — align narration to the timeline so words land with the visuals.

> **Honest limit:** the available voices and their quality depend on your browser and operating system. Desktop Chrome, Edge, Safari, Android, and iOS all expose different voice sets. Preview before exporting.

## Record your own voice

Prefer a human voice? Use the in-app **voice recorder** to capture narration directly, then place it on the timeline. This needs microphone permission, which your browser/OS will prompt for.

## Mix and trim audio

- **Audio upload** — add background music or pre-recorded narration (MP3, WAV, OGG, M4A).
- **Audio mixer** — layer multiple tracks and balance their levels.
- **Audio trimmer** — cut tracks to length with a waveform view.
- **Volume keyframes** — automate volume over time (e.g. duck music under narration).

## Sound effects

Add **sound effects** from the built-in library to emphasize reveals and transitions.

## Synced text animation

Tie text reveals to your narration so captions appear exactly as they are spoken — useful for accessibility and for viewers who watch muted.

## What ends up in the export

When you export to **WebM**, your mixed audio is muxed into the video file. **GIF export is silent** (the format has no audio). See [Export to WebM or GIF](../guides/export-webm-gif.md).

## Related

- [Timeline & keyframes](./timeline-keyframes.md)
- [Export formats](../reference/export-formats.md)

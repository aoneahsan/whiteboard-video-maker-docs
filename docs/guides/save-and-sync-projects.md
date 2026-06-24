---
id: save-and-sync-projects
title: Save & Sync Projects
sidebar_label: Save & sync projects
sidebar_position: 3
description: Sign in with Google to save Whiteboard Video Maker projects to the cloud, sync them across devices, keep version history, and reuse templates.
keywords: [save project, sync, google sign in, version history, templates, firestore]
---

# Save & Sync Projects

**Whiteboard Video Maker works signed-out for one-off videos, but signing in with Google lets you save projects to the cloud, sync them across devices, and keep version history.**

## Sign in

Use **Sign in with Google** in the app. On the web this opens a Google sign-in popup. Once signed in, your dashboard lists your saved projects.

> **Mobile note:** native Google sign-in on the Android/iOS apps depends on platform setup; the web sign-in is the primary path today. See the project's release notes for native auth status.

## Save a project

From the editor, save your work to your account. Saved projects are stored in **Firebase Firestore** under your user, so they appear on any device where you sign in.

## Sync across devices

Because projects live in Firestore, opening the app on another device and signing in shows the same project list. Your settings (theme, preferences) also sync.

## Version history

Each project keeps a **version history** so you can review or roll back to an earlier state — useful when an edit goes wrong or you want to branch an idea.

## Templates

Turn a project into a reusable **template** so you can start new videos from a known layout and timing instead of a blank board.

## What's stored where

| Data | Where | Requires account |
|---|---|---|
| Project structure (elements, timeline, settings) | Firestore | Yes |
| Your uploaded images | FilesHub storage | Yes |
| Exported videos/GIFs | Downloaded to your device only | No |
| App preferences (theme, etc.) | Device + Firestore | Syncs when signed in |

Exported files are **never** kept on the developer's servers — they download straight to your device. See [Privacy & data](../reference/privacy-and-data.md).

## Deleting your data

You can delete your account and associated data from the app's account-deletion flow (`/data-deletion`). This removes your stored projects and uploaded assets.

## Related

- [Privacy & data](../reference/privacy-and-data.md)
- [Platforms](../reference/platforms.md)

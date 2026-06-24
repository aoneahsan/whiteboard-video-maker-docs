import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for Whiteboard Video Maker docs.
 * Every entry maps to a real page that exists in `docs/`.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/overview',
        'features/board-styles',
        'features/drawing-tools',
        'features/timeline-keyframes',
        'features/audio-narration',
        'features/assets-libraries',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/create-first-video',
        'guides/export-webm-gif',
        'guides/save-and-sync-projects',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/export-formats',
        'reference/platforms',
        'reference/privacy-and-data',
      ],
    },
    'faq',
    'about-the-author',
  ],
};

export default sidebars;

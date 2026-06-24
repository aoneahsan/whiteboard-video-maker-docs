import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// Whiteboard Video Maker — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://wbamai.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://docs.wbamai.aoneahsan.com';
const APP_URL = 'https://wbamai.aoneahsan.com';

const config: Config = {
  title: 'Whiteboard Video Maker Docs',
  tagline: 'Create hand-drawn whiteboard-animation videos in your browser or on mobile — free, no watermark.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: '/',

  organizationName: 'aoneahsan',
  projectName: 'whiteboard-video-maker-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags injected into every page on top of the
  // per-page metadata Docusaurus emits. The JSON-LD payloads (WebSite,
  // SoftwareApplication, Organization) help Google Rich Results, Perplexity,
  // ChatGPT, and Claude extract structured entity data when citing these docs.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/xml',
        title: 'Whiteboard Video Maker Docs sitemap',
        href: `${SITE_URL}/sitemap.xml`,
      },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'Whiteboard Video Maker Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'WVM Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#8B5CF6' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Whiteboard Video Maker Documentation',
        url: SITE_URL,
        description:
          'Documentation for Whiteboard Video Maker — a free, browser- and mobile-based whiteboard-animation video editor. Draw, sequence a timeline, narrate, and export WebM video or animated GIF entirely in the browser.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Whiteboard Video Maker',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web, Android, iOS',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        sameAs: [APP_URL, 'https://github.com/aoneahsan'],
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'Free whiteboard-style animation video editor for the browser and mobile. Hand-drawn sketch strokes (RoughJS), a layered keyframe timeline, text-to-speech narration, and client-side WebM + animated GIF export.',
        featureList: [
          'Whiteboard, blackboard, glassboard, and greenscreen board styles',
          'Hand-drawn sketch tools (pen, shapes, arrows, text, images)',
          'Layered timeline with per-element keyframes',
          'Text-to-speech narration via the Web Speech API',
          'Client-side WebM video and animated GIF export',
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/whiteboard-video-maker-docs/edit/main/',
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Documentation for Whiteboard Video Maker — a free browser + mobile whiteboard-animation video editor. Draw, sequence, narrate, and export WebM or animated GIF. Maintained by Ahsan Mahmood.',
      },
      {
        name: 'keywords',
        content:
          'whiteboard animation, whiteboard video maker, explainer video, hand-drawn animation, sketch animation, doodle video, free whiteboard animation, browser video editor, capacitor app, webm export, gif export, text to speech narration',
      },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Whiteboard Video Maker Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'Whiteboard Video Maker',
      logo: {
        alt: 'Whiteboard Video Maker logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open the app', position: 'right' },
        { href: 'https://github.com/aoneahsan', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Installation', to: '/getting-started/installation' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open the app', href: APP_URL },
            { label: 'Features', href: `${APP_URL}/features` },
            { label: 'Pricing', href: `${APP_URL}/pricing` },
            { label: 'Support the project', href: 'https://aoneahsan.com/payment?project-id=wbamai&project-identifier=com.aoneahsan.wbamai' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood. Built with Docusaurus. Whiteboard Video Maker is free to use.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

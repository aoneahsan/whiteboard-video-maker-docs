import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const APP_URL = 'https://wbamai.aoneahsan.com';

const FEATURES: { title: string; body: string }[] = [
  {
    title: 'Hand-drawn, by design',
    body: 'RoughJS sketch strokes give pens, shapes, arrows, and text an authentic whiteboard look across four board styles.',
  },
  {
    title: 'A real keyframe timeline',
    body: 'Sequence every element on a layered timeline with per-element keyframes, draw order, transitions, and a follow-along hand.',
  },
  {
    title: 'Narration without paid APIs',
    body: 'Add voiceovers with the browser Web Speech API, record your own voice, mix audio tracks, and drop in sound effects.',
  },
  {
    title: 'Export in the browser',
    body: 'Render WebM video (WebCodecs) or animated GIF entirely client-side — no upload, no server render cost, no watermark.',
  },
  {
    title: 'Web and mobile',
    body: 'The same React app runs in any modern browser and ships to Android and iOS through a Capacitor 8 wrapper.',
  },
  {
    title: 'Free, and yours',
    body: 'No subscription and no usage caps. Sign in to save and sync projects, or use it signed-out for one-off videos.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/getting-started/quick-start">
            Quick Start
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/intro">
            Read the docs
          </Link>
          <Link className="button button--primary button--lg" href={APP_URL}>
            Open the app
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Documentation`}
      description="Documentation for Whiteboard Video Maker, a free browser + mobile whiteboard-animation video editor. Draw, sequence a timeline, narrate, and export WebM or animated GIF."
    >
      <HomepageHeader />
      <main className="container">
        <section className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <Heading as="h3">{f.title}</Heading>
              <p>{f.body}</p>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

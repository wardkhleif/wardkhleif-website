/**
 * The journey timeline.
 *
 * ⚠️  EVERY `body` BELOW IS A PLACEHOLDER — replace them with what actually
 * happened. This section only works if it's specific. "I got curious about
 * programming" is filler; "I spent a weekend failing to get a table view to
 * scroll smoothly and finally understood cell reuse" is a story.
 *
 * Rules of thumb:
 *  - One concrete detail per entry beats three general claims.
 *  - Include the things that went wrong. They're more convincing than wins.
 *  - Keep `body` to 1–2 sentences. The year does the structural work.
 */

export type JourneyEntry = {
  /** Displayed marker — a year, or a range like '2024 — now'. */
  year: string;
  title: string;
  body: string;
  /** Marks the entry as the current state; rendered with a live indicator. */
  current?: boolean;
};

export const journey: JourneyEntry[] = [
  {
    year: 'PLACEHOLDER',
    title: 'The first time code did something',
    body:
      'REPLACE ME — what was the actual first thing you wrote that worked, and what made you keep going? Name the language, the tutorial, the person who showed you.',
  },
  {
    year: 'PLACEHOLDER',
    title: 'Started computer science',
    body:
      'REPLACE ME — which university, and what surprised you about it. Was the theory harder or easier than you expected? Did it change how you build?',
  },
  {
    year: 'PLACEHOLDER',
    title: 'First thing I shipped to someone else',
    body:
      'REPLACE ME — the first time a person who was not you used something you made. What broke when they did?',
  },
  {
    year: 'PLACEHOLDER',
    title: 'The project that taught me the most by failing',
    body:
      'REPLACE ME — something you abandoned or rebuilt. What did you get wrong, and what do you do differently now because of it?',
  },
  {
    year: 'PLACEHOLDER',
    title: 'Where I am now',
    body:
      'REPLACE ME — what you are building this month, what you are studying, what you are trying to get good at next.',
    current: true,
  },
];

/**
 * Skills, grouped by where they actually get used.
 * Deliberately no proficiency bars — nobody believes "React 85%".
 * Only list things you would be comfortable being asked about in an interview.
 */
export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['Swift', 'TypeScript', 'Python', 'JavaScript'] },
  { label: 'Mobile', items: ['SwiftUI', 'PhotoKit', 'AVFoundation', 'Vision'] },
  { label: 'Web', items: ['Astro', 'Chrome Extensions', 'REST APIs', 'OAuth 2.0'] },
  { label: 'Tooling', items: ['Git', 'Firestore', 'Xcode', 'Figma'] },
];

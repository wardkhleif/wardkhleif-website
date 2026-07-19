export type Project = {
  slug: string; name: string; subtitle?: string; shortDescription: string; fullDescription: string;
  status: string; platform: string; technologies: string[]; accent: string; detailUrl: string;
  externalUrl: string; repositoryUrl: string; featured: boolean; preview: 'photos' | 'codes' | 'automation' | 'more';
  features?: string[]; principles?: string[];
};

export const projects: Project[] = [
  {
    slug: 'swoopix', name: 'Swoopix', subtitle: 'Swipe Photo Cleaner', status: 'In development', platform: 'iOS',
    shortDescription: 'A privacy-focused iOS app that helps people clean and organize their photo libraries through fast, simple swipe decisions.',
    fullDescription: 'Swoopix turns an overwhelming photo library into a focused review experience. Users swipe to keep, remove, or revisit photos, while destructive actions remain behind a deliberate Trash Review step.',
    technologies: ['Swift', 'SwiftUI', 'PhotoKit', 'AVFoundation', 'Vision'], accent: '#23c7b8', detailUrl: '/projects/swoopix', externalUrl: '', repositoryUrl: '', featured: true, preview: 'photos',
    features: ['Swipe right to keep', 'Swipe left to queue for removal', 'Swipe up to review later', 'Nothing is deleted immediately', 'Duplicate and blurry-photo review', 'Large-photo and video discovery', 'Video-compression workflows', 'Privacy-forward, on-device experience'],
    principles: ['Private by default', 'Deliberate deletion', 'Fast, focused decisions'],
  },
  {
    slug: 'gmail-verification-extension', name: 'Gmail Verification Code Extension', status: 'In development', platform: 'Chrome Extension',
    shortDescription: 'A browser extension designed to find recent verification codes in Gmail and make them easier to access when signing in.',
    fullDescription: 'The extension connects to Gmail through user-authorized OAuth access, searches relevant recent messages, extracts likely one-time verification codes, and presents them in a faster workflow.',
    technologies: ['TypeScript', 'Chrome Extensions', 'Gmail API', 'OAuth 2.0'], accent: '#f6b84a', detailUrl: '/projects/gmail-verification-extension', externalUrl: '', repositoryUrl: '', featured: true, preview: 'codes',
    features: ['User-authorized access', 'Focused Gmail permissions', 'Fast access to recent codes', 'Clear privacy communication'],
    principles: ['Explicit authorization', 'Minimal permissions', 'A focused workflow'],
  },
  {
    slug: 'scheduling-automation', name: 'Scheduling & Messaging Automation', status: 'Private project', platform: 'Business automation',
    shortDescription: 'A workflow that converts scheduling data into organized customer communication and operational actions.',
    fullDescription: 'A private automation system designed to reduce repetitive operational work while keeping sensitive business details protected.',
    technologies: ['Python', 'APIs', 'Firestore', 'Spreadsheet processing', 'Messaging automation'], accent: '#8b9cf7', detailUrl: '', externalUrl: '', repositoryUrl: '', featured: false, preview: 'automation',
  },
  {
    slug: 'more', name: 'More in progress', status: 'Building', platform: 'Digital products',
    shortDescription: 'Additional apps, extensions, websites, and experiments will be added as they become ready to share.',
    fullDescription: '', technologies: [], accent: '#22b8cf', detailUrl: '/projects', externalUrl: '', repositoryUrl: '', featured: false, preview: 'more',
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)!;

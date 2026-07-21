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
    slug: 'gmail-verification-extension', name: 'MailKey', subtitle: 'Verification codes for Gmail', status: 'In development', platform: 'Chrome Extension',
    shortDescription: 'A Chrome extension that spots the verification code that just landed in your Gmail and offers to fill it in with one click.',
    fullDescription: 'MailKey is Apple\'s SMS autofill idea, moved to email. When a site asks for a verification code, it checks Gmail read-only for mail from the last 60 minutes, finds the code, and offers it as a chip you can click to fill. Nothing is auto-filled, nothing is auto-submitted, and nothing leaves the device — there is no server and no analytics.',
    technologies: ['JavaScript', 'Chrome Extensions (MV3)', 'Gmail API', 'OAuth 2.0'], accent: '#2563EB', detailUrl: '/projects/gmail-verification-extension', externalUrl: '', repositoryUrl: '', featured: true, preview: 'codes',
    features: ['Read-only Gmail access, granted through Chrome', 'Only ever asks Google for mail from the last 60 minutes', 'One click to fill — never automatic, never submitted for you', 'Shows the sending domain next to the code', 'The code lives in session memory for 60 seconds, then is wiped', 'Email bodies are parsed in memory and discarded', 'No backend, no analytics, nothing leaves your device', 'Runs on every site, or only the ones you list'],
    principles: ['Read-only, last hour only', 'Nothing leaves the device', 'The click is always yours'],
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

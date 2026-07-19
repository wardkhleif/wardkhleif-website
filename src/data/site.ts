export const site = {
  name: 'Ward Khleif',
  shortName: 'WK',
  url: 'https://wardkhleif.com',
  title: 'Ward Khleif — Independent Software Developer',
  description: 'Independent software developer building useful iOS apps, browser extensions, automation tools, and digital products.',
  // TODO: Add public contact and profile URLs when ready.
  email: '',
  githubUrl: '',
  linkedinUrl: '',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

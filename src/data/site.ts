export const site = {
  name: 'Ward Khleif',
  shortName: 'WK',
  url: 'https://wardkhleif.com',
  title: 'Ward Khleif — Computer Science Student',
  description: 'Personal website of Ward Khleif, a computer science student sharing software projects, experiments, and things he is learning.',
  // CONTACT — add the public email when ready.
  email: '', // Example: 'hello@wardkhleif.com'
  linkedinUrl: 'https://www.linkedin.com/in/ward-khleif-3793aa384/',
  githubUrl: 'https://github.com/wardkhleif',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

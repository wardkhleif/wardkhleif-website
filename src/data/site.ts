export const site = {
  name: 'Ward Khleif',
  shortName: 'WK',
  url: 'https://wardkhleif.com',
  title: 'Ward Khleif — Computer Science Student',
  description: 'Personal website of Ward Khleif, a computer science student sharing software projects, experiments, and things he is learning.',
  // CONTACT PLACEHOLDERS — paste your real details between the quotes.
  email: '', // Example: 'hello@wardkhleif.com'
  linkedinUrl: '', // Example: 'https://www.linkedin.com/in/your-profile/'
  githubUrl: '', // Example: 'https://github.com/your-username'
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

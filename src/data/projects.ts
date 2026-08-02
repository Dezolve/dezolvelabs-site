export type ProjectStatus = 'Live' | 'In Development' | 'In Research' | 'Internal';

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: ProjectStatus;
  oneLiner: string;
  description: string;
  portfolioFit: string;
  whyItExists: string;
  whyBelongs: string;
  links: {
    primary: string;
    primaryLabel: string;
    secondary?: string;
    secondaryLabel?: string;
  };
  tags: string[];
  features: Array<{
    title: string;
    detail: string;
    icon: string;
  }>;
  extraLinks: Array<{
    label: string;
    href: string;
  }>;
  visuals: {
    logo: string;
    logoIcon: 'Flame' | 'Bookmark' | 'Droplets' | 'Store';
    preview: string;
    gradientFrom: string;
    gradientTo: string;
    logoBackground?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'manacamp',
    name: 'ManaCamp',
    category: 'Real-time communication platform',
    status: 'In Development',
    oneLiner:
      'A presence-first communication platform for communities, teams, and groups that want more than another text feed.',
    description: 'ManaCamp brings channels, live sessions, voice, and shared activity together in one place.',
    portfolioFit: 'The flagship communication platform being developed and operated by Dezolve Labs.',
    whyItExists:
      'Most communication tools separate chat, voice, presence, and shared activity. ManaCamp is being built to bring those pieces together so groups can see what is happening and join in naturally.',
    whyBelongs:
      'Dezolve Labs leads ManaCamp’s product strategy, interface design, engineering, desktop and mobile development, and long-term platform roadmap.',
    links: {
      primary: 'https://manacamp.com',
      primaryLabel: 'Visit ManaCamp',
      secondary: 'https://manacamp.com/download',
      secondaryLabel: 'Windows download',
    },
    tags: ['Communication', 'Presence', 'Live Collaboration'],
    features: [
      {
        title: 'Presence-first spaces',
        detail: 'See who is around, what is active, and where to join without chasing separate links or applications.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Voice and live sessions',
        detail: 'Move from text into voice or a shared session without losing the surrounding conversation.',
        icon: '/icons/clarity.svg',
      },
      {
        title: 'Built across platforms',
        detail: 'ManaCamp is being developed for web, desktop, and mobile so groups can stay connected wherever they are.',
        icon: '/icons/focus.svg',
      },
    ],
    extraLinks: [
      { label: 'Download', href: 'https://manacamp.com/download' },
      { label: 'Support', href: 'https://manacamp.com/support' },
      { label: 'Privacy', href: 'https://manacamp.com/privacy' },
    ],
    visuals: {
      logo: '/projects/manacamp-mark.svg',
      logoIcon: 'Flame',
      preview: '/projects/manacamp-preview.svg',
      gradientFrom: '#5b8cff',
      gradientTo: '#2fb6d2',
      logoBackground: 'transparent',
    },
  },
  {
    slug: 'favstir',
    name: 'FavStir',
    category: 'Curated recommendation sharing',
    status: 'Live',
    oneLiner: 'Create and share ranked lists of the things you recommend most.',
    description:
      'FavStir turns personal recommendations into useful, shareable lists across entertainment, food, travel, products, and more.',
    portfolioFit: 'A live consumer product built and operated by Dezolve Labs.',
    whyItExists:
      'Recommendations from people you trust are often buried in messages, posts, and memory. FavStir gives them a permanent, organized place that is easy to share.',
    whyBelongs:
      'Dezolve Labs owns FavStir’s product direction, web platform, list experience, discovery tools, and ongoing development.',
    links: {
      primary: 'https://favstir.com',
      primaryLabel: 'Visit FavStir',
    },
    tags: ['Consumer Product', 'Recommendations', 'Lists'],
    features: [
      {
        title: 'Structured list creation',
        detail: 'Build ranked lists with titles, categories, notes, and enough context to make each recommendation useful.',
        icon: '/icons/curation.svg',
      },
      {
        title: 'Flexible sharing',
        detail: 'Publish a list, keep it private, or share it directly depending on who it is for.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Recommendations with a source',
        detail: 'Browse lists created by other people and understand who is behind each recommendation.',
        icon: '/icons/focus.svg',
      },
    ],
    extraLinks: [
      { label: 'Support', href: 'https://favstir.com/support' },
      { label: 'FAQ', href: 'https://favstir.com/faq' },
      { label: 'Terms', href: 'https://favstir.com/terms' },
    ],
    visuals: {
      logo: '/projects/favstir-mark.svg',
      logoIcon: 'Bookmark',
      preview: '/projects/favstir-preview.svg',
      gradientFrom: '#4b73ff',
      gradientTo: '#18b8a8',
    },
  },
  {
    slug: 'refreshly',
    name: 'Refreshly',
    category: 'Health and wellness utility',
    status: 'Live',
    oneLiner: 'A simple hydration tracker that helps people log water and stay on pace throughout the day.',
    description: 'Refreshly keeps daily water tracking quick, readable, and easy to return to.',
    portfolioFit: 'A live mobile utility designed and maintained by Dezolve Labs.',
    whyItExists:
      'Hydration applications can become noisy or tedious. Refreshly focuses on the few actions people need: set a goal, log a drink, and understand their progress.',
    whyBelongs:
      'Dezolve Labs designs, develops, and maintains Refreshly as a focused mobile utility for everyday use.',
    links: {
      primary: 'https://refreshly.app',
      primaryLabel: 'Visit Refreshly',
      secondary: 'https://refreshly.app',
      secondaryLabel: 'App links',
    },
    tags: ['Utility Software', 'Wellness', 'Daily Habit'],
    features: [
      {
        title: 'Quick logging',
        detail: 'Add water in a few taps so tracking does not interrupt the day.',
        icon: '/icons/drop.svg',
      },
      {
        title: 'Clear daily progress',
        detail: 'See how much has been logged, how much remains, and whether the daily goal is on track.',
        icon: '/icons/streak.svg',
      },
      {
        title: 'Simple reminders',
        detail: 'Use reminders to support the routine without turning hydration into another noisy task list.',
        icon: '/icons/reminder.svg',
      },
    ],
    extraLinks: [
      { label: 'Support', href: 'https://refreshly.app/support' },
      { label: 'Privacy', href: 'https://refreshly.app/privacy' },
    ],
    visuals: {
      logo: '/projects/refreshly-mark.svg',
      logoIcon: 'Droplets',
      preview: '/projects/refreshly-preview.svg',
      gradientFrom: '#3567dd',
      gradientTo: '#16b6b1',
    },
  },
  {
    slug: 'nexus-pos',
    name: 'Nexus POS',
    category: 'Point-of-sale software',
    status: 'Internal',
    oneLiner: 'Desktop point-of-sale software for small convenience-store operations.',
    description: 'Nexus POS is an internal React and Electron system focused on fast checkout and practical store workflows.',
    portfolioFit: 'An internal business application developed by Dezolve Labs.',
    whyItExists:
      'Small retailers need dependable checkout tools without the complexity and cost of enterprise systems. Nexus POS is being built around the daily workflows of a focused store operation.',
    whyBelongs:
      'Dezolve Labs handles the product design, desktop engineering, and operational workflow development behind Nexus POS.',
    links: {
      primary: '/contact',
      primaryLabel: 'Contact Dezolve Labs',
      secondary: '/studio',
      secondaryLabel: 'About the Studio',
    },
    tags: ['Business Software', 'Electron', 'Retail Operations'],
    features: [
      {
        title: 'Fast checkout flow',
        detail: 'Keep common transaction steps clear and quick during day-to-day store use.',
        icon: '/icons/clarity.svg',
      },
      {
        title: 'Practical store workflows',
        detail: 'Focus on the tasks a small convenience-store operation actually needs instead of broad enterprise complexity.',
        icon: '/icons/focus.svg',
      },
      {
        title: 'Desktop operation',
        detail: 'Use a React and Electron desktop application designed for a dependable in-store environment.',
        icon: '/icons/share.svg',
      },
    ],
    extraLinks: [],
    visuals: {
      logo: '/projects/nexus-pos-mark.svg',
      logoIcon: 'Store',
      preview: '/projects/nexus-pos-preview.svg',
      gradientFrom: '#4d78ff',
      gradientTo: '#17a4c4',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

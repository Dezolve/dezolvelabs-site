export type Project = {
  slug: string;
  name: string;
  description: string;
  oneLiner: string;
  status: 'Live' | 'Building';
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
    logoIcon: 'Flame' | 'Bookmark' | 'Droplets';
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
    oneLiner: 'Latest project: a modern community platform for channels, sessions, and live collaboration.',
    description:
      'ManaCamp is a massive community platform that brings channels, DMs, presence, voice, video, screen sharing, bots, and sessions into one real-time space. Windows is available now, with iOS rolling out next.',
    status: 'Building',
    links: {
      primary: 'https://manacamp.com',
      primaryLabel: 'Visit ManaCamp.com',
      secondary: 'https://manacamp.com/download',
      secondaryLabel: 'Windows download & iOS updates',
    },
    tags: ['Latest', 'Windows', 'iOS', 'Community Platform'],
    features: [
      {
        title: 'Unified community spaces',
        detail: 'Run channels, direct messages, and live sessions together in one coordinated experience.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Real-time voice and video',
        detail: 'Jump from chat to voice, video, and screen sharing instantly when conversations need more context.',
        icon: '/icons/clarity.svg',
      },
      {
        title: 'Cross-platform momentum',
        detail: 'Windows is available now, and iOS access is actively being expanded for the next release wave.',
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
      gradientFrom: '#4c95ff',
      gradientTo: '#ff8b3d',
      logoBackground: 'transparent',
    },
  },
  {
    slug: 'favstir',
    name: 'FavStir',
    oneLiner: 'Curated list sharing built for real recommendations.',
    description:
      'FavStir helps you create and share curated recommendation lists for restaurants, movies, and places, privately and without noisy feeds or algorithmic clutter.',
    status: 'Live',
    links: {
      primary: 'https://favstir.com',
      primaryLabel: 'Visit FavStir.com',
    },
    tags: ['Next.js', 'Web App'],
    features: [
      {
        title: 'Curated collections',
        detail: 'Build tidy lists for places, food spots, and entertainment picks with clear context.',
        icon: '/icons/curation.svg',
      },
      {
        title: 'Private sharing',
        detail: 'Send recommendations directly to friends and family without social-feed noise.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Signal over algorithm',
        detail: 'Keep recommendations practical and relevant instead of engagement-driven.',
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
      gradientFrom: '#2d6fff',
      gradientTo: '#16c6b6',
    },
  },
  {
    slug: 'refreshly',
    name: 'Refreshly',
    oneLiner: 'Hydration habit app with simple, mindful tracking.',
    description:
      'Refreshly is a calm hydration app built around one-tap logging, gentle reminders, and small daily goals that make healthy routines easier to keep.',
    status: 'Live',
    links: {
      primary: 'https://refreshly.app',
      primaryLabel: 'Visit Refreshly.app',
      secondary: 'https://refreshly.app',
      secondaryLabel: 'App Store / Play links',
    },
    tags: ['Mobile', 'Health & Wellness'],
    features: [
      {
        title: 'One-tap logging',
        detail: 'Capture water intake quickly without interrupts or complex setup.',
        icon: '/icons/drop.svg',
      },
      {
        title: 'Gentle reminders',
        detail: 'Receive calm nudges that encourage consistency without pressure.',
        icon: '/icons/reminder.svg',
      },
      {
        title: 'Daily momentum',
        detail: 'Track small goals and progress streaks with a low-stress interface.',
        icon: '/icons/streak.svg',
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
      gradientFrom: '#2558db',
      gradientTo: '#1ac1bc',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

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
    preview: string;
    gradientFrom: string;
    gradientTo: string;
  };
};

export const projects: Project[] = [
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
      preview: '/projects/refreshly-preview.svg',
      gradientFrom: '#2558db',
      gradientTo: '#1ac1bc',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

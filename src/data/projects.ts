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
  features: string[];
  extraLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const projects: Project[] = [
  {
    slug: 'favstir',
    name: 'FavStir',
    oneLiner: 'Curated list sharing built for real recommendations.',
    description:
      'Curated list-sharing app for organizing and sharing favorite places, movie picks, restaurants, and more with friends and family without noisy feeds or algorithms.',
    status: 'Live',
    links: {
      primary: 'https://favstir.com',
      primaryLabel: 'Visit FavStir.com',
    },
    tags: ['Next.js', 'Web App'],
    features: [
      'Create recommendation lists for places, restaurants, movies, and activities.',
      'Share lists directly with friends and family in a feed-free experience.',
      'Keep favorite recommendations organized without algorithmic distraction.',
    ],
    extraLinks: [
      { label: 'Support', href: 'https://favstir.com/support' },
      { label: 'FAQ', href: 'https://favstir.com/faq' },
      { label: 'Terms', href: 'https://favstir.com/terms' },
    ],
  },
  {
    slug: 'refreshly',
    name: 'Refreshly',
    oneLiner: 'Hydration habit app with simple, mindful tracking.',
    description:
      'Hydration tracking mobile app focused on building a hydration habit with simple one-tap logging, gentle reminders, and small daily goals.',
    status: 'Building',
    links: {
      primary: 'https://refreshly.com',
      primaryLabel: 'Download Mobile App',
      secondary: 'https://refreshly.com',
      secondaryLabel: 'View app links',
    },
    tags: ['Mobile', 'Health & Wellness'],
    features: [
      'One-tap water logging designed for low-friction daily use.',
      'Gentle reminder system that supports consistency without pressure.',
      'Calm-first goals and progress views for sustainable habits.',
    ],
    extraLinks: [
      { label: 'Support', href: 'https://refreshly.com/support' },
      { label: 'Privacy', href: 'https://refreshly.com/privacy' },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

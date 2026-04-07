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
    oneLiner: 'Dezolve Labs’ flagship long-term platform vision for presence, expression, and togetherness.',
    description: 'A presence-first communication platform for channels, sessions, voice, and live collaboration.',
    portfolioFit:
      'Represents the company’s long-term interest in richer digital presence and modern communication systems.',
    whyItExists:
      'ManaCamp is Dezolve Labs’ flagship long-term platform vision, built to make digital communication feel more present, more expressive, and more useful when conversation needs to move beyond fragmented tools.',
    whyBelongs:
      'ManaCamp represents Dezolve Labs’ long-term interest in communication systems, digital presence, and richer real-time interaction.',
    links: {
      primary: 'https://manacamp.com',
      primaryLabel: 'Visit ManaCamp',
      secondary: 'https://manacamp.com/download',
      secondaryLabel: 'Windows download',
    },
    tags: ['Communication', 'Presence', 'Live Collaboration'],
    features: [
      {
        title: 'Presence-first structure',
        detail: 'Channels, sessions, and live spaces are shaped to feel coordinated instead of fragmented.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Real-time interaction',
        detail: 'Voice, live collaboration, and richer context help conversations move naturally when text is not enough.',
        icon: '/icons/clarity.svg',
      },
      {
        title: 'Room to grow',
        detail: 'The product is being built as a long-horizon communication system rather than a short-cycle feature launch.',
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
    oneLiner: 'A foundational web product centered on curated sharing and list-based social utility.',
    description: 'A quieter way to collect and share trusted recommendations through thoughtful list-based experiences.',
    portfolioFit: 'Reflects a belief in signal-over-noise consumer products.',
    whyItExists:
      'FavStir exists because useful recommendations are often buried inside noisy social patterns. The product gives that behavior a clearer and more intentional home.',
    whyBelongs:
      'FavStir represents the company’s interest in quieter, higher-signal consumer experiences built around trust and usefulness.',
    links: {
      primary: 'https://favstir.com',
      primaryLabel: 'Visit FavStir',
    },
    tags: ['Consumer Product', 'Recommendations', 'Signal Over Noise'],
    features: [
      {
        title: 'Thoughtful list sharing',
        detail: 'Recommendations are organized as useful collections instead of disposable social posts.',
        icon: '/icons/curation.svg',
      },
      {
        title: 'Trusted distribution',
        detail: 'The product is built for sharing recommendations with people you actually know and trust.',
        icon: '/icons/share.svg',
      },
      {
        title: 'Calm product behavior',
        detail: 'Restraint in the interface keeps attention on the quality of the recommendation itself.',
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
    oneLiner: 'A modern hydration tracker designed for simplicity, motivation, and daily ease of use.',
    description: 'A hydration product designed around low-friction tracking, calm interaction, and daily usefulness.',
    portfolioFit: 'Shows the value of focused utility software done with care.',
    whyItExists:
      'Refreshly exists to prove that small daily-use utilities can earn long-term relevance when they are simple, clear, and genuinely easy to return to.',
    whyBelongs:
      'Refreshly represents the value of focused utility software designed to become part of a daily routine.',
    links: {
      primary: 'https://refreshly.app',
      primaryLabel: 'Visit Refreshly',
      secondary: 'https://refreshly.app',
      secondaryLabel: 'App links',
    },
    tags: ['Utility Software', 'Wellness', 'Daily Habit'],
    features: [
      {
        title: 'Low-friction logging',
        detail: 'Tracking stays quick and obvious so the product supports the habit instead of interrupting it.',
        icon: '/icons/drop.svg',
      },
      {
        title: 'Calm reminders',
        detail: 'Prompts are designed to be supportive and useful rather than loud or gamified.',
        icon: '/icons/reminder.svg',
      },
      {
        title: 'Routine-friendly design',
        detail: 'The product is meant to fit naturally into everyday use and build quiet long-term value.',
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
      gradientFrom: '#3567dd',
      gradientTo: '#16b6b1',
    },
  },
  {
    slug: 'nexus-pos',
    name: 'Nexus POS',
    category: 'Point-of-sale software',
    status: 'Internal',
    oneLiner: 'Fast point-of-sale software built for focused retail operations.',
    description:
      'A fast, focused point-of-sale system built in React and Electron for small convenience-store operations.',
    portfolioFit:
      'Reflects Dezolve Labs’ ability to build pragmatic business software around real operational needs.',
    whyItExists:
      'Nexus POS exists to make day-to-day retail workflows faster, clearer, and less fragile for small store operations that depend on dependable software every day.',
    whyBelongs:
      'It shows Dezolve Labs’ ability to build practical business software around real operational needs.',
    links: {
      primary: '/contact',
      primaryLabel: 'Contact the Studio',
      secondary: '/studio',
      secondaryLabel: 'Explore the Studio',
    },
    tags: ['Business Software', 'Electron', 'Retail Operations'],
    features: [
      {
        title: 'Fast transaction flow',
        detail: 'The interface is built to keep checkout movement quick, legible, and dependable during daily store use.',
        icon: '/icons/clarity.svg',
      },
      {
        title: 'Focused operational scope',
        detail: 'It emphasizes the real workflows small convenience-store operators need rather than broad, bloated feature sets.',
        icon: '/icons/focus.svg',
      },
      {
        title: 'Desktop reliability',
        detail: 'React and Electron provide a modern interface layer while keeping the product grounded in practical day-to-day operation.',
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

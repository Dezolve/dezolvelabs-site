import { permanentRedirect } from 'next/navigation';
import { projects } from '@/src/data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  permanentRedirect(`/portfolio/${slug}`);
}

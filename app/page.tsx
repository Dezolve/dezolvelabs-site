import { HorizontalHome } from '@/components/HorizontalHome';
import { projects } from '@/src/data/projects';

export default function HomePage() {
  return <HorizontalHome projects={projects} />;
}

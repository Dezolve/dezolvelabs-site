import type { StaticImageData } from 'next/image';
import favstirScreenshot from '@/assets/Favstir_Screenshot_001.png';
import manaCampScreenshot from '@/assets/Manacamp_Screenshot_001.png';
import refreshlyScreenshot from '@/assets/Refreshly_Screenshot_001.png';

const projectScreenshots: Partial<Record<string, StaticImageData>> = {
  manacamp: manaCampScreenshot,
  favstir: favstirScreenshot,
  refreshly: refreshlyScreenshot,
};

export function getProjectScreenshot(slug: string, fallback: string): StaticImageData | string {
  return projectScreenshots[slug] ?? fallback;
}

export function hasRealProjectScreenshot(slug: string) {
  return Boolean(projectScreenshots[slug]);
}

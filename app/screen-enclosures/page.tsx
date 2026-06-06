import { Metadata } from 'next';
import ScreenEnclosuresPageClient from '@/components/pages/ScreenEnclosuresPageClient';

export const metadata: Metadata = {
  title: 'Screen Enclosure Installation in Central Florida | Elevation Outdoor Living',
  description: 'Custom screen enclosure construction for pool areas and patios across Orlando and Central Florida. Enjoy your outdoor space without bugs — year-round.',
  keywords: 'screen enclosure Orlando, pool screen enclosure Central Florida, patio screen enclosure Florida, custom aluminum enclosure, re-screening pools Orlando, bug free pool screen',
  openGraph: {
    title: 'Screen Enclosure Installation in Central Florida | Elevation Outdoor Living',
    description: 'Custom screen enclosure construction for pool areas and patios across Orlando and Central Florida. Enjoy your outdoor space without bugs — year-round.',
    type: 'website',
  },
};

export default function ScreenEnclosuresPage() {
  return <ScreenEnclosuresPageClient />;
}

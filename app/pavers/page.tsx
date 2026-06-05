import { Metadata } from 'next';
import PaversPageClient from '@/components/pages/PaversPageClient';

export const metadata: Metadata = {
  title: 'Premium Pavers & Hardscape Installation | Elevation Outdoor Living',
  description: 'Expert custom paving services in Central Florida. Travertine, concrete, and brick pavers for pool decks, custom patios, driveways, walkways, and retaining walls.',
  keywords: 'pavers Orlando, hardscape Central Florida, driveway pavers, patio pavers, pool deck pavers, retaining walls, travertine pavers, brick pavers Florida',
  openGraph: {
    title: 'Premium Pavers & Hardscape Installation | Elevation Outdoor Living',
    description: 'Expert custom paving services in Central Florida. Travertine, concrete, and brick pavers for pool decks, custom patios, driveways, walkways, and retaining walls.',
    type: 'website',
  },
};

export default function PaversPage() {
  return <PaversPageClient />;
}

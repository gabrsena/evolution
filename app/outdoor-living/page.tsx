import { Metadata } from 'next';
import OutdoorLivingPageClient from '@/components/pages/OutdoorLivingPageClient';

export const metadata: Metadata = {
  title: 'Custom Outdoor Kitchens & Outdoor Living | Elevation Outdoor Living',
  description: 'Bring the comfort of the indoors outside. We build luxury outdoor kitchens, stone fire pits, built-in benches, screen enclosures, and privacy fences in Central Florida.',
  keywords: 'outdoor kitchen Orlando, outdoor living Central Florida, firepit patio, built-in seating, screen enclosure, privacy fence, custom outdoor kitchens Florida',
  openGraph: {
    title: 'Custom Outdoor Kitchens & Outdoor Living | Elevation Outdoor Living',
    description: 'Bring the comfort of the indoors outside. We build luxury outdoor kitchens, stone fire pits, built-in benches, screen enclosures, and privacy fences in Central Florida.',
    type: 'website',
  },
};

export default function OutdoorLivingPage() {
  return <OutdoorLivingPageClient />;
}

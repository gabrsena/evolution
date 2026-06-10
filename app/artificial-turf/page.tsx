import { Metadata } from 'next';
import ArtificialTurfPageClient from '@/components/pages/ArtificialTurfPageClient';

export const metadata: Metadata = {
  title: 'Artificial Turf Installation in Central Florida | RDS Outdoor Living',
  description: 'Professional artificial turf installation for yards, pool areas and putting greens across Orlando and Central Florida. Low maintenance, pet-friendly, beautiful year-round.',
  keywords: 'artificial turf Central Florida, artificial grass Orlando, synthetic turf installation, pet friendly turf Florida, pool deck artificial grass, backyard putting green Orlando',
  openGraph: {
    title: 'Artificial Turf Installation in Central Florida | RDS Outdoor Living',
    description: 'Professional artificial turf installation for yards, pool areas and putting greens across Orlando and Central Florida. Low maintenance, pet-friendly, beautiful year-round.',
    type: 'website',
  },
};

export default function ArtificialTurfPage() {
  return <ArtificialTurfPageClient />;
}

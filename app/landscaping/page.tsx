import { Metadata } from 'next';
import LandscapingPageClient from '@/components/pages/LandscapingPageClient';

export const metadata: Metadata = {
  title: 'Premium Artificial Grass & Retaining Walls | RDS Outdoor Living',
  description: 'Beautiful maintenance-free lawns in Central Florida. We install high-quality, pet-friendly synthetic turf and construct structural retaining walls.',
  keywords: 'artificial grass Central Florida, synthetic turf Orlando, retaining walls Florida, landscape design, pet-friendly grass, artificial turf installation',
  openGraph: {
    title: 'Premium Artificial Grass & Retaining Walls | RDS Outdoor Living',
    description: 'Beautiful maintenance-free lawns in Central Florida. We install high-quality, pet-friendly synthetic turf and construct structural retaining walls.',
    type: 'website',
  },
};

export default function LandscapingPage() {
  return <LandscapingPageClient />;
}

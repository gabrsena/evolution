import { Metadata } from 'next';
import VinylFencePageClient from '@/components/pages/VinylFencePageClient';

export const metadata: Metadata = {
  title: 'Vinyl Fence Installation in Central Florida | RDS Outdoor Living',
  description: 'Professional vinyl fence installation for homeowners across Orlando and Central Florida. Privacy fences, picket fences and pool enclosures — durable and low maintenance.',
  keywords: 'vinyl fence Orlando, vinyl fencing Central Florida, privacy fence installation, picket fence Florida, pool code fencing Orlando, low maintenance backyard fence',
  openGraph: {
    title: 'Vinyl Fence Installation in Central Florida | RDS Outdoor Living',
    description: 'Professional vinyl fence installation for homeowners across Orlando and Central Florida. Privacy fences, picket fences and pool enclosures — durable and low maintenance.',
    type: 'website',
  },
};

export default function VinylFencePage() {
  return <VinylFencePageClient />;
}

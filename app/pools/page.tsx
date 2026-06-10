import { Metadata } from 'next';
import PoolPageClient from '@/components/pages/PoolPageClient';

export const metadata: Metadata = {
  title: 'Luxury Pool Construction & Renovation | RDS Outdoor Living',
  description: 'Design and build your dream backyard resort in Central Florida. We construct custom gunite pools, spa integrations, water features, and complete pool deck renovations.',
  keywords: 'pool installation Central Florida, pool construction Orlando, custom spa, pool renovation, water features, concrete pool construction, gunite pool Florida',
  openGraph: {
    title: 'Luxury Pool Construction & Renovation | RDS Outdoor Living',
    description: 'Design and build your dream backyard resort in Central Florida. We construct custom gunite pools, spa integrations, water features, and complete pool deck renovations.',
    type: 'website',
  },
};

export default function PoolPage() {
  return <PoolPageClient />;
}

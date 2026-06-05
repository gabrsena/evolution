import { Metadata } from 'next';
import ServiceAreasPageClient from '@/components/pages/ServiceAreasPageClient';

export const metadata: Metadata = {
  title: 'Service Areas Across Central Florida | Elevation Outdoor Living',
  description: 'Discover where Elevation Outdoor Living designs and builds custom pools, patios, kitchens, and landscaping — serving Orlando, Kissimmee, Winter Park, Lake Nona, Windermere, Clermont, and beyond.',
  keywords: 'service areas Orlando, pool installation Kissimmee, pavers Windermere, hardscape Winter Park, artificial turf Lake Nona, Clermont pool builders, Central Florida landscaping',
  openGraph: {
    title: 'Service Areas Across Central Florida | Elevation Outdoor Living',
    description: 'Discover where Elevation Outdoor Living designs and builds custom pools, patios, kitchens, and landscaping — serving Orlando, Kissimmee, Winter Park, Lake Nona, Windermere, Clermont, and beyond.',
    type: 'website',
  },
};

export default function ServiceAreasPage() {
  return <ServiceAreasPageClient />;
}

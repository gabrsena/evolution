import { Metadata } from 'next';
import ContactPageClient from '@/components/pages/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us | Elevation Outdoor Living',
  description: 'Contact Elevation Outdoor Living for a free estimate on pools, pavers, artificial turf, summer kitchens, vinyl fences and screen enclosures in Central Florida.',
  keywords: 'contact elevation, free estimate pools Orlando, custom patio pavers quote, summer kitchen consultation Florida, vinyl fence estimate',
  openGraph: {
    title: 'Contact Us | Elevation Outdoor Living',
    description: 'Contact Elevation Outdoor Living for a free estimate on pools, pavers, artificial turf, summer kitchens, vinyl fences and screen enclosures in Central Florida.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

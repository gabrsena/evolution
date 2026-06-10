import { Metadata } from 'next';
import SummerKitchensPageClient from '@/components/pages/SummerKitchensPageClient';

export const metadata: Metadata = {
  title: 'Summer Kitchen Construction in Central Florida | RDS Outdoor Living',
  description: 'Custom summer kitchen design and construction for Orlando and Central Florida homeowners. Outdoor grills, countertops, sinks and entertainment areas built to last.',
  keywords: 'summer kitchen Orlando, outdoor kitchen Central Florida, custom outdoor kitchen design, backyard grill station, luxury summer kitchen Florida, stainless steel outdoor grills',
  openGraph: {
    title: 'Summer Kitchen Construction in Central Florida | RDS Outdoor Living',
    description: 'Custom summer kitchen design and construction for Orlando and Central Florida homeowners. Outdoor grills, countertops, sinks and entertainment areas built to last.',
    type: 'website',
  },
};

export default function SummerKitchensPage() {
  return <SummerKitchensPageClient />;
}

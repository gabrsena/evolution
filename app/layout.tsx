import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elevation Outdoor Living | Pool, Pavers & Hardscape in Central Florida',
  description: 'Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida. Licensed contractors. Free quotes.',
  keywords: 'pool installation Central Florida, pavers Orlando, artificial grass Central Florida, outdoor kitchen Orlando, hardscape Central Florida, backyard transformation Orlando, pool renovation Florida',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Elevation Outdoor Living | Pool, Pavers & Hardscape in Central Florida',
    description: 'Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida. Licensed contractors. Free quotes.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Elevation Outdoor Living",
              "description": "Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida.",
              "url": "https://elevationoutdoorliving.com",
              "telephone": "+14071234567",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Florida",
                "addressCountry": "US"
              },
              "areaServed": ["Orlando", "Kissimmee", "Winter Park", "Lake Nona", "Windermere", "Clermont", "Central Florida"],
              "serviceType": "Pool Construction, Pool Renovation, Pavers, Artificial Grass, Outdoor Kitchens, Hardscape Design",
              "foundingDate": "2017"
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

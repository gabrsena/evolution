import './globals.css';
import { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RDS Outdoor Living | Pool, Pavers & Hardscape in Central Florida',
  description: 'Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida. Licensed contractors. Free quotes.',
  keywords: 'pool installation Central Florida, pavers Orlando, artificial grass Central Florida, outdoor kitchen Orlando, hardscape Central Florida, backyard transformation Orlando, pool renovation Florida',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'RDS Outdoor Living | Pool, Pavers & Hardscape in Central Florida',
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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RDS Outdoor Living",
              "description": "Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida.",
              "url": "https://rdsoutdoorliving.com",
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

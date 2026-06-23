'use client';

import React, { useEffect } from 'react';
import { TranslationProvider, useTranslation } from '../contexts/TranslationContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { CheckIcon } from '../icons';
import { FloatingWhatsApp } from '../FloatingWhatsApp';

const ServiceAreasPageContent = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const areas = [
    {
      name: "Orlando",
      desc: "Custom pool construction, travertine paver patios, and luxury outdoor kitchens for homes throughout metropolitan Orlando.",
      msg: "Hi, I'm in Orlando and I'd like to get a quote for a backyard project."
    },
    {
      name: "Kissimmee",
      desc: "Beautiful pool decks, screen enclosures, and artificial turf installations for residential properties in Kissimmee.",
      msg: "Hi, I'm in Kissimmee and I'd like to get a quote for a backyard project."
    },
    {
      name: "Winter Park",
      desc: "High-end pavers, custom masonry retaining walls, fire pits, and premium outdoor living spaces in Winter Park.",
      msg: "Hi, I'm in Winter Park and I'd like to get a quote for a backyard project."
    },
    {
      name: "Lake Nona",
      desc: "Modern pool designs, artificial grass, horizontal fences, and complete backyard transformations in Lake Nona.",
      msg: "Hi, I'm in Lake Nona and I'd like to get a quote for a backyard project."
    },
    {
      name: "Windermere",
      desc: "Resort-style custom pools, custom outdoor kitchens, and high-durability paver driveways in luxury Windermere communities.",
      msg: "Hi, I'm in Windermere and I'd like to get a quote for a backyard project."
    },
    {
      name: "Clermont",
      desc: "Backyard pool installations, retaining walls, screen enclosures, and landscaping services for Clermont homeowners.",
      msg: "Hi, I'm in Clermont and I'd like to get a quote for a backyard project."
    }
  ];

  return (
    <div className="app-container">
      <Navbar />
      <main>

      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          height: '100vh', 
          width: '100%', 
          overflow: 'hidden', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#000'
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          onLoadedData={() => setVideoLoaded(true)}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 0,
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <source src="/pool.mp4" type="video/mp4" />
        </video>
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'rgba(0, 0, 0, 0.65)', 
            zIndex: 1 
          }} 
        />
        
        <div 
          className="container fade-in-section" 
          style={{ 
            position: 'relative', 
            zIndex: 2, 
            textAlign: 'center', 
            color: '#ffffff',
            maxWidth: '800px'
          }}
        >
          <span 
            style={{ 
              color: '#C9A55A', 
              fontSize: '14px', 
              fontWeight: 700, 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            Areas We Serve
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(36px, 6vw, 64px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            Serving Central Florida Homeowners
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(16px, 2.5vw, 20px)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '40px',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            We bring luxury pool installations, premium hardscaping, custom outdoor kitchens, and low-maintenance landscaping to properties across Central Florida.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/contact" 
              className="btn-primary" 
            >
              <span>Request a Free Estimate</span>
            </a>
            <a 
              href="tel:+17204003679" 
              className="btn-secondary"
              style={{ color: '#ffffff', borderColor: '#ffffff' }}
            >
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="section fade-in-section" style={{ background: '#f9fafb', color: '#111827' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: '#C9A55A', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Locations
            </span>
            <h2 className="section-headline" style={{ marginTop: '8px', color: '#111827' }}>
              Service Areas
            </h2>
            <div style={{ width: '60px', height: '3px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {areas.map((area, index) => {
              return (
                <div 
                  key={index} 
                  className="service-card"
                  style={{ 
                    background: '#ffffff', 
                    borderRadius: '12px', 
                    padding: '40px 32px', 
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                    border: '1px solid #f3f4f6',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(201, 165, 90, 0.1)', color: '#C9A55A', marginBottom: '24px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {area.name}
                  </h3>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                    {area.desc}
                  </p>
                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
                    <a 
                      href={`/contact?city=${encodeURIComponent(area.name)}`}
                      style={{ 
                        color: '#C9A55A', 
                        fontWeight: 600, 
                        fontSize: '14px', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Request Quote in {area.name}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: '#111827', color: '#ffffff', padding: '60px 24px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px', fontFamily: "'Cormorant Garamond', serif" }}>
            Don't see your city listed?
          </h3>
          <p style={{ color: '#9CA3AF', marginBottom: '32px', fontSize: '16px' }}>
            We serve residential clients all across Orange County, Osceola County, Lake County, Seminole County, and surrounding Central Florida regions. Contact us to verify coverage.
          </p>
          <a 
            href="/contact" 
            className="btn-primary" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Inquire About Your Location</span>
          </a>
        </div>
      </section>

            </main>

<Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default function ServiceAreasPageClient() {
  return (
    <TranslationProvider>
      <ServiceAreasPageContent />
    </TranslationProvider>
  );
}

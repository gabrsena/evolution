'use client';

import React, { useEffect } from 'react';
import { TranslationProvider, useTranslation } from '../contexts/TranslationContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { AboutSection } from '../sections/AboutSection';
import { TestimonialSection } from '../sections/TestimonialSection';
import { CTASection } from '../sections/CTASection';
import { FloatingWhatsApp } from '../FloatingWhatsApp';
import { CheckIcon } from '../icons';

const LandscapingPageContent = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
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

  const services = [
    {
      title: "Premium Artificial Grass",
      desc: "Get a flawless, low-maintenance green lawn all year round. Our premium synthetic turf is highly durable, pet-friendly, features excellent drainage, and is perfect for pool surrounds, play areas, and putting greens.",
      items: ["Pet-safe & odor-free materials", "Superior multi-layered backing drainage", "UV-resistant fibers that won't fade"]
    },
    {
      title: "Structural & Planter Retaining Walls",
      desc: "Stabilize soil slopes, create beautifully tiered garden beds, or add structural borders to your hardscaping. Built using high-quality concrete wall blocks or natural flagstones with integrated drainage.",
      items: ["Tiered planter wall layout designs", "Soil stabilization & erosion control", "Built-in drainage weep holes"]
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
        {isMobile ? (
          <div
            style={{
              background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
        ) : (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="none"
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
            <source src="/Landscaping.mp4" type="video/mp4" />
          </video>
        )}
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
            Premium Landscaping
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
            Artificial Grass & Retaining Walls
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
            Enjoy a clean, maintenance-free backyard oasis. We construct premium artificial turf lawns and structural masonry retaining walls for Florida homes.
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
              Maintenance Free
            </span>
            <h2 className="section-headline" style={{ marginTop: '8px', color: '#111827' }}>
              Landscaping & Turf Services
            </h2>
            <div style={{ width: '60px', height: '3px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
            {services.map((svc, index) => (
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
                  <CheckIcon />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                  {svc.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
                  {svc.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                      <span style={{ color: '#C9A55A', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <AboutSection />
      <TestimonialSection />
      <CTASection />
            </main>

<Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default function LandscapingPageClient() {
  return (
    <TranslationProvider>
      <LandscapingPageContent />
    </TranslationProvider>
  );
}

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
import { WhatsAppIcon, CheckIcon } from '../icons';

const OutdoorLivingPageContent = () => {
  const { t } = useTranslation();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';
  const customWhatsAppMessage = "Hi, I'm interested in an outdoor living or kitchen project for my home in Central Florida.";
  const displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(customWhatsAppMessage)}`;

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

  const services = [
    {
      title: "Outdoor Kitchens",
      desc: "Custom-built outdoor kitchens featuring premium marine-grade grills, side burners, durable granite countertops, built-in refrigerators, and sinks.",
      items: ["Weather-resistant cabinetry", "Premium stainless steel grills", "Granite & stone countertop finishes"]
    },
    {
      title: "Custom Firepits & Fire Tables",
      desc: "Add warmth and ambiance to your evenings. We design and install custom gas-piped or wood-burning stone fire pits and modern linear fire tables.",
      items: ["Stone veneer & brick firepits", "Safe gas line hookups", "Decorative fire glass & lava rock"]
    },
    {
      title: "Integrated Seat Walls & Benches",
      desc: "Create cozy, defined lounging hubs. Built-in stone seating benches integrate seamlessly with firepits, retaining walls, and paver patios.",
      items: ["Masonry bench structures", "Matching flagstone or paver caps", "Perfect firepit integration"]
    },
    {
      title: "Screen Enclosures",
      desc: "Protect your pool and patio from debris, leaves, and insects. Custom-engineered aluminum enclosures designed to withstand high winds.",
      items: ["Heavy-gauge aluminum framing", "High-clarity insect screening", "Hurricane-rated engineering specs"]
    },
    {
      title: "Privacy Fencing",
      desc: "Enhance your peace of mind and create a fully private backyard retreat with modern horizontal wood fences, PVC/vinyl fencing, or aluminum gates.",
      items: ["Horizontal modern wood fences", "Low-maintenance PVC/vinyl", "Custom side gates & locks"]
    }
  ];

  return (
    <div className="app-container">
      <Navbar />

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
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 0 
          }}
        >
          <source src="/OutdoorLiving.mp4" type="video/mp4" />
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
            Luxury Outdoor Living
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
            Luxury Backyard Living Spaces
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
            Bring the comfort of the indoors outside. We design and build custom outdoor kitchens, stone fire pits, built-in benches, screen enclosures, and premium privacy fencing.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={displayWhatsAppUrl} 
              className="btn-primary" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon />
              <span>Request an Outdoor Kitchen Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="section fade-in-section" style={{ background: '#f9fafb', color: '#111827' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: '#C9A55A', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Custom Builds
            </span>
            <h2 className="section-headline" style={{ marginTop: '8px', color: '#111827' }}>
              Outdoor Living Features
            </h2>
            <div style={{ width: '60px', height: '3px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
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
      <Footer />
      <FloatingWhatsApp customMessage={customWhatsAppMessage} />
    </div>
  );
};

export default function OutdoorLivingPageClient() {
  return (
    <TranslationProvider>
      <OutdoorLivingPageContent />
    </TranslationProvider>
  );
}

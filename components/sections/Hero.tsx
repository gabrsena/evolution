'use client';

import React from 'react';

interface HeroProps {
  cityName?: string;
  whatsappMessageOverride?: string;
}

export const Hero: React.FC<HeroProps> = ({ cityName, whatsappMessageOverride }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';

  const displaySubtext = cityName
    ? `Premium pool construction, pavers, outdoor kitchens and hardscape design for ${cityName} homeowners.`
    : `Premium pool construction, pavers, outdoor kitchens and hardscape design for Central Florida homeowners.`;

  let displayWhatsAppUrl = '';
  if (whatsappMessageOverride) {
    displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(whatsappMessageOverride)}`;
  } else {
    displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      cityName
        ? `Hi, I'm interested in an outdoor living project for my home in ${cityName}.`
        : "Hi, I'm interested in an outdoor living project for my home in Central Florida."
    )}`;
  }

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
      {/* Background Video */}
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
          zIndex: 0,
        }}
      >
        <source src="/hero.webm" type="video/webm" />
      </video>

      {/* Dark Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.60)',
          zIndex: 1,
        }}
      />

      <div className="container hero-content" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div className="hero-text fade-in-section" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="hero-title">
            Where Outdoor Dreams<br />Become Reality.
          </h1>
          <p className="hero-subtitle">
            {displaySubtext}
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={displayWhatsAppUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-hero-primary"
            >
              Get a Free Quote
            </a>
            <button className="btn-hero-secondary" onClick={() => scrollToSection('features')}>
              View Our Work →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

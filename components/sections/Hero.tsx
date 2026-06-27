'use client';

import React from 'react';

interface HeroProps {
  cityName?: string;
  whatsappMessageOverride?: string;
}

export const Hero: React.FC<HeroProps> = ({ cityName, whatsappMessageOverride }) => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.readyState >= 2) {
        setVideoLoaded(true);
      }
    }
  }, []);

  const displaySubtext = cityName
    ? `Premium outdoor living spaces tailored for homeowners in ${cityName} & Central Florida.`
    : `Premium outdoor living spaces tailored for homeowners in Orlando & Central Florida.`;

  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px' }}>
      {/* Background Video */}
      {isMobile ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d1b0a 100%)',
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
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="hero-video"
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
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
      )}

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
        <div className="hero-text fade-in-section" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="hero-title" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            We Build Backyard Dreams in Central Florida.
          </h1>
          <p className="hero-subtitle">
            {displaySubtext}
          </p>
          <div className="hero-services-list">
            <span className="hero-service-item">Pools</span>
            <span className="hero-service-item">Paver Patios</span>
            <span className="hero-service-item">Artificial Turf</span>
            <span className="hero-service-item">Summer Kitchens</span>
            <span className="hero-service-item">Vinyl Fences</span>
            <span className="hero-service-item">Screen Enclosures</span>
          </div>
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/contact" 
              className="btn-hero-primary"
              style={{ backgroundColor: '#C9A55A', color: '#FFFFFF', border: 'none' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#b8944a'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#C9A55A'; }}
            >
              Request a Free Estimate
            </a>
            <a 
              href="tel:+17204003679" 
              className="btn-hero-secondary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

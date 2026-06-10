'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { WhatsAppIcon, CheckIcon } from '../icons';

interface CTASectionProps {
  cityName?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ cityName }) => {
  const { lang, t } = useTranslation();


  return (
    <section id="contact" className="section cta-section fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BACKGROUND VIDEO */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#000' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/rds.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="cta-container" style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', padding: '56px 40px' }}>
        <h2 className="section-headline" style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", marginBottom: '16px', textAlign: 'center', lineHeight: '1.2' }}>
          {t.formTitle}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px', textAlign: 'center', maxWidth: '480px', margin: '0 auto 32px' }}>
          Request a free estimate online or call us directly to schedule a backyard consultation with our design team.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
          <a 
            href="/contact" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '14px 28px', 
              background: '#C9A55A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(201, 165, 90, 0.2)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#b8944a';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#C9A55A';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Request a Free Estimate
          </a>
          <a 
            href="tel:+14070000000" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '14px 28px', 
              background: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Call Now
          </a>
        </div>

          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            marginTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '16px',
            width: '100%'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', fontWeight: 500 }}>
              <span style={{ color: '#C9A55A', display: 'flex', alignItems: 'center' }}>
                <CheckIcon />
              </span>
              <span>Licensed & Insured</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', fontWeight: 500 }}>
              <span style={{ color: '#C9A55A', display: 'flex', alignItems: 'center' }}>
                <CheckIcon />
              </span>
              <span>Craftsmanship Guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255, 255, 255, 0.7)', fontSize: '13px', fontWeight: 500 }}>
              <span style={{ color: '#C9A55A', display: 'flex', alignItems: 'center' }}>
                <CheckIcon />
              </span>
              <span>Response under 5 min</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

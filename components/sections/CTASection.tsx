'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { WhatsAppIcon, CheckIcon } from '../icons';

interface CTASectionProps {
  cityName?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ cityName }) => {
  const { lang, t } = useTranslation();
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';


  return (
    <section id="contact" className="section cta-section fade-in-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BACKGROUND VIDEO */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#000' }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}>
          <source src="/elevation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="cta-container" style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', padding: '56px 40px' }}>
        <h2 className="section-headline" style={{ color: '#FFFFFF', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif", marginBottom: '16px', textAlign: 'center', lineHeight: '1.2' }}>
          {t.formTitle}
        </h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px', textAlign: 'center', maxWidth: '480px', margin: '0 auto 32px' }}>
          Connect directly with our team on WhatsApp. No forms, no wait times—just immediate support to design and build your dream outdoor living space.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <a 
            href={`https://wa.me/${waNumber}?text=${encodeURIComponent(cityName ? `Hi, I'm interested in an outdoor living project in ${cityName}.` : "Hi! I'm interested in starting an outdoor living project with Elevation.")}`} 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px', 
              padding: '14px 28px', 
              background: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '15px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)',
              width: 'auto',
              minWidth: '240px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#059669';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#10B981';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <WhatsAppIcon />
            <span>Chat with our Team</span>
          </a>

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
      </div>
    </section>
  );
};

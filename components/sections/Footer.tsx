'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

export const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer fade-in-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '16px' }}>
              <span className="sr-only">Elevation Outdoor Living</span>
              <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#FFFFFF', fontSize: '23px', letterSpacing: '1px', display: 'flex', alignItems: 'center', lineHeight: '1' }}>
                  ELEV
                  <svg width="14" height="20" viewBox="0 0 14 20" style={{ display: 'inline-block', margin: '0 1px' }}>
                    <line x1="1.5" y1="19.5" x2="7" y2="0.5" stroke="#C9A55A" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="7" y1="0.5" x2="12.5" y2="19.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                  TION
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                  <span style={{ height: '1px', width: '12px', backgroundColor: '#C9A55A', display: 'inline-block' }}></span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '3px', color: '#479FC8', textTransform: 'uppercase', padding: '0 6px', lineHeight: '1' }}>
                    OUTDOOR LIVING
                  </span>
                  <span style={{ height: '1px', width: '12px', backgroundColor: '#C9A55A', display: 'inline-block' }}></span>
                </div>
              </div>
            </div>
            <p style={{ color: '#9CA3AF', fontSize: '14px', maxWidth: '280px' }}>
              {t.footerDesc}
            </p>
          </div>
          
          <div className="footer-col">
            <h5>Our Services</h5>
            <ul>
              <li>
                <a href="/pools">
                  Pools & Spas
                </a>
              </li>
              <li>
                <a href="/pavers">
                  Paver Patios
                </a>
              </li>
              <li>
                <a href="/artificial-turf">
                  Artificial Turf
                </a>
              </li>
              <li>
                <a href="/summer-kitchens">
                  Summer Kitchens
                </a>
              </li>
              <li>
                <a href="/vinyl-fence">
                  Vinyl Fences
                </a>
              </li>
              <li>
                <a href="/screen-enclosures">
                  Screen Enclosures
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>Contact Info</h5>
            <ul>
              <li>
                <a href="tel:+14070000000">
                  Phone: (407) 000-0000
                </a>
              </li>
              <li>
                <a href="mailto:info@elevationoutdoorliving.com">
                  info@elevationoutdoorliving.com
                </a>
              </li>
              <li style={{ color: '#9CA3AF', fontSize: '14px', marginTop: '8px' }}>
                Hours: Mon–Sat, 7AM–6PM
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5>{t.footerLegal}</h5>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>© 2026 Elevation Outdoor Living. All rights reserved.</span>
          <span>Central Florida, FL</span>
        </div>
      </div>
    </footer>
  );
};

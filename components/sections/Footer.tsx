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
            <div className="footer-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>
              <span className="sr-only">RDS OUTDOOR LIVING</span>
              <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#FFFFFF', fontSize: '26px', letterSpacing: '1.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1' }}>
                  RDS
                </span>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3px' }}>
                  <span style={{ height: '1px', width: '12px', backgroundColor: '#C9A55A', display: 'inline-block' }}></span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '3px', color: '#C9A55A', textTransform: 'uppercase', padding: '0 6px', lineHeight: '1' }}>
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
                <a href="tel:+17204003679">
                  Phone: (720) 400-3679
                </a>
              </li>
              <li>
                <a href="mailto:info@rdsoutdoorliving.com">
                  info@rdsoutdoorliving.com
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
          <span>© 2026 RDS Outdoor Living. All rights reserved.</span>
          <span>Central Florida, FL</span>
        </div>
      </div>
    </footer>
  );
};

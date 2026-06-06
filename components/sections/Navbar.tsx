'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '../contexts/TranslationContext';

export const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34600000000';
  const displayWhatsAppUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi, I'm interested in an outdoor living project for my home in Central Florida.")}`;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" aria-label="Elevation Outdoor Living" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#FFFFFF', fontSize: '23px', letterSpacing: '1px', display: 'flex', alignItems: 'center', lineHeight: '1' }}>
              ELEV
              <span className="sr-only">A</span>
              <svg width="14" height="20" viewBox="0 0 14 20" aria-hidden="true" style={{ display: 'inline-block', margin: '0 1px' }}>
                <line x1="1.5" y1="19.5" x2="7" y2="0.5" stroke="#C9A55A" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="7" y1="0.5" x2="12.5" y2="19.5" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
              TION
            </span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '3px' }}>
              <span aria-hidden="true" style={{ height: '1px', width: '12px', backgroundColor: '#C9A55A', display: 'inline-block' }}></span>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '9px', fontWeight: 600, letterSpacing: '3px', color: '#479FC8', textTransform: 'uppercase', padding: '0 6px', lineHeight: '1' }}>
                OUTDOOR LIVING
              </span>
              <span aria-hidden="true" style={{ height: '1px', width: '12px', backgroundColor: '#C9A55A', display: 'inline-block' }}></span>
            </div>
          </Link>
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="nav-links desktop-only" style={{ gap: 'clamp(10px, 1.8vw, 24px)' }}>
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/pools" className="nav-link">
              Pools
            </Link>
            <Link href="/pavers" className="nav-link">
              Pavers
            </Link>
            <Link href="/artificial-turf" className="nav-link">
              Artificial Turf
            </Link>
            <Link href="/summer-kitchens" className="nav-link">
              Summer Kitchens
            </Link>
            <Link href="/vinyl-fence" className="nav-link">
              Vinyl Fence
            </Link>
            <Link href="/screen-enclosures" className="nav-link">
              Screen Enclosures
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          <div className="mobile-menu-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer', color: '#FFFFFF', display: 'flex', zIndex: 1002, position: 'relative' }}>
            {isMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="mobile-menu-content">
          <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/pools" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Pools
          </Link>
          <Link href="/pavers" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Pavers
          </Link>
          <Link href="/artificial-turf" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Artificial Turf
          </Link>
          <Link href="/summer-kitchens" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Summer Kitchens
          </Link>
          <Link href="/vinyl-fence" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Vinyl Fence
          </Link>
          <Link href="/screen-enclosures" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Screen Enclosures
          </Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};


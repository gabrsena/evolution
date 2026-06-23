'use client';

import React, { useState, useEffect } from 'react';
import { PhoneIcon } from './icons';

interface FloatingWhatsAppProps {
  customMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a href="tel:+17204003679" className="floating-wa" aria-label="Call Now">
      <PhoneIcon />
    </a>
  );
};

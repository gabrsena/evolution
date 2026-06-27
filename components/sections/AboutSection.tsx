'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../contexts/TranslationContext';

interface AboutSectionProps {
  currentCity?: string;
}

const CITIES = [
  { name: "Orlando" },
  { name: "Kissimmee" },
  { name: "Winter Park" },
  { name: "Lake Nona" },
  { name: "Windermere" },
  { name: "Clermont" },
  { name: "Ocoee" },
  { name: "Apopka" },
  { name: "Sanford" },
  { name: "Deltona" },
  { name: "Daytona Beach" },
  { name: "Melbourne" },
  { name: "Lakeland" },
  { name: "Tampa" },
  { name: "St. Cloud" }
];

export const AboutSection: React.FC<AboutSectionProps> = ({ currentCity }) => {
  const { t } = useTranslation();
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const visualRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setHasMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Only load once
          }
        });
      },
      { rootMargin: '200px' }
    );

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getActiveStyle = (cityName: string) => {
    if (currentCity && cityName.toLowerCase() === currentCity.toLowerCase()) {
      return { backgroundColor: 'var(--primary-blue)', color: '#ffffff' };
    }
    return {};
  };

  const displayCity = currentCity || 'Central Florida';

  const p1 = `Since 2017, we've been transforming ordinary backyards, side yards and front yards into stunning outdoor spaces across ${displayCity}. Our hardscape expertise covers everything from pool construction and pavers to outdoor kitchens and screen enclosures.`;

  const p2 = "We work directly with homeowners who want quality, reliability and a team that shows up. Every project is handled with premium materials, licensed contractors and full project management from start to finish.";

  return (
    <div id="about" className="section about-section fade-in-section">
      <div className="container about-content">
        <div className="about-text">
          <span className="ownership-label">{t.aboutLabel}</span>
          <h2 className="section-headline">{t.aboutTitle}</h2>
          <p>{p1}</p>
          <p style={{ marginTop: '12px' }}>{p2}</p>
          <p style={{ fontSize: '15px', color: 'var(--primary-blue)', fontWeight: '700', marginTop: '16px' }}>{t.aboutSubline}</p>
          
          <h3 className="section-headline" style={{ fontSize: '20px', marginTop: '32px', marginBottom: '16px' }}>
            Areas we serve
          </h3>
          <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>
            We serve homeowners across Central Florida — from Orlando to the surrounding counties.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
            {CITIES.map((city, idx) => {
              const activeStyle = getActiveStyle(city.name);
              
              return (
                <div 
                  key={idx} 
                  className="city-pill" 
                  style={{ 
                    display: 'inline-block',
                    ...activeStyle 
                  }}
                >
                  {city.name}
                </div>
              );
            })}
          </div>

          <p style={{ marginTop: '20px', fontSize: '14px', color: '#64748b' }}>
            Don't see your city?{" "}
            <a 
              href="https://rds-coral.vercel.app/contact"
              style={{ color: 'var(--primary-blue)', fontWeight: '600', textDecoration: 'underline' }}
            >
              Contact us — we likely cover your area.
            </a>
          </p>
        </div>
        
        <div ref={visualRef} className="about-visual" style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(201, 165, 90, 0.2)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', background: '#000' }}>
          {hasMounted && isInView ? (
            <video autoPlay loop muted playsInline preload="none" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="/rds.mp4" type="video/mp4" />
            </video>
          ) : (
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #111827, #1f2937)' }} />
          )}
        </div>
      </div>
    </div>
  );
};

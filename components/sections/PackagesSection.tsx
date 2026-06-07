'use client';

import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { CheckIcon } from '../icons';

interface PackagesSectionProps {
  cityName?: string;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ cityName }) => {
  const suffix = cityName ? `?city=${encodeURIComponent(cityName)}` : '';

  const link1 = `/contact${suffix}`;
  const link2 = `/contact${suffix}`;
  const link3 = `/contact${suffix}`;

  return (
    <section className="packages-section fade-in-section">
      <div className="container">
        <h2 className="section-headline">Choose your package</h2>
        <div className="packages-grid">
          {/* Card 1 */}
          <div className="package-card">
            <h3 className="package-title">Hardscape Essentials</h3>
            <p className="package-desc">
              For homeowners looking to upgrade their outdoor flooring and structure.
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">Includes:</div>
            <ul className="package-features">
              <li><CheckIcon /> Paver installation</li>
              <li><CheckIcon /> Artificial grass</li>
              <li><CheckIcon /> Retaining walls</li>
              <li><CheckIcon /> Basic landscaping</li>
            </ul>
            <a 
              href={link1} 
              className="btn-primary package-btn"
            >
              Request a Free Estimate
            </a>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="package-card highlighted">
            <span className="package-badge">Most Popular</span>
            <h3 className="package-title">Outdoor Living</h3>
            <p className="package-desc">
              For homeowners who want a complete outdoor entertainment area.
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">Includes:</div>
            <ul className="package-features">
              <li><CheckIcon /> Everything in Essentials</li>
              <li><CheckIcon /> Firepit or seat bench</li>
              <li><CheckIcon /> Outdoor kitchen</li>
              <li><CheckIcon /> Screen enclosure</li>
              <li><CheckIcon /> Fence</li>
            </ul>
            <a 
              href={link2} 
              className="btn-primary package-btn"
            >
              Request a Free Estimate
            </a>
          </div>

          {/* Card 3 */}
          <div className="package-card">
            <h3 className="package-title">Full Backyard Transformation</h3>
            <p className="package-desc">
              For homeowners who want the complete luxury outdoor experience.
            </p>
            <div className="package-divider"></div>
            <div className="package-includes-title">Includes:</div>
            <ul className="package-features">
              <li><CheckIcon /> Everything in Outdoor Living</li>
              <li><CheckIcon /> Pool construction or renovation</li>
              <li><CheckIcon /> Water features</li>
              <li><CheckIcon /> Full project management</li>
              <li><CheckIcon /> Progress photo reports</li>
            </ul>
            <a 
              href={link3} 
              className="btn-primary package-btn"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
        
        <p className="package-footer-text">
          Every project is custom. Request a free consultation.
        </p>
      </div>
    </section>
  );
};

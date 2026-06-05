'use client';

import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { CheckIcon } from '../icons';

export const FeaturesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="section features-section" style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px', background: '#000' }}>
      
      {/* Background Video */}
      <video
        key={activeTab}
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
        <source
          src={
            activeTab === 0
              ? '/pool.mp4'
              : activeTab === 1
              ? '/pavers.mp4'
              : '/Landscaping.mp4'
          }
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.65)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="section-headline fade-in-section" style={{ color: '#ffffff', textAlign: 'center' }}>{t.featuresTitle}</h2>
        
        <div className="tabs-header fade-in-section">
          <button 
            className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} 
            onClick={() => setActiveTab(0)} 
          >
            {t.tab1}
          </button>
          <button 
            className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} 
            onClick={() => setActiveTab(1)} 
          >
            {t.tab2}
          </button>
          <button 
            className={`tab-btn ${activeTab === 2 ? 'active' : ''}`} 
            onClick={() => setActiveTab(2)} 
          >
            {t.tab3}
          </button>
        </div>
        
        <div className="tab-content fade-in-section" style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
          <div className="tab-text" style={{ maxWidth: '700px', textAlign: 'center', color: '#ffffff' }}>
            {activeTab === 0 && (
              <>
                <h3 style={{ fontSize: '32px', marginBottom: '32px', color: '#ffffff' }}>{t.tab1Title}</h3>
                <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab1List1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab1List2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab1List3}</li>
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h3 style={{ fontSize: '32px', marginBottom: '32px', color: '#ffffff' }}>{t.tab2Title}</h3>
                <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab2List1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab2List2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab2List3}</li>
                </ul>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h3 style={{ fontSize: '32px', marginBottom: '32px', color: '#ffffff' }}>{t.tab3Title}</h3>
                <ul className="tab-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab3List1}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab3List2}</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.9)' }}><span className="tab-check" style={{ color: '#C9A55A' }}><CheckIcon /></span> {t.tab3List3}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

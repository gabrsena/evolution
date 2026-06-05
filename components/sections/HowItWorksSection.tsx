'use client';

import React from 'react';

export const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section fade-in-section">
      <div className="container">
        <h2 className="section-headline" style={{ textAlign: 'center', marginBottom: '16px' }}>How it works</h2>
        <p style={{ color: 'var(--text-color)', fontSize: '16px', maxWidth: '600px', margin: '0 auto 48px auto', textAlign: 'center' }}>
          From initial consultation to final inspection, we make the process of building your dream outdoor space seamless and transparent.
        </p>
        <div className="how-it-works-grid">
          {/* Step 1 */}
          <div className="how-step">
            <span className="how-step-num-bg">01</span>
            <div className="how-step-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h4 className="how-step-title">
              Tell us about your project
            </h4>
            <p className="how-step-desc">
              Share your space, ideas and goals. We'll schedule a free on-site consultation.
            </p>
          </div>

          {/* Step 2 */}
          <div className="how-step">
            <span className="how-step-num-bg">02</span>
            <div className="how-step-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <h4 className="how-step-title">
              We design your outdoor space
            </h4>
            <p className="how-step-desc">
              Our team creates a custom plan tailored to your yard and budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="how-step">
            <span className="how-step-num-bg">03</span>
            <div className="how-step-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </div>
            <h4 className="how-step-title">
              We handle the full build
            </h4>
            <p className="how-step-desc">
              From permits to final touches — we coordinate everything.
            </p>
          </div>

          {/* Step 4 */}
          <div className="how-step">
            <span className="how-step-num-bg">04</span>
            <div className="how-step-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h4 className="how-step-title">
              You enjoy the result
            </h4>
            <p className="how-step-desc">
              Your transformed outdoor space, built to last and ready to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

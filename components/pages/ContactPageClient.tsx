'use client';

import React, { useEffect, useState } from 'react';
import { TranslationProvider } from '../contexts/TranslationContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: 'Pools',
    source: 'Google',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `City/Zip Code: ${formData.zip}\n` +
      `Service Interested In: ${formData.service}\n` +
      `How they heard about us: ${formData.source}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:rdsoutdoorliving@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-container">
      <Navbar />
      <main>

      {/* Header Section */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          height: '50vh', 
          width: '100%', 
          overflow: 'hidden', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111317, #1c1f26)'
        }}
      >
        <div className="container fade-in-section" style={{ zIndex: 2, textAlign: 'center', color: '#ffffff', maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px', fontFamily: "'Cormorant Garamond', serif" }}>
            Let's Build Something
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400, lineHeight: 1.6 }}>
            Request a free estimate or schedule a backyard consultation.
          </p>
        </div>
      </section>

      {/* Two Column Layout Section */}
      <section className="section fade-in-section" style={{ background: '#ffffff', color: '#111827', padding: '80px 24px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
          
          {/* Left Column: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, marginBottom: '24px', color: '#111827' }}>
                Contact Information
              </h2>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                Have questions or ready to schedule your design consultation? Get in touch with us today. Our team is ready to help you plan your backyard transformation.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#C9A55A', marginTop: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Phone Number</h4>
                  <a href="tel:+17204003679" style={{ color: '#C9A55A', fontWeight: 600, fontSize: '16px', textDecoration: 'underline' }}>
                    (720) 400-3679
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#C9A55A', marginTop: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Email Address</h4>
                  <a href="mailto:rdsoutdoorliving@outlook.com" style={{ color: '#C9A55A', fontWeight: 600, fontSize: '16px', textDecoration: 'underline' }}>
                    rdsoutdoorliving@outlook.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#C9A55A', marginTop: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Working Hours</h4>
                  <p style={{ color: '#4b5563', fontSize: '15px' }}>Monday–Saturday, 7AM–6PM</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: '#C9A55A', marginTop: '4px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Service Area</h4>
                  <p style={{ color: '#4b5563', fontSize: '15px' }}>Orlando & Central Florida</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ background: '#F9FAFB', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '40px 32px' }}>
            <h3 style={{ fontSize: '24px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, marginBottom: '24px', color: '#111827' }}>
              Send a Request
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }} 
                />
              </div>
              
              <div>
                <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }} 
                />
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }} 
                />
              </div>
              
              <div>
                <label htmlFor="zip" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>City / ZIP Code</label>
                <input 
                  type="text" 
                  id="zip" 
                  required 
                  value={formData.zip} 
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }} 
                />
              </div>
              
              <div>
                <label htmlFor="service" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Service Interested In</label>
                <select 
                  id="service" 
                  value={formData.service} 
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }}
                >
                  <option value="Pools">Pools</option>
                  <option value="Pavers">Pavers</option>
                  <option value="Artificial Turf">Artificial Turf</option>
                  <option value="Summer Kitchens">Summer Kitchens</option>
                  <option value="Vinyl Fence">Vinyl Fence</option>
                  <option value="Screen Enclosures">Screen Enclosures</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="source" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>How did you hear about us?</label>
                <select 
                  id="source" 
                  value={formData.source} 
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }}
                >
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#111827', background: '#ffffff' }}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ padding: '14px', fontSize: '16px', fontWeight: 700, width: '100%', justifyContent: 'center' }}
              >
                Send Request
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#4b5563' }}>
              Prefer to call? <a href="tel:+17204003679" style={{ color: '#C9A55A', fontWeight: 700 }}>(720) 400-3679</a>
            </div>
          </div>
        </div>
      </section>

            </main>

<Footer />
    </div>
  );
};

export default function ContactPageClient() {
  return (
    <TranslationProvider>
      <ContactContent />
    </TranslationProvider>
  );
}

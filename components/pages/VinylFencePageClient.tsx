'use client';

import React, { useEffect, useState } from 'react';
import { TranslationProvider } from '../contexts/TranslationContext';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { TestimonialSection } from '../sections/TestimonialSection';
import { CheckIcon } from '../icons';
import { FloatingWhatsApp } from '../FloatingWhatsApp';

const CITIES = [
  "Orlando", "Kissimmee", "Winter Park", "Lake Nona", "Windermere", 
  "Clermont", "Ocoee", "Apopka", "Sanford", "Deltona", 
  "Daytona Beach", "Melbourne", "Lakeland", "Tampa", "St. Cloud"
];

const PROCESS_STEPS = [
  { step: "01", title: "Property Measurement", desc: "Inspect property lines, easements, and check utility coordinates." },
  { step: "02", title: "Style Selection", desc: "Choose fence heights, colors, panel styles, and gate styles." },
  { step: "03", title: "Permit Filing", desc: "We handle all city building permits and utility tickets (811)." },
  { step: "04", title: "Professional Installation", desc: "Setting structural posts in concrete, installing panels, and final cleanup." }
];

const FAQS = [
  {
    q: "How long does vinyl fence last?",
    a: "Vinyl fencing typically lasts 20–30 years with minimal maintenance."
  },
  {
    q: "Do you pull permits?",
    a: "Yes, we handle all required permits for fence installations."
  },
  {
    q: "Can vinyl fence be installed around a pool?",
    a: "Yes, we install pool-code compliant vinyl fencing throughout Central Florida."
  },
  {
    q: "How long does installation take?",
    a: "Most residential fence projects are completed in 1–2 days."
  }
];

const VinylFencePageContent = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: 'Vinyl Fence',
    message: ''
  });

  useEffect(() => {
    // Scroll animation observer
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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Estimate Request - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `City/Zip Code: ${formData.zip}\n` +
      `Service Needed: ${formData.service}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:info@rdsoutdoorliving.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-container">
      <Navbar />
      <main>

      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ 
          position: 'relative', 
          height: '100vh', 
          width: '100%', 
          overflow: 'hidden', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: '#000'
        }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          onLoadedData={() => setVideoLoaded(true)}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 0,
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <source src="/Vinyl Fence.webm" type="video/webm" />
        </video>
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'rgba(0, 0, 0, 0.65)', 
            zIndex: 1 
          }} 
        />
        
        <div 
          className="container fade-in-section" 
          style={{ 
            position: 'relative', 
            zIndex: 2, 
            textAlign: 'center', 
            color: '#ffffff',
            maxWidth: '800px'
          }}
        >
          <span 
            style={{ 
              color: '#C9A55A', 
              fontSize: '14px', 
              fontWeight: 700, 
              letterSpacing: '3px', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            VINYL FENCE
          </span>
          <h1 
            style={{ 
              fontSize: 'clamp(36px, 6vw, 64px)', 
              fontWeight: 700, 
              lineHeight: 1.1, 
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            Premium Vinyl Fence Installation in Florida
          </h1>
          <p 
            style={{ 
              fontSize: 'clamp(16px, 2.5vw, 20px)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '40px',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Durable, weather-resistant vinyl fencing built to provide privacy, security, and elegance to your Florida home.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#contact-form" 
              className="btn-primary" 
            >
              <span>Request a Free Estimate</span>
            </a>
            <a 
              href="tel:+14070000000" 
              className="btn-secondary"
              style={{ color: '#ffffff', borderColor: '#ffffff' }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#111827';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grid Services Section (ServiceCards) */}
      <section className="section fade-in-section" style={{ background: '#ffffff', color: '#111827', padding: '80px 24px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: '#C9A55A', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Why Choose Us
            </span>
            <h2 className="section-headline" style={{ marginTop: '8px', color: '#111827', fontFamily: "'Cormorant Garamond', serif" }}>
              Why Choose RDS for Vinyl Fence
            </h2>
            <div style={{ width: '60px', height: '3px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', border: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(201, 165, 90, 0.1)', color: '#C9A55A', marginBottom: '24px' }}>
                <CheckIcon />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Low Maintenance</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>Unlike wood, vinyl never rots, warps or needs painting. A simple rinse keeps it looking new.</p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', border: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(201, 165, 90, 0.1)', color: '#C9A55A', marginBottom: '24px' }}>
                <CheckIcon />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Durable in Florida</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>UV-resistant and weatherproof — built to withstand Florida heat, humidity and storms.</p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', padding: '40px 32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', border: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(201, 165, 90, 0.1)', color: '#C9A55A', marginBottom: '24px' }}>
                <CheckIcon />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Multiple Styles</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>Privacy panels, picket, semi-privacy and pool code-compliant options for every property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section fade-in-section" style={{ background: '#111827', padding: '80px 24px', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '48px', fontWeight: 600, textAlign: 'center', margin: 0 }}>
              Our Vinyl Fence Process
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {PROCESS_STEPS.map((p, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)', 
                  borderRadius: '6px', 
                  padding: '28px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span 
                  style={{ 
                    color: '#C9A55A', 
                    fontSize: '48px', 
                    fontFamily: "'Cormorant Garamond', serif", 
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: '16px',
                    display: 'block'
                  }}
                >
                  {p.step}
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '12px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section fade-in-section" style={{ background: '#0a0a0a', padding: '80px 24px', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '48px', fontWeight: 600, textAlign: 'center', margin: 0 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFAQ === idx;
              return (
                <div key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '20px 0' }}>
                  <button 
                    onClick={() => setOpenFAQ(isOpen ? null : idx)} 
                    style={{ 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: 0, 
                      fontWeight: 500, 
                      fontSize: '16px', 
                      color: '#ffffff', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      textAlign: 'left' 
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#C9A55A', fontSize: '24px', fontWeight: 300, marginLeft: '16px' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ marginTop: '12px' }}>
                      <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="section fade-in-section" style={{ background: '#ffffff', padding: '80px 24px', color: '#111827', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#111827', fontSize: '48px', fontWeight: 600, margin: '0 0 12px 0' }}>
            Areas We Serve
          </h2>
          <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '32px', margin: '0 auto 32px', maxWidth: '600px' }}>
            We provide professional vinyl fence installation for homeowners across Central Florida.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {CITIES.map((city, idx) => (
              <div 
                key={idx} 
                style={{ 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '4px', 
                  padding: '8px 16px', 
                  color: '#374151', 
                  fontSize: '14px',
                  fontWeight: 500,
                  backgroundColor: '#ffffff'
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section id="contact-form" className="section fade-in-section" style={{ background: '#111827', padding: '80px 24px', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '48px', fontWeight: 600, textAlign: 'center', margin: 0 }}>
              Request a Free Estimate
            </h2>
            <div style={{ width: '60px', height: '1px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Full Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                placeholder="John Doe"
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none'
                }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="phone" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required 
                placeholder="(407) 000-0000"
                value={formData.phone} 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none'
                }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                required 
                placeholder="john@example.com"
                value={formData.email} 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none'
                }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="zip" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>City / ZIP Code</label>
              <input 
                type="text" 
                id="zip" 
                required 
                placeholder="Orlando, FL"
                value={formData.zip} 
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none'
                }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="service" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Service Needed</label>
              <select 
                id="service" 
                value={formData.service} 
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="Pools" style={{ background: '#111827', color: '#ffffff' }}>Pools</option>
                <option value="Pavers" style={{ background: '#111827', color: '#ffffff' }}>Pavers</option>
                <option value="Artificial Turf" style={{ background: '#111827', color: '#ffffff' }}>Artificial Turf</option>
                <option value="Summer Kitchens" style={{ background: '#111827', color: '#ffffff' }}>Summer Kitchens</option>
                <option value="Vinyl Fence" style={{ background: '#111827', color: '#ffffff' }}>Vinyl Fence</option>
                <option value="Screen Enclosures" style={{ background: '#111827', color: '#ffffff' }}>Screen Enclosures</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Message (Optional)</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="Tell us about your project..."
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  borderRadius: '4px', 
                  padding: '14px 16px', 
                  color: '#ffffff', 
                  fontSize: '14px',
                  width: '100%',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>
            <button 
              type="submit" 
              style={{ 
                background: '#C9A55A', 
                color: '#ffffff', 
                borderRadius: '6px', 
                width: '100%', 
                padding: '16px', 
                fontSize: '16px', 
                fontWeight: 700,
                textAlign: 'center',
                transition: 'background 0.2s',
                marginTop: '10px'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#B08E48'}
              onMouseOut={(e) => e.currentTarget.style.background = '#C9A55A'}
            >
              Send Request
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            Or call us directly:{' '}
            <a href="tel:+14070000000" style={{ color: '#C9A55A', fontWeight: 700, textDecoration: 'none' }}>
              + (407) 000-0000
            </a>
          </div>
        </div>
      </section>

      <TestimonialSection />
            </main>

<Footer />
      <FloatingWhatsApp customMessage="Hi, I'm interested in a vinyl fence project for my home in Central Florida." />
    </div>
  );
};

export default function VinylFencePageClient() {
  return (
    <TranslationProvider>
      <VinylFencePageContent />
    </TranslationProvider>
  );
}

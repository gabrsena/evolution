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
  { step: "01", title: "Excavation & Base", desc: "Digging and grading the dirt, installing high-compacted aggregate base to prevent future sinking." },
  { step: "02", title: "Screeding & Edges", desc: "Setting screed rails, laying leveling sand bed, and securing concrete edge restraints." },
  { step: "03", title: "Laying Pavers", desc: "Hand-laying each paver piece in custom pattern layouts and cutting borders for a perfect fit." },
  { step: "04", title: "Sanding & Sealing", desc: "Sweeping polymeric joint sand, compacting pavers, watering joints, and applying premium sealer coat." }
];

const FAQS = [
  {
    q: "Do pavers require sealing?",
    a: "Yes, we highly recommend sealing pavers with premium polymeric sand and sealer to prevent shifting, weed growth, and stains."
  },
  {
    q: "Can pavers support the weight of a car?",
    a: "Yes, our driveway pavers are engineered with deep, compacted sub-base aggregate to handle high vehicular weight without cracking."
  },
  {
    q: "How long do pavers last?",
    a: "With proper base preparation and regular sealing, high-quality pavers can last 20 to 30 years or more."
  },
  {
    q: "Can pavers be installed over concrete?",
    a: "Yes, in many cases we can install thin travertine or concrete pavers over stable existing concrete slabs using proper sand setting beds."
  }
];

const services = [
  {
    title: "Patio Pavers",
    desc: "Create the ultimate outdoor living area with custom travertine, brick, or concrete pavers. Perfect for outdoor dining, lounging, and entertainment.",
    items: ["Custom design & patterns", "Travertine & brick selections", "Polymeric sand sealing"]
  },
  {
    title: "Driveway Pavers",
    desc: "Transform your home's curb appeal with high-durability interlocking pavers. Engineered to support vehicular weight while adding luxury aesthetics.",
    items: ["Heavy-load rated installation", "Stain-resistant sealer options", "Custom borders & modern layouts"]
  },
  {
    title: "Pool Deck Pavers",
    desc: "Upgrade your pool area with slip-resistant, heat-reflective pavers. Specially designed to stay cool under the Florida sun and handle wet environments.",
    items: ["Heat-reflective travertine", "Slip-resistant surfaces", "Perfect pool coping integration"]
  },
  {
    title: "Walkways & Paths",
    desc: "Design elegant, inviting paths connecting your driveway, patio, and backyard gates. Built with stable foundations to prevent shifting over time.",
    items: ["Curve & straight designs", "Consistent step-height transitions", "Edge restraints & stabilization"]
  },
  {
    title: "Retaining Walls",
    desc: "Add structural support, prevent soil erosion, or create beautiful tiered planter beds. Constructed with premium structural block and custom caps.",
    items: ["Structural engineering compliance", "Planter wall integration", "Stone veneer finishing options"]
  },
  {
    title: "Built-In Seat Benches",
    desc: "Maximize your seating capacity with masonry seat walls. Fully integrated into your patio layout, creating natural hubs around firepits or dining areas.",
    items: ["Custom heights & depths", "Matching paver caps", "Integrated LED lighting channels"]
  }
];

const PaversPageContent = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    service: 'Pavers',
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
          <source src="/pavers.mp4" type="video/mp4" />
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
            Premium Pavers & Hardscape
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
            High-End Paver Installations
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
            Enhance your outdoor living with custom patios, driveways, pool decks, retaining walls, and pathways built to last.
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
              Our Specialties
            </span>
            <h2 className="section-headline" style={{ marginTop: '8px', color: '#111827', fontFamily: "'Cormorant Garamond', serif" }}>
              Hardscape & Pavers Solutions
            </h2>
            <div style={{ width: '60px', height: '3px', background: '#C9A55A', margin: '20px auto 0' }} />
          </div>

          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {services.map((svc, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ 
                  background: '#ffffff', 
                  borderRadius: '12px', 
                  padding: '40px 32px', 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  border: '1px solid #f3f4f6',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(201, 165, 90, 0.1)', color: '#C9A55A', marginBottom: '24px' }}>
                  <CheckIcon />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#111827', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {svc.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                  {svc.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
                  {svc.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151', fontWeight: 500 }}>
                      <span style={{ color: '#C9A55A', display: 'flex', alignItems: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section fade-in-section" style={{ background: '#111827', padding: '80px 24px', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '48px', fontWeight: 600, textAlign: 'center', margin: 0 }}>
              Our Paver Installation Process
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
            We provide professional pavers and hardscape installation for homeowners across Central Florida.
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
      <Footer />
      <FloatingWhatsApp customMessage="Hi, I'm interested in a pavers or hardscape project for my home in Central Florida." />
    </div>
  );
};

export default function PaversPageClient() {
  return (
    <TranslationProvider>
      <PaversPageContent />
    </TranslationProvider>
  );
}

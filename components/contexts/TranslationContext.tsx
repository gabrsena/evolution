'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Translation {
  navServices: string;
  navAbout: string;
  navContact: string;
  heroTitle: React.ReactNode;
  heroSub: string;
  heroTrustLine: string;
  heroBtnPrimary: string;
  heroBtnSecondary: string;
  robotSpeech: string;
  badgeRobot: string;
  badgeStatusClean: string;
  badgeStatusPending: string;
  trust1: string;
  trust2: string;
  trust3: string;
  featuresTitle: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab1Title: string;
  tab1List1: string;
  tab1List2: string;
  tab1List3: string;
  tab2Title: string;
  tab2List1: string;
  tab2List2: string;
  tab2List3: string;
  tab3Title: string;
  tab3List1: string;
  tab3List2: string;
  tab3List3: string;
  mockupTask1: string;
  mockupTask2: string;
  mockupTask3: string;
  mockupDone: string;
  testiTitle: string;
  testimonials: Testimonial[];
  stat1Number: string;
  stat1Label: string;
  stat2Number: string;
  stat2Label: string;
  stat3Number: string;
  stat3Label: string;
  stat4Number: string;
  stat4Label: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutSubline: string;
  formTitle: string;
  formName: string;
  formPhone: string;
  formType: string;
  formOpt1: string;
  formOpt2: string;
  formOpt3: string;
  formSubmit: string;
  footerDesc: string;
  footerLegal: string;
  rights: string;
  waMessage: string;
}

export const translations: Record<'en', Translation> = {
  en: {
    navServices: "Services",
    navAbout: "About Us",
    navContact: "Contact",
    heroTitle: <>Transform Your <span className="text-gradient">Outdoor Space</span> in Central Florida</>,
    heroSub: "Professional pool installation, pavers, artificial grass, outdoor kitchens and hardscape design for homeowners across Central Florida. Crafting luxury outdoor living since 2017.",
    heroTrustLine: "Hardscape experience since 2017. Serving homeowners across Central Florida.",
    heroBtnPrimary: "Get a Free Quote on WhatsApp",
    heroBtnSecondary: "View Our Services",
    robotSpeech: "Hi! We design and build resort-style pools, pavers, and outdoor kitchens.",
    badgeRobot: "Design Pro",
    badgeStatusClean: "Complete ✓",
    badgeStatusPending: "Active",
    trust1: "Since 2017",
    trust2: "Central Florida Coverage",
    trust3: "Licensed & Insured",
    featuresTitle: "Everything your outdoor space needs.",
    tab1: "Pool & Water Features",
    tab2: "Hardscape & Landscaping",
    tab3: "Project Management",
    tab1Title: "Resort-style pools built for Florida living",
    tab1List1: "New pool construction and design",
    tab1List2: "Pool renovation and resurfacing",
    tab1List3: "Water features, spa and deck integration",
    tab2Title: "Outdoor spaces designed to impress",
    tab2List1: "Pavers, artificial grass and retaining walls",
    tab2List2: "Seat benches, firepits and outdoor kitchens",
    tab2List3: "Fence, screen enclosures and privacy structures",
    tab3Title: "One team. Every detail handled.",
    tab3List1: "Full project coordination from design to completion",
    tab3List2: "Licensed contractors and quality materials",
    tab3List3: "Timeline updates and photo progress reports",
    mockupTask1: "Excavation & Permits",
    mockupTask2: "Plumbing & Rebar",
    mockupTask3: "Tile & Coping",
    mockupDone: "Done",
    testiTitle: "Trusted by homeowners",
    testimonials: [
      {
        quote: "\"We are thrilled with our new pool and paver deck! The team at RDS Outdoor Living was professional, fast, and the craftsmanship is outstanding. They transformed our Orlando backyard into a true resort-style oasis.\"",
        name: "Sarah & Mark T.",
        role: "Homeowners, Orlando",
        avatar: "/Sarah&mark.png"
      },
      {
        quote: "\"Incredible attention to detail. RDS built our custom outdoor kitchen and firepit patio. The quality of materials and communication throughout the build gave us total peace of mind. Highly recommended!\"",
        name: "James L.",
        role: "Homeowners, Windermere",
        avatar: "/JamesL.png"
      },
      {
        quote: "\"They handled everything from permits to the final finishing touches. The new artificial turf and retaining wall look absolutely perfect. Our guests always comment on how beautiful the backyard is!\"",
        name: "Elena R.",
        role: "Homeowners, Winter Park",
        avatar: "/ElenaR.png"
      }
    ],
    stat1Number: "Since 2017",
    stat1Label: "Craftsmanship",
    stat2Number: "Licensed",
    stat2Label: "And Insured",
    stat3Number: "Florida",
    stat3Label: "Central Coverage",
    stat4Number: "WhatsApp",
    stat4Label: "Fast Response",
    aboutLabel: "ABOUT US",
    aboutTitle: "From Central Florida yards to luxury outdoor living.",
    aboutText: "Since 2017, we've been transforming ordinary backyards, side yards and front yards into stunning outdoor spaces across Central Florida. Our hardscape expertise covers everything from pool construction and pavers to outdoor kitchens and screen enclosures.",
    aboutSubline: "Built on craftsmanship. Serving homeowners across Central Florida.",
    formTitle: "Ready to transform your outdoor space?",
    formName: "Full Name",
    formPhone: "WhatsApp Number",
    formType: "Project Type",
    formOpt1: "Pool Installation",
    formOpt2: "Pool Renovation",
    formOpt3: "Pavers / Hardscape",
    formSubmit: "Request a Quote on WhatsApp",
    footerDesc: "Premium outdoor living transformations for homeowners across Central Florida.",
    footerLegal: "Legal",
    rights: "All rights reserved.",
    waMessage: "Hi, I'm interested in an outdoor living project for my home in Central Florida."
  }
};

interface TranslationContextType {
  lang: 'en';
  setLang: (lang: 'en') => void;
  t: Translation;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'en'>('en');

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('rds-lang');
    if (savedLang === 'en') {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (newLang: 'en') => {
    setLang(newLang);
    localStorage.setItem('rds-lang', newLang);
  };

  const t = translations[lang];

  return (
    <TranslationContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

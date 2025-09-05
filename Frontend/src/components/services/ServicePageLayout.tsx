// services/ServicePageLayout.tsx
import React from "react";
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import SubNavbar from '../layout/SubNavbar';

import HeroSection from "./HeroSection";
import BulletPoints from "./BulletPoints";
import ExtraSections from "./ExtraSections";
import FAQSection from "./FAQSection";
import TestimonialsSection from "./TestimonialsSection";
import OtherServicesSection from "./OtherServicesSection";

import { ServiceData } from "./types";

const ServicePageLayout: React.FC<ServiceData> = (props) => {

  // Function to normalize headings into a URL-friendly ID
  const normalizeHeading = (heading: string) => {
    return heading.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  // Normalize extraSections IDs for SubNavbar and section rendering
  const normalizedExtraSections = props.extraSections.map((section) => ({
    ...section,
    sectionId: normalizeHeading(section.heading),
  }));

  const sections = [
    { id: "what-we-deliver", name: "What We Deliver" },
    ...normalizedExtraSections.map((section, idx) => ({
      id: section.sectionId || `section-${idx}`,
      name: section.heading,
    })),
    ...(props.faqs && props.faqs.length > 0 ? [{ id: "faqs", name: "FAQs" }] : []),
    ...(props.testimonials && props.testimonials.length > 0 ? [{ id: "testimonials", name: "Testimonials" }] : []),
    { id: "other-services", name: "Other Services" },
  ];

  return (
   <div className="flex flex-col font-sans antialiased">
  <Navbar />
  <HeroSection
    title={props.title}
    subtitle={props.subtitle}
    description={props.description}
    primaryCta={props.cta}
    secondaryCta={props.cta.secondary}
  />
  <SubNavbar sections={sections} />
  <BulletPoints
    bulletPoints={props.bulletPoints}
    sectionHeading="What We Deliver"
  />
  <ExtraSections extraSections={normalizedExtraSections} />
  {props.faqs && <FAQSection faqs={props.faqs} />}
  {props.testimonials && (
    <TestimonialsSection testimonials={props.testimonials} />
  )}
  <OtherServicesSection otherServices={props.otherServices} />
  <Footer />
</div>

  );
};

export default ServicePageLayout;

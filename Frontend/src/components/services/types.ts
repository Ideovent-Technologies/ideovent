import React from "react";

export interface BulletPoint {
  id: string; // stable keys
  text: string;
  icon?: string;
}

// Discriminated union for ExtraSection
export type ExtraSection = GenericExtraSection | SoftwareLifecycleSection | SoftwareTypesSection;

export interface GenericExtraSection {
  id: string;
  type: "generic";
  heading: string;
  content: string;
  items?: {
    id: string;
    title: string;
    description: string;
  }[];
  sectionId?: string; // <-- added
}

export interface SoftwareLifecycleSection {
  id: string;
  type: "lifecycle";
  heading: string;
  content: string;
  items?: {
    id: string;
    step: string;
    description?: string;  // ✅ add this
    icon?: string;
  }[];
  sectionId?: string; // <-- added
}

export interface SoftwareTypesSection {
  id: string;
  type: "types";
  heading: string;
  content: string;
  items?: {
    id: string;
    title: string;
    subtitle: string;
    image?: string;
    icon?: string;
  }[];
  sectionId?: string; // <-- added
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating?: number;
}

export interface CTA {
  text: string;
  link: string;
  secondary?: {
    text: string;
    link: string;
  };
}

export interface OtherService {
  id: string;
  name: string;
  path: string;
}

export interface ServiceData {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  bulletPoints: BulletPoint[];
  cta: CTA;
  extraSections: ExtraSection[];
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  otherServices: OtherService[];
}

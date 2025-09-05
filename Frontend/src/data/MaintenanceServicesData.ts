import {
  ServiceData,
  OtherService,
  Testimonial,
  BulletPoint,
  ExtraSection,
  FAQ,
  SoftwareTypesSection,
  SoftwareLifecycleSection,
  GenericExtraSection,
} from "../components/services/types";

import { otherServicesList } from "./softwareData";

// This is likely a placeholder. You would define a specific list for maintenance services.
// For now, we'll reuse the one from softwareData.
// A more accurate structure would be:
// import { maintenanceOtherServicesList } from "./maintenanceOtherServicesData";
// export const maintenanceServicesData: ServiceData = { ... };

export const maintenanceServicesData: ServiceData = {
  title: "Professional Maintenance & Support Services",
  subtitle: "Ensure Your Systems Run Smoothly and Securely",
  description: "We provide maintenance and support to keep your systems secure, updated, and running without interruptions.",
  image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/work-1867187_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Proactive System Monitoring", icon: "MonitorCheck" },
    { id: "bp-2", text: "Regular Software Updates", icon: "FileCode2" },
    { id: "bp-3", text: "24/7 Technical Support", icon: "Headset" },
    { id: "bp-4", text: "Security Patches & Vulnerability Scans", icon: "ShieldAlert" },
    { id: "bp-5", text: "Performance Optimization", icon: "Gauge" },
  ],

  cta: {
    text: "Get a Custom Maintenance Plan",
    link: "/contact",
    secondary: { text: "Learn About Our SLA", link: "/legal/sla" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Our Maintenance & Support Plans",
      content: "We offer flexible plans tailored to your specific needs, from basic support to comprehensive, round-the-clock management.",
      items: [
        {
          id: "basic-plan",
          title: "Basic Support",
          subtitle: "Essential support for small businesses and startups.",
          icon: "Briefcase",
          image: "https://cdn.pixabay.com/photo/2023/07/04/19/43/man-8106958_1280.png",
        },
        {
          id: "professional-plan",
          title: "Professional Plan",
          subtitle: "Proactive maintenance and priority support for growing businesses.",
          icon: "Trophy",
          image: "https://cdn.pixabay.com/photo/2022/12/23/14/05/business-7674371_1280.png",
        },
        {
          id: "enterprise-plan",
          title: "Enterprise Service",
          subtitle: "Full-scale managed services with a dedicated team and 24/7 support.",
          icon: "Building2",
          image: "https://cdn.pixabay.com/photo/2025/07/01/16/11/ai-generated-9690909_1280.png",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "Our Support Process",
      content: "A clear and efficient process to address your needs and keep your systems running smoothly.",
      items: [
        { id: "process-ticket", step: "Ticket Submission", icon: "Ticket" },
        { id: "process-analysis", step: "Issue Analysis", icon: "Search" },
        { id: "process-resolution", step: "Rapid Resolution", icon: "CircleCheck" },
        { id: "process-report", step: "Feedback & Reporting", icon: "ClipboardList" },
        { id: "process-closure", step: "Ticket Closure", icon: "XCircle" },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Choose Our Maintenance Services?",
      content: "We believe that reliable systems are the backbone of a successful business. Our services are designed to be your long-term technology partner.",
      items: [
        { id: "uptime-assurance", title: "Maximized Uptime", description: "Our proactive approach minimizes downtime and prevents critical failures before they happen." },
        { id: "cost-effectiveness", title: "Cost-Effective", description: "Regular maintenance is more affordable than costly emergency repairs and data recovery." },
        { id: "expert-team", title: "Expert Team", description: "Our experienced technicians are ready to tackle any challenge, from minor bugs to major system overhauls." },
        { id: "custom-slas", title: "Custom SLAs", description: "We offer Service Level Agreements tailored to your business-critical needs and budget." },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is included in a typical maintenance plan?",
      answer: "A typical plan includes regular software updates, security scans, performance monitoring, bug fixes, and access to our technical support team.",
    },
    {
      id: "faq-2",
      question: "Do you offer emergency support?",
      answer: "Yes, our enterprise plans include 24/7 emergency support for critical issues with guaranteed response times.",
    },
    {
      id: "faq-3",
      question: "Can you provide maintenance for systems you didn't build?",
      answer: "Absolutely. We specialize in taking over and maintaining existing systems, provided we have access to the necessary code and documentation.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Anand Sharma",
      role: "IT Manager, Alpha Corp",
      feedback: "Ideovent's maintenance service has been a lifesaver. Their proactive approach has prevented several major issues, and their support team is always responsive.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Priya Singh",
      role: "Founder, GreenLeaf Ventures",
      feedback: "As a startup, having a reliable support partner is crucial. The team is knowledgeable and has helped us keep our operations running smoothly.",
      rating: 5,
    },
  ],

  // Assuming `otherServicesList` is a general list of all services,
  // which you'll filter or use as-is in your component.
  otherServices: otherServicesList,
};
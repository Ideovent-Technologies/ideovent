// D:\WEB DEVELOPMENT\ideovent.com\src\data\graphicsDesignData.ts

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

export const graphicsDesignData: ServiceData = {
  title: "Creative Graphics Design Services",
  subtitle: "Bring Your Brand to Life with Stunning Visuals",
  description: "We design compelling visuals that bring your brand to life—from logos and branding to marketing materials and digital assets.",
  image: "https://cdn.pixabay.com/photo/2016/11/29/09/25/art-1868512_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Professional Logo & Branding", icon: "CheckCircle" },
    { id: "bp-2", text: "Marketing & Promotional Materials", icon: "Palette" },
    { id: "bp-3", text: "Digital & Social Media Graphics", icon: "Code2" },
    { id: "bp-4", text: "Custom Illustrations & Infographics", icon: "ShieldCheck" },
    { id: "bp-5", text: "Comprehensive Design Solutions", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Design Consultation",
    link: "/contact",
    secondary: { text: "View Our Design Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Our Graphics Design Services",
      content: "We offer a wide range of design services to meet all your branding and marketing needs.",
      items: [
        {
          id: "logo-design",
          title: "Logo Design & Branding",
          subtitle: "Create a unique and memorable brand identity.",
          icon: "Sparkles",
          image: "https://template.canva.com/EAFMJz6zD-Y/1/0/1600w-PxmGb1sNtk0.jpg",
        },
        {
          id: "social-media-graphics",
          title: "Social Media Graphics",
          subtitle: "Engage your audience with stunning visuals.",
          icon: "Share2",
          image: "https://cdn.pixabay.com/photo/2022/05/22/10/48/social-media-7213158_1280.png",
        },
        {
          id: "print-design",
          title: "Print Design",
          subtitle: "Brochures, flyers, and posters for your campaigns.",
          icon: "Printer",
          image: "https://cdn.pixabay.com/photo/2012/04/11/13/11/document-28155_1280.png",
        },
        {
          id: "web-ui-design",
          title: "UI/UX Design",
          subtitle: "Intuitive and beautiful user interfaces for web and mobile.",
          icon: "Laptop",
          image: "https://cdn.pixabay.com/photo/2016/08/17/04/39/template-1599663_1280.png",
        },
        {
          id: "illustration",
          title: "Custom Illustrations",
          subtitle: "Unique illustrations to tell your brand's story.",
          icon: "Feather",
          image: "https://cdn.pixabay.com/photo/2019/06/14/09/25/cloud-4273197_1280.png",
        },
        {
          id: "packaging-design",
          title: "Product Packaging",
          subtitle: "Create attractive packaging that stands out on the shelf.",
          icon: "Box",
          image: "https://cdn.pixabay.com/photo/2018/08/12/11/27/skincare-3600570_1280.png",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "Our Design Process",
      content: "We follow a collaborative and creative process to ensure the final design meets your vision and business goals.",
      items: [
        { id: "design-brief", step: "Discovery & Briefing", icon: "Lightbulb" },
        { id: "design-concept", step: "Concept & Ideation", icon: "Palette" },
        { id: "design-development", step: "Design Development", icon: "Code" },
        { id: "design-feedback", step: "Feedback & Refinement", icon: "RefreshCw" },
        { id: "design-final", step: "Final Delivery", icon: "Download" },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Choose Us for Graphics Design?",
      content: "We deliver more than just beautiful designs; we deliver a visual strategy that drives results.",
      items: [
        { id: "creativity", title: "Creative Excellence", description: "Our designs are original, modern, and perfectly aligned with your brand." },
        { id: "fast-turnaround", title: "Fast Turnaround", description: "We work efficiently to deliver high-quality designs on time." },
        { id: "unlimited-revisions", title: "Unlimited Revisions", description: "Your satisfaction is our priority. We work with you until it's perfect." },
        { id: "strategic-design", title: "Strategic Design", description: "Every design is crafted with your business goals in mind." },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is your pricing for graphics design?",
      answer: "Our pricing is project-based and depends on the scope and complexity of the design work. We can provide a custom quote after our initial consultation.",
    },
    {
      id: "faq-2",
      question: "Do you provide source files?",
      answer: "Yes, once the project is complete, you will receive all final design files in various formats (AI, PSD, PDF, PNG, etc.) for your future use.",
    },
    {
      id: "faq-3",
      question: "How long does a design project take?",
      answer: "The timeline varies. A logo design can take 1-2 weeks, while a full branding project or brochure design may take 3-4 weeks. We will provide an estimated timeline during the briefing stage.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Rohan Sharma",
      role: "Founder, GreenLeaf Co.",
      feedback: "The logo and branding work by Ideovent was exceptional. They perfectly captured our vision and created a brand identity that stands out.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Shruti Sinha",
      role: "Marketing Head, Future Tech",
      feedback: "Their team designed all our social media graphics and marketing materials. The quality is fantastic and their designs have significantly boosted our engagement.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
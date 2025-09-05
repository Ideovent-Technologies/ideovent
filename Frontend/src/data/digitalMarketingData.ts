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

export const digitalMarketingData: ServiceData = {
  title: "Integrated Digital Marketing Services",
  subtitle: "Connect with Your Audience and Grow Your Business Online",
  description: "We craft data-driven digital marketing strategies that boost your presence, attract leads, and convert them into loyal customers.",
  image: "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Strategic SEO & Content Planning", icon: "CheckCircle" },
    { id: "bp-2", text: "Targeted Social Media Campaigns", icon: "Palette" },
    { id: "bp-3", text: "Effective PPC & Paid Advertising", icon: "Code2" },
    { id: "bp-4", text: "Email Marketing Automation", icon: "ShieldCheck" },
    { id: "bp-5", text: "In-depth Analytics & Reporting", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Marketing Strategy Session",
    link: "/contact",
    secondary: { text: "Explore Our Case Studies", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Our Core Digital Marketing Services",
      content: "We offer a full suite of services to build and execute a winning online strategy.",
      items: [
        {
          id: "seo",
          title: "Search Engine Optimization (SEO)",
          subtitle: "Boost your organic visibility and rankings on Google.",
          icon: "Search",
          image: "https://images.pexels.com/photos/16629436/pexels-photo-16629436.jpeg",
        },
        {
          id: "ppc",
          title: "Pay-Per-Click (PPC)",
          subtitle: "Drive immediate traffic with targeted paid ads.",
          icon: "DollarSign",
          image: "https://images.pexels.com/photos/5585800/pexels-photo-5585800.jpeg",
        },
        {
          id: "social-media",
          title: "Social Media Marketing",
          subtitle: "Build brand awareness and connect with your audience.",
          icon: "Share2",
          image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
        },
        {
          id: "content-marketing",
          title: "Content Marketing",
          subtitle: "Create valuable content that attracts and converts.",
          icon: "FileText",
          image: "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg",
        },
        {
          id: "email-marketing",
          title: "Email Marketing",
          subtitle: "Nurture leads and retain customers with targeted emails.",
          icon: "Mail",
          image: "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg",
        },
        {
          id: "analytics",
          title: "Marketing Analytics",
          subtitle: "Track performance and make data-driven decisions.",
          icon: "BarChart2",
          image: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "Our Digital Marketing Process",
      content: "We follow a systematic and agile process to ensure every campaign is optimized for success.",
      items: [
        { id: "dm-strategy", step: "Strategy & Planning", icon: "Lightbulb" },
        { id: "dm-execution", step: "Campaign Execution", icon: "Rocket" },
        { id: "dm-monitoring", step: "Monitoring & Optimization", icon: "LineChart" },
        { id: "dm-reporting", step: "Reporting & Analysis", icon: "FileText" },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Ideovent for Your Marketing Needs?",
      content: "We go beyond standard services to offer a partnership built on transparency and results.",
      items: [
        { id: "data-driven", title: "Data-Driven Approach", description: "Every decision is backed by comprehensive data analysis." },
        { id: "tailored-strategy", title: "Tailored Strategies", description: "Custom campaigns designed for your unique business goals." },
        { id: "certified-experts", title: "Certified Experts", description: "Our team holds certifications in Google Ads, Analytics, and more." },
        { id: "transparent-reporting", title: "Transparent Reporting", description: "You get clear, actionable reports on your campaign's performance." },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is your pricing model for digital marketing?",
      answer: "Our pricing is customized based on your specific needs, goals, and the services required. We offer various packages and can create a custom plan for you.",
    },
    {
      id: "faq-2",
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. You can typically expect to see initial improvements in rankings and traffic within 3-6 months, with significant results over 6-12 months.",
    },
    {
      id: "faq-3",
      question: "Do you manage our social media accounts?",
      answer: "Yes, we can manage your social media presence, including content creation, posting schedules, community engagement, and performance analysis.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Sanjay Kumar",
      role: "Marketing Manager, GlobalTech",
      feedback: "The team at Ideovent completely transformed our online presence. Our traffic has tripled, and our lead quality has never been better!",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Aisha Khan",
      role: "Director, Innovate Solutions",
      feedback: "Their PPC campaign delivered an incredible ROI. We saw immediate results and appreciate their transparent reporting.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
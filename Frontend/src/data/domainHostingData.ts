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

export const domainHostingData: ServiceData = {
  title: "Secure Domain & Hosting Services",
  subtitle: "Build Your Online Presence on a Solid Foundation",
  description:"We offer secure, reliable domain and hosting services to keep your website fast, available, and protected—tailored for businesses of any size.",
  image: "https://cdn.pixabay.com/photo/2016/09/21/04/10/web-1684346_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Secure & Reliable Web Hosting", icon: "CheckCircle" },
    { id: "bp-2", text: "Easy Domain Name Registration", icon: "Code2" },
    { id: "bp-3", text: "Fast & Scalable Infrastructure", icon: "Rocket" },
    { id: "bp-4", text: "24/7 Technical Support", icon: "ShieldCheck" },
    { id: "bp-5", text: "Free SSL Certificates", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Consultation",
    link: "/contact",
    secondary: { text: "View Our Pricing Plans", link: "/pricing" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Our Domain & Hosting Services",
      content: "We offer a full spectrum of services to get your online presence up and running.",
      items: [
        {
          id: "domain-registration",
          title: "Domain Registration",
          subtitle: "Register your perfect domain name quickly and securely.",
          icon: "Link",
          image: "https://cdn.pixabay.com/photo/2015/03/04/16/50/com-659090_1280.jpg",
        },
        {
          id: "web-hosting",
          title: "Web Hosting",
          subtitle: "Fast, reliable, and secure hosting for your website.",
          icon: "Server",
          image: "https://cdn.pixabay.com/photo/2018/05/16/18/16/cloud-3406627_1280.jpg",
        },
        {
          id: "business-email",
          title: "Business Email Hosting",
          subtitle: "Professional email with your domain name.",
          icon: "Mail",
          image: "https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png",
        },
        {
          id: "ssl-certificate",
          title: "SSL Certificates",
          subtitle: "Secure your website and build trust with visitors.",
          icon: "Lock",
          image: "https://cdn.pixabay.com/photo/2019/10/06/12/56/secure-computer-4530142_1280.png",
        },
        {
          id: "server-management",
          title: "Managed Hosting",
          subtitle: "We handle all the technical details so you don't have to.",
          icon: "Settings",
          image: "https://cdn.pixabay.com/photo/2020/08/20/07/59/folder-5502836_1280.png",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "Our Hosting Setup Process",
      content: "We ensure a smooth and seamless setup process to get your website live in no time.",
      items: [
        { id: "process-consultation", step: "Consultation & Planning", icon: "Lightbulb" },
        { id: "process-selection", step: "Service Selection", icon: "FileText" },
        { id: "process-setup", step: "Setup & Configuration", icon: "Settings" },
        { id: "process-migration", step: "Data Migration", icon: "Download" },
        { id: "process-testing", step: "Final Testing & Launch", icon: "Rocket" },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Ideovent for Domain & Hosting?",
      content: "We offer more than just a service; we offer a partnership built on reliability and trust.",
      items: [
        { id: "reliability", title: "99.9% Uptime Guarantee", description: "Your website will be online when it matters most." },
        { id: "speed", title: "Blazing Fast Speeds", description: "Our servers are optimized for performance and speed." },
        { id: "security", title: "Robust Security", description: "Advanced security measures protect your data and your visitors." },
        { id: "support", title: "Expert Support", description: "Our team is available 24/7 to help with any issues." },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is the difference between a domain and hosting?",
      answer: "A domain is your website's address (e.g., yoursite.com), while hosting is the physical space on a server where your website's files are stored. You need both to have a website live on the internet.",
    },
    {
      id: "faq-2",
      question: "Can I transfer my existing domain to you?",
      answer: "Yes, you can easily transfer your domain to our platform. Our support team can guide you through the entire process.",
    },
    {
      id: "faq-3",
      question: "Do you offer email hosting?",
      answer: "Yes, we provide professional email hosting services so you can have a custom email address (e.g., info@yoursite.com) that matches your domain name.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Akash Patel",
      role: "Founder, TechHub",
      feedback: "The hosting service from Ideovent is incredibly fast and reliable. Our website has never had any downtime, and their support is top-notch.",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Sneha Sharma",
      role: "Director, Innovate Solutions",
      feedback: "Domain registration and setup were a breeze. Ideovent made the process simple and we appreciate their professional support.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
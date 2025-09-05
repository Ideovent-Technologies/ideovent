import * as Icons from "lucide-react";
import { ServiceData, OtherService, Testimonial, BulletPoint, ExtraSection, FAQ } from "../components/services/types";
// -------------------- Icon Map (Remains unchanged) --------------------
export const websiteIconMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  Static: {
    icon: "FileText",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Simple, Fast, and SEO-Friendly",
  },
  Dynamic: {
    icon: "Repeat2",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Interactive & User-Driven Content",
  },
  eCommerce: {
    icon: "ShoppingCart",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Sell Products & Grow Your Business",
  },
  Portfolio: {
    icon: "Image",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Showcase Your Work & Projects",
  },
  Blog: {
    icon: "Pencil",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Share Stories & Attract Readers",
  },
  LandingPage: {
    icon: "Rocket",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Convert Visitors into Customers",
  },
  Business: {
    icon: "Briefcase",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Establish Your Online Presence",
  },
  Educational: {
    icon: "GraduationCap",
    image: "https://images.pexels.com/photos/33280388/pexels-photo-33280388.jpeg",
    subtitle: "Informative & Knowledge-Based Sites",
  },
};

export const websiteCategoryContentMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  Corporate: {
    icon: "Briefcase",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    subtitle: "Professional & Trustworthy",
  },
  Ecommerce: {
    icon: "ShoppingCart",
    image: "https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_1280.png",
    subtitle: "Sell Online with Ease",
  },
  Portfolio: {
    icon: "Image",
    image: "https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_1280.png",
    subtitle: "Showcase Your Best Work",
  },
  Blog: {
    icon: "Newspaper",
    image: "https://cdn.pixabay.com/photo/2022/10/01/11/34/youtube-7491354_1280.png",
    subtitle: "Share Insights & Stories",
  },
  LandingPages: {
    icon: "Rocket",
    image: "https://cdn.pixabay.com/photo/2021/03/29/18/57/social-media-6134993_1280.png",
    subtitle: "High-Converting Campaigns",
  },
  WebApplications: {
    icon: "Code",
    image: "https://cdn.pixabay.com/photo/2022/07/16/15/12/customer-service-7325332_1280.png",
    subtitle: "Custom & Interactive Solutions",
  },
  Educational: {
    icon: "GraduationCap",
    image: "https://cdn.pixabay.com/photo/2021/08/20/16/06/distance-learning-6560788_1280.png",
    subtitle: "Informative Learning Platforms",
  },
  NewsMedia: {
    icon: "Rss",
    image: "https://cdn.pixabay.com/photo/2020/04/04/04/23/media-5000790_1280.png",
    subtitle: "Dynamic Content Delivery",
  },
};

// -------------------- Other Services (Updated with IDs) --------------------
export const otherServicesList: OtherService[] = [
  { id: "os-1", name: "Mobile App Development", path: "/services/mobile-app-development" },
  { id: "os-2", name: "Digital Marketing", path: "/services/digital-marketing" },
  { id: "os-3", name: "Graphics Designing", path: "/services/graphics-design" },
  { id: "os-4", name: "Domain & Hosting", path: "/services/domain-hosting" },
  { id: "os-5", name: "ERP & CRM Development", path: "/services/erp-crm-development" },
  { id: "os-6", name: "Maintenance Services", path: "/services/maintenance-services" },
  { id: "os-7", name: "Software Solutions", path: "/services/software" },
];

// -------------------- Service Data (Updated with IDs and refined extraSections) --------------------
export const websiteData: ServiceData = {
  title: "Professional Website Development Services",
  subtitle: "Building Your Digital Presence, One Site at a Time",
  description:
    "At Ideovent, we create high-performance websites with seamless design, responsive layouts, and robust functionality—turning your vision into a powerful online presence.",
    
  image: "https://cdn.pixabay.com/photo/2015/05/28/14/53/office-788915_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Strategic Planning & Discovery for optimal web solutions.", icon: "CheckCircle" },
    { id: "bp-2", text: "Creative UI/UX Design & Wireframing for engaging user journeys.", icon: "Palette" },
    { id: "bp-3", text: "Robust Front-end & Back-end Implementation for powerful functionality.", icon: "Code2" },
    { id: "bp-4", text: "Rigorous Testing & Quality Assurance for a flawless user experience.", icon: "ShieldCheck" },
    { id: "bp-5", text: "Dedicated Post-Launch Support & Maintenance for long-term success.", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Website Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "lifecycle",
      heading: "Our Website Development Process",
      content:
        "We follow a systematic and collaborative process to ensure your vision is brought to life, on time and on budget. Our transparent approach keeps you informed every step of the way, from initial concept to successful launch.",
      items: [
        { id: "process-1", step: "Project Discovery & Planning", icon: "Lightbulb" },
        { id: "process-2", step: "Wireframing & UI/UX Design", icon: "FileText" },
        { id: "process-3", step: "Front-end Development", icon: "Code" },
        { id: "process-4", step: "Back-end Development & Database Integration", icon: "ShieldCheck" },
        { id: "process-5", step: "API Development & Third-Party Integrations", icon: "Rocket" },
        { id: "process-6", step: "Comprehensive Testing & Quality Assurance", icon: "Wrench" },
        { id: "process-7", step: "Deployment, Launch & Ongoing Support", icon: "Circle" },
      ],
    },
    {
      id: "es-2",
      type: "types",
      heading: "Types of Websites We Build",
      content:
        "Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver. We craft bespoke web solutions to meet diverse business needs, ensuring high performance and scalability.",
      items: [
        { id: "type-1", title: "Corporate & Business Websites", subtitle: websiteCategoryContentMap.Corporate.subtitle, icon: websiteCategoryContentMap.Corporate.icon, image: websiteCategoryContentMap.Corporate.image },
        { id: "type-2", title: "E-commerce Stores & Online Marketplaces", subtitle: websiteCategoryContentMap.Ecommerce.subtitle, icon: websiteCategoryContentMap.Ecommerce.icon, image: websiteCategoryContentMap.Ecommerce.image },
        { id: "type-3", title: "Portfolio & Personal Branding Sites", subtitle: websiteCategoryContentMap.Portfolio.subtitle, icon: websiteCategoryContentMap.Portfolio.icon, image: websiteCategoryContentMap.Portfolio.image },
        { id: "type-4", title: "Blog & Content Publishing Platforms", subtitle: websiteCategoryContentMap.Blog.subtitle, icon: websiteCategoryContentMap.Blog.icon, image: websiteCategoryContentMap.Blog.image },
        { id: "type-5", title: "Interactive Landing Pages for Campaigns", subtitle: websiteCategoryContentMap.LandingPages.subtitle, icon: websiteCategoryContentMap.LandingPages.icon, image: websiteCategoryContentMap.LandingPages.image },
        { id: "type-6", title: "Custom Web Applications (CRM, ERP, etc.)", subtitle: websiteCategoryContentMap.WebApplications.subtitle, icon: websiteCategoryContentMap.WebApplications.icon, image: websiteCategoryContentMap.WebApplications.image },
        { id: "type-7", title: "Educational & Membership Portals", subtitle: websiteCategoryContentMap.Educational.subtitle, icon: websiteCategoryContentMap.Educational.icon, image: websiteCategoryContentMap.Educational.image },
        { id: "type-8", title: "News & Media Websites", subtitle: websiteCategoryContentMap.NewsMedia.subtitle, icon: websiteCategoryContentMap.NewsMedia.icon, image: websiteCategoryContentMap.NewsMedia.image },
      ],
    },
    {
      id: "es-3",
      type: "generic",
      heading: "Why Ideovent is Your Ideal Partner",
      content:
        "Our dedication to quality, performance, and client satisfaction sets us apart. We build websites that are not just beautiful but also powerful business tools, designed to convert visitors into loyal customers. Partner with us for a digital solution that truly stands out.",
      items: [
        { id: "why-1", title: "50+ Successful Web Projects Delivered", description: "A proven track record of excellence." },
        { id: "why-2", title: "95% Client Satisfaction Rate", description: "Trusted by businesses across various industries." },
        { id: "why-3", title: "Expert Team", description: "Skilled developers and designers proficient in modern web technologies." },
        { id: "why-4", title: "Scalable & Future-Proof Solutions", description: "Websites built to grow with your business." },
        { id: "why-5", title: "Transparent Communication", description: "Clear updates and collaborative approach throughout the project." },
        { id: "why-6", title: "Dedicated Post-Launch Support", description: "Ensuring your website runs smoothly long-term." },
      ],
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "What is the typical timeline for website development?",
      answer:
        "The timeline varies based on complexity. A basic website might take 4-6 weeks, while a more intricate e-commerce platform or custom web application could take 12-20 weeks or more. We'll provide a detailed project plan after our initial consultation.",
    },
    {
      id: "faq-2",
      question: "Do you provide website maintenance and support?",
      answer:
        "Absolutely! We offer comprehensive post-launch maintenance, security updates, performance monitoring, and ongoing technical support to ensure your website remains secure, fast, and up-to-date.",
    },
    {
      id: "faq-3",
      question: "Which technologies do you use for website development?",
      answer:
        "We leverage a wide range of cutting-edge technologies including React, Angular, Vue.js for front-end, Node.js, Python (Django/Flask), PHP (Laravel) for back-end, and databases like MongoDB, PostgreSQL, and MySQL. We also specialize in CMS platforms like WordPress and cloud services like AWS and Azure.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Pratik Sharma",
      role: "Marketing Director, Global Connect",
      feedback:
        "Ideovent transformed our online presence with a stunning and highly functional business website. Their team was professional, responsive, and delivered beyond our expectations!",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Deepa Singh",
      role: "Owner, 'Artisan Crafts'",
      feedback:
        "The e-commerce store built by Ideovent has significantly boosted our sales. It's user-friendly and beautifully designed. Highly recommend their web development expertise.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
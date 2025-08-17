import * as Icons from "lucide-react"; // ✅ needed for keyof typeof Icons

export interface ExtraSection {
  heading: string;
  content: string;
  items?: string[];
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
}

export interface BulletPoint {
  text: string;
  icon?: string;
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
  name: string;
  path: string;
}

export interface ServiceData {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  bulletPoints: BulletPoint[];
  cta: CTA;
  extraSections: ExtraSection[];
  faqs?: FAQ[];
  testimonials?: Testimonial[];
  otherServices: OtherService[];
}

// 🔹 Add your map here
export const softwareIconMap: Record<string, keyof typeof Icons> = {
  School: "School",             // School Management Software
  Library: "BookOpen",          // Library Management
  Hotel: "Hotel",               // Hotel Management
  Gym: "Dumbbell",              // Gym Management
  Billing: "FileText",          // Billing & Invoicing
  Pathology: "TestTube",        // Pathology & Lab
  Restaurant: "Utensils",       // Restaurant & POS
  Inventory: "Boxes",           // Inventory & Warehouse
  Garments: "Shirt",            // Garments & Textile
  GST: "FileSpreadsheet",       // GST & Taxation
  Vehicle: "ParkingCircle",     // Vehicle Standing
  CarShowroom: "Car",              // Car/Bike Showroom CRM
  RealEstate: "Building",       // Real Estate CRM
  Hospital: "Hospital",   
};

export const otherServicesList: OtherService[] = [
  { name: "Website Development", path: "/services/website" },
  { name: "Mobile App Development", path: "/services/mobile-app" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Graphics Designing", path: "/services/graphics-design" },
  { name: "Domain & Hosting", path: "/services/domain-hosting" },
  { name: "ERP & CRM Development", path: "/services/erp-crm" },
  { name: "Maintenance Services", path: "/services/maintenance" },
];

export const softwareData: ServiceData = {
  title: "Tailored Software Solutions That Drive Growth",
  subtitle: "Tailored to Empower Your Business",
  description:
    "At Ideovent, we craft tailored software solutions that help your business scale, automate processes, and achieve its full potential...",
  image:
    "https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg",

  bulletPoints: [
    { text: "Strategic Planning & Analysis...", icon: "CheckCircle" },
    { text: "Creative UI/UX Design & Prototyping...", icon: "Palette" },
    { text: "Robust Implementation...", icon: "Code2" },
    { text: "Rigorous Integration & Testing...", icon: "ShieldCheck" },
    { text: "Dedicated Maintenance & Support...", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Software Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      heading: "Which Types of Software We Provide",
      content:
        "We build industry-ready solutions tailored to your unique needs...",
      items: [
        "School Management Software",
        "Library Management System",
        "Hotel Management Software",
        "Gym Management Software",
        "Billing & Invoicing Solutions",
        "Pathology & Lab Management",
        "Restaurant & POS Systems",
        "Inventory & Warehouse Management",
        "Garments & Textile Management",
        "GST & Taxation Software",
        "Vehicle Stand Management",
        "Car/Bike Showroom CRM",
        "Real Estate CRM",
        "Hospital Management Systems",
      ],
      image:
        "https://cdn.pixabay.com/photo/2018/01/16/07/00/software-3084200_1280.jpg",
    },
    {
      heading: "The Software Development Lifecycle",
      content:
        "Our systematic approach ensures a high-quality product. We follow a core set of activities that ensure scalability, performance, and reliability.",
      items: [
        "Planning & Roadmap",
        "Requirement Analysis",
        "UI/UX Designing",
        "Implementation & Coding",
        "Integration & API Development",
        "Rigorous Testing & QA",
        "Deployment & Maintenance",
      ],
      image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/analysis-1867008_1280.jpg",
    },
    {
  heading: "Why Work With Us",
  content:
    "We combine innovation, expertise, and dedication to deliver results that matter. Here’s why businesses choose Ideovent:",
  items: [
    "50+ Projects Delivered – Proven track record of success",
    "95% Client Satisfaction – Trusted by businesses across industries",
    "Expert Team – Skilled developers for every stack",
    "Scalable Solutions – Future-proof your business",
  ],
  image: "https://www.ideovent.com/ideovent.png",
},

  ],

  faqs: [
    {
      question: "How long does it take to develop custom software?",
      answer:
        "The timeline depends on the complexity and scale of the project. Typically, small apps may take 4–8 weeks, while enterprise solutions can take several months.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Yes, we provide ongoing maintenance, updates, and technical support to ensure your software runs smoothly.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "We leverage modern stacks such as React, Node.js, Python, Java, .NET, MongoDB, and cloud-native solutions like AWS and Azure.",
    },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      role: "CTO, EduTech",
      feedback:
        "Ideovent built our custom school management system, and it transformed the way we operate. Amazing support and smooth delivery!",
    },
    {
      name: "Priya Mehta",
      role: "Founder, RetailX",
      feedback:
        "The billing and inventory software from Ideovent saved us countless hours. Highly recommend their expertise.",
    },
  ],

  // ✅ Added here
  otherServices: otherServicesList,
};

import * as Icons from "lucide-react";
import { ServiceData, OtherService, Testimonial, BulletPoint, ExtraSection, FAQ } from "../components/services/types";

// -------------------- Icon Map (Remains unchanged as it's a lookup) --------------------
export const softwareIconMap: Record<
  string,
  { icon: keyof typeof Icons; image: string; subtitle: string }
> = {
  School: {
    icon: "School",
    image: "https://cdn.pixabay.com/photo/2023/05/23/10/24/erp-8012424_1280.jpg",
    subtitle: "Simplify Academic & Admin Tasks",
  },
  Library: {
    icon: "BookOpen",
    image: "https://cdn.pixabay.com/photo/2023/01/26/02/15/books-7744938_1280.jpg",
    subtitle: "Organize Resources & Catalogs",
  },
  Hotel: {
    icon: "Hotel",
    image: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_1280.jpg",
    subtitle: "Optimize Bookings & Guest Services",
  },
  Gym: {
    icon: "Dumbbell",
    image: "https://cdn.pixabay.com/photo/2022/07/17/19/43/man-7328236_1280.png",
    subtitle: "Manage Memberships & Classes",
  },
  Billing: {
    icon: "FileText",
    image: "https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg",
    subtitle: "Automate Invoicing & Payments",
  },
  Pathology: {
    icon: "TestTube",
    image: "https://cdn.pixabay.com/photo/2017/10/04/09/56/chemist-2815640_1280.jpg",
    subtitle: "Streamline Lab Operations & Reports",
  },
  Inventory: {
    icon: "Boxes",
    image: "https://cdn.pixabay.com/photo/2013/03/03/15/48/holland-89589_1280.jpg",
    subtitle: "Track Stock & Optimize Supply",
  },
  GST: {
    icon: "FileSpreadsheet",
    image: "https://cdn.pixabay.com/photo/2019/04/02/09/27/income-tax-4097292_1280.jpg",
    subtitle: "Ensure Tax Compliance & Reporting",
  },
  Vehicle: {
    icon: "ParkingCircle",
    image: "https://cdn.pixabay.com/photo/2015/06/29/09/22/parking-825371_1280.jpg",
    subtitle: "Manage Parking & Vehicle Entry",
  },
  CarShowroom: {
    icon: "Car",
    image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    subtitle: "Boost Sales & Customer Relations",
  },
  RealEstate: {
    icon: "Building",
    image: "https://cdn.pixabay.com/photo/2016/03/15/18/18/rooftops-1258857_1280.jpg",
    subtitle: "Track Leads & Manage Properties",
  },
  Hospital: {
    icon: "Hospital",
    image: "https://cdn.pixabay.com/photo/2016/11/06/10/35/hospital-1802679_1280.jpg",
    subtitle: "Streamline Patient Care & Records",
  },
};

// -------------------- Other Services (Updated) --------------------
export const otherServicesList: OtherService[] = [
  { id: "os-1", name: "Website Development", path: "/services/website-development" },
  { id: "os-2", name: "Mobile App Development", path: "/services/mobile-app-development" },
  { id: "os-3", name: "Digital Marketing", path: "/services/digital-marketing" },
  { id: "os-4", name: "Graphics Designing", path: "/services/graphics-design" },
  { id: "os-5", name: "Domain & Hosting", path: "/services/domain-hosting" },
  { id: "os-6", name: "ERP & CRM Development", path: "/services/erp-crm-development" },
  { id: "os-7", name: "Maintenance Services", path: "/services/maintenance-services" },
];

// -------------------- Service Data (Updated) --------------------
export const softwareData: ServiceData = {
  title: "Tailored Software Solutions That Drive Growth",
  subtitle: "Tailored to Empower Your Business",
  description: "At Ideovent, we craft tailored software solutions that help your business scale, automate processes, and achieve its full potential...",
  image: "https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "Strategic Planning & Analysis...", icon: "CheckCircle" },
    { id: "bp-2", text: "Creative UI/UX Design & Prototyping...", icon: "Palette" },
    { id: "bp-3", text: "Robust Implementation...", icon: "Code2" },
    { id: "bp-4", text: "Rigorous Integration & Testing...", icon: "ShieldCheck" },
    { id: "bp-5", text: "Dedicated Maintenance & Support...", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Software Consultation",
    link: "/contact",
    secondary: { text: "Explore Our Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Which Types of Software We Provide",
      content: "We build industry-ready solutions tailored to your unique needs...",
      items: [
        { id: "type-1", title: "School Management Software", subtitle: "Simplify Academic & Admin Tasks", icon: "School", image: softwareIconMap.School.image },
        { id: "type-2", title: "Library Management System", subtitle: "Organize Resources & Catalogs", icon: "BookOpen", image: softwareIconMap.Library.image },
        { id: "type-3", title: "Hotel Management Software", subtitle: "Optimize Bookings & Guest Services", icon: "Hotel", image: softwareIconMap.Hotel.image },
        { id: "type-4", title: "Gym Management Software", subtitle: "Manage Memberships & Classes", icon: "Dumbbell", image: softwareIconMap.Gym.image },
        { id: "type-5", title: "Billing & Invoicing Solutions", subtitle: "Automate Invoicing & Payments", icon: "FileText", image: softwareIconMap.Billing.image },
        { id: "type-6", title: "Pathology & Lab Management", subtitle: "Streamline Lab Operations & Reports", icon: "TestTube", image: softwareIconMap.Pathology.image },
        { id: "type-7", title: "Inventory & Warehouse Management", subtitle: "Track Stock & Optimize Supply", icon: "Boxes", image: softwareIconMap.Inventory.image },
        { id: "type-8", title: "GST & Taxation Software", subtitle: "Ensure Tax Compliance & Reporting", icon: "FileSpreadsheet", image: softwareIconMap.GST.image },
        { id: "type-9", title: "Vehicle Stand Management", subtitle: "Manage Parking & Vehicle Entry", icon: "ParkingCircle", image: softwareIconMap.Vehicle.image },
        { id: "type-10", title: "Car/Bike Showroom CRM", subtitle: "Boost Sales & Customer Relations", icon: "Car", image: softwareIconMap.CarShowroom.image },
        { id: "type-11", title: "Real Estate CRM", subtitle: "Track Leads & Manage Properties", icon: "Building", image: softwareIconMap.RealEstate.image },
        { id: "type-12", title: "Hospital Management Systems", subtitle: "Streamline Patient Care & Records", icon: "Hospital", image: softwareIconMap.Hospital.image },
      ],
    },
    {
      id: "es-2",
      type: "lifecycle",
      heading: "The Software Development Lifecycle",
      content: "Our systematic approach ensures a high-quality product. We follow a core set of activities that ensure scalability, performance, and reliability.",
      items: [
        { id: "lc-1", step: "Planning & Roadmap", icon: "Lightbulb" },
        { id: "lc-2", step: "Requirement Analysis", icon: "FileText" },
        { id: "lc-3", step: "UI/UX Designing", icon: "Code" },
        { id: "lc-4", step: "Implementation & Coding", icon: "ShieldCheck" },
        { id: "lc-5", step: "Integration & API Development", icon: "Rocket" },
        { id: "lc-6", step: "Rigorous Testing & QA", icon: "Wrench" },
        { id: "lc-7", step: "Deployment & Maintenance", icon: "Circle" },
      ],
    },
    {
      id: "es-3",
      type: "generic",
      heading: "Why Work With Us",
      content: "We combine innovation, expertise, and dedication to deliver results that matter. Here’s why businesses choose Ideovent:",
      items: [
        { id: "why-1", title: "50+ Projects Delivered", description: "Proven track record of success" },
        { id: "why-2", title: "95% Client Satisfaction", description: "Trusted by businesses across industries" },
        { id: "why-3", title: "Expert Team", description: "Skilled developers for every stack" },
        { id: "why-4", title: "Scalable Solutions", description: "Future-proof your business" },
      ],
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How long does it take to develop custom software?",
      answer: "The timeline depends on the complexity and scale of the project. Typically, small apps may take 4–8 weeks, while enterprise solutions can take several months.",
    },
    {
      id: "faq-2",
      question: "Do you provide post-deployment support?",
      answer: "Yes, we provide ongoing maintenance, updates, and technical support to ensure your software runs smoothly.",
    },
    {
      id: "faq-3",
      question: "Which technologies do you use?",
      answer: "We leverage modern stacks such as React, Node.js, Python, Java, .NET, MongoDB, and cloud-native solutions like AWS and Azure.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Rahul Sharma",
      role: "CTO, EduTech",
      feedback: "Ideovent built our custom school management system, and it transformed the way we operate. Amazing support and smooth delivery!",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Priya Mehta",
      role: "Founder, RetailX",
      feedback: "The billing and inventory software from Ideovent saved us countless hours. Highly recommend their expertise.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
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

export const mobileAppData: ServiceData = {
  title: "Professional Mobile App Development Services",
  subtitle: "Turning Your Ideas into Powerful Mobile Experiences",
  description: "At Ideovent, we build high-performance mobile apps that engage users and fuel growth—delivering scalable, intuitive solutions across native, hybrid, and cross-platform technologies.",
  image: "https://cdn.pixabay.com/photo/2016/11/23/15/34/apple-1853612_1280.jpg",

  bulletPoints: [
    { id: "bp-1", text: "iOS & Android Native App Development", icon: "CheckCircle" },
    { id: "bp-2", text: "Cross-Platform & Hybrid Solutions", icon: "Code2" },
    { id: "bp-3", text: "User-Centric UI/UX Design", icon: "Palette" },
    { id: "bp-4", text: "Secure & Scalable Backend Development", icon: "ShieldCheck" },
    { id: "bp-5", text: "App Store Deployment & Maintenance", icon: "Wrench" },
  ],

  cta: {
    text: "Get a Free Mobile App Consultation",
    link: "/contact",
    secondary: { text: "View Our App Portfolio", link: "/portfolio" },
  },

  extraSections: [
    {
      id: "es-1",
      type: "types",
      heading: "Types of Mobile Apps We Build",
      content: "Whether you need a native app for a single platform or a cross-platform solution, our team has the expertise to bring your vision to life.",
      items: [
        {
          id: "native-ios-app",
          title: "Native iOS Apps",
          subtitle: "Tailored for the Apple ecosystem.",
          icon: "Apple",
          image: "https://cdn.pixabay.com/photo/2019/11/30/15/49/instagram-4663472_1280.png",
        },
        {
          id: "native-android-app",
          title: "Native Android Apps",
          subtitle: "Optimized for the Android platform.",
          icon: "Android",
          image: "https://cdn.pixabay.com/photo/2017/03/28/17/45/smartphones-2182838_1280.png",
        },
        {
          id: "cross-platform-app",
          title: "Cross-Platform Apps",
          subtitle: "Build once, deploy everywhere.",
          icon: "CodeSquare",
          image: "https://cdn.pixabay.com/photo/2021/10/04/18/08/facebook-6680762_1280.png",
        },
        {
          id: "pwa",
          title: "Progressive Web Apps",
          subtitle: "Best of web and native apps.",
          icon: "Chrome",
          image: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png",
        },
        {
          id: "hybrid-app",
          title: "Hybrid Apps",
          subtitle: "Web technologies in a native shell.",
          icon: "Mobile",
          image: "https://cdn.pixabay.com/photo/2022/06/01/03/40/app-7234739_1280.png",
        },
      ],
    } as SoftwareTypesSection,

    {
      id: "es-2",
      type: "lifecycle",
      heading: "The Mobile App Development Lifecycle",
      content: "We follow a comprehensive, multi-step process to ensure your app is built to the highest standards, from concept to launch and beyond.",
      items: [
        {
          id: "mobile-planning",
          step: "Planning & Strategy",
          icon: "Lightbulb",
        },
        {
          id: "mobile-ui-ux",
          step: "UI/UX Design",
          icon: "Framer",
        },
        {
          id: "mobile-development",
          step: "Development & Coding",
          icon: "Code",
        },
        {
          id: "mobile-testing",
          step: "Quality Assurance & Testing",
          icon: "BugPlay",
        },
        {
          id: "mobile-deployment",
          step: "Deployment to App Stores",
          icon: "CloudUpload",
        },
        {
          id: "mobile-maintenance",
          step: "Maintenance & Support",
          icon: "Wrench",
        },
      ],
    } as SoftwareLifecycleSection,

    {
      id: "es-3",
      type: "generic",
      heading: "Why Ideovent Is Your Ideal Partner",
      content: "We combine innovation, expertise, and dedication to deliver results that matter.",
      items: [
        {
          id: "expert-team",
          title: "Expert Team",
          description: "Our developers and designers are seasoned professionals in mobile technology.",
        },
        {
          id: "agile-methodology",
          title: "Agile Methodology",
          description: "We use an agile approach for flexibility and rapid iteration.",
        },
        {
          id: "user-centric-design",
          title: "User-Centric Design",
          description: "We create intuitive interfaces that users love to interact with.",
        },
        {
          id: "ongoing-support",
          title: "Ongoing Support",
          description: "We provide continued support and updates after your app is launched.",
        },
      ],
    } as GenericExtraSection,
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How long does it take to develop a mobile app?",
      answer: "The timeline depends on the app's complexity. A simple app may take 2-4 months, while a more complex one can take 6 months or longer.",
    },
    {
      id: "faq-2",
      question: "Do you build both iOS and Android apps?",
      answer: "Yes, we specialize in native iOS and Android development, as well as cross-platform solutions using frameworks like React Native or Flutter.",
    },
    {
      id: "faq-3",
      question: "Will you help us with app store submission?",
      answer: "Yes, our service includes full support for the app store submission process, including meeting all technical and content requirements for Apple's App Store and the Google Play Store.",
    },
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Rahul Singh",
      role: "CEO, FoodieFinds",
      feedback: "Ideovent delivered our mobile app on time and within budget. The design is beautiful and the performance is flawless. A top-notch team!",
      rating: 5,
    },
    {
      id: "test-2",
      name: "Anjali Verma",
      role: "Founder, TravelNow",
      feedback: "The team was highly professional and their agile process kept us informed every step of the way. We couldn't be happier with our new travel app.",
      rating: 5,
    },
  ],

  otherServices: otherServicesList,
};
// This is a type definition that ensures consistency for each service item.
// It's a good practice to define types to avoid errors.
export type ExploreService = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: string; // Optional icon for visual representation
};

export const exploreMoreServicesData: ExploreService[] = [
  {
    id: "ems-1",
    title: "Software Development",
    description: "Build custom software solutions to automate processes and drive innovation.",
    link: "/services/software-development",
    icon: "Code",
  },
  {
    id: "ems-2",
    title: "Web Development",
    description: "Create stunning, responsive, and high-performance websites and web applications.",
    link: "/services/web-development",
    icon: "Layout",
  },
  {
    id: "ems-3",
    title: "Mobile App Development",
    description: "Develop native and cross-platform mobile apps for iOS and Android.",
    link: "/services/mobile-app-development",
    icon: "Smartphone",
  },
  {
    id: "ems-4",
    title: "UI/UX Design",
    description: "Craft intuitive user interfaces and seamless user experiences for your digital products.",
    link: "/services/ui-ux-design",
    icon: "Figma",
  },
  {
    id: "ems-5",
    title: "Cloud & DevOps",
    description: "Migrate to the cloud and optimize your development and operations with DevOps practices.",
    link: "/services/cloud-devops",
    icon: "Cloud",
  },
  {
    id: "ems-6",
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience with our digital marketing strategies.",
    link: "/services/digital-marketing",
    icon: "Megaphone",
  },
  {
    id: "ems-7",
    title: "IT Consulting",
    description: "Receive expert advice and strategic planning for your technology needs.",
    link: "/services/it-consulting",
    icon: "User",
  },
  {
    id: "ems-8",
    title: "Data Analytics & AI",
    description: "Harness the power of data to gain valuable insights and drive business growth.",
    link: "/services/data-analytics-ai",
    icon: "Brain",
  },
];
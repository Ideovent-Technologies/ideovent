import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  Code2,
  Globe,
  Smartphone,
  Megaphone,
  Image,
  Server,
  Layers,
  Wrench,
  Boxes,
} from "lucide-react";

// Assuming you have an image for services
// Note: Local file imports like this do not resolve in this environment. Using a placeholder URL instead.
import servicesImage from "../../assets/servicesimage.png";

// Define the services data, including a new 'path' field for routing
const services = [
  {
    title: "Software Development",
    desc: "We provide custom software development for your business, Billing, Inventory and every custom solution.",
    icon: <Code2 size={28} />,
    path: "/services/software-development"
  },
  {
    title: "Website Development",
    desc: "We provide website design & development to make your business online to drive more customers and sales.",
    icon: <Globe size={28} />,
    path: "/services/website-development"
  },
  {
    title: "Mobile App Development",
    desc: "We provide Android & iOS app development. Turn your idea into reality and start your startup with us.",
    icon: <Smartphone size={28} />,
    path: "/services/mobile-app-development"
  },
  {
    title: "Digital Marketing",
    desc: "We provide the best digital marketing services to drive more traffic on your mobile app or website.",
    icon: <Megaphone size={28} />,
    path: "/services/digital-marketing"
  },
  {
    title: "Graphics Design",
    desc: "We provide graphics design to stay connected with your customers using banners, offers & more.",
    icon: <Image size={28} />,
    path: "/services/graphics-design"
  },
  {
    title: "Domain & Hosting",
    desc: "We provide domain, hosting and reliable servers to never let your business down.",
    icon: <Server size={28} />,
    path: "/services/domain-hosting"
  },
  {
    title: "ERP & CRM Development",
    desc: "We provide ERP & CRM to automate your business with fast execution and precise strategies.",
    icon: <Layers size={28} />,
    path: "/services/erp-crm-development"
  },
  {
    title: "Maintenance Services",
    desc: "We provide annual maintenance services for websites, software, ERP, CRM & mobile apps.",
    icon: <Wrench size={28} />,
    path: "/services/maintenance-services"
  },
  {
    title: "Explore More Services",
    desc: "We provide IT training, internships, MLM software and many more services to discover.",
    icon: <Boxes size={28} />,
    path: "/services/contact"
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen py-16 md:pt-24 bg-gray-50 font-[Inter] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Reach out to the world’s most <br />
          reliable <span className="text-blue-600">IT services.</span>
        </motion.h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 mb-12 rounded"></div>

        {/* Services Grid with central animated image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            if (idx === 4) {
              return (
                <motion.div
                  key="center-image"
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* The central image, with a subtle shake animation */}
                  <motion.img
                    src={servicesImage} // Now using placeholder image
                    alt="Services overview"
                    className="w-full max-h-[350px] object-contain"
                    animate={{ x: [0, -5, 5, -5, 5, 0] }}
                    transition={{
                      x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={idx}
                className="group relative bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 
              shadow-[0_8px_20px_rgba(0,0,0,0.15)] 
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
              p-6 text-left flex flex-col items-start
              transition-all duration-500 transform 
              hover:-translate-y-4 hover:rotate-[1.5deg] hover:scale-[1.03] perspective-1000"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Glassy highlight overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 to-transparent opacity-50 pointer-events-none"></div>

                {/* Animated Icon */}
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-2xl 
                bg-gradient-to-tr from-blue-600 to-blue-400 
                text-white shadow-lg mb-5 backdrop-blur-sm 
                group-hover:shadow-blue-400/50"
                  animate={{ y: [0, -6, 0] }} // floating effect
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ rotate: 12, scale: 1.2 }}
                >
                  {service.icon}
                </motion.div>

                {/* Card Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 drop-shadow-sm">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm flex-grow leading-relaxed">
                  {service.desc}
                </p>

                {/* Use Link to create a clickable button that navigates */}
                <Link to={service.path}>
                  <motion.button
                    whileHover={{ x: 6 }}
                    className="mt-5 text-blue-600 font-semibold flex items-center gap-1"
                  >
                    Discover now →
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
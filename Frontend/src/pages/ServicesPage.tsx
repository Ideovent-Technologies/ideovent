import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, PenTool, Globe, ShoppingCart, Monitor, ArrowUpRight, Smartphone, Database, Server,
  Rocket, Lightbulb, Cloud, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const ParallaxSection = ({ children, bgImage, className, height = 'min-h-[60vh]' }) => (
  <div
    className={cn("relative overflow-hidden bg-cover bg-fixed bg-center", height, className)}
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {children}
  </div>
);

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState('web');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - Ideovent Technologies";
  }, []);

  const services = {
    web: [
      {
        icon: <Code size={28} />,
        title: "Website Development",
        description: "Custom websites built with React.js, WordPress, or other technologies tailored to your needs. We create fast, responsive, and user-friendly websites that drive results.",
        features: ["Responsive Web Design", "E-commerce Solutions", "Progressive Web Apps", "CMS Integration", "Performance Optimization"],
        link: "/services/website-development"
      },
      {
        icon: <Server size={28} />,
        title: "Web Application Development",
        description: "Powerful web applications that solve complex business problems and streamline operations. We use modern frameworks and technologies to build scalable solutions.",
        features: ["Custom Dashboard Development", "Real-time Applications", "Enterprise Solutions", "Database Design & Integration", "API Development"],
        link: "/services/software-development"
      },
      {
        icon: <Database size={28} />,
        title: "ERP & CRM Development",
        description: "Develop and integrate custom ERP and CRM systems to manage your business processes efficiently and automate workflows.",
        features: ["Sales & Marketing Automation", "Customer Support Systems", "Inventory Management", "Human Resources Systems", "Custom Reporting"],
        link: "/services/erp-crm-development"
      },
      {
        icon: <Cloud size={28} />,
        title: "Domain & Hosting",
        description: "Secure and reliable domain registration and hosting services to ensure your website is always up and running smoothly.",
        features: ["High-speed Hosting", "SSL Certificates", "24/7 Support", "Email Services", "Domain Management"],
        link: "/services/domain-hosting"
      }
    ],
    design: [
      {
        icon: <PenTool size={28} />,
        title: "UI/UX Design",
        description: "User-centered design that enhances user experience and engagement with your brand. We create intuitive interfaces that keep users coming back.",
        features: ["User Research", "Wireframing & Prototyping", "Interface Design", "Usability Testing", "Design Systems"],
        link: "/services/graphics-design"
      },
      {
        icon: <Monitor size={28} />,
        title: "Brand Identity",
        description: "Comprehensive brand identity design that helps you stand out in the market. We create cohesive brand experiences across all customer touchpoints.",
        features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Marketing Collateral", "Brand Strategy"],
        link: "/services/graphics-design"
      }
    ],
    marketing: [
      {
        icon: <Globe size={28} />,
        title: "Digital Marketing",
        description: "Optimize your online presence and reach your target audience effectively. We help you get found by the right people at the right time.",
        features: ["Search Engine Optimization", "Content Marketing", "Social Media Strategy", "Email Marketing", "Analytics & Reporting"],
        link: "/services/digital-marketing"
      },
      {
        icon: <ShoppingCart size={28} />,
        title: "E-Commerce Marketing",
        description: "Specialized marketing strategies for online stores that drive traffic and increase conversions. We help you sell more products online.",
        features: ["Conversion Rate Optimization", "Product Listing Optimization", "Shopping Feed Management", "Abandoned Cart Recovery", "Customer Retention"],
        link: "/services/digital-marketing"
      }
    ],
    mobile: [
      {
        icon: <Smartphone size={28} />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that provide seamless experiences on iOS and Android devices. We build apps that users love.",
        features: ["iOS & Android Development", "React Native Apps", "Mobile UI/UX Design", "App Store Optimization", "App Maintenance & Support"],
        link: "/services/mobile-app-development"
      }
    ],
    other: [
      {
        icon: <Shield size={28} />,
        title: "Maintenance Services",
        description: "Keep your digital products secure, up-to-date, and performing optimally with our comprehensive maintenance and support packages.",
        features: ["Security Monitoring", "Performance Audits", "Bug Fixing", "Feature Updates", "Technical Support"],
        link: "/services/maintenance-services"
      },
      {
        icon: <Lightbulb size={28} />,
        title: "Explore More Services",
        description: "Have a unique project in mind? Our team is ready to provide custom solutions tailored to your specific business needs and challenges.",
        features: ["IT Consulting", "Cloud Solutions", "API Integration", "Custom Software", "IT Infrastructure"],
        link: "/services/contact"
      }
    ]
  };

  const serviceCategories = [
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Design & Graphics' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'other', label: 'Other Services' }
  ];

  return (
    <div className="bg-gray-50 font-[Inter] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <ParallaxSection
          bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="flex items-center justify-center text-white"
          height="min-h-[60vh]"
        >
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            className="container relative z-10 text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
              What We Offer
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl drop-shadow-md">
              Comprehensive digital solutions to help your business thrive in the digital world.
            </p>
          </motion.div>
        </ParallaxSection>

        {/* Services Tabs */}
        <section className="section py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Expertise
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Elevate Your Business With Our <span className="text-blue-600">Services</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                We offer a wide range of digital solutions tailored to your specific needs.
              </motion.p>
            </div>

            {/* Service Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
                    ${activeSection === category.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  onClick={() => setActiveSection(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Service Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services[activeSection].map((service, index) => (
                  <motion.div
                    key={index}
                    className="group relative rounded-3xl p-8 text-left flex flex-col items-start
                      bg-white/30 backdrop-blur-xl border border-white/40 shadow-lg
                      hover:shadow-2xl transition-all duration-500 transform
                      hover:-translate-y-4 hover:scale-[1.03] perspective-1000"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-5
                      bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 drop-shadow-sm">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 flex-grow leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-6 w-full">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100 w-full">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
                      >
                        Learn More
                        <ArrowUpRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-20 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team to discuss how we can help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full shadow-lg">
                  Get a Free Consultation
                </Button>
                <Button variant="outline" className="rounded-full">
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Process
              </motion.div>
              <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                How We <span className="text-blue-600">Work</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our proven approach ensures we deliver high-quality solutions that meet your needs.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We start by understanding your business, goals, and requirements in detail." },
                { step: "02", title: "Planning", description: "We create a comprehensive plan outlining the scope, timeline, and deliverables." },
                { step: "03", title: "Execution", description: "Our team works diligently to bring your project to life with regular updates." },
                { step: "04", title: "Delivery & Support", description: "We launch your project and provide ongoing support to ensure its success." }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group bg-white rounded-3xl p-8 h-full shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-gray-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute w-24 h-px top-1/2 left-[calc(100%+8px)] -translate-y-1/2 border-t-2 border-dashed border-gray-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

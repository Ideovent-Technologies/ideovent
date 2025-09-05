import { useState, useEffect, useRef } from "react";
import { Code, PenTool, Globe, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "Website Development",
      description:
        "Custom websites built with React.js, WordPress, or other technologies tailored to your needs.",
      icon: <Code className="w-10 h-10 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that enhances user experience and engagement with your brand.",
      icon: <PenTool className="w-10 h-10 text-primary" />,
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Optimize your online presence and reach your target audience effectively.",
      icon: <Globe className="w-10 h-10 text-primary" />,
    },
    {
      title: "E-Commerce Development",
      description:
        "Powerful online stores that drive sales and provide excellent customer experiences.",
      icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section bg-accent relative overflow-hidden"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Transforming Ideas into{" "}
            <span className="text-primary">Digital Reality</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
            We offer comprehensive digital solutions tailored to your business
            needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`h-full transition-all duration-700 transform 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} 
    bg-white/70 backdrop-blur-md shadow-lg rounded-2xl 
    hover:shadow-xl hover:-translate-y-2
  `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition font-medium"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

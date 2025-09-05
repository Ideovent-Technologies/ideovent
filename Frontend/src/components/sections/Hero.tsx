import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Basic Button Component
const Button = ({ children, size, variant, className, ...props }) => {
  let baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  let sizeStyles = "";
  let variantStyles = "";

  switch (size) {
    case "lg":
      sizeStyles = "px-8 py-3 text-lg";
      break;
    case "sm":
      sizeStyles = "px-3 py-1.5 text-sm";
      break;
    default:
      sizeStyles = "px-5 py-2.5 text-base";
  }

  switch (variant) {
    case "outline":
      variantStyles =
        "bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 hover:text-blue-700";
      break;
    case "ghost":
      variantStyles = "bg-transparent text-blue-600 hover:bg-blue-50";
      break;
    default: // primary
      variantStyles = "bg-blue-600 text-white hover:bg-blue-700";
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
        className || ""
      } rounded-full`}
      {...props}
    >
      {children}
    </button>
  );
};

// CarouselHero Component
const CarouselHero = ({ images, metric }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [floatingCircleStyles] = useState(() =>
    Array.from({ length: 8 }).map(() => ({
      width: `${Math.random() * 200 + 50}px`,
      height: `${Math.random() * 200 + 50}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      opacity: Math.random() * 0.2 + 0.05,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full aspect-square max-w-md mx-auto lg:max-w-none rounded-3xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-3xl transform rotate-6 animate-pulse-soft" />

      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Visual showcasing our services"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100 animate-zoom" : "opacity-0"
            }`}
            style={{ animationDuration: "5s", transformOrigin: "center" }}
          />
        ))}
      </div>

      <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-blue-100">
        <div className="text-sm font-medium text-gray-800">{metric.label}</div>
        <div className="text-xl sm:text-2xl font-bold text-blue-700">
          {metric.value}
        </div>
      </div>

      {floatingCircleStyles.map((style, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-200 animate-float"
          style={style}
        />
      ))}
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const carouselImages = [
    "https://images.pexels.com/photos/6153344/pexels-photo-6153344.jpeg",
    "https://images.pexels.com/photos/9783375/pexels-photo-9783375.jpeg",
    "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg",
    "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg",
  ];
  const carouselMetric = { label: "Client Satisfaction", value: "98%" };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 -z-10" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              {/* Badge */}
              <div
                className={`inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Welcome to Ideovent Technologies
              </div>

              {/* Main Heading */}
              <h1
                className={`text-4xl md:text-5xl font-bold transition-all duration-700 delay-100 transform text-gray-900 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                Digital Solutions <br />
                <span className="text-blue-700" style={{ fontSize: "inherit" }}>
                  for Businesses
                </span>
              </h1>

              {/* Paragraph */}
              <p
                className={`text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl transition-all duration-700 delay-200 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                We craft innovative digital experiences that transform
                businesses and drive growth through cutting-edge technology and
                design.
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-full shadow-lg shadow-blue-600/20"
                >
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="rounded-full">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Testimonial mini-block */}
            <div
              className={`flex items-center gap-6 transition-all duration-700 delay-400 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex -space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-md"
                />
              </div>
              <div>
                <div className="text-base font-medium text-gray-800">
                  Your Trusted Partner
                </div>
                <div className="text-sm text-gray-600">
                  in Digital Innovation
                </div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-12"
            }`}
          >
            <CarouselHero images={carouselImages} metric={carouselMetric} />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(5deg); }
            50% { transform: translateY(0px) rotate(0deg); }
            75% { transform: translateY(15px) rotate(-5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 10s ease-in-out infinite;
          }
          @keyframes pulse-soft {
            0%, 100% { transform: rotate(6deg) scale(1); }
            50% { transform: rotate(6deg) scale(1.02); }
          }
          .animate-pulse-soft {
            animation: pulse-soft 4s ease-in-out infinite;
          }
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .animate-zoom {
            animation: zoom 5s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

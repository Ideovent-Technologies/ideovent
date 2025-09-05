import React, { useEffect, useState } from "react";

interface HeroMetric {
  label: string;
  value: string;
}

interface CarouselHeroProps {
  images?: string[];
  metric?: HeroMetric;
}

// Default images for preview or if no props are passed
const defaultImages = [
  "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg",
  "https://images.pexels.com/photos/7172830/pexels-photo-7172830.jpeg",
  "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg",
  "https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg",
];

const CarouselHero: React.FC<CarouselHeroProps> = ({
  images = defaultImages,
  metric = { label: "Client Satisfaction", value: "98%" },
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Floating circle background (pre-calculated styles)
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

  // Auto-change image every 5 seconds
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
      {/* Background gradient pulse */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-500/5 rounded-3xl transform rotate-6 animate-pulse-soft" />

      {/* Images with fade + zoom inside an overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Visual showcasing our services"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex
                ? "opacity-100 animate-zoom"
                : "opacity-0"
            }`}
            style={{ animationDuration: "5s", transformOrigin: "center" }}
          />
        ))}
      </div>

      {/* Metric overlay card (never clipped now) */}
      <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 shadow-xl border border-blue-100">
        <div className="text-sm font-medium text-gray-800">{metric.label}</div>
        <div className="text-xl sm:text-2xl font-bold text-blue-700">
          {metric.value}
        </div>
      </div>

      {/* Floating circles */}
      {floatingCircleStyles.map((style, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-200 animate-float"
          style={style}
        />
      ))}

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
    </div>
  );
};

export default CarouselHero;

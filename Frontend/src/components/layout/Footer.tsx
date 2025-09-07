import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-semibold flex items-center">
              <span>Ideovent</span>
            </Link>
            <p className="text-secondary-foreground/80 max-w-xs">
              Creating innovative digital solutions for businesses around the
              globe.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ideovent-technologies-a16648356"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Ideovent_"
                target="_blank"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.982 10.276L23.41 0h-2.137l-7.71 9.026L8.056 0H0l8.828 13.252L0 24h2.137l8.234-9.642L15.944 24H24M2.91 1.561h3.786L21.09 22.44h-3.786" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575994778106"
                target="_blank"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ideovent_official"
                target="_blank"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Website Development
              </li>
              <li className="text-secondary-foreground/80 hover:text-primary transition-colors">
                UI/UX Design
              </li>
              <li className="text-secondary-foreground/80 hover:text-primary transition-colors">
                SEO & Digital Marketing
              </li>
              <li className="text-secondary-foreground/80 hover:text-primary transition-colors">
                E-Commerce Development
              </li>
              <li className="text-secondary-foreground/80 hover:text-primary transition-colors">
                Mobile App Development
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin size={20} className="mr-3 mt-1 text-primary" />
              <span className="text-secondary-foreground/80">
                Salempur, Deoria, Uttar Pradesh, 274509
              </span>
            </li>
            {/* CORRECTED CODE BLOCK */}
            <li className="flex items-start">
              <Phone size={20} className="mr-3 text-primary" />
              <div className="flex flex-col">
                <span className="text-secondary-foreground/80">
                  +91 9410707967
                </span>
                <span className="text-secondary-foreground/80 mt-1">
                  +91 8541831946
                </span>
              </div>
            </li>
            {/* END CORRECTED CODE BLOCK */}
            <li className="flex items-center">
              <Mail size={20} className="mr-3 text-primary" />
              <span className="text-secondary-foreground/80">
                contact@ideovent.com
              </span>
            </li>
          </ul>
        </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-secondary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Trust Badges */}
        {/* Trust Badges / Social Proof */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-80">
          <a
            href="https://www.google.com/search?q=Ideovent+Technologies+reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/badges/google-customer-reviews-badge.png"
              alt="Google Reviews"
              className="h-10"
            />
          </a>
          <a
            href="https://clutch.co/profile/ideovent-technologies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/badges/clutch-badge.png" alt="Clutch" className="h-10" />
          </a>
          <a
            href="https://www.trustpilot.com/review/ideovent.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/badges/trustpilot-badge.png"
              alt="TrustPilot"
              className="h-10"
            />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-secondary-foreground/70">
          <p>
            © {new Date().getFullYear()} Ideovent Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

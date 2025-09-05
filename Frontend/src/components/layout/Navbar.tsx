import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blogs" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Software Development", path: "/services/software-development" },
    { name: "Website Development", path: "/services/website-development" },
    {
      name: "Mobile App Development",
      path: "/services/mobile-app-development",
    },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Graphics Design", path: "/services/graphics-design" },
    { name: "Domain & Hosting", path: "/services/domain-hosting" },
    { name: "ERP & CRM Development", path: "/services/erp-crm-development" },
    { name: "Maintenance Services", path: "/services/maintenance-services" },
    { name: "Explore More Services", path: "/contact" },
  ];

  return (
    <>
      <style>
        {`
          /* Base Navbar */
          .custom-navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            transition: all 0.3s ease-in-out;
            padding: 12px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: transparent;
          }

          .custom-navbar.scrolled {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.2);
          }

          .custom-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .custom-logo {
            height: 55px;
            display: flex;
            align-items: center;
          }

          .custom-logo img {
            height: 90px;
            max-height: 100px;
            object-fit: contain;
          }

          /* Desktop Navigation */
          .custom-nav-links {
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .custom-nav-link {
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
            color: black;
            transition: color 0.3s ease-in-out;
            position: relative;
          }

          .custom-nav-link:hover,
          .custom-nav-link.active {
            color: #007bff;
          }

          /* Desktop Dropdown Container */
          .custom-dropdown {
            position: relative;
          }
          
          /* Desktop Dropdown Menu */
          .custom-dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px) saturate(150%);
            -webkit-backdrop-filter: blur(12px) saturate(150%);
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            padding: 0.75rem 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            flex-direction: column;
            min-width: 220px;
            z-index: 100;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px) scale(0.95);
            transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
            transform-origin: top center;
          }

          /* Show on Hover */
          .custom-dropdown:hover .custom-dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }

          /* Dropdown Links */
          .custom-dropdown-menu a {
            text-decoration: none;
            padding: 10px 16px;
            font-size: 15px;
            font-weight: 500;
            color: black;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .custom-dropdown-menu a:hover {
            background: #f0f0f0;
            color: #007bff;
          }

          .custom-get-started {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.3s ease-in-out;
          }

          .custom-get-started:hover {
            background: #0056b3;
          }

          /* Mobile Menu */
          .custom-menu-button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: black;
            display: none;
          }

          .custom-mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 100px; /* Space for the logo/header */
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            transform: translateY(-100%);
            z-index: 40;
            overflow-y: auto;
          }
          
          .custom-mobile-menu.open {
            transform: translateY(0);
          }

          .mobile-menu-item {
            font-size: 20px;
            font-weight: 500;
            color: white;
            text-decoration: none;
            width: 100%;
            text-align: center;
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: color 0.3s ease;
          }

          .mobile-menu-item:hover, .mobile-menu-item.active {
            color: #007bff;
          }

          .mobile-menu-item button {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            text-align: center;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-menu-item button .chevron {
            transition: transform 0.3s ease;
          }

          .mobile-menu-item button.active .chevron {
            transform: rotate(180deg);
          }

          .mobile-services-dropdown {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px 0;
            background: rgba(255, 255, 255, 0.1);
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
          }
          
          .mobile-services-dropdown.open {
            max-height: 500px; /* Adjust this value as needed */
            opacity: 1;
          }
          
          .mobile-services-dropdown a {
            font-size: 16px;
            color: white;
            text-decoration: none;
            padding: 10px 0;
            transition: color 0.3s;
            text-align: center;
          }
          
          .mobile-services-dropdown a:hover,
          .mobile-services-dropdown a.active {
            color: #007bff;
          }

          .mobile-get-started {
            margin-top: 20px;
            padding: 12px 24px;
            border-radius: 30px;
            background: #007bff;
            color: white;
            font-weight: 600;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          
          .mobile-get-started:hover {
            background: #0056b3;
          }


          /* Responsive */
          @media (max-width: 768px) {
            .custom-nav-links {
              display: none;
            }
            .custom-menu-button {
              display: block;
              z-index: 60;
            }
            .custom-logo img {
              height: 80px;
            }
          }
        `}
      </style>

      <header className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="custom-container">
          <Link to="/" className="custom-logo" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}ideovent.png`}
              alt="Ideovent Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="custom-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`custom-nav-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services with Submenu */}
            <div className="custom-dropdown">
              <Link
                to="/services"
                className={`custom-nav-link ${
                  location.pathname.startsWith("/services") ? "active" : ""
                }`}
              >
                Services
              </Link>
              <div className="custom-dropdown-menu">
                {serviceItems.map((item) => (
                  <Link key={item.path} to={item.path} onClick={closeMenu}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className="custom-get-started">
              Grow My Brand
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="custom-menu-button" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`custom-mobile-menu ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-menu-item ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile services dropdown */}
          <div className="mobile-menu-item">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={mobileServicesOpen ? "active" : ""}
            >
              Services <ChevronDown size={16} className="chevron" />
            </button>
            <div
              className={`mobile-services-dropdown ${
                mobileServicesOpen ? "open" : ""
              }`}
            >
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="mobile-get-started"
            onClick={closeMenu}
          >
            Grow My Brand
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
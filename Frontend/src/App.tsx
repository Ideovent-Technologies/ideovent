import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Importing pages
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import AdminBlog from "./pages/BlogAdmin";
import QRCodeList from "./pages/QRCodeList";
import BlogDetail from "./pages/BlogDetail";
import CertificateVerify from "./pages/CertificateVerify";
import InternshipPage from "./pages/InternshipPage";

// Importing service pages
import SoftwareDevelopment from "./pages/servicesPages/SoftwareDevelopment";
import WebsiteDevelopment from "./pages/servicesPages/WebsiteDevelopment";
import FloatingCTA from "./components/sections/FloatingCTA";

// Keep other service imports commented (easy to enable later)
import MobileAppDevelopment from "./pages/servicesPages/MobileAppDevelopment";
import DigitalMarketing from "./pages/servicesPages/DigitalMarketing";
import GraphicsDesign from "./pages/servicesPages/GraphicsDesign";
import DomainHosting from "./pages/servicesPages/DomainHosting";
import ErpCrmDevelopment from "./pages/servicesPages/ErpCrmDevelopment";
import MaintenanceServices from "./pages/servicesPages/MaintenanceServices";
// import ExploreMoreServices from "./pages/services/ExploreMoreServices";

const queryClient = new QueryClient();

/**
 * AppContent handles all routes and conditional rendering
 * useLocation() lets us check the current path to decide
 * whether or not to show the FloatingCTA
 */
const AppContent = () => {
  const location = useLocation(); // ✅ Get current URL path

  return (
    <>
      {/* All application routes */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/admin" element={<AdminBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/verify/:certId" element={<CertificateVerify />} />
        <Route path="/admin/qrcodes" element={<QRCodeList />} />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />

        {/* Uncomment these whenever you need them */}
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/graphics-design" element={<GraphicsDesign />} />
        <Route path="/services/domain-hosting" element={<DomainHosting />} />
        <Route path="/services/erp-crm-development" element={<ErpCrmDevelopment />} />
        <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
        {/* <Route path="/services/explore-more" element={<ExploreMoreServices />} /> */}
      </Routes>

      {/* Floating CTA will show on all pages EXCEPT /contact */}
      {location.pathname !== "/contact" && <FloatingCTA />}
    </>
  );
};

/**
 * App wraps everything with providers and BrowserRouter
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

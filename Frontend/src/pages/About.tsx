import React, { useEffect } from 'react';
import AboutHero from '../components/sections/AboutHero';
import MilestonesTimeline from '../components/sections/MilestonesTimeline';
import ComparisonSection from '../components/sections/ComparisonSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import ContactForm from '../components/sections/ContactForm';
import ServicesSection from '../components/sections/ServicesSection';
import Overview from '../components/sections/Overview';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SubNavbar from '../components/layout/SubNavbar';
import TeamSection from '../components/sections/TeamSection';
import TechStackSection from '@/components/sections/TechStackSection';

const About = () => {
  // Scrolls to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Defines the sections for the SubNavbar
  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'tech-stack', name: 'Tech Stack' },
    { id: 'team', name: 'Team' },
    { id: 'services', name: 'Services' }, // Corrected ID to match the section below
    { id: 'milestones', name: 'Milestones' },
    { id: 'comparison', name: 'Comparison' },
    { id: 'why-choose-us', name: 'Why Choose Us' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    // Main container uses flexbox for a full-height, flexible layout
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <SubNavbar sections={sections} />

        {/* Sections with matching IDs for the SubNavbar to link to */}
        <section id="overview">
          <Overview />
        </section>

        <section id="tech-stack">
          <TechStackSection />
        </section>

        <section id="team">
          <TeamSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="milestones">
          <MilestonesTimeline />
        </section>

        <section id="comparison">
          <ComparisonSection />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default About;

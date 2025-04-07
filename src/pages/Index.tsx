
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TeamSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

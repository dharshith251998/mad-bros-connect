
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-extrabold text-madbros-700">MAD BRO'S</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-foreground hover:text-madbros-600 transition-colors">Home</a>
          <a href="#team" className="text-foreground hover:text-madbros-600 transition-colors">Team</a>
          <a href="#services" className="text-foreground hover:text-madbros-600 transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-madbros-600 transition-colors">Contact</a>
          <Button className="bg-madbros-600 hover:bg-madbros-700">Get Started</Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 space-y-4">
            <a href="#" className="block py-2 text-foreground hover:text-madbros-600 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#team" className="block py-2 text-foreground hover:text-madbros-600 transition-colors" onClick={toggleMenu}>Team</a>
            <a href="#services" className="block py-2 text-foreground hover:text-madbros-600 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#contact" className="block py-2 text-foreground hover:text-madbros-600 transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="w-full bg-madbros-600 hover:bg-madbros-700">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

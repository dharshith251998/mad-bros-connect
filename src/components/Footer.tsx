
import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Instagram, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-madbros-950 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">MAD BRO'S</h3>
              <p className="text-madbros-200 mt-2">Your Technical Partner for Development & Training</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/MadbrosT?t=huu1kIGr3eCvrKqFkuv7wQ&s=08" className="text-white hover:text-madbros-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/madbros27?igshid=YmMyMTA2M2Y=" className="text-white hover:text-madbros-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/madbros-tech-148754242/" className="text-white hover:text-madbros-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://discord.gg/4cvJvSYYFP" className="text-white hover:text-madbros-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Software Projects</a></li>
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Technical Training</a></li>
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Non-Technical Training</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-madbros-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#team" className="text-madbros-200 hover:text-white transition-colors">Team</a></li>
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-madbros-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-madbros-200 mb-2">Genuis PU & First Grade College, Mysuru</p>
            <p className="text-madbros-200 mb-2">DailyDose Cafe, MG Road, Hassan</p>
            <p className="text-madbros-200 mb-4">Email: madbrostech27@gmail.com</p>
            <p className="text-madbros-200">Discord: madbros tech</p>
          </div>
        </div>
        
        <div className="border-t border-madbros-800 mt-12 pt-6 text-center">
          <p className="text-madbros-300">
            &copy; {currentYear} MAD BRO'S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

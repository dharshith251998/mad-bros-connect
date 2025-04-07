
import React from 'react';
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

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
              <a href="#" className="text-white hover:text-madbros-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-madbros-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-madbros-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-madbros-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-madbros-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Python Training</a></li>
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Java Development</a></li>
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">AI/ML Projects</a></li>
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Resume Building</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#team" className="text-madbros-200 hover:text-white transition-colors">Team</a></li>
              <li><a href="#services" className="text-madbros-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-madbros-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-madbros-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-madbros-200 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-foreground bg-white rounded-l-md focus:outline-none"
              />
              <button className="bg-madbros-600 hover:bg-madbros-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
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

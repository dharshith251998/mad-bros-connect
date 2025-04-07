
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16">
      <div className="container section-padding flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Your <span className="text-madbros-600">Technical Partner</span> for Development & Training
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            MAD BRO'S is a team of experienced developers and educators, 
            offering comprehensive solutions from basic web fundamentals to advanced project development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-madbros-600 hover:bg-madbros-700 text-white px-6 py-6">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-madbros-600 text-madbros-600 hover:bg-madbros-50 px-6 py-6">
              Explore Services
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
            <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
              <img 
                src="/lovable-uploads/74527736-90c8-4a82-9664-ffdf878c539f.png" 
                alt="MAD BRO'S Logo" 
                className="w-full h-auto object-contain max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;

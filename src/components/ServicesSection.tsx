
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Code, BookOpen, Palette, Upload } from "lucide-react";

const servicesData = {
  softwareProjects: [
    "All Software Projects Development and Support",
    "Custom Web Applications",
    "Mobile Applications",
    "Enterprise Solutions",
    "AI/ML Integration",
    "Web Framework with Backend Connectivity",
    "Projects using AI/ML, LLM Models"
  ],
  logoDesign: [
    "Brand Logo Design",
    "Logo Redesign",
    "Corporate Identity",
    "Brand Guidelines",
    "Visual Elements"
  ],
  technicalTraining: [
    "Web Fundamentals (HTML, CSS, JS)",
    "Python Fundamentals",
    "Java Fundamentals",
    "Git and Command Line",
    "Web Framework",
    "Python Framework",
    "Java Framework",
    "APIs",
    "AI/ML"
  ],
  nonTechnicalTraining: [
    "Resume Building",
    "Interview Preparation",
    "Softskills Training",
    "Entrepreneurship Program",
    "Technical/Non-Technical Talks"
  ]
};

const ServiceCard = ({ title, services, icon }: { title: string, services: string[], icon: React.ReactNode }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-madbros-100 p-3 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-5 w-5 text-madbros-600 shrink-0 mt-0.5" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const allServices = [
    { 
      title: "Software Projects", 
      services: servicesData.softwareProjects,
      icon: <Code className="h-5 w-5 text-madbros-600" />
    },
    { 
      title: "Logo Design", 
      services: servicesData.logoDesign,
      icon: <Palette className="h-5 w-5 text-madbros-600" />
    },
    { 
      title: "Technical Training", 
      services: servicesData.technicalTraining,
      icon: <BookOpen className="h-5 w-5 text-madbros-600" />
    },
    { 
      title: "Non-Technical Training", 
      services: servicesData.nonTechnicalTraining,
      icon: <Upload className="h-5 w-5 text-madbros-600" />
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <h2 className="section-title">Our <span className="text-madbros-600">Services</span></h2>
        <p className="section-subtitle">
          From fundamental training to advanced project development, we offer comprehensive solutions
        </p>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-3xl grid-cols-1 sm:grid-cols-5">
              <TabsTrigger value="all" className="text-sm md:text-base">All</TabsTrigger>
              <TabsTrigger value="softwareProjects" className="text-sm md:text-base">Software Projects</TabsTrigger>
              <TabsTrigger value="logoDesign" className="text-sm md:text-base">Logo Design</TabsTrigger>
              <TabsTrigger value="technicalTraining" className="text-sm md:text-base">Technical Training</TabsTrigger>
              <TabsTrigger value="nonTechnicalTraining" className="text-sm md:text-base">Non-Technical</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allServices.map((serviceCategory, index) => (
                <ServiceCard 
                  key={index} 
                  title={serviceCategory.title} 
                  services={serviceCategory.services}
                  icon={serviceCategory.icon}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="softwareProjects" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                title="Software Projects" 
                services={servicesData.softwareProjects} 
                icon={<Code className="h-5 w-5 text-madbros-600" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="logoDesign" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                title="Logo Design" 
                services={servicesData.logoDesign} 
                icon={<Palette className="h-5 w-5 text-madbros-600" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="technicalTraining" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                title="Technical Training" 
                services={servicesData.technicalTraining} 
                icon={<BookOpen className="h-5 w-5 text-madbros-600" />}
              />
            </div>
          </TabsContent>

          <TabsContent value="nonTechnicalTraining" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                title="Non-Technical Training" 
                services={servicesData.nonTechnicalTraining} 
                icon={<Upload className="h-5 w-5 text-madbros-600" />}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;

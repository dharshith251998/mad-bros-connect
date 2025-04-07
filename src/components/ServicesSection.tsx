
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

const servicesData = {
  basics: [
    "Web Fundamentals (HTML, CSS, JS)",
    "Python Fundamentals",
    "Java Fundamentals",
    "Git and Command Line"
  ],
  intermediate: [
    "Web Framework",
    "Python Framework",
    "Java Framework",
    "APIs",
    "AI/ML"
  ],
  advanced: [
    "Web Framework with Backend Connectivity",
    "Project Development using Python Framework",
    "Project Development using Java Framework",
    "Projects using AI/ML, LLM Models"
  ],
  nonTechnical: [
    "Resume Building",
    "Interview Preparation",
    "Softskills Training",
    "Entrepreneurship Program",
    "Technical/Non-Technical Talks"
  ],
  projectDevelopment: [
    "All Software Projects Development and Support",
    "Custom Web Applications",
    "Mobile Applications",
    "Enterprise Solutions",
    "AI/ML Integration"
  ]
};

const ServiceCard = ({ title, services }: { title: string, services: string[] }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
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
    { title: "Basics", services: servicesData.basics },
    { title: "Intermediate", services: servicesData.intermediate },
    { title: "Advanced", services: servicesData.advanced },
    { title: "Non-Technical", services: servicesData.nonTechnical },
    { title: "Project Development", services: servicesData.projectDevelopment }
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
            <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="all" className="text-sm md:text-base">All</TabsTrigger>
              <TabsTrigger value="basics" className="text-sm md:text-base">Basics</TabsTrigger>
              <TabsTrigger value="intermediate" className="text-sm md:text-base">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced" className="text-sm md:text-base">Advanced</TabsTrigger>
              <TabsTrigger value="nonTechnical" className="text-sm md:text-base">Non-Technical</TabsTrigger>
              <TabsTrigger value="projectDevelopment" className="text-sm md:text-base">Projects</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((serviceCategory, index) => (
                <ServiceCard 
                  key={index} 
                  title={serviceCategory.title} 
                  services={serviceCategory.services}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="basics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard title="Basics" services={servicesData.basics} />
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard title="Intermediate" services={servicesData.intermediate} />
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard title="Advanced" services={servicesData.advanced} />
            </div>
          </TabsContent>

          <TabsContent value="nonTechnical" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard title="Non-Technical" services={servicesData.nonTechnical} />
            </div>
          </TabsContent>

          <TabsContent value="projectDevelopment" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard title="Project Development" services={servicesData.projectDevelopment} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;

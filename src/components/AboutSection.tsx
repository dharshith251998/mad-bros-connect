
import React from 'react';
import { Lightbulb, Users, Shield, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: <Share2 className="h-8 w-8 text-madbros-600" />,
      title: "Learn & Share",
      description: "We believe in the power of sharing knowledge and continuous learning."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-madbros-600" />,
      title: "Proactive Approach",
      description: "We anticipate challenges and address them before they become issues."
    },
    {
      icon: <Users className="h-8 w-8 text-madbros-600" />,
      title: "User Support",
      description: "We provide exceptional support to ensure client satisfaction at every step."
    },
    {
      icon: <Shield className="h-8 w-8 text-madbros-600" />,
      title: "Security",
      description: "We prioritize data security and privacy in all our projects and services."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About <span className="text-madbros-600">MAD BRO'S</span></h2>
        <p className="section-subtitle mb-10">
          We connect with people to reach out to their requirements. You can connect with us anytime to meet your requirements and we will provide the best service.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <Card key={index} className="border-t-4 border-t-madbros-600 hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-madbros-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

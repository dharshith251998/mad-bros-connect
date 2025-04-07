
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Abhishek Pruthvi V M",
    designation: "Software Engineer",
    company: "Stellapps technologies pvt Ltd, Bengaluru",
    experience: "6+ years",
    expertise: "Software Development, Project Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Harshith D",
    designation: "Product Development Engineer",
    company: "Unisys India Pvt Ltd, Bengaluru",
    experience: "4+ years",
    expertise: "Product Development, System Architecture",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Shrinidhi V",
    designation: "Software Engineer",
    company: "Ansira, Bengaluru",
    experience: "4+ years",
    expertise: "Software Development, Web Technologies",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Kushal S J",
    designation: "Software Manual Tester",
    company: "Celestial Systems Inc, Bengaluru",
    experience: "3+ years",
    expertise: "Quality Assurance, Testing",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  }
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-madbros-600 font-medium mb-1">{member.designation}</p>
        <p className="text-sm text-muted-foreground mb-1">{member.company}</p>
        <p className="text-sm text-muted-foreground mb-3">Experience: {member.experience}</p>
        <p className="text-sm mb-4">{member.expertise}</p>
        <div className="flex space-x-3">
          <a href="#" className="text-muted-foreground hover:text-madbros-600 transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-madbros-600 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-madbros-600 transition-colors">
            <Github size={18} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-secondary/50">
      <div className="container">
        <h2 className="section-title">Meet Our <span className="text-madbros-600">Team</span></h2>
        <p className="section-subtitle">
          Our diverse team of experts brings years of experience and passion to every project
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

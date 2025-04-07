
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: 1,
    name: "Abhishek Pruthvi V M",
    designation: "Software Engineer",
    company: "Stellapps technologies pvt Ltd, Bengaluru",
    experience: "6+ years",
    expertise: "Software Development, Project Management",
    image: "/lovable-uploads/1db6619e-20ce-4d69-afc7-e9754e25ed5a.png",
  },
  {
    id: 2,
    name: "Shrinidhi V",
    designation: "Software Engineer",
    company: "Ansira, Bengaluru",
    experience: "4+ years",
    expertise: "Software Development, Web Technologies",
    image: "/lovable-uploads/132506e7-cb95-4ba0-ab1a-2eb204a427a1.png",
  },
  {
    id: 3,
    name: "Harshith D",
    designation: "Product Development Engineer",
    company: "Unisys India Pvt Ltd, Bengaluru",
    experience: "4+ years",
    expertise: "Product Development, System Architecture",
    image: "/lovable-uploads/703b4b37-1abf-42d6-97fb-9115a1b8c33e.png",
  },
  {
    id: 4,
    name: "Kushal S J",
    designation: "Software Manual Tester",
    company: "Celestial Systems Inc, Bengaluru",
    experience: "3+ years",
    expertise: "Quality Assurance, Testing",
    image: "/lovable-uploads/63313b8d-c92a-453d-bd56-68bf97b7ccb4.png",
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

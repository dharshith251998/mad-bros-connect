
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
    image: "/lovable-uploads/ff31d494-7930-40a4-afe0-3d8f6dbbf81b.png",
  },
  {
    id: 2,
    name: "Harshith D",
    designation: "Product Development Engineer",
    company: "Unisys India Pvt Ltd, Bengaluru",
    experience: "4+ years",
    expertise: "Product Development, System Architecture",
    image: "/lovable-uploads/4f2e1c28-d16c-4214-a016-6d529e08ebe5.png",
  },
  {
    id: 3,
    name: "Shrinidhi V",
    designation: "Software Engineer",
    company: "Ansira, Bengaluru",
    experience: "4+ years",
    expertise: "Software Development, Web Technologies",
    image: "/lovable-uploads/4b5cf30c-b868-492b-86ab-4bcfb1108c70.png",
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

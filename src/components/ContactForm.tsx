
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Mailbox, Instagram, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      urgency: value[0]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create urgency text based on slider value
    const urgencyText = formData.urgency <= 3 ? "Low Priority" : 
                        formData.urgency <= 7 ? "Medium Priority" : 
                        "High Priority";
    
    // Create a mailto link to open the user's email client
    const mailtoLink = `mailto:madbrostech27@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nUrgency: ${urgencyText} (${formData.urgency}/10)\n\n${formData.message}`)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Message sent!",
      description: "We've received your message and will get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      urgency: 5
    });
    
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/madbros27?igshid=YmMyMTA2M2Y="
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/MadbrosT?t=huu1kIGr3eCvrKqFkuv7wQ&s=08"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/madbros-tech-148754242/"
    },
    {
      name: "Discord",
      icon: <MessageSquare className="h-5 w-5" />,
      url: "https://discord.gg/4cvJvSYYFP"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-madbros-600">Touch</span></h2>
        <p className="section-subtitle">
          Have a project in mind or need consulting? Reach out to us and let's discuss how we can help!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Message Urgency</Label>
                    <div className="pt-2 pb-4">
                      <Slider 
                        defaultValue={[5]} 
                        max={10} 
                        step={1}
                        className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                        onValueChange={handleSliderChange}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Low Priority</span>
                        <span>Medium</span>
                        <span>Urgent</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-madbros-600 hover:bg-madbros-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mr-3 h-5 w-5 text-madbros-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Our Locations</h4>
                        <p className="text-muted-foreground">Genuis PU & First Grade College, Mysuru</p>
                        <p className="text-muted-foreground">DailyDose Cafe, MG Road, Hassan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-madbros-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email Us</h4>
                        <p className="text-muted-foreground">madbrostech27@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="mr-3 h-5 w-5 text-madbros-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Discord</h4>
                        <p className="text-muted-foreground">madbros tech</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect With Us</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm hover:bg-madbros-600 hover:text-white transition-colors"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to a backend service
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      // Create a mailto link to open the user's email client
      const mailtoLink = `mailto:contact@madbros.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      
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
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

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
                        <h4 className="font-medium">Our Location</h4>
                        <p className="text-muted-foreground">123 Tech Street, Innovation Hub, Startup City</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="mr-3 h-5 w-5 text-madbros-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email Us</h4>
                        <p className="text-muted-foreground">contact@madbros.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="mr-3 h-5 w-5 text-madbros-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Call Us</h4>
                        <p className="text-muted-foreground">+1 (123) 456-7890</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 9am - 6pm</p>
                  <p className="text-muted-foreground">Saturday: 10am - 2pm</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
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

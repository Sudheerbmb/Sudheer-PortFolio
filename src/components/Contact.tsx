import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('bhxViku3_mGqu7g9M'); // Your EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      const result = await emailjs.sendForm(
        'service_8edgm6d', // Your EmailJS service ID
        'template_7onqixd', // Your EmailJS template ID
        formRef.current,
        'bhxViku3_mGqu7g9M' // Your EmailJS public key
      );
      
      if (result.text === 'OK') {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background/95">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-accent mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Contact Me</span>
          </h3>
          <p className="mt-4 text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 interactive-card">
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" size={18} />
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Email</p>
                    <a href="mailto:sudheermsdvk@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      sudheermsdvk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent" size={18} />
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Phone</p>
                    <a href="tel:+917042383822" className="text-foreground hover:text-accent transition-colors">
                      +91-7042383822
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary" size={18} />
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Location</p>
                    <p className="text-foreground">Kadapa, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-6">Send Me a Message</h4>
              <div className="space-y-4">
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Your Name" 
                  required 
                  disabled={isSubmitting}
                />
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Your Email" 
                  required 
                  disabled={isSubmitting}
                />
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="Subject" 
                  required 
                  disabled={isSubmitting}
                />
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your Message" 
                  required 
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send size={16} />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

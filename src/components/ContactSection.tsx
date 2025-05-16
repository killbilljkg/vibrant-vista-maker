
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for all your electrical and data service needs.
            We're here to provide you with expert solutions and free quotes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                  <Input id="phone" type="tel" placeholder="Your Phone" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your project or inquiry..." 
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-opacity-90">
                Submit Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-secondary text-white p-8 rounded-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="mb-1">0490 123 748</p>
                    <p>02 8872 8988</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p>contactjbelectrical@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Business Hours</h4>
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-bold text-lg mb-3">Service Areas</h4>
                <p>We proudly serve the Greater Sydney area, including Western Sydney, North Shore, Inner West, and Eastern Suburbs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

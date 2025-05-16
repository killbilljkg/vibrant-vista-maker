
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-secondary to-accent text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Electrical & Data Services
            </h1>
            <p className="text-lg mb-6">
              Reliable and efficient electrical solutions for residential and commercial needs. 
              Licensed, insured, and committed to quality workmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-opacity-90">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-secondary hover:bg-gray-100">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-secondary text-xl font-bold mb-4">Request a Service Call</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md">
                    <option>Select a Service</option>
                    <option>Electrical Installation</option>
                    <option>Electrical Repairs</option>
                    <option>Data Cabling</option>
                    <option>Safety Inspections</option>
                  </select>
                </div>
                <Button className="w-full bg-primary hover:bg-opacity-90">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

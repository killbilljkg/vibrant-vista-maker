
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "Licensed and fully insured (Lic.303867C)",
    "Over 10 years of industry experience",
    "Punctual and professional service",
    "Quality workmanship guarantee",
    "Competitive and transparent pricing",
    "Residential and commercial expertise"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Trust Your Electrical Needs to the Professionals
            </h2>
            <p className="text-gray-600 mb-6">
              JB Electrotech Pty Ltd. is a trusted electrical services company based in Sydney, 
              providing comprehensive electrical and data solutions for both residential and commercial clients.
            </p>
            <p className="text-gray-600 mb-6">
              Led by Binoy Philip, our team of qualified electricians is committed to delivering safe, 
              reliable, and efficient electrical services with the highest levels of workmanship and customer satisfaction.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="bg-primary hover:bg-opacity-90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">JB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">JB Electrotech</h3>
                  <p className="text-accent">Electrical and Data Services</p>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> 0490 123 748 | 02 8872 8988
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> contactjbelectrical@gmail.com
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">License:</span> 303867C
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

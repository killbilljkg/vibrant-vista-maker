
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JB Electrotech Pty Ltd.</h3>
            <p className="mb-4">Professional Electrical and Data Services for residential and commercial clients. Licensed and insured for your peace of mind.</p>
            <p className="text-sm">Lic. 303867C</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p>0490 123 748</p>
                  <p>02 8872 8988</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <a href="mailto:contactjbelectrical@gmail.com" className="hover:text-primary">
                  contactjbelectrical@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary shrink-0" />
                <p>Monday-Friday: 7am-5pm</p>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-1" />
                <p>Serving the Greater Sydney Area</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} JB Electrotech Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

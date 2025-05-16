
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary w-10 h-10 flex items-center justify-center text-white font-bold rounded-sm">
              <span className="text-xl">JB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary leading-tight">JB Electrotech</h1>
              <p className="text-xs text-accent">Electrical and Data Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-primary font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-primary font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-primary font-medium">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-opacity-90">
              <a href="tel:0490123748">Call Now</a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link 
              to="/" 
              className="block text-gray-800 hover:text-primary font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-gray-800 hover:text-primary font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-800 hover:text-primary font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block text-gray-800 hover:text-primary font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-opacity-90">
              <a href="tel:0490123748">Call Now</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, ThumbsUp } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed (Lic.303867C) and insured for your complete peace of mind.</p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Prompt Service</h3>
              <p className="text-gray-600">Responsive and punctual service when you need it most.</p>
            </div>
            <div>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Exceptional workmanship and customer satisfaction guaranteed.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <AboutSection />
      
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on your electrical or data project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
              <a href="tel:0490123748">
                Call 0490 123 748
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </Layout>
  );
};

export default Index;

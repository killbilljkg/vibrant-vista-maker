
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team for reliable electrical and data services
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">0490 123 748</p>
              <p className="text-gray-600">02 8872 8988</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:contactjbelectrical@gmail.com" className="text-accent hover:text-primary">
                contactjbelectrical@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Area</h3>
              <p className="text-gray-600">Serving the Greater Sydney Metropolitan Area</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our electrical and data services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-secondary">What areas do you service?</h3>
              <p className="text-gray-600">
                We provide electrical and data services throughout the Greater Sydney Metropolitan area, 
                including Western Sydney, North Shore, Eastern Suburbs, and Inner West.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-secondary">Are you licensed and insured?</h3>
              <p className="text-gray-600">
                Yes, JB Electrotech is fully licensed (Lic.303867C) and insured to perform electrical and data 
                services in New South Wales. We comply with all industry regulations and safety standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-secondary">Do you provide free quotes?</h3>
              <p className="text-gray-600">
                Yes, we offer free quotes for all electrical and data services. Please contact us through 
                our form, email, or phone to request a quote for your project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-secondary">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods, including cash, bank transfer, credit cards, and EFTPOS. 
                Payment terms will be discussed and agreed upon before work commences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-secondary">How quickly can you respond to service requests?</h3>
              <p className="text-gray-600">
                We strive to respond to all service requests promptly. For standard services, we typically 
                schedule appointments within 1-3 business days. For emergencies, we offer same-day service 
                when possible. Please call us directly for urgent electrical needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

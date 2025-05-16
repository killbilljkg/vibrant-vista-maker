
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  LightbulbIcon,
  Plug,
  WifiIcon,
  ShieldCheck,
  Wrench,
  Warehouse,
  HomeIcon,
  Building,
  BellRing,
  Cpu,
  Zap,
  Fan
} from 'lucide-react';

const Services = () => {
  const residentialServices = [
    {
      title: "General Electrical Work",
      description: "Power points, light fittings, switches, ceiling fans, and all general electrical maintenance.",
      icon: <Plug size={24} />
    },
    {
      title: "Home Renovations",
      description: "Complete electrical designs and installations for home renovations and extensions.",
      icon: <HomeIcon size={24} />
    },
    {
      title: "Safety Inspections",
      description: "Electrical safety audits, smoke alarm installations, and safety switch installations.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Home Automation",
      description: "Smart home setups, automated lighting, and integrated electrical systems.",
      icon: <Cpu size={24} />
    }
  ];

  const commercialServices = [
    {
      title: "Office Fit-outs",
      description: "Complete electrical installations for office spaces, including lighting and power.",
      icon: <Building size={24} />
    },
    {
      title: "Data & Network Cabling",
      description: "Structured cabling installation for reliable network connectivity in commercial settings.",
      icon: <WifiIcon size={24} />
    },
    {
      title: "Emergency Lighting",
      description: "Installation and maintenance of emergency lighting systems to meet safety regulations.",
      icon: <Zap size={24} />
    },
    {
      title: "Commercial Maintenance",
      description: "Regular electrical maintenance programs for businesses to prevent downtime.",
      icon: <Wrench size={24} />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Electrical & Data Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive electrical and data solutions for residential and commercial properties,
            delivered with expertise and professionalism.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-opacity-90">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Comprehensive Electrical & Data Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you need a simple electrical repair or a complete commercial installation,
              our team of qualified electricians can help with any electrical or data service requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                <HomeIcon className="mr-2" /> Residential Services
              </h3>
              <div className="space-y-6">
                {residentialServices.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <div className="text-primary">{service.icon}</div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center">
                <Building className="mr-2" /> Commercial Services
              </h3>
              <div className="space-y-6">
                {commercialServices.map((service, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <div className="text-primary">{service.icon}</div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of specialized electrical and data services to meet your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <WifiIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Network & Data Cabling</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Structured data cabling</li>
                  <li>• Network infrastructure</li>
                  <li>• Fiber optic cabling</li>
                  <li>• Patch panel installation</li>
                  <li>• Cable certification & testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <BellRing className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety & Security</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Smoke alarm installation</li>
                  <li>• Safety switch installation</li>
                  <li>• Security lighting</li>
                  <li>• Electrical safety audits</li>
                  <li>• Emergency lighting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Power & Lighting</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LED lighting upgrades</li>
                  <li>• Power point installations</li>
                  <li>• Switchboard upgrades</li>
                  <li>• Surge protection</li>
                  <li>• Energy-efficient solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Electrical or Data Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact JB Electrotech today for reliable, professional service at competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
              <a href="tel:0490123748">Call 0490 123 748</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

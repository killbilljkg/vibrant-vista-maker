
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LightbulbIcon, 
  Plug, 
  WifiIcon, 
  ShieldCheck, 
  Wrench,
  Warehouse
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Electrical Installations",
      description: "Professional installation of lighting, power points, switchboards, and complete electrical systems for new builds and renovations.",
      icon: <LightbulbIcon size={24} />
    },
    {
      title: "Electrical Repairs",
      description: "Quick and reliable repairs for all electrical issues, from circuit breakers and faulty wiring to power outages and electrical emergencies.",
      icon: <Wrench size={24} />
    },
    {
      title: "Data Cabling",
      description: "Structured cabling solutions for reliable network connectivity, including CAT6 installations, patch panels, and telecommunications infrastructure.",
      icon: <WifiIcon size={24} />
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections and testing to ensure your property meets all safety standards and compliance requirements.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Commercial Services",
      description: "Specialized electrical services for businesses, including office fit-outs, retail lighting, and industrial electrical installations.",
      icon: <Warehouse size={24} />
    },
    {
      title: "Power Upgrades",
      description: "Upgrade your existing electrical systems to handle modern demands, ensuring safe and efficient power distribution throughout your property.",
      icon: <Plug size={24} />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive electrical and data services for residential and commercial clients, 
            delivering reliable solutions with the highest standards of quality and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="text-primary font-semibold inline-flex items-center hover:underline"
          >
            View All Services
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

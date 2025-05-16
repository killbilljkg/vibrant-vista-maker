
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, location, text, rating }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={18} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">{text}</p>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Parramatta, NSW",
      text: "Binoy and his team did an excellent job rewiring my home. Professional, punctual, and very knowledgeable. Highly recommend JB Electrotech for any electrical needs!",
      rating: 5
    },
    {
      name: "David Chen",
      location: "North Sydney, NSW",
      text: "We had JB Electrotech install data cabling throughout our office. The work was completed on time and to a high standard. Very happy with the service.",
      rating: 5
    },
    {
      name: "Emily Taylor",
      location: "Blacktown, NSW",
      text: "Fantastic service from start to finish. Binoy helped us upgrade our switchboard and install new lighting. Fair pricing and quality workmanship.",
      rating: 4
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our electrical and data services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

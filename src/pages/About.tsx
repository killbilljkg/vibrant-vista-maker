
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Quality",
      description: "We're committed to delivering the highest quality workmanship on every project, big or small.",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "Reliability",
      description: "You can count on us to show up on time and complete projects as promised.",
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: "Customer Focus",
      description: "We prioritize your needs and ensure clear communication throughout every project.",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About JB Electrotech</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted electrical and data services partner in Sydney
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                JB Electrotech Pty Ltd was founded with a simple mission: to provide reliable, high-quality electrical 
                and data services to residential and commercial clients throughout Sydney. Led by Binoy Philip, our 
                team brings years of experience and technical expertise to every project we undertake.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that electrical work requires precision, care, and a commitment to safety. That's why 
                all our electricians are fully qualified, licensed (Lic.303867C), and stay up-to-date with the latest 
                industry standards and technologies.
              </p>
              <p className="text-gray-600">
                From simple repairs to complex installations, we approach every job with the same level of 
                professionalism and attention to detail. Our growing list of satisfied clients is a testament 
                to our dedication to exceptional service.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-secondary mb-4">Company Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <span className="font-semibold">Company Name:</span>
                      <p className="text-gray-600">JB Electrotech Pty Ltd.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <span className="font-semibold">Established:</span>
                      <p className="text-gray-600">Serving Sydney for over 5 years</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <span className="font-semibold">License:</span>
                      <p className="text-gray-600">Lic.303867C</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <span className="font-semibold">Services:</span>
                      <p className="text-gray-600">Residential & Commercial Electrical and Data Services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <span className="font-semibold">Service Area:</span>
                      <p className="text-gray-600">Greater Sydney Metropolitan Area</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at JB Electrotech. They reflect our 
              commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our skilled team of professionals is dedicated to providing the highest quality electrical and data services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-accent text-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold">BP</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">Binoy Philip</h3>
                <p className="text-accent font-medium mb-4">Founder & Lead Electrician</p>
                <p className="text-gray-600 mb-4">
                  Binoy brings over 15 years of experience in the electrical industry to JB Electrotech. 
                  With extensive knowledge in both residential and commercial electrical systems, 
                  he personally oversees projects to ensure they meet our high standards of quality and safety.
                </p>
                <p className="text-gray-600">
                  Fully licensed and certified, Binoy is committed to delivering reliable electrical solutions 
                  and exceptional customer service to every client.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Our team also includes qualified electricians, apprentices, and administrative staff, all working 
              together to provide you with the best possible service experience.
            </p>
            <Button asChild className="bg-primary hover:bg-opacity-90">
              <Link to="/contact">Get in Touch With Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose JB Electrotech?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Fully licensed and insured electrical contractors (Lic.303867C)</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Experienced team with extensive industry knowledge</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Punctual, professional service every time</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Transparent pricing with no hidden fees</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Quality workmanship guaranteed</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Excellent customer service and communication</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                  <p>Residential and commercial expertise</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Ready to work with us?</h3>
              <p className="text-lg mb-8">
                Contact JB Electrotech today for reliable, professional electrical and data services 
                at competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-opacity-90">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                  <a href="tel:0490123748">Call 0490 123 748</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

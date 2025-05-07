import React from 'react';
import Container from '../common/Container';
import { services } from '../../constants/data';
import { Server, Users, Shield, Code, Database, Headset as HeadsetHelp } from 'lucide-react';

const Services: React.FC = () => {
  // Map service icon names to actual components
  const getIcon = (iconName: string) => {
    const props = { className: "w-12 h-12 text-blue-600 mb-4" };
    switch (iconName) {
      case 'Server': return <Server {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Database': return <Database {...props} />;
      case 'HeadsetHelp': return <HeadsetHelp {...props} />;
      default: return <Server {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive IT Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide a wide range of technology solutions to help your business grow,
            innovate, and stay secure in today's digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {getIcon(service.icon)}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
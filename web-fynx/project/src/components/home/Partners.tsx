import React from 'react';
import Container from '../common/Container';
import { partners } from '../../constants/data';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-lg text-gray-600">
            We collaborate with industry leaders to deliver cutting-edge solutions and 
            ensure the highest quality of service for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-soft hover:shadow-hover transition-shadow duration-300"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            And many more industry-leading technology partners helping us deliver 
            exceptional solutions to our clients.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
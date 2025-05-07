import React from 'react';
import Container from '../common/Container';
import { teamMembers } from '../../constants/data';
import { Linkedin } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-600">
            Our team of experienced professionals is dedicated to delivering exceptional 
            IT services and solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-300">{member.role}</p>
                </div>
                <a 
                  href="#" 
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="p-4">
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
import React from 'react';
import Container from '../common/Container';
import { statistics } from '../../constants/data';
import { Users, BarChart, Headset as HeadsetHelp, Shield } from 'lucide-react';

const About: React.FC = () => {
  // Map statistic icon names to actual components
  const getIcon = (iconName: string) => {
    const props = { className: "w-10 h-10 text-blue-600 mb-3" };
    switch (iconName) {
      case 'Users': return <Users {...props} />;
      case 'BarChart': return <BarChart {...props} />;
      case 'HeadsetHelp': return <HeadsetHelp {...props} />;
      case 'Shield': return <Shield {...props} />;
      default: return <Users {...props} />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Technology Partner You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2015, Fynx has been providing exceptional IT services and professional staffing solutions to businesses of all sizes. Our mission is to empower organizations with the technology and expertise they need to thrive in today's competitive landscape.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              What sets us apart is our commitment to understanding your unique business challenges and delivering tailored solutions that drive real results. With a team of experienced IT professionals and a passion for innovation, we're prepared to help you navigate the complexities of modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide innovative IT solutions that empower businesses to achieve their full potential.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted technology partner for businesses worldwide.
                </p>
              </div>
            </div>
          </div>
          
          {/* About Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fynx team collaboration" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-10 -left-10 right-10 bg-white rounded-lg shadow-xl p-6">
              <div className="grid grid-cols-2 gap-6">
                {statistics.map((stat) => (
                  <div key={stat.id} className="text-center">
                    {getIcon(stat.icon)}
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -top-10 -right-10"></div>
        <div className="absolute w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl -bottom-10 -left-10"></div>
      </div>
      
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block mb-2">Empowering Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Digital Transformation
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Fynx delivers exceptional IT services and professional staffing solutions 
              to help your business thrive in the digital age.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">Explore Services</Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-blue-800"></div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">Trusted by</p>
                  <p className="text-sm text-white font-semibold">250+ Companies</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800">
                  <span className="text-white font-bold">★</span>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-300">Client Satisfaction</p>
                  <p className="text-sm text-white font-semibold">98% Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="IT Professionals at work" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
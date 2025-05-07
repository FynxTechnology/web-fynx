import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Partner with Fynx and get access to top IT professionals and innovative solutions 
            tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-semibold"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
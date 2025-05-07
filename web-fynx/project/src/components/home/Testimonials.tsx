import React, { useState } from 'react';
import Container from '../common/Container';
import { testimonials } from '../../constants/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-200">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with Fynx.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center">
                        <div className="flex justify-center mb-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        </div>
                        <blockquote className="text-lg italic mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <div className="font-semibold text-xl">{testimonial.name}</div>
                          <div className="text-blue-300">
                            {testimonial.role}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors flex items-center justify-center"
              onClick={handlePrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-700 transition-colors flex items-center justify-center"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? 'bg-white' : 'bg-blue-800 hover:bg-blue-700'
                } transition-colors`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
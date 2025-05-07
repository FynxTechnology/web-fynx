import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Ready to transform your IT infrastructure? Fill out the form below and one of our 
              experts will get back to you shortly.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interested In
                </label>
                <select 
                  id="service" 
                  name="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="infrastructure">IT Infrastructure</option>
                  <option value="staffing">Professional Staffing</option>
                  <option value="security">Cybersecurity</option>
                  <option value="development">Software Development</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="support">IT Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Submit Request
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                  <p className="text-gray-600 mt-1">
                    Our team is ready to answer your questions
                  </p>
                  <a 
                    href="mailto:info@fynxtech.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium mt-1 block"
                  >
                    info@fynxtech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  <p className="text-gray-600 mt-1">
                    Speak directly with our IT specialists
                  </p>
                  <a 
                    href="tel:+15551234567" 
                    className="text-blue-600 hover:text-blue-800 font-medium mt-1 block"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                  <p className="text-gray-600 mt-1">
                    Chat with our support team in real-time
                  </p>
                  <button 
                    className="text-blue-600 hover:text-blue-800 font-medium mt-1 block"
                  >
                    Start a conversation
                  </button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
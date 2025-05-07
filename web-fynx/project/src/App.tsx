import React, { useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';
import Team from './components/home/Team';
import Partners from './components/home/Partners';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';
import CallToAction from './components/home/CallToAction';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Fynx - IT Services & Professional Staffing Solutions";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Partners />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
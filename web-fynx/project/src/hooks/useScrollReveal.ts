import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  reset?: boolean;
  scale?: number;
  opacity?: number;
  viewFactor?: number;
}

export const useScrollReveal = <T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const defaultOptions: ScrollRevealOptions = {
      delay: 200,
      distance: '30px',
      duration: 800,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      reset: false,
      scale: 1,
      opacity: 0,
      viewFactor: 0.1,
      ...options
    };

    const element = elementRef.current;
    
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply reveal animation
            element.style.transition = `opacity ${defaultOptions.duration}ms ${defaultOptions.easing}, transform ${defaultOptions.duration}ms ${defaultOptions.easing}`;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            
            // If reset is false, stop observing
            if (!defaultOptions.reset) {
              observer.unobserve(element);
            }
          } else if (defaultOptions.reset) {
            // Reset animation when element is not in view
            element.style.opacity = String(defaultOptions.opacity);
            
            // Set transform based on origin
            const distance = defaultOptions.distance || '0px';
            const scale = defaultOptions.scale || 1;
            
            switch(defaultOptions.origin) {
              case 'top':
                element.style.transform = `translateY(-${distance}) scale(${scale})`;
                break;
              case 'right':
                element.style.transform = `translateX(${distance}) scale(${scale})`;
                break;
              case 'bottom':
                element.style.transform = `translateY(${distance}) scale(${scale})`;
                break;
              case 'left':
                element.style.transform = `translateX(-${distance}) scale(${scale})`;
                break;
              default:
                element.style.transform = `translateY(${distance}) scale(${scale})`;
            }
          }
        });
      }, {
        threshold: defaultOptions.viewFactor
      });
      
      // Set initial styles
      element.style.opacity = String(defaultOptions.opacity);
      const distance = defaultOptions.distance || '0px';
      const scale = defaultOptions.scale || 1;
      
      switch(defaultOptions.origin) {
        case 'top':
          element.style.transform = `translateY(-${distance}) scale(${scale})`;
          break;
        case 'right':
          element.style.transform = `translateX(${distance}) scale(${scale})`;
          break;
        case 'bottom':
          element.style.transform = `translateY(${distance}) scale(${scale})`;
          break;
        case 'left':
          element.style.transform = `translateX(-${distance}) scale(${scale})`;
          break;
        default:
          element.style.transform = `translateY(${distance}) scale(${scale})`;
      }
      
      observer.observe(element);
      
      return () => {
        observer.disconnect();
      };
    }
  }, [options]);

  return elementRef;
};
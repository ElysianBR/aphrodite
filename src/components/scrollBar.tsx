"user client"

import { useEffect } from 'react';

export default function scrollBar() {

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Altere este valor conforme necessário
        document.body.style.overflow = "hidden";
      } else {
        
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

}
"user client"

import { useEffect, ReactNode } from 'react';
import "./scrollbar.css"

export default function ScrollbarCustom({ children, hideAfter = 0 }: { children?: ReactNode, hideAfter?: number }) {

  useEffect(() => {
    if (hideAfter > 0) {
      document.body.style.overflow = 'hidden'

      const handleScroll = () => {

        document.body.style.overflow = 'auto'

        setTimeout(() => {
          document.body.style.overflow = 'hidden'
        }, hideAfter);

      };

      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return <div>{children}</div>

}
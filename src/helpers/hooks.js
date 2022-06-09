import { useRef, useEffect, useState } from 'react';

export const useElementOnScreenOnce = options => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // animation
  useEffect(() => {
    // functionality
    const callbackFunction = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setIsVisible(true);

      observer.unobserve(entry.target);
    };

    //observer;
    const elementObserver = new IntersectionObserver(callbackFunction, {
      root: null,
      threshold: 1,
    });

    elementObserver.observe(containerRef.current);
  }, []);

  return [containerRef, isVisible];
};

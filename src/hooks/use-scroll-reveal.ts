
"use client";

import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    const container = containerRef.current;
    if (container) {
      const reveals = container.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    }

    return () => {
      if (container) {
        const reveals = container.querySelectorAll('.reveal');
        reveals.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return containerRef;
}

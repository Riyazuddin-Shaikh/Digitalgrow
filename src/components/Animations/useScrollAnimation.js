import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(ref, options = {}) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const selector = options.selector || '.gsap-item';
    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    // Initial hidden state setup
    gsap.set(targets, {
      opacity: 0,
      y: options.y || 90,
      scale: options.scale || 0.96,
    });

    // Agency-grade ScrollTrigger.batch implementation
    const batches = ScrollTrigger.batch(targets, {
      start: options.start || 'top 85%',
      interval: 0.1,
      batchMax: options.batchMax || 3,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration || 1.2,
          stagger: options.stagger || 0.15,
          overwrite: true,
          ease: 'power4.out',
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: options.y || 90,
          scale: options.scale || 0.96,
          duration: 0.6,
          overwrite: true,
          ease: 'power2.in',
        });
      },
    });

    return () => {
      batches.forEach((st) => st.kill());
    };
  }, [ref, options]);
}
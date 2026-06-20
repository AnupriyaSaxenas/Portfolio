import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  // Immediately reveal elements already in the viewport on mount — runs
  // before paint so there's no flash of invisible content.
  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const node = ref.current;
    if (!node) return;
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setInView(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

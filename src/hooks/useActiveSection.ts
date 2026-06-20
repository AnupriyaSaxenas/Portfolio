import { useEffect, useRef, useState } from 'react';

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '');
  const idsRef = useRef(ids);

  useEffect(() => {
    const sections = idsRef.current;
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Trigger when section top crosses 80px below viewport top (nav height)
        { rootMargin: '-80px 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return active;
}

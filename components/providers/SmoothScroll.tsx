"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2, // easeInOutCubic
      smoothWheel: true,
    });
    
    // @ts-ignore - ref assignment (using ignore just in case any strict limits hit, or cast)
    lenisRef.current = lenis as any;

    return () => {
      lenis.destroy();
      // @ts-ignore
      lenisRef.current = null;
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time);
  });

  return <>{children}</>;
}

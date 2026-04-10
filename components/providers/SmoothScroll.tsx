"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // Significantly slower and smoother
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease out for dramatic glide
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
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

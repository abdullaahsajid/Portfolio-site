"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const bio = "A passionate Computer Science student at PAF-IAST Haripur with expertise in graphic design, branding, and creative digital communication. My goal is to grow as a creative tech professional blending CS knowledge with powerful visual design expertise.";
  const words = bio.split(" ");

  const tags = [
    "8-10+ Professional Designs",
    "3 Leadership Roles",
    "Canva Expert",
    "Creative Direction"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">About Me</h2>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Area */}
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-medium leading-relaxed flex flex-wrap gap-x-2 gap-y-1 mb-8">
              {words.map((word, i) => (
                <div key={i} className="overflow-hidden inline-block">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.02,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="inline-block relative"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h3>

            <div className="flex flex-wrap gap-4 mt-8">
              {tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.4 + i * 0.1,
                  }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm md:text-base text-white/90"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image/Visual Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:mx-auto w-full md:w-4/5 aspect-square md:aspect-[4/5] group"
          >
            {/* Stylish Offset Border Frame behind the image */}
            <div className="absolute inset-0 border border-primary/50 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 ease-out" />

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-white/5 border border-white/10 z-10 shadow-2xl">
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none mix-blend-screen" />

              <img
                src="/profile.jpeg"
                alt="Abdullah Sajid"
                className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

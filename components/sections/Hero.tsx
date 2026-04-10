"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const name = "Abdullah Sajid";
  const nameLetters = name.split("");

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/30 blur-[120px] mix-blend-screen animate-pulse duration-[10s]" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/30 blur-[120px] mix-blend-screen animate-pulse duration-[15s]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-xs md:text-sm font-medium tracking-wide text-white/80">
            Available for freelance work
          </span>
        </motion.div>

        <h1 className="text-[clamp(3rem,8vw,8rem)] font-heading font-bold leading-[0.9] tracking-tighter mb-6 flex flex-wrap gap-x-[2.5vw]">
          {name.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="flex whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + (wordIndex * 8 + charIndex) * 0.04,
                    ease: [0.2, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-[600px] text-lg md:text-2xl text-muted-foreground font-medium mb-12"
        >
          A Computer Science student blending technical knowledge with powerful visual design expertise.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a href="#work" className="group relative inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-300">
            <span className="relative z-10">View Work</span>
            <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-black/10 rounded-full group-hover:bg-black/20 transition-colors">
              <ArrowDownRight size={16} />
            </span>
          </a>
          
          <a href="#about" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors py-4 font-medium relative group">
            About Me
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/30 transition-all group-hover:w-full" />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating badges for roles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          🎨 Graphic Designer
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[30%] right-[20%] hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary"
        >
          🚀 Media Lead
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] left-[60%] hidden xl:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          💻 CS Student
        </motion.div>
      </div>
    </section>
  );
}

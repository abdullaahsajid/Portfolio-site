"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Graphic Design", category: "Core" },
  { name: "Visual Communication", category: "Core" },
  { name: "Branding", category: "Strategy" },
  { name: "Social Media Strategy", category: "Strategy" },
  { name: "Canva Design", category: "Tools" },
  { name: "Creative Direction", category: "Core" },
  { name: "Video Editing", category: "Tools" },
  { name: "UI Design Mockups", category: "Design" }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Stagger wrapper settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const childVariants: any = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1 bg-white/10 hidden md:block" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center w-full md:w-auto">Expertise & Skills</h2>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={childVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(181, 53, 255, 0.15)",
                borderColor: "rgba(181, 53, 255, 0.5)",
              }}
              className="px-6 py-4 md:px-8 md:py-6 rounded-[2rem] bg-black/40 border border-white/5 shadow-xl flex items-center justify-center backdrop-blur-md cursor-default transition-colors duration-300"
            >
               <span className="text-lg md:text-xl font-heading font-bold tracking-tight text-white/90">
                 {skill.name}
               </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

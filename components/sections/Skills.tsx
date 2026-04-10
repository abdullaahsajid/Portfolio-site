"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "Graphic Design", level: 95 },
  { name: "Visual Communication", level: 90 },
  { name: "Branding", level: 85 },
  { name: "Social Media Strategy", level: 85 },
  { name: "Canva Design", level: 95 },
  { name: "Creative Direction", level: 80 },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Skills</h2>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-3 text-sm md:text-base font-medium">
                <span>{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-primary rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[4px]" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

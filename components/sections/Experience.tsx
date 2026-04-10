"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

const experiences = [
  {
    role: "Media Lead",
    company: "GDGoC PAF-IAST",
    date: "Current",
    description: "Leading creative direction, visual branding, and digital communication strategies.",
  },
  {
    role: "Media Lead",
    company: "SCALE UP PAF-IAST",
    date: "Current",
    description: "Managing social media presence and visual storytelling for events and campaigns.",
  },
  {
    role: "Vice Lead",
    company: "YANFA UN NAAS Haripur Chapter",
    date: "Current",
    description: "Leading operational coordination, branding, and outreach while supporting impactful community-driven initiatives.",
  },
  {
    role: "Graphic Designer",
    company: "PAF-IAST Welfare Society",
    date: "Current",
    description: "Creating engaging visual content and graphic materials for welfare initiatives.",
  },
  {
    role: "Digital Media Intern",
    company: "Rizq Youth Republic",
    date: "Past",
    description: "Focused on social impact storytelling and digital media creation.",
  },
  {
    role: "Graphic Designer",
    company: "Munnaqash (Startup)",
    date: "Current",
    description: "Provided visual communication and creative design services.",
  }
];

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Experience</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated SVG Timeline Track */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full absolute top-0 bottom-0 bg-gradient-to-b from-primary via-purple-500 to-transparent origin-top shadow-[0_0_15px_rgba(181,53,255,0.8)]"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, i) => (
               <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const isEven = index % 2 === 0;
  const isCurrent = exp.date === "Current";

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start md:items-center justify-between pl-16 md:pl-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node Ring */}
      <div className="absolute left-[24px] md:left-1/2 w-6 h-6 rounded-full bg-background border-4 border-white/10 -translate-x-1/2 mt-1 md:mt-0 md:-translate-y-1/2 top-0 md:top-1/2 z-10 flex items-center justify-center">
         <motion.div 
           initial={{ scale: 0 }}
           animate={isInView ? { scale: 1 } : { scale: 0 }}
           transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
           className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-primary shadow-[0_0_10px_rgba(181,53,255,1)]' : 'bg-white/30'}`}
         />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] bg-black/40 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-md group hover:border-white/10 transition-colors shadow-2xl ${
          isEven ? "md:text-left" : "md:text-right"
        }`}
      >
        <div className={`inline-block font-mono text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full ${isCurrent ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-white/50 border border-white/10'}`}>
          {exp.date}
        </div>
        <h3 className="text-2xl font-heading font-black mb-1">{exp.role}</h3>
        <h4 className="text-lg text-primary/80 font-medium mb-4">{exp.company}</h4>
        <p className="text-white/60 leading-relaxed font-medium">{exp.description}</p>
      </motion.div>
    </div>
  );
}

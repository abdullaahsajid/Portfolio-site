"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-20 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Experience</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
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
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start md:items-center justify-between pl-20 md:pl-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(181,53,255,0.8)] -translate-x-1/2 mt-1.5 md:mt-0 md:-translate-y-1/2 top-0 md:top-1/2 z-10"
      />

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isEven ? 50 : -50, y: 30 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm group hover:border-primary/50 transition-colors ${
          isEven ? "md:text-left" : "md:text-right"
        }`}
      >
        <div className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase mb-2">{exp.date}</div>
        <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">{exp.role}</h3>
        <h4 className="text-base md:text-lg text-white/70 mb-4">{exp.company}</h4>
        <p className="text-sm md:text-base text-muted-foreground">{exp.description}</p>
      </motion.div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  { id: 1, image: "/design-1.png" },
  { id: 2, image: "/design-2.png" },
  { id: 3, image: "/design-3.png" },
  { id: 4, image: "/design-4.png" },
  { id: 5, image: "/design-5.png" },
  { id: 6, image: "/design-6.png" },
  { id: 7, image: "/design-7.png" },
  { id: 8, image: "/design-8.png" },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock body scroll when image is expanded
  if (typeof document !== 'undefined') {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <section id="work" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-12 md:mb-20"
        >
          <div className="h-px flex-1 bg-white/10 hidden md:block" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center w-full md:w-auto">Creative Gallery</h2>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        {/* Mobile: iOS Style Square Album Grid, Desktop: Variable Masonry Layout */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group cursor-zoom-in break-inside-avoid"
              onClick={() => setSelectedImage(project.image)}
            >
              <motion.div 
                layoutId={`layout-image-${project.id}`}
                className="relative rounded-xl md:rounded-[2rem] overflow-hidden bg-black/50 border border-white/5 md:mb-4 isolate flex items-center justify-center md:p-2 shadow-xl aspect-square md:aspect-auto"
              >
                
                <img 
                  src={project.image} 
                  alt="Gallery Design"
                  className="absolute md:relative inset-0 w-full h-full md:h-auto object-cover md:object-contain md:rounded-[1.5rem] transition-transform duration-700 group-hover:scale-[1.05] md:group-hover:scale-[1.02] z-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Hover States */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden md:block" />
                <div className="absolute inset-0 flex-col items-center justify-center z-20 pointer-events-none hidden md:flex">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-sm shadow-2xl">
                    <span className="font-heading font-bold text-white">Focus</span>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Screen Expanding Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              layoutId={`layout-image-${projects.find(p => p.image === selectedImage)?.id}`}
              className="relative w-full max-w-7xl h-full flex items-center justify-center"
            >
              <img 
                src={selectedImage}
                alt="Expanded Design"
                className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
              />
            </motion.div>
            
            {/* Close Button Hint */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              ✕
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

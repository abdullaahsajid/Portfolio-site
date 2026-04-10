"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => setIsMobile(window.innerWidth < 768), []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group flex justify-center items-center shadow-2xl ${className}`}
    >
      {children}
    </motion.a>
  );
};

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto rounded-[3rem] bg-black/40 border border-white/10 p-8 md:p-20 backdrop-blur-xl relative overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center"
        >
          {/* Animated Background glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none" 
          />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter">
              Let's create something <span className="text-primary italic">exceptional</span>.
            </h2>
            <p className="text-white/60 mb-16 text-lg font-medium max-w-lg mx-auto">
              Ready to elevate your visual identity? Skip the formalities and drop me a direct message to start crafting a digital experience that leaves an impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto">
              <MagneticButton 
                href="https://wa.me/923139065549" 
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold bg-[#25D366] text-white tracking-widest text-sm uppercase"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.2,1,0.3,1] pointer-events-none" />
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.388 0 0 5.388 0 12.031c0 2.12.551 4.152 1.597 5.96L.18 24l6.16-1.615c1.765.952 3.753 1.455 5.69 1.455 6.643 0 12.031-5.388 12.031-12.031C24 5.388 18.675 0 12.031 0zm0 21.84c-1.79 0-3.542-.482-5.077-1.393l-.364-.217-3.771.99.99-3.676-.238-.378C2.522 15.65 2 13.87 2 12.03 2 6.49 6.49 2 12.03 2c5.54 0 10.03 4.49 10.03 10.03 0 5.54-4.49 10.03-10.03 10.03zM17.53 14.5c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-1.78-.9-3.23-2.58-3.95-3.33-.2-.2-.02-.3.13-.45.13-.15.3-.3.45-.45.15-.15.2-.25.3-.43.1-.18.05-.33-.03-.48-.08-.15-.68-1.63-.93-2.23-.25-.6-.5-.53-.68-.53-.18 0-.38-.02-.58-.02-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.15 4.55 2.05.88 2.85.95 3.93.8.8-.13 2.55-1.05 2.9-2.08.35-1.03.35-1.9.25-2.08-.1-.18-.3-.28-.6-.43z"/></svg>
                  WhatsApp
                </span>
              </MagneticButton>

              <MagneticButton 
                href="mailto:abdullaahsajid@gmail.com" 
                className="w-full sm:w-auto px-10 py-5 rounded-full font-bold bg-white text-black tracking-widest text-sm uppercase"
              >
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.2,1,0.3,1] pointer-events-none" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  Email Me
                </span>
              </MagneticButton>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

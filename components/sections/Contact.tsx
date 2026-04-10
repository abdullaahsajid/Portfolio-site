"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import confetti from "canvas-confetti";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field Values for Floating logic
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      triggerConfetti();
    }, 2000);
  };

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#b535ff', '#ffffff', '#222222']
    };

    function fire(particleRatio: number, opts: any) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  // Magnetic Button Physics
  const buttonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull limits (60px radius)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.2); // dampen the pull
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-8 md:p-16 backdrop-blur-md relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter">
            Let's create something <span className="text-primary italic">exceptional</span>.
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            Ready to elevate your visual identity? Reach out to schedule a chat.
          </p>

          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative group flex items-center bg-transparent mt-4">
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    value={values.name}
                    onChange={(e) => setValues({...values, name: e.target.value})}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors z-10 relative" 
                  />
                  <motion.label 
                    htmlFor="name" 
                    initial={false}
                    animate={{ 
                      y: (focusedField === 'name' || values.name) ? -32 : 12, 
                      scale: (focusedField === 'name' || values.name) ? 0.75 : 1,
                      color: focusedField === 'name' ? "#b535ff" : "rgba(255,255,255,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute left-0 origin-left text-base font-medium z-0 pointer-events-none"
                  >
                    Your Name
                  </motion.label>
                </div>

                {/* Email Input */}
                <div className="relative group flex items-center bg-transparent mt-4">
                  <input 
                    required 
                    type="email" 
                    id="email" 
                    value={values.email}
                    onChange={(e) => setValues({...values, email: e.target.value})}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors z-10 relative" 
                  />
                  <motion.label 
                    htmlFor="email" 
                    initial={false}
                    animate={{ 
                      y: (focusedField === 'email' || values.email) ? -32 : 12, 
                      scale: (focusedField === 'email' || values.email) ? 0.75 : 1,
                      color: focusedField === 'email' ? "#b535ff" : "rgba(255,255,255,0.5)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute left-0 origin-left text-base font-medium z-0 pointer-events-none"
                  >
                    Email Address
                  </motion.label>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group flex bg-transparent mt-4">
                <textarea 
                  required 
                  id="message" 
                  rows={4} 
                  value={values.message}
                  onChange={(e) => setValues({...values, message: e.target.value})}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors z-10 relative resize-none" 
                />
                <motion.label 
                  htmlFor="message" 
                  initial={false}
                  animate={{ 
                    y: (focusedField === 'message' || values.message) ? -32 : 12, 
                    scale: (focusedField === 'message' || values.message) ? 0.75 : 1,
                    color: focusedField === 'message' ? "#b535ff" : "rgba(255,255,255,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute left-0 origin-left top-4 text-base font-medium z-0 pointer-events-none"
                >
                  Project Details
                </motion.label>
              </div>

              <div className="pt-4 flex justify-start">
                <motion.button
                  ref={buttonRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ x: springX, y: springY }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-10 py-4 rounded-full font-bold relative overflow-hidden group flex justify-center items-center shadow-xl ${isMobile ? 'w-full animate-pulse bg-white text-black' : 'bg-white text-black'}`}
                >
                  <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.2,1,0.3,1] pointer-events-none" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }} 
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </span>
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400 border border-green-500/30"
              >
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-4xl font-heading font-black mb-3">✓ Sent!</h3>
              <p className="text-white/60 text-lg font-medium">I've received your transmission.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

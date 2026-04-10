"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field Focus States
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-[3rem] bg-black/40 border border-white/10 p-8 md:p-20 backdrop-blur-xl relative overflow-hidden shadow-2xl"
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
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 tracking-tighter">
              Let's create something <span className="text-primary italic">exceptional</span>.
            </h2>
            <p className="text-white/60 mb-12 text-lg font-medium max-w-lg">
              Ready to elevate your visual identity? Drop me a line below and let's craft a digital experience that leaves an impact.
            </p>

            {!submitted ? (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-8"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      onFocus={() => setFocusedField('name')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors z-10 relative mt-4" 
                    />
                    <motion.label 
                      htmlFor="name" 
                      initial={false}
                      animate={{ 
                        y: focusedField === 'name' ? -38 : 20, 
                        scale: focusedField === 'name' ? 0.85 : 1,
                        color: focusedField === 'name' ? "rgba(181,53,255,1)" : "rgba(255,255,255,0.5)"
                      }}
                      className="absolute left-6 origin-left top-0 font-medium z-20 pointer-events-none"
                    >
                      Your Name
                    </motion.label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input 
                      required 
                      type="email" 
                      id="email" 
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors z-10 relative mt-4" 
                    />
                    <motion.label 
                      htmlFor="email" 
                      initial={false}
                      animate={{ 
                        y: focusedField === 'email' ? -38 : 20, 
                        scale: focusedField === 'email' ? 0.85 : 1,
                        color: focusedField === 'email' ? "rgba(181,53,255,1)" : "rgba(255,255,255,0.5)"
                      }}
                      className="absolute left-6 origin-left top-0 font-medium z-20 pointer-events-none"
                    >
                      Email Address
                    </motion.label>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <textarea 
                    required 
                    id="message" 
                    rows={4} 
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors z-10 relative mt-4 resize-none" 
                  />
                  <motion.label 
                    htmlFor="message" 
                    initial={false}
                    animate={{ 
                      y: focusedField === 'message' ? -38 : 20, 
                      scale: focusedField === 'message' ? 0.85 : 1,
                      color: focusedField === 'message' ? "rgba(181,53,255,1)" : "rgba(255,255,255,0.5)"
                    }}
                    className="absolute left-6 origin-left top-0 font-medium z-20 pointer-events-none"
                  >
                    Project Details
                  </motion.label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-12 py-5 rounded-full bg-white/90 text-black font-bold uppercase tracking-widest text-sm relative overflow-hidden group flex justify-center items-center shadow-xl"
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
              </motion.form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="flex flex-col items-start justify-center py-12"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary border border-primary/30"
                >
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-4xl font-heading font-black mb-3">Transmission Received.</h3>
                <p className="text-white/60 text-lg font-medium">I will review your message and get back to you shortly.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

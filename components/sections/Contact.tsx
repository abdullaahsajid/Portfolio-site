"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 md:p-16 backdrop-blur-md relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tighter">
            Let's create something <span className="text-primary italic">exceptional</span> together.
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Ready to elevate your visual identity? Reach out to schedule a chat.
          </p>

          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input required type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 top-4 text-muted-foreground text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs">Your Name</label>
                </div>
                <div className="relative group">
                  <input required type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 top-4 text-muted-foreground text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-3 peer-valid:text-xs">Email Address</label>
                </div>
              </div>
              <div className="relative group pt-4">
                <textarea required id="message" rows={4} className="peer w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-8 text-muted-foreground text-sm transition-all peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-1 peer-valid:text-xs">Project Details</label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-10 py-4 rounded-full bg-white text-black font-bold mt-8 relative overflow-hidden group flex justify-center items-center h-14"
              >
                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.2,1,0.3,1]" />
                <span className="relative z-10 transition-colors group-hover:text-white">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

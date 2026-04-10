export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16 md:py-24 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 font-bold mix-blend-screen pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left relative z-10">
        <div className="flex flex-col gap-4">
          <a href="#" className="text-5xl font-heading font-black tracking-tighter hover:scale-105 transition-transform duration-300 w-fit md:mx-0 mx-auto">
            Abdullah<span className="text-primary animate-pulse">.</span>
          </a>
          <p className="text-white/50 max-w-sm font-medium leading-relaxed">Designing digital experiences that effortlessly bridge creativity and computer science.</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6 mt-8 md:mt-0">
          <div className="text-sm font-bold text-white/90 flex gap-8">
            <a href="https://linkedin.com/in/abdullaahsajid" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:-translate-y-1 transform inline-block">LinkedIn</a>
            <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:-translate-y-1 transform inline-block">Behance</a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:-translate-y-1 transform inline-block">Instagram</a>
          </div>
          <p className="text-sm text-white/40 font-mono mt-4">
            © {new Date().getFullYear()} Abdullah Sajid. Powered by Next.js & Lenis.
          </p>
        </div>
      </div>
    </footer>
  );
}

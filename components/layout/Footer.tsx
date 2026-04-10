export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <a href="#" className="text-xl font-heading font-bold tracking-tighter">
          Abdullah<span className="text-primary">.</span>
        </a>
        <div className="text-sm text-muted-foreground flex gap-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Abdullah Sajid. Powered by Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}

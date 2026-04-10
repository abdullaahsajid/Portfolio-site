import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden selection:bg-primary/30 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

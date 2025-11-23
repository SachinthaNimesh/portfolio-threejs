import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Volunteering } from "./components/Volunteering";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero scrollY={scrollY} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Volunteering />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

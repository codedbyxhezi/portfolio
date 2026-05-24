import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Djezi Zenki | Fullstack Webdeveloper",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Trust from "@/components/Trust/Trust";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zemax Digital | Digital Web Studio",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Process />
        <Trust />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
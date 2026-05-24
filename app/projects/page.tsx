import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./ProjectsPage.module.css";

export const metadata = {
  title: "Projekte",
  description:
    "Ausgewählte Webprojekte von Djezi Zenki mit Next.js, React, TypeScript und modernem Design.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Projekte</span>
            <h1>Ausgewählte Arbeiten und Webprojekte.</h1>
            <p>
              Eine Übersicht moderner Websites und Web-Apps mit Fokus auf
              Design, Struktur und Performance.
            </p>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className={`container ${styles.grid}`}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Ausgewählte Projekte</h2>
          <p className="sectionText">
            Moderne Webprojekte mit Fokus auf Design, Performance und sauberer Struktur.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
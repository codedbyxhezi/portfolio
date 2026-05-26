"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function scrollCarousel(direction: "left" | "right") {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.88;

    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <section id="projects">
      <div className={`container ${styles.header}`}>
        <motion.span
          className="highlight"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projekte
        </motion.span>

        <motion.h2
          className="sectionTitle"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ausgewählte digitale Projekte.
        </motion.h2>

        <motion.p
          className="sectionText"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Eine Auswahl moderner Webprojekte mit Fokus auf Design, Performance
          und sauberer Umsetzung.
        </motion.p>
      </div>

      <div className={`container ${styles.carouselWrap}`}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={() => scrollCarousel("left")}
          aria-label="Vorherige Projekte"
        >
          ←
        </button>

        <div ref={carouselRef} className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              className={styles.slideItem}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={() => scrollCarousel("right")}
          aria-label="Nächste Projekte"
        >
          →
        </button>
      </div>
    </section>
  );
}
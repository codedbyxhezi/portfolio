"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        rotate: -0.4,
      }}
    >
      <div className={styles.preview}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.previewImage}
        />
        <div className={styles.overlay} />
        <div className={styles.category}>{project.category}</div>
      </div>

      <div className={styles.body}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.tags}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className={styles.links}>
          <Link href={`/projects/${project.slug}`} className={styles.demoButton}>
            Details ansehen
          </Link>

          <a href={project.githubUrl} className={styles.githubButton}>
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
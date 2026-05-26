"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "CSS Modules",
  "Framer Motion",
  "Git",
];

const marqueeSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className={styles.previewSection}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Skills</span>

          <h2>Unser Stack für moderne Websites.</h2>

          <p>
            Eine kompakte Auswahl der Technologien, mit denen Zemax Digital
            schnelle, responsive und professionelle Webprojekte umsetzt.
          </p>

          <Link href="/skills" className={styles.button}>
            Alle Skills ansehen
          </Link>
        </motion.div>

        <div className={styles.skillCarousel}>
          <div className={styles.skillCloud}>
            {marqueeSkills.map((skill, index) => (
              <motion.span
                key={`${skill}-${index}`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % skills.length) * 0.08 }}
                whileHover={{ y: -6, scale: 1.06 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
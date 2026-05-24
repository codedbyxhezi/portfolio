"use client";

import { motion } from "framer-motion";
import styles from "./SkillsDetails.module.css";

const skillGroups = [
  {
    title: "Frontend",
    description: "Moderne Interfaces, Komponenten und responsive Layouts.",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 82 },
    ],
  },
  {
    title: "Frameworks",
    description: "Saubere Web-Apps mit Fokus auf Struktur und Performance.",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "CSS Modules", level: 88 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    title: "Workflow",
    description: "Tools für saubere Umsetzung und produktives Arbeiten.",
    skills: [
      { name: "Git", level: 82 },
      { name: "Responsive Design", level: 90 },
      { name: "Clean Code", level: 86 },
      { name: "UI Design", level: 78 },
    ],
  },
];

const techBadges = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "CSS Modules",
  "Framer Motion",
];

export default function SkillsDetails() {
  return (
    <section className={styles.skillsSection}>
      <div className={`container ${styles.header}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tools und Technologien für moderne Web-Erlebnisse.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Von sauberem Frontend über moderne Frameworks bis zu responsiven
          Interfaces — mein Stack ist auf schnelle, wartbare Websites ausgelegt.
        </motion.p>
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: -42 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.orbit}>
            <div className={styles.centerOrb}>DZ</div>

            {techBadges.map((tech, index) => (
              <motion.span
                key={tech}
                className={`${styles.orbitItem} ${styles[`item${index + 1}`]}`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className={styles.cards}>
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.cardTop}>
                <span>0{groupIndex + 1}</span>
                <h3>{group.title}</h3>
              </div>

              <p>{group.description}</p>

              <div className={styles.skillList}>
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className={styles.skillRow}>
                    <div className={styles.skillInfo}>
                      <strong>{skill.name}</strong>
                      <span>{skill.level}%</span>
                    </div>

                    <div className={styles.progressTrack}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          delay: 0.2 + index * 0.08,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
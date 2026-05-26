"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const stats = [
  { value: "3+", label: "Projektarten" },
  { value: "100%", label: "Responsive" },
  { value: "Clean", label: "Code Style" },
];

const highlights = [
  {
    title: "Modernes Frontend",
    text: "Wir entwickeln klare, performante Interfaces mit React, Next.js und TypeScript.",
  },
  {
    title: "Saubere Struktur",
    text: "Komponenten, Daten und Styles werden logisch getrennt und leicht wartbar aufgebaut.",
  },
  {
    title: "Responsive Design",
    text: "Unsere Layouts funktionieren sauber auf Desktop, Tablet und Smartphone.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.about}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.badge}>Über uns</span>

          <h2>
            Wir entwickeln Websites, die hochwertig aussehen und technisch
            sauber aufgebaut sind.
          </h2>

          <p>
            Zemax Digital verbindet modernes Design mit sauberem Code. Unser
            Fokus liegt auf schnellen, responsiven und professionellen
            Weblösungen, die Nutzer sofort verstehen.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className={styles.mainCard}>
            <div className={styles.cardHeader}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.profile}>
              <div className={styles.avatar}>XZ</div>
              <div>
                <strong>Zemax Digital</strong>
                <p>Digital Web Studio</p>
              </div>
            </div>

            <div className={styles.stackList}>
              <span>Next.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS Modules</span>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <strong>Fokus</strong>
            <span>Design × Code × Performance</span>
          </div>
        </motion.div>
      </div>

      <div className={`container ${styles.highlights}`}>
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.highlightCard}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <span className={styles.number}>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import styles from "./Trust.module.css";

const trustItems = [
  {
    value: "Responsive",
    label: "Optimiert für Desktop, Tablet und Mobile",
  },
  {
    value: "SEO Ready",
    label: "Saubere Struktur für bessere Auffindbarkeit",
  },
  {
    value: "Performance",
    label: "Schnelle Ladezeiten und moderne Umsetzung",
  },
  {
    value: "Clean Code",
    label: "Wartbare Komponenten und klare Architektur",
  },
];

const values = [
  "Klare Kommunikation",
  "Modernes Design",
  "Saubere Umsetzung",
  "Langfristig erweiterbar",
];

export default function Trust() {
  return (
    <section className={styles.trustSection}>
      <div className={`container ${styles.trustBox}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.badge}>Qualität</span>

          <h2>Websites, die nicht nur gut aussehen, sondern sauber funktionieren.</h2>

          <p>
            Zemax Digital legt Wert auf klare Strukturen, moderne Technologien
            und eine Umsetzung, die auch später noch verständlich und erweiterbar
            bleibt.
          </p>

          <div className={styles.values}>
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </motion.div>

        <div className={styles.cards}>
          {trustItems.map((item, index) => (
            <motion.article
              key={item.value}
              className={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
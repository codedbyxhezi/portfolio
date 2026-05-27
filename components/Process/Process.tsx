"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
  {
    number: "I",
    title: "Analyse",
    text: "Wir klären Ziel, Zielgruppe, Inhalte und Anforderungen, damit die Website von Anfang an klar ausgerichtet ist.",
  },
  {
    number: "II",
    title: "Konzept",
    text: "Aus den Anforderungen entsteht eine saubere Seitenstruktur mit klarem Fokus auf Nutzerführung und Wirkung.",
  },
  {
    number: "III",
    title: "Design & Entwicklung",
    text: "Wir setzen das Design modern, responsive und performant mit sauberer Komponentenstruktur um.",
  },
  {
    number: "IV",
    title: "Launch",
    text: "Nach finalem Feinschliff wird die Website vorbereitet, getestet und bereit für den Onlinegang gemacht.",
  },
];

export default function Process() {
  return (
    <section className={styles.processSection}>
      <div className={`container ${styles.header}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ablauf
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Von der Idee bis zur fertigen Website — klar, strukturiert und modern.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ein guter Ablauf sorgt dafür, dass aus einer Idee eine Website wird,
          die gut aussieht, verständlich ist und technisch sauber funktioniert.
        </motion.p>
      </div>

      <div className={`container ${styles.timeline}`}>
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            className={styles.step}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className={styles.numberWrap}>
              <span>{step.number}</span>
            </div>

            <div className={styles.card}>
              <small>Step {index + 1}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./BenefitsPage.module.css";

const benefits = [
  {
    number: "01",
    title: "Modernes Design",
    text: "Klare Layouts, starke Typografie und ein hochwertiger Look, der Vertrauen schafft.",
  },
  {
    number: "02",
    title: "Saubere Umsetzung",
    text: "Strukturierte Komponenten, verständlicher Code und eine Website, die leicht erweiterbar bleibt.",
  },
  {
    number: "03",
    title: "Responsive auf jedem Gerät",
    text: "Websites funktionieren sauber auf Desktop, Tablet und Smartphone.",
  },
  {
    number: "04",
    title: "Performance im Fokus",
    text: "Schnelle Ladezeiten, optimierte Struktur und ein gutes Nutzererlebnis von Anfang an.",
  },
];

export default function Benefits() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function scrollBenefits(direction: "left" | "right") {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.88;

    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.benefitsSection}>
      <div className={`container ${styles.header}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Warum Zemax Digital?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Wir liefern nicht nur Code, sondern eine saubere digitale Lösung.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Wir achten auf Design, Struktur, Performance und Nutzerfreundlichkeit,
          damit Websites professionell wirken und langfristig funktionieren.
        </motion.p>
      </div>

      <div className={`container ${styles.carouselWrap}`}>
        <button
          type="button"
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onClick={() => scrollBenefits("left")}
          aria-label="Vorherige Vorteile"
        >
          ←
        </button>

        <div ref={carouselRef} className={styles.grid}>
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              className={styles.card}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -9 }}
            >
              <span className={styles.number}>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </motion.article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onClick={() => scrollBenefits("right")}
          aria-label="Nächste Vorteile"
        >
          →
        </button>
      </div>
    </section>
  );
}
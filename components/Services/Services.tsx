"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    icon: "✦",
    title: "Webdesign",
    text: "Moderne Layouts, klare Nutzerführung und ein hochwertiger Look für professionelle Websites.",
    tags: ["UI Design", "Responsive", "Brand Look"],
  },
  {
    number: "02",
    icon: "◈",
    title: "Business Websites",
    text: "Websites für Unternehmen, Selbstständige und Marken, die seriös auftreten und Vertrauen schaffen wollen.",
    tags: ["Company Site", "SEO Ready", "Performance"],
  },
  {
    number: "03",
    icon: "↗",
    title: "Landing Pages",
    text: "Fokussierte Seiten für Produkte, Angebote oder Kampagnen mit klaren Call-to-Actions.",
    tags: ["Conversion", "CTA", "Marketing"],
  },
  {
    number: "04",
    icon: "</>",
    title: "Web Apps",
    text: "Interaktive Frontend-Lösungen mit sauberer Komponentenstruktur und moderner Technologie.",
    tags: ["Next.js", "React", "TypeScript"],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? services.length - 1 : current - 1
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === services.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className={styles.servicesSection}>
      <div className={`container ${styles.header}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Leistungen
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Digitale Lösungen für moderne Marken, Unternehmen und Projekte.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Zemax Digital entwickelt Websites und Weblösungen, die nicht nur gut
          aussehen, sondern klar strukturiert, schnell und responsive sind.
        </motion.p>
      </div>

      <div className={`container ${styles.carouselWrap}`}>
        <div
          className={styles.grid}
          style={
            {
              "--mobile-slide": activeIndex,
            } as React.CSSProperties
          }
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
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
              <div className={styles.cardTop}>
                <span>{service.number}</span>

                <div className={styles.iconGlow}>
                  <span>{service.icon}</span>
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.carouselControls}>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Vorherige Leistung anzeigen"
          >
            ←
          </button>

          <div className={styles.dots}>
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.activeDot : ""}
                aria-label={`Leistung ${index + 1} anzeigen`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Nächste Leistung anzeigen"
          >
            →
          </button>
        </div>
      </div>

      <motion.div
        className={`container ${styles.priceTeaser}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <span>Startpreise verfügbar</span>
          <p>
            Auf der Leistungsseite findest du Richtwerte für Starter Websites,
            Business Websites und Landing Pages.
          </p>
        </div>

        <Link href="/services" className={styles.teaserButton}>
          Startpreise ansehen
        </Link>
      </motion.div>
    </section>
  );
}
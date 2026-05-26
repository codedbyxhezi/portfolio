"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Webdesign",
    text: "Moderne Layouts, klare Nutzerführung und ein hochwertiger Look für professionelle Websites.",
    tags: ["UI Design", "Responsive", "Brand Look"],
  },
  {
    number: "02",
    title: "Business Websites",
    text: "Websites für Unternehmen, Selbstständige und Marken, die seriös auftreten und Vertrauen schaffen wollen.",
    tags: ["Company Site", "SEO Ready", "Performance"],
  },
  {
    number: "03",
    title: "Landing Pages",
    text: "Fokussierte Seiten für Produkte, Angebote oder Kampagnen mit klaren Call-to-Actions.",
    tags: ["Conversion", "CTA", "Marketing"],
  },
  {
    number: "04",
    title: "Web Apps",
    text: "Interaktive Frontend-Lösungen mit sauberer Komponentenstruktur und moderner Technologie.",
    tags: ["Next.js", "React", "TypeScript"],
  },
];

export default function Services() {
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

      <div className={`container ${styles.grid}`}>
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
              <div className={styles.iconGlow} />
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
    </section>
  );
}
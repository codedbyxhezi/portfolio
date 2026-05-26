"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Welche Art von Websites entwickelt Zemax Digital?",
    answer:
      "Wir entwickeln moderne Portfolio-Websites, Business-Websites, Landing Pages und kleinere Web-Apps mit Fokus auf Design, Performance und responsives Verhalten.",
  },
  {
    question: "Sind die Websites für Handy und Tablet optimiert?",
    answer:
      "Ja. Jede Website wird responsive aufgebaut, damit sie auf Desktop, Tablet und Smartphone sauber funktioniert und professionell aussieht.",
  },
  {
    question: "Mit welchen Technologien arbeitet Zemax Digital?",
    answer:
      "Wir arbeiten hauptsächlich mit Next.js, React, TypeScript, CSS Modules und Framer Motion. Dadurch entstehen moderne, schnelle und gut strukturierte Websites.",
  },
  {
    question: "Kann eine Website später erweitert werden?",
    answer:
      "Ja. Wir achten auf eine saubere Komponentenstruktur, damit Inhalte, Seiten und Funktionen später leichter erweitert werden können.",
  },
  {
    question: "Ist das Kontaktformular schon vollständig angebunden?",
    answer:
      "Aktuell ist das Formular als Demo vorbereitet. Später kann es mit Diensten wie Formspree, Web3Forms oder einer eigenen Backend-Lösung verbunden werden.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>FAQ</span>

          <h2>Häufige Fragen zu Websites, Ablauf und Umsetzung.</h2>

          <p>
            Hier beantworten wir die wichtigsten Fragen rund um moderne
            Webprojekte mit Zemax Digital.
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                className={`${styles.faqItem} ${
                  isOpen ? styles.activeItem : ""
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <strong>{isOpen ? "−" : "+"}</strong>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answerWrap}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
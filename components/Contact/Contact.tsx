"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSent(true);
  }

  return (
    <section id="contact">
      <motion.div
        className={`container ${styles.contact}`}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.content}>
          <span className={styles.badge}>Kontakt</span>

          <h2 className="sectionTitle">
            Lass uns gemeinsam dein nächstes Projekt starten.
          </h2>

          <p className="sectionText">
            Schreib uns kurz, worum es geht. Zemax Digital meldet sich
            schnellstmöglich bei dir zurück.
          </p>

          <div className={styles.info}>
            <a href="mailto:djezi.zenki@outlook.de">djezi.zenki@outlook.de</a>
            <span>Verfügbar für Webdesign & Webentwicklung</span>
          </div>
        </div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Dein Name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-Mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="deine@email.de"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              placeholder="Erzähl uns kurz von deinem Projekt..."
              rows={5}
              required
            />
          </div>

          <motion.button
            type="submit"
            className={styles.button}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Nachricht senden
          </motion.button>

          {isSent && (
            <motion.p
              className={styles.success}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Danke! Deine Nachricht wurde vorbereitet.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
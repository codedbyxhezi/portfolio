"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}>
        <motion.span
          className={styles.glowOne}
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className={styles.glowTwo}
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Zemax Digital · Digital Web Studio
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Moderne Websites.
            <span> Digitale Lösungen.</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            Wir entwickeln schnelle, responsive und professionelle Weblösungen
            mit Fokus auf Design, Performance und sauberer Umsetzung.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.a
              href="/projects"
              className={styles.primaryButton}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Projekte ansehen
            </motion.a>

            <motion.a
              href="/contact"
              className={styles.secondaryButton}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Kontakt aufnehmen
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <motion.div
            className={styles.showcaseCard}
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className={styles.browserTop}>
              <div className={styles.browserDots}>
                <span />
                <span />
                <span />
              </div>

              <span className={styles.browserUrl}>zemax.digital</span>
            </div>

            <div className={styles.showcaseHeader}>
              <span className={styles.logoMark}>
                <Image
                  src="/images/zemax-logo.png"
                  alt="Zemax Digital Logo"
                  width={58}
                  height={58}
                  className={styles.logoMarkImage}
                />
              </span>             

              <div>
                <span className={styles.cardLabel}>Digital Web Studio</span>
                <h3>Launch-ready Websites</h3>
              </div>
            </div>

            <div className={styles.previewBlock}>
              <div className={styles.previewLineLarge} />
              <div className={styles.previewLineSmall} />

              <div className={styles.previewGrid}>
                <div>
                  <strong>UI</strong>
                  <span>Modernes Design</span>
                </div>

                <div>
                  <strong>SEO</strong>
                  <span>Saubere Struktur</span>
                </div>

                <div>
                  <strong>UX</strong>
                  <span>Klare Nutzerführung</span>
                </div>
              </div>
            </div>

            <div className={styles.metricRow}>
              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div>
                <strong>SEO</strong>
                <span>Ready</span>
              </div>

              <div>
                <strong>Fast</strong>
                <span>Performance</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
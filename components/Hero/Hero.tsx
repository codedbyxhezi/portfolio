"use client";

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
            Fullstack Webdeveloper
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Moderne Websites.
            <span> Sauberer Code.</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
          >
            Ich entwickle schnelle, responsive und professionelle Weblösungen
            mit Next.js, React und TypeScript.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className={styles.primaryButton}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Projekte ansehen
            </motion.a>

            <motion.a
              href="#contact"
              className={styles.secondaryButton}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Kontakt
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
            className={styles.profileCard}
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
            <div className={styles.cardTop}>
              <div>
                <span className={styles.cardLabel}>Currently building</span>
                <h3>Premium Web Experiences</h3>
              </div>
              <div className={styles.statusDot} />
            </div>

            <div className={styles.lines}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.techGrid}>
              <motion.div whileHover={{ scale: 1.08 }}>Next.js</motion.div>
              <motion.div whileHover={{ scale: 1.08 }}>React</motion.div>
              <motion.div whileHover={{ scale: 1.08 }}>TypeScript</motion.div>
              <motion.div whileHover={{ scale: 1.08 }}>CSS Modules</motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.floatingTag}
            animate={{
              y: [0, 18, 0],
              x: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Clean UI
          </motion.div>

          <motion.div
            className={styles.floatingTagTwo}
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Fast Performance
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
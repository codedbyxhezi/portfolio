"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/about" },
  { label: "Leistungen", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Projekte", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    text: "Code ansehen",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    text: "Vernetzen",
  },
  {
    label: "E-Mail",
    href: "mailto:djezi.zenki@outlook.de",
    text: "Nachricht senden",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />

      <motion.div
        className={`container ${styles.ctaBox}`}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
      >
        <span className={styles.badge}>Bereit für dein Projekt?</span>

        <h2>
          Lass uns gemeinsam etwas bauen, das modern aussieht und zuverlässig
          funktioniert.
        </h2>

        <div className={styles.ctaActions}>
          <Link href="/contact" className={styles.primaryButton}>
            Projekt anfragen
          </Link>

          <a
            href="mailto:djezi.zenki@outlook.de"
            className={styles.secondaryButton}
          >
            E-Mail schreiben
          </a>
        </div>
      </motion.div>

      <motion.div
        className={`container ${styles.mainFooter}`}
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        <div className={styles.brand}>
          <Link href="/" className={styles.logoWrap}>
            <Image
              src="/images/zemax-logo.png"
              alt="Zemax Digital Logo"
              width={74}
              height={74}
              className={styles.logo}
            />

            <div>
              <h3>Zemax Digital</h3>
              <p>Digital Web Studio</p>
            </div>
          </Link>

          <p className={styles.brandText}>
            Wir entwickeln moderne, schnelle und responsive Websites mit Fokus
            auf Design, Performance und sauberer Umsetzung.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Navigation</h4>

          <div className={styles.navList}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h4>Connect</h4>

          <div className={styles.socialGrid}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className={styles.socialCard}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <strong>{link.label}</strong>
                <span>{link.text}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className={`container ${styles.bottomBar}`}>
        <span>
          © {new Date().getFullYear()} Zemax Digital. Alle Rechte vorbehalten.
        </span>

        <div className={styles.legalLinks}>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
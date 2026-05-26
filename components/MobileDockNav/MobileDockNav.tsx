"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./MobileDockNav.module.css";

const navItems = [
  {
    label: "Über mich",
    description: "Wer ich bin",
    href: "/about",
    icon: "👤",
  },
  {
    label: "Skills",
    description: "Mein Tech-Stack",
    href: "/skills",
    icon: "</>",
  },
  {
    label: "Projekte",
    description: "Ausgewählte Arbeiten",
    href: "/projects",
    icon: "▣",
  },
  {
    label: "Kontakt",
    description: "Lass uns sprechen",
    href: "/contact",
    icon: "✉",
  },
];

export default function MobileDockNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsOpen(false);
  }

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <div className={styles.mobileDock}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menuPanel}
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className={styles.handle} />

            <div className={styles.menuHeader}>
              <span>Navigation</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Menü schließen"
              >
                ×
              </button>
            </div>

            <div className={styles.menuList}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`${styles.menuItem} ${
                      isActive(item.href) ? styles.activeMenuItem : ""
                    }`}
                  >
                    <span className={styles.menuIcon}>{item.icon}</span>

                    <span className={styles.menuText}>
                      <strong>{item.label}</strong>
                      <small>{item.description}</small>
                    </span>

                    <span className={styles.arrow}>›</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        className={styles.dock}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Link
          href="/about"
          onClick={closeMenu}
          className={`${styles.dockItem} ${
            pathname === "/about" ? styles.activeDockItem : ""
          }`}
        >
          <span>👤</span>
          <small>About</small>
        </Link>

        <Link
          href="/skills"
          onClick={closeMenu}
          className={`${styles.dockItem} ${
            pathname === "/skills" ? styles.activeDockItem : ""
          }`}
        >
          <span>&lt;/&gt;</span>
          <small>Skills</small>
        </Link>

        <motion.button
          type="button"
          className={`${styles.centerButton} ${isOpen ? styles.centerButtonOpen : ""}`}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          whileTap={{ scale: 0.92 }}
        >
          <Image
            src="/images/dz-logo.png"
            alt="Djezi Zenki Logo"
            width={64}
            height={64}
            className={styles.centerLogo}
          />
        </motion.button>

        <Link
          href="/projects"
          onClick={closeMenu}
          className={`${styles.dockItem} ${
            pathname === "/projects" || pathname.startsWith("/projects/")
              ? styles.activeDockItem
              : ""
          }`}
        >
          <span>▣</span>
          <small>Projects</small>
        </Link>

        <Link
          href="/contact"
          onClick={closeMenu}
          className={`${styles.dockItem} ${
            pathname === "/contact" ? styles.activeDockItem : ""
          }`}
        >
          <span>✉</span>
          <small>Contact</small>
        </Link>
      </motion.nav>
    </div>
  );
}
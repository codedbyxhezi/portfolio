"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileDockNav from "@/components/MobileDockNav/MobileDockNav";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Über uns", href: "/about" },
  { label: "Leistungen", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Projekte", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logoLink} aria-label="Zur Startseite">
            <motion.div
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ type: "spring", stiffness: 260, damping: 15 }}
            >
              <Image
                src="/images/zemax-logo.png"
                alt="Zemax Digital Logo"
                width={72}
                height={72}
                priority
                className={styles.logo}
              />
            </motion.div>

            <div className={styles.brandText}>
              <span>Zemax Digital</span>
              <small>Digital Web Studio</small>
            </div>
          </Link>

          <div className={styles.navCenter}>
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href={item.href}
                  className={isActive(item.href) ? styles.activeLink : undefined}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className={styles.navActions}>
            <motion.a
              href="tel:+491781532789"
              className={styles.callButton}
              aria-label="Zemax Digital anrufen"
              whileHover={{ y: -3, scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.callIcon}
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </motion.a>

            <motion.div
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/contact"
                className={`${styles.ctaButton} ${
                  isActive("/contact") ? styles.activeCta : ""
                }`}
              >
                Kontakt
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <MobileDockNav />
    </>
  );
}
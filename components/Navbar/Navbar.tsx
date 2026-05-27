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
    return pathname === href;
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

          <motion.div
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link
              href="/contact"
              className={`${styles.ctaButton} ${
                pathname === "/contact" ? styles.activeCta : ""
              }`}
            >
              Kontakt
            </Link>
          </motion.div>
        </nav>
      </motion.header>

      <MobileDockNav />
    </>
  );
}
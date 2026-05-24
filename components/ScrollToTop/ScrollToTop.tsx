"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 500);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className={styles.button}
          onClick={scrollToTop}
          aria-label="Nach oben scrollen"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -4, scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
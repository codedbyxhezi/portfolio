"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./BlogPreview.module.css";

const posts = [
  {
    category: "Webdesign",
    date: "2025",
    title: "Warum eine moderne Website mehr ist als nur gutes Aussehen",
    text: "Eine professionelle Website verbindet Design, Struktur, Performance und klare Nutzerführung.",
    href: "/blog/moderne-website",
  },
  {
    category: "Business",
    date: "2025",
    title: "Was eine gute Business Website können sollte",
    text: "Von Vertrauen über Inhalte bis zu Kontaktmöglichkeiten — eine Website muss klar führen.",
    href: "/blog/business-website",
  },
  {
    category: "Performance",
    date: "2025",
    title: "Warum schnelle Ladezeiten wichtig für Nutzer und SEO sind",
    text: "Performance verbessert die Nutzererfahrung und kann helfen, Besucher länger auf der Seite zu halten.",
    href: "/blog/performance-seo",
  },
];

export default function BlogPreview() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  function scrollCarousel(direction: "left" | "right") {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstSlide = carousel.querySelector<HTMLElement>(
      `.${styles.slideItem}`
    );

    if (!firstSlide) return;

    const gap = 16;
    const slideWidth = firstSlide.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "right" ? slideWidth : -slideWidth,
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.blogSection}>
      <div className={`container ${styles.header}`}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Insights
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gedanken zu Webdesign, Entwicklung und digitalen Auftritten.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Im Blog teilt Zemax Digital Wissen rund um moderne Websites,
          Performance, Nutzerführung und digitale Lösungen.
        </motion.p>
      </div>

      <div className={`container ${styles.carouselWrap}`}>
        <div ref={carouselRef} className={styles.grid}>
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className={`${styles.card} ${styles.slideItem}`}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -9 }}
            >
              <div className={styles.meta}>
                <span>{post.category}</span>
                <small>{post.date}</small>
              </div>

              <h3>{post.title}</h3>

              <p>{post.text}</p>

              <Link href={post.href} className={styles.link}>
                Artikel lesen
                <span>→</span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className={styles.carouselControls}>
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Vorherigen Blogartikel anzeigen"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Nächsten Blogartikel anzeigen"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
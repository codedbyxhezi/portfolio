"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog";
import styles from "./BlogPreview.module.css";

export default function BlogPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? blogPosts.length - 1 : current - 1
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === blogPosts.length - 1 ? 0 : current + 1
    );
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
        <div
          className={styles.grid}
          style={
            {
              "--mobile-slide": activeIndex,
            } as React.CSSProperties
          }
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className={styles.card}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{ y: -9 }}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 620px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <small>{post.date}</small>
                </div>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <Link href={`/blog/${post.slug}`} className={styles.link}>
                  Artikel lesen
                  <span>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className={styles.carouselControls}>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Vorherigen Blogartikel anzeigen"
          >
            ←
          </button>

          <div className={styles.dots}>
            {blogPosts.map((post, index) => (
              <button
                key={post.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? styles.activeDot : ""}
                aria-label={`Blogartikel ${index + 1} anzeigen`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Nächsten Blogartikel anzeigen"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
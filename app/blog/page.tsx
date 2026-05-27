import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { blogPosts } from "@/data/blog";
import styles from "./BlogPage.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Insights von Zemax Digital zu Webdesign, Webentwicklung, Performance und digitalen Websites.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Blog</span>

            <h1>Insights zu Webdesign, Entwicklung und digitalen Auftritten.</h1>

            <p>
              Gedanken, Tipps und Grundlagen rund um moderne Websites,
              Performance, Nutzerführung und digitale Lösungen.
            </p>
          </div>
        </section>

        <section className={styles.blogSection}>
          <div className={`container ${styles.grid}`}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={styles.meta}>
                  <span>{post.category}</span>
                  <small>{post.readTime}</small>
                </div>

                <h2>{post.title}</h2>

                <p>{post.description}</p>

                <Link href={`/blog/${post.slug}`} className={styles.link}>
                  Artikel lesen
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
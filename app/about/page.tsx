import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./AboutPage.module.css";

export const metadata = {
  title: "Über mich",
  description:
    "Mehr über Djezi Zenki, Fullstack Webdeveloper mit Fokus auf Next.js, React und TypeScript.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Über mich</span>
            <h1>
              Ich entwickle digitale Produkte mit Fokus auf Design, Performance
              und sauberem Code.
            </h1>
            <p>
              Mein Ziel ist es, Websites zu bauen, die nicht nur modern aussehen,
              sondern auch schnell, responsive und einfach nutzbar sind.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.grid}`}>
            <div className={styles.card}>
              <h2>Wer ich bin</h2>
              <p>
                Ich bin Djezi Zenki, Fullstack Webdeveloper. Ich arbeite gerne
                mit modernen Technologien wie Next.js, React, TypeScript und CSS
                Modules.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Wie ich arbeite</h2>
              <p>
                Ich achte auf klare Strukturen, wiederverwendbare Komponenten,
                saubere UI, Performance und gute Nutzererfahrung auf allen
                Geräten.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Mein Fokus</h2>
              <p>
                Portfolio-Websites, Landing Pages, Business-Websites,
                Web-Apps und moderne Frontend-Lösungen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
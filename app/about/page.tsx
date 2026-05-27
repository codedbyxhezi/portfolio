import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./AboutPage.module.css";

export const metadata = {
  title: "Über uns",
  description:
    "Mehr über Zemax Digital, ein Digital Web Studio für moderne Websites, Webdesign und Webentwicklung.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Über uns</span>

            <h1>
              Wir entwickeln digitale Lösungen, die modern aussehen und sauber
              funktionieren.
            </h1>

            <p>
              Zemax Digital ist ein modernes Digital Web Studio mit Fokus auf
              starke Websites, klare Nutzerführung und performante Umsetzung.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.grid}`}>
            <div className={styles.card}>
              <h2>Wer wir sind</h2>
              <p>
                Zemax Digital steht für moderne Webentwicklung, sauberes Design
                und digitale Auftritte, die professionell wirken. Unser Ziel ist
                es, Websites zu bauen, die Vertrauen schaffen und technisch
                zuverlässig sind.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Wie wir arbeiten</h2>
              <p>
                Wir setzen auf klare Strukturen, wiederverwendbare Komponenten,
                responsive Layouts und sauberen Code. Jede Website soll leicht
                verständlich, schnell und langfristig erweiterbar bleiben.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Unser Fokus</h2>
              <p>
                Wir konzentrieren uns auf Portfolio-Websites, Landing Pages,
                Business-Websites und moderne Web-Apps mit Next.js, React,
                TypeScript und CSS Modules.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.founderSection}>
          <div className={`container ${styles.founderBox}`}>
            <div className={styles.founderImageWrap}>
              <Image
                src="/images/founder-djezi.png"
                alt="Djezi Zenki, Gründer von Zemax Digital"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className={styles.founderImage}
              />
            </div>

            <div className={styles.founderContent}>
              <span className={styles.badge}>Founder</span>

              <h2>Djezi Zenki</h2>

              <strong>Gründer von Zemax Digital</strong>

              <p>
                Hinter Zemax Digital steht Djezi Zenki — mit Fokus auf moderne
                Websites, saubere Webentwicklung und digitale Lösungen, die
                professionell wirken und technisch zuverlässig funktionieren.
              </p>

              <p>
                Ziel ist es, Unternehmen, Selbstständige und Marken mit
                hochwertigen Webauftritten zu unterstützen, die klar
                strukturiert, responsive und langfristig erweiterbar sind.
              </p>

              <div className={styles.founderTags}>
                <span>Webdesign</span>
                <span>Next.js</span>
                <span>React</span>
                <span>Performance</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
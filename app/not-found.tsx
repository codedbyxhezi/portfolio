import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.notFound}>
          <div className={`container ${styles.inner}`}>
            <span className={styles.badge}>404</span>

            <h1>Diese Seite existiert nicht.</h1>

            <p>
              Die gesuchte Seite wurde verschoben, gelöscht oder die URL ist
              falsch. Zurück zur Startseite findest du wieder den richtigen Weg.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={styles.primaryButton}>
                Zur Startseite
              </Link>

              <Link href="/projects" className={styles.secondaryButton}>
                Projekte ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./Impressum.module.css";

export const metadata = {
  title: "Impressum",
  description: "Impressum von Zemax Digital.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Impressum</span>
            <h1>Angaben gemäß § 5 TMG</h1>
            <p>
              Diese Seite enthält die Anbieterkennzeichnung für Zemax Digital.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.content}`}>
            <div className={styles.card}>
              <h2>Anbieter</h2>
              <p>
                Zemax Digital
                <br />
                Djezi Zenki
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
                <br />
                Deutschland
              </p>
            </div>

            <div className={styles.card}>
              <h2>Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:djezi.zenki@outlook.de">
                  djezi.zenki@outlook.de
                </a>
              </p>
            </div>

            <div className={styles.card}>
              <h2>Verantwortlich für den Inhalt</h2>
              <p>
                Djezi Zenki
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
              </p>
            </div>

            <div className={styles.notice}>
              <strong>Hinweis:</strong> Bitte ersetze die Platzhalter-Adresse
              durch deine echten Angaben, bevor die Website produktiv genutzt
              wird.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
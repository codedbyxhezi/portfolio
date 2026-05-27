import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./Datenschutz.module.css";

export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Zemax Digital.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Datenschutz</span>
            <h1>Datenschutzerklärung</h1>
            <p>
              Informationen darüber, wie personenbezogene Daten auf dieser
              Website verarbeitet werden.
            </p>
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.content}`}>
            <div className={styles.card}>
              <h2>1. Allgemeine Hinweise</h2>
              <p>
                Der Schutz personenbezogener Daten ist uns wichtig. Diese
                Datenschutzerklärung informiert darüber, welche Daten beim Besuch
                dieser Website verarbeitet werden können.
              </p>
            </div>

            <div className={styles.card}>
              <h2>2. Verantwortliche Stelle</h2>
              <p>
                Zemax Digital
                <br />
                Djezi Zenki
                <br />
                Konrad-Engelhardt-Straße 3
                <br />
                82131 Gauting
                <br />
                E-Mail:{" "}
                <a href="mailto:djezi.zenki@outlook.de">
                  djezi.zenki@outlook.de
                </a>
              </p>
            </div>

            <div className={styles.card}>
              <h2>3. Server-Log-Dateien</h2>
              <p>
                Beim Besuch der Website können technische Zugriffsdaten
                verarbeitet werden, zum Beispiel Browsertyp, Betriebssystem,
                Referrer-URL, Uhrzeit der Serveranfrage und IP-Adresse. Diese
                Daten dienen der technischen Bereitstellung und Sicherheit der
                Website.
              </p>
            </div>

            <div className={styles.card}>
              <h2>4. Kontaktaufnahme</h2>
              <p>
                Wenn du uns per E-Mail kontaktierst, werden die von dir
                übermittelten Daten zur Bearbeitung deiner Anfrage verarbeitet.
                Diese Daten werden nicht ohne Einwilligung weitergegeben.
              </p>
            </div>

            <div className={styles.card}>
              <h2>5. Externe Links</h2>
              <p>
                Diese Website kann Links zu externen Plattformen wie GitHub,
                LinkedIn oder Vercel enthalten. Für deren Inhalte und
                Datenschutzpraktiken sind die jeweiligen Anbieter verantwortlich.
              </p>
            </div>

            <div className={styles.notice}>
              <strong>Hinweis:</strong> Diese Vorlage ist nicht vollständig
              rechtssicher. Vor produktiver Nutzung sollten die Angaben mit einem
              Datenschutzgenerator oder rechtlich geprüft werden.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
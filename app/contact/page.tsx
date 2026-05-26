import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Zemax Digital für moderne Websites, Web-Apps und Fullstack-Webentwicklung.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Kontakt</span>
            <h1>Lass uns gemeinsam dein nächstes Projekt starten.</h1>
            <p>
              Schreib mir eine Nachricht mit deiner Idee, deinem Ziel oder deiner
              Anfrage. Ich melde mich schnellstmöglich zurück.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
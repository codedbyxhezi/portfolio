import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./ContactPage.module.css";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Zemax Digital für moderne Websites, Webdesign und digitale Weblösungen.",
};

const contactCards = [
  {
    title: "E-Mail",
    text: "Schreib uns direkt eine Nachricht.",
    value: "djezi.zenki@outlook.de",
    href: "mailto:djezi.zenki@outlook.de",
  },
  {
    title: "Anrufen",
    text: "Direkt telefonisch Kontakt aufnehmen.",
    value: "+49 178 1532789",
    href: "tel:+491781532789",
  },
  {
    title: "Projektanfrage",
    text: "Für Websites, Landing Pages und Weblösungen.",
    value: "Projekt starten",
    href: "#contact",
  },
];

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
              Schreib uns eine Nachricht mit deiner Idee, deinem Ziel oder deiner
              Anfrage. Zemax Digital meldet sich schnellstmöglich zurück.
            </p>
          </div>
        </section>

        <section className={styles.contactInfoSection}>
          <div className={`container ${styles.contactGrid}`}>
            {contactCards.map((card) => (
              <a key={card.title} href={card.href} className={styles.infoCard}>
                <span>{card.title}</span>
                <h2>{card.value}</h2>
                <p>{card.text}</p>
              </a>
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
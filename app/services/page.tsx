import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./ServicesPage.module.css";

export const metadata = {
  title: "Leistungen",
  description:
    "Leistungen von Zemax Digital: Webdesign, Business Websites, Landing Pages und moderne Web-Apps.",
};

const services = [
  {
    number: "01",
    title: "Webdesign",
    text: "Wir gestalten moderne, klare und hochwertige Interfaces, die professionell wirken und Nutzer direkt abholen.",
    features: [
      "Modernes UI Design",
      "Responsive Layouts",
      "Klare Nutzerführung",
      "Hochwertiger Markenauftritt",
    ],
  },
  {
    number: "02",
    title: "Business Websites",
    text: "Wir entwickeln professionelle Websites für Unternehmen, Selbstständige und Marken, die Vertrauen schaffen sollen.",
    features: [
      "Startseite und Unterseiten",
      "SEO-freundliche Struktur",
      "Schnelle Ladezeiten",
      "Erweiterbare Komponenten",
    ],
  },
  {
    number: "03",
    title: "Landing Pages",
    text: "Wir bauen fokussierte Seiten für Angebote, Produkte oder Kampagnen mit klaren Call-to-Actions.",
    features: [
      "Starke Hero Section",
      "Conversion-orientierter Aufbau",
      "Kontakt- oder Anfragebereich",
      "Mobile Optimierung",
    ],
  },
  {
    number: "04",
    title: "Web Apps",
    text: "Wir erstellen moderne Frontend-Lösungen mit React, Next.js und TypeScript für interaktive digitale Produkte.",
    features: [
      "Komponentenbasierte Struktur",
      "Moderne Technologie",
      "Saubere Codebasis",
      "Performance im Fokus",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Leistungen</span>

            <h1>Digitale Lösungen für moderne Websites und starke Auftritte.</h1>

            <p>
              Zemax Digital entwickelt Webdesign, Business Websites, Landing
              Pages und moderne Weblösungen mit Fokus auf Design, Performance
              und sauberer Umsetzung.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                Projekt anfragen
              </Link>

              <Link href="/projects" className={styles.secondaryButton}>
                Projekte ansehen
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={`container ${styles.grid}`}>
            {services.map((service) => (
              <article key={service.title} className={styles.card}>
                <span className={styles.number}>{service.number}</span>

                <h2>{service.title}</h2>

                <p>{service.text}</p>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaBox}`}>
            <span>Bereit für den nächsten Schritt?</span>

            <h2>Aus einer Idee wird ein sauberer digitaler Auftritt.</h2>

            <p>
              Wir unterstützen dabei, aus Anforderungen eine moderne,
              responsive und professionelle Website zu entwickeln.
            </p>

            <Link href="/contact" className={styles.primaryButton}>
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
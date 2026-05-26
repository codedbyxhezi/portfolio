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

const packages = [
  {
    name: "Starter Website",
    tag: "Für den Einstieg",
    price: "ab 499 €",
    note: "Startpreis",
    text: "Ideal für eine moderne Online-Präsenz mit klarer Struktur und professionellem Look.",
    items: [
      "1 bis 3 Seiten",
      "Responsive Design",
      "Kontaktbereich",
      "Basis SEO-Struktur",
    ],
  },
  {
    name: "Business Website",
    tag: "Beliebt",
    price: "ab 899 €",
    note: "Startpreis",
    text: "Für Unternehmen, Selbstständige oder Marken, die seriös auftreten und Vertrauen aufbauen möchten.",
    items: [
      "Mehrere Unterseiten",
      "Leistungsbereiche",
      "Projekt- oder Referenzbereich",
      "SEO- und Performance-Fokus",
    ],
  },
  {
    name: "Landing Page",
    tag: "Für Kampagnen",
    price: "ab 699 €",
    note: "Startpreis",
    text: "Für Angebote, Produkte oder Aktionen, bei denen eine klare Botschaft und Conversion wichtig sind.",
    items: [
      "Starke Hero Section",
      "Benefits und Features",
      "Call-to-Action Bereiche",
      "Mobile-first Aufbau",
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

        <section className={styles.packageSection}>
          <div className={`container ${styles.packageHeader}`}>
            <span className={styles.badge}>Startpreise</span>

            <h2>Flexible Lösungen für verschiedene Projektgrößen.</h2>

            <p>
              Ob kleine Website, professioneller Firmenauftritt oder fokussierte
              Landing Page — wir wählen den Aufbau passend zum Ziel des Projekts.
            </p>
          </div>

          <div className={`container ${styles.packageGrid}`}>
            {packages.map((item) => (
              <article key={item.name} className={styles.packageCard}>
                <span className={styles.packageTag}>{item.tag}</span>

                <h3>{item.name}</h3>

                <div className={styles.priceBox}>
                  <strong>{item.price}</strong>
                  <span>{item.note}</span>
                </div>

                <p>{item.text}</p>

                <ul>
                  {item.items.map((packageItem) => (
                    <li key={packageItem}>{packageItem}</li>
                  ))}
                </ul>

                <Link href="/contact" className={styles.packageButton}>
                  Anfragen
                </Link>
              </article>
            ))}
          </div>

          <p className={styles.priceNote}>
            Alle Preise sind Startpreise und können je nach Umfang, Funktionen
            und Projektanforderungen variieren.
          </p>
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
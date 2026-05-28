export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: {
    title: string;
    text: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "moderne-website",
    title: "Warum eine moderne Website mehr ist als nur gutes Aussehen",
    description:
      "Eine professionelle Website verbindet Design, Struktur, Performance und klare Nutzerführung.",
    category: "Webdesign",
    date: "2025",
    readTime: "4 Min.",
    image: "/images/blog/moderne-website.png",
    imageAlt:
      "Modernes Webdesign mit responsiver Website-Struktur auf einem Bildschirm",
    intro:
      "Eine moderne Website soll nicht nur gut aussehen. Sie muss Vertrauen schaffen, verständlich aufgebaut sein und Besucher schnell zum Ziel führen.",
    sections: [
      {
        title: "Design schafft den ersten Eindruck",
        text: "Besucher entscheiden oft sehr schnell, ob eine Website professionell wirkt. Farben, Typografie, Abstände und visuelle Struktur spielen dabei eine große Rolle.",
      },
      {
        title: "Struktur macht Inhalte verständlich",
        text: "Eine gute Website führt Nutzer klar durch Inhalte. Hero Section, Leistungen, Vorteile, Projekte, FAQ und Kontakt sollten logisch aufgebaut sein.",
      },
      {
        title: "Technik sorgt für langfristige Qualität",
        text: "Sauberer Code, responsive Layouts und gute Performance sorgen dafür, dass eine Website nicht nur heute gut funktioniert, sondern auch später erweitert werden kann.",
      },
    ],
  },
  {
    slug: "business-website",
    title: "Was eine gute Business Website können sollte",
    description:
      "Von Vertrauen über Inhalte bis zu Kontaktmöglichkeiten — eine Website muss klar führen.",
    category: "Business",
    date: "2025",
    readTime: "5 Min.",
    image: "/images/blog/business-website.png",
    imageAlt:
      "Business Website Konzept mit klarer Nutzerführung und Kontaktbereich",
    intro:
      "Eine Business Website ist mehr als eine digitale Visitenkarte. Sie soll erklären, Vertrauen schaffen und Besucher zur Kontaktaufnahme führen.",
    sections: [
      {
        title: "Klare Botschaft",
        text: "Direkt am Anfang sollte verständlich sein, was angeboten wird, für wen es gedacht ist und warum das Angebot relevant ist.",
      },
      {
        title: "Leistungen und Vorteile",
        text: "Besucher wollen schnell verstehen, welche Leistungen angeboten werden und welchen Nutzen sie davon haben. Deshalb sind klare Leistungsbereiche wichtig.",
      },
      {
        title: "Einfache Kontaktaufnahme",
        text: "Eine gute Website macht den nächsten Schritt leicht. Kontaktformular, E-Mail-Link oder Projektanfrage sollten gut sichtbar erreichbar sein.",
      },
    ],
  },
  {
    slug: "performance-seo",
    title: "Warum schnelle Ladezeiten wichtig für Nutzer und SEO sind",
    description:
      "Performance verbessert die Nutzererfahrung und kann helfen, Besucher länger auf der Seite zu halten.",
    category: "Performance",
    date: "2025",
    readTime: "4 Min.",
    image: "/images/blog/performance-seo.png",
    imageAlt:
      "Website Performance Analyse mit schneller Ladezeit und SEO Optimierung",
    intro:
      "Schnelle Websites fühlen sich professioneller an. Sie verbessern die Nutzererfahrung und können auch für Suchmaschinen ein positives Signal sein.",
    sections: [
      {
        title: "Nutzer warten nicht gern",
        text: "Wenn eine Website langsam lädt, springen Besucher schneller ab. Eine schnelle Seite wirkt direkt hochwertiger und zuverlässiger.",
      },
      {
        title: "Performance beginnt im Aufbau",
        text: "Optimierte Bilder, saubere Komponenten, wenig unnötiger Code und moderne Frameworks helfen dabei, Ladezeiten gering zu halten.",
      },
      {
        title: "SEO profitiert von guter Struktur",
        text: "Neben Geschwindigkeit sind auch Meta-Daten, Überschriften, Sitemap und klare Inhalte wichtig, damit Suchmaschinen die Website besser verstehen.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
  accent: "blue" | "purple" | "cyan";
  year: string;
  role: string;
  features: string[];
  image: string;
  caseStudy: {
    goal: string;
    solution: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Zemax Digital Website",
    description:
      "Ein moderner Markenauftritt für ein Digital Web Studio mit klarer Struktur, Animationen und responsivem Design.",
    longDescription:
      "Für Zemax Digital wurde ein kompletter digitaler Markenauftritt entwickelt. Der Fokus lag auf einer starken Startseite, klaren Unterseiten, moderner Navigation, Blogbereich, Projektseiten, Kontaktmöglichkeiten und einer sauberen Komponentenstruktur.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Brand Website",
    accent: "blue",
    year: "2025",
    role: "UI Design & Frontend Development",
    image: "/images/projects/portfolio-website.png",
    features: [
      "Moderner Markenauftritt mit Dark Theme",
      "Responsive Layout für Desktop, Tablet und Mobile",
      "Animierte Sections mit Framer Motion",
      "Unterseiten für Leistungen, Projekte, Skills, Blog und Kontakt",
      "SEO-Grundstruktur mit Sitemap, Robots und Metadaten",
    ],
    caseStudy: {
      goal: "Ziel war es, einen professionellen Webauftritt für Zemax Digital zu erstellen, der Leistungen, Projekte, Blogartikel und Kontaktmöglichkeiten klar präsentiert.",
      solution:
        "Die Website wurde mit Next.js, TypeScript, CSS Modules und Framer Motion aufgebaut. Wiederverwendbare Komponenten, Animationen, Unterseiten und ein Mobile Dock sorgen für ein modernes Nutzererlebnis.",
      result:
        "Entstanden ist eine responsive, schnelle und visuell starke Website mit sauberer Struktur, Blogbereich, Projektseiten und professionellem Markenauftritt.",
    },
  },
  {
    slug: "reisebuero-website",
    title: "Reisebüro Website",
    description:
      "Eine moderne Reisebüro-Website mit klarer Präsentation von Angeboten, Reisezielen und Kontaktmöglichkeiten.",
    longDescription:
      "Dieses Übungsprojekt zeigt eine moderne Reisebüro-Website, umgesetzt mit Next.js, TypeScript, CSS Modules und Framer Motion. Der Fokus lag auf emotionaler visueller Gestaltung, klaren Angebotsbereichen, responsivem Aufbau und animierten UI-Elementen.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    demoUrl: "https://bashkim-tours.vercel.app/",
    githubUrl: "#",
    category: "Business Website",
    accent: "cyan",
    year: "2025",
    role: "UI Design & Frontend Development",
    image: "/images/projects/reisebuero-website.png",
    features: [
      "Moderne Hero Section mit Reise-Fokus",
      "Animierte Bereiche für Reiseziele und Angebote",
      "Responsive Layout für Desktop, Tablet und Mobile",
      "Klare Call-to-Actions für Anfragen",
      "Komponentenbasierte Struktur mit CSS Modules",
    ],
    caseStudy: {
      goal: "Ziel war es, eine ansprechende Reisebüro-Website zu entwickeln, die Vertrauen schafft, Angebote übersichtlich präsentiert und Besucher schnell zur Anfrage führt.",
      solution:
        "Die Website wurde mit Next.js, TypeScript, CSS Modules und Framer Motion umgesetzt. Klare Sections, wiederverwendbare Komponenten und dezente Animationen sorgen für eine moderne Nutzererfahrung.",
      result:
        "Entstanden ist eine responsive Reisebüro-Website mit professioneller Gestaltung, sauberer technischer Struktur und klarer Präsentation der Inhalte.",
    },
  },
  {
    slug: "barbershop-website",
    title: "Barbershop Website",
    description:
      "Eine stilvolle Barbershop-Website mit starkem Look, Leistungen, Öffnungszeiten und Kontaktbereich.",
    longDescription:
      "Dieses Übungsprojekt zeigt eine moderne Barbershop-Website, umgesetzt mit Next.js, TypeScript, CSS Modules und Framer Motion. Der Fokus lag auf einem markanten visuellen Stil, klarer Leistungsübersicht, responsivem Design und animierten Sektionen.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    demoUrl: "https://sabos-barbershop.vercel.app/",
    githubUrl: "#",
    category: "Local Business Website",
    accent: "purple",
    year: "2025",
    role: "UI Design & Frontend Development",
    image: "/images/projects/barbershop-website.png",
    features: [
      "Starke Hero Section mit lokalem Business-Fokus",
      "Animierte Leistungsbereiche für Haarschnitt, Bart und Styling",
      "Öffnungszeiten und Kontaktbereich",
      "Responsive Umsetzung für mobile Nutzer",
      "Saubere Komponentenstruktur mit CSS Modules",
    ],
    caseStudy: {
      goal: "Ziel war eine moderne Website für einen Barbershop, die Leistungen klar zeigt, den Markenlook stärkt und Besucher schnell zur Kontaktaufnahme führt.",
      solution:
        "Das Projekt wurde mit Next.js, TypeScript, CSS Modules und Framer Motion aufgebaut. Die Seite nutzt klare Komponenten, responsive Layouts und dezente Animationen für einen hochwertigen Eindruck.",
      result:
        "Entstanden ist eine stilvolle, mobilefreundliche Barbershop-Website mit professioneller Wirkung, klarer Struktur und moderner technischer Umsetzung.",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
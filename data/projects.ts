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
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Brand Portfolio Website",
    description:
      "Ein moderner Markenauftritt für ein Digital Web Studio mit klarer Struktur, Animationen und responsivem Design.",
    longDescription:
      "Für dieses Projekt wurde ein kompletter digitaler Markenauftritt entwickelt. Der Fokus lag auf einer starken Hero Section, klaren Unterseiten, moderner Navigation, animierten Sektionen und einer sauberen Komponentenstruktur. Die Website zeigt Leistungen, Projekte, Skills und Kontaktmöglichkeiten in einem professionellen Gesamtbild.",
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
      "Unterseiten für Leistungen, Projekte, Skills und Kontakt",
      "SEO-Grundstruktur mit Sitemap, Robots und Metadaten",
    ],
  },
  {
    slug: "task-manager",
    title: "Task Management Dashboard",
    description:
      "Ein übersichtliches Dashboard-Konzept zur Organisation von Aufgaben, Status und Fortschritt.",
    longDescription:
      "Dieses Projekt zeigt ein modernes Dashboard-Konzept für Aufgabenverwaltung. Ziel war eine klare Oberfläche, die Aufgaben, Statusinformationen und Fortschritt verständlich darstellt. Der Fokus liegt auf strukturierter UI, einfacher Bedienbarkeit und einer modernen Web-App-Anmutung.",
    technologies: ["React", "TypeScript", "Local Storage"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Web App Concept",
    accent: "purple",
    year: "2025",
    role: "Frontend Development",
    image: "/images/projects/task-manager.png",
    features: [
      "Dashboard-Struktur für Aufgaben und Status",
      "Übersichtliche Karten und Listenbereiche",
      "Filterbare Aufgabenlogik als Konzept",
      "Speicherung über Local Storage möglich",
      "Responsive Web-App Oberfläche",
    ],
  },
  {
    slug: "landing-page",
    title: "SaaS Landing Page",
    description:
      "Eine conversion-orientierte Landing Page für ein digitales Produkt mit starkem Hero und klaren Call-to-Actions.",
    longDescription:
      "Diese Landing Page wurde als modernes Marketing-Konzept für ein digitales Produkt entwickelt. Die Seite kombiniert eine starke visuelle Einführung, klare Vorteile, Feature-Bereiche und auffällige Call-to-Actions. Ziel war ein professioneller Aufbau, der Nutzer schnell informiert und zur Kontaktaufnahme oder Aktion führt.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Landing Page",
    accent: "cyan",
    year: "2025",
    role: "UI Development",
    image: "/images/projects/landing-page.png",
    features: [
      "Starke Hero Section mit klarer Botschaft",
      "Conversion-orientierte Seitenstruktur",
      "Feature- und Benefit-Bereiche",
      "Responsive Umsetzung für alle Geräte",
      "Schneller und fokussierter Seitenaufbau",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
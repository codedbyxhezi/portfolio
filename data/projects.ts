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
    title: "Portfolio Website",
    description:
      "Eine moderne Portfolio-Webseite mit Next.js, TypeScript, CSS Modules und Animationen.",
    longDescription:
      "Dieses Portfolio wurde entwickelt, um persönliche Projekte, Skills und Kontaktmöglichkeiten professionell zu präsentieren. Der Fokus liegt auf modernem Design, sauberer Komponentenstruktur, responsivem Layout und lebendigen Animationen.",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Personal Brand",
    accent: "blue",
    year: "2025",
    role: "Design & Development",
    image: "/images/projects/portfolio-website.png",
    features: [
      "Responsive Layout für Desktop, Tablet und Mobile",
      "Animierte Hero-Section mit Framer Motion",
      "Moderne Komponentenstruktur",
      "SEO-optimierte Metadaten",
    ],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "Eine übersichtliche Web-App zum Erstellen, Filtern und Verwalten von Aufgaben.",
    longDescription:
      "Der Task Manager ist eine Web-App zur Organisation von Aufgaben. Nutzer können Aufgaben verwalten, filtern und ihren Fortschritt übersichtlich verfolgen. Die App ist simpel, schnell und auf gute Bedienbarkeit ausgelegt.",
    technologies: ["React", "TypeScript", "Local Storage"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Web App",
    accent: "purple",
    year: "2025",
    role: "Frontend Development",
    image: "/images/projects/task-manager.png",
    features: [
      "Aufgaben erstellen und verwalten",
      "Status- und Filterlogik",
      "Speicherung im Local Storage",
      "Klare und einfache Benutzeroberfläche",
    ],
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    description:
      "Eine responsive Landing Page für ein digitales Produkt mit starkem Fokus auf Conversion.",
    longDescription:
      "Diese Landing Page wurde für ein digitales Produkt konzipiert. Sie kombiniert klare Inhalte, starke Call-to-Actions und ein modernes visuelles Design, um Nutzer schnell zu überzeugen.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "Frontend",
    accent: "cyan",
    year: "2025",
    role: "UI Development",
    image: "/images/projects/landing-page.png",
    features: [
      "Starke Hero-Section",
      "Conversion-orientierte Struktur",
      "Responsive Design",
      "Schnelle Ladezeiten",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
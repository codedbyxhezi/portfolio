import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { getProjectBySlug, projects } from "@/data/projects";
import styles from "./ProjectDetail.module.css";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt nicht gefunden",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <Link href="/projects" className={styles.backLink}>
              <span>←</span>
              Zurück zu Projekten
            </Link>

            <div className={styles.heroContent}>
              <span className={styles.badge}>{project.category}</span>

              <h1>{project.title}</h1>

              <p>{project.longDescription}</p>

              <div className={styles.actions}>
                <a href={project.demoUrl} className={styles.primaryButton}>
                  Live Demo
                </a>

                <a href={project.githubUrl} className={styles.secondaryButton}>
                  GitHub ansehen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.showcaseSection}>
          <div className="container">
            <div className={styles.showcaseCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className={styles.projectImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.metaSection}>
          <div className={`container ${styles.metaGrid}`}>
            <div className={styles.metaCard}>
              <span>Jahr</span>
              <strong>{project.year}</strong>
            </div>

            <div className={styles.metaCard}>
              <span>Rolle</span>
              <strong>{project.role}</strong>
            </div>

            <div className={styles.metaCard}>
              <span>Kategorie</span>
              <strong>{project.category}</strong>
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={`container ${styles.caseGrid}`}>
            <article className={styles.caseCard}>
              <span>01</span>
              <h2>Ziel</h2>
              <p>{project.caseStudy.goal}</p>
            </article>

            <article className={styles.caseCard}>
              <span>02</span>
              <h2>Lösung</h2>
              <p>{project.caseStudy.solution}</p>
            </article>

            <article className={styles.caseCard}>
              <span>03</span>
              <h2>Ergebnis</h2>
              <p>{project.caseStudy.result}</p>
            </article>
          </div>
        </section>

        <section className={styles.detailsSection}>
          <div className={`container ${styles.detailsGrid}`}>
            <div className={styles.detailBlock}>
              <span className={styles.smallBadge}>Technologien</span>

              <h2>Tech-Stack</h2>

              <div className={styles.tags}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.detailBlock}>
              <span className={styles.smallBadge}>Features</span>

              <h2>Was umgesetzt wurde</h2>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
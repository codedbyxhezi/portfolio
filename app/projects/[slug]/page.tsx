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
          <div className="container">
            <Link href="/projects" className={styles.backLink}>
              ← Zurück zu Projekten
            </Link>

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
        </section>

        <section className={styles.contentSection}>
          <div className={`container ${styles.grid}`}>
            <div className={styles.previewCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.metaGrid}>
                <div>
                  <span>Jahr</span>
                  <strong>{project.year}</strong>
                </div>

                <div>
                  <span>Rolle</span>
                  <strong>{project.role}</strong>
                </div>

                <div>
                  <span>Kategorie</span>
                  <strong>{project.category}</strong>
                </div>
              </div>

              <div className={styles.block}>
                <h2>Technologien</h2>
                <div className={styles.tags}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.block}>
                <h2>Features</h2>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
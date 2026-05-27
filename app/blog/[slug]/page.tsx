import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import styles from "./BlogDetail.module.css";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <Link href="/blog" className={styles.backLink}>
              <span>←</span>
              Zurück zum Blog
            </Link>

            <div className={styles.heroContent}>
              <div className={styles.meta}>
                <span>{post.category}</span>
                <small>{post.date} · {post.readTime}</small>
              </div>

              <h1>{post.title}</h1>

              <p>{post.intro}</p>
            </div>
          </div>
        </section>

        <section className={styles.articleSection}>
          <article className={`container ${styles.article}`}>
            {post.sections.map((section, index) => (
              <div key={section.title} className={styles.block}>
                <span>0{index + 1}</span>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            ))}

            <div className={styles.ctaBox}>
              <span>Zemax Digital</span>
              <h2>Brauchst du eine moderne Website?</h2>
              <p>
                Wir unterstützen dabei, aus einer Idee einen professionellen,
                schnellen und responsiven Webauftritt zu entwickeln.
              </p>

              <Link href="/contact">Projekt anfragen</Link>
            </div>
          </article>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
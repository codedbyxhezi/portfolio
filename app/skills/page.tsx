import Navbar from "@/components/Navbar/Navbar";
import SkillsDetails from "@/components/SkillsDetails/SkillsDetails";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import styles from "./SkillsPage.module.css";

export const metadata = {
  title: "Skills",
  description:
    "Skills und Technologien von Zemax Digital: Next.js, React, TypeScript, CSS Modules, Framer Motion und moderne Webentwicklung.",
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.badge}>Skills</span>
            <h1>Mein Tech-Stack für moderne Webprojekte.</h1>
            <p>
              Technologien, Tools und Arbeitsweisen, mit denen ich schnelle,
              responsive und saubere Weblösungen entwickle.
            </p>
          </div>
        </section>

        <SkillsDetails />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
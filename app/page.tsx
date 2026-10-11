import Link from "next/link";
import styles from "./home.module.css";

export const HomePage = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Software Engineer @ Atlassian</p>
      <h1 className={styles.heading}>Making complex systems make sense</h1>
      <p className={styles.intro}>
        Frontend-leaning full-stack engineer working across architecture, product, and user experience.
      </p>
      <nav className={styles.cta} aria-label="Visit other pages">
        <Link href="/work">Explore my work ↗</Link>
        <Link href="/about">About me →</Link>
      </nav>
    </section>
  );
}

export default HomePage;
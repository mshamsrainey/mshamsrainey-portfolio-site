import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";


export const metadata: Metadata = {
  title: {
    default: "Miriam Shams-Rainey | Software Engineer",
    template: "%s | Miriam Shams-Rainey",
  },
  description:
    "Frontend-leaning full-stack software engineer working across architecture, product, and user experience.",
};


export const RootLayout = ({
  children,
}: LayoutProps<"/">) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="https://use.typekit.net/uov8wjb.css" />
      </head>
      <body className={styles.site}>
        <header className={`${styles.header} ${styles.container}`}>
          <Link href="/">Miriam Shams-Rainey</Link>

          <nav className={styles.navLinks} aria-label="Main navigation">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <main className={`${styles.main} ${styles.container}`} id="main-content">{children}</main>

        <footer className={`${styles.footer} ${styles.container}`}>
          <p>Made with ♥︎ (and Next.js) by Miriam Shams-Rainey</p>
          <div aria-label="Footer navigation" className={styles.navLinks} >
            <a href="https://github.com/mshamsrainey" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mshamsrainey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;

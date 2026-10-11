import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Me",
};

export const AboutPage = () => {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        I'm Miriam, a frontend-focused full-stack software engineer who builds systems that support the real humans who use them.
      </p>
    </section>
  );
}

export default AboutPage;
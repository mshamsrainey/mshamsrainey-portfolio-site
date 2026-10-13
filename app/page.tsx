import Link from "next/link";
import styles from "./home.module.css";
import linkStyles from "@/src/styles/links.module.css";

export const HomePage = () => {
	return (
		<div className={styles.page}>
			<section className={styles.hero}>
				<p className="eyebrow">Software Engineer @ Atlassian</p>
				<h1>Making complex systems make sense</h1>
				<p className={styles.largerBodyText}>
					Frontend-leaning full-stack engineer working across architecture,
					product, and user experience.
				</p>
				<nav className={styles.cta} aria-label="Visit other pages">
					<Link href="/work" className={styles.ctaButton}>
						Explore my work ↗
					</Link>
					<Link href="/about" className={styles.underlineLink}>
						About me →
					</Link>
				</nav>
			</section>
			<section aria-labelledby="selected-work" className={styles.selectedWork}>
				<div className={styles.selectedWorkIntro}>
					<div>
						<p className="eyebrow">01 / Selected work</p>
						<h2 id="selected-work">Things I've built</h2>
					</div>
					<Link className={styles.underlineLink} href="/work">
						<p>Explore all work →</p>
					</Link>
				</div>
				<section aria-labelledby="talent" className={styles.featuredProject}>
					<div className={styles.imageWrapperPlaceholder} />
					<div className={styles.workDescription}>
						<Link className={linkStyles.underlineLink} href="/work#talent">
							<h3 id="talent">Atlassian Talent</h3>
						</Link>
						<p className={styles.projectDescriptionHero}>
							Establishing the foundations of an enterprise product.
						</p>
						<p>
							Helped bring a workforce-planning application from an early-stage
							internal tool to a powerful external product. I designed frontend
							routing and data-fetching architecture alongside product analytics
							that made it possible to measure what was working.
						</p>
					</div>
				</section>
				<div className={styles.secondaryProjects}>
					<section aria-labelledby="compensation-revamp">
						<div className={styles.imageWrapperPlaceholder} />
						<div className={styles.workDescription}>
							<Link
								className={linkStyles.underlineLink}
								href="/work#compensation-revamp"
							>
								<h3 id="compensation-revamp">
									New hire compensation experience revamp
								</h3>
							</Link>
							<p className={styles.projectDescriptionHero}>
								Untangling a complex compensation workflow.
							</p>
							<p>
								Redesigned a complicated internal compensation workflow, from a
								UX overhaul to streamline recruiters' interactions, to
								partnering with compensation specialists to investigate and
								correct the underlying recommendation logic.
							</p>
						</div>
					</section>
					<section aria-labelledby="description-audit">
						<div className={styles.imageWrapperPlaceholder} />
						<div className={styles.workDescription}>
							<Link
								className={linkStyles.underlineLink}
								href="/work#description-audit"
							>
								<h3 id="description-audit">Duke Libraries description audit</h3>
							</Link>
							<p className={styles.projectDescriptionHero}>
								Streamlining large-scale archival review with NLP tooling.
							</p>
							<p>
								Expanded open-source tooling that uses rule-based language
								analysis to flag potentially harmful terminology in archival
								metadata for human review. The project has since been used and
								extended by universities across the country.
							</p>
						</div>
					</section>
				</div>
			</section>
			<section
				aria-labelledby={styles.perspectiveHeader}
				className={styles.perspective}
			>
				<div>
					<p className="eyebrow">02 / A little context</p>
					<h2 id={styles.perspectiveHeader}>
						Good engineering starts with good questions
					</h2>
				</div>
				<div>
					<p className={styles.perspectiveQuestions}>
						What problem are we actually trying to solve? How does that
						translate into technical requirements? How will we know whether a
						change makes anything better?
					</p>
					<p>
						My background spans computer science, linguistics, UX, and research,
						and I've found that the most interesting problems often live at the
						intersection of disciplines—where an assumption baked into technical
						implementation can subtly change the user experience, or where data
						reveals a new product opportunity. I like following the questions
						across those boundaries—and finding the connections that lead to
						better solutions.
					</p>
					<Link className={styles.underlineLink} href="/about">
						<p>More about me →</p>
					</Link>
				</div>
			</section>

			<section aria-labelledby="contact">
				<div>
					<p className="eyebrow">03 / Connect</p>
					<h2 id="contact">Let's talk</h2>
				</div>
				<p className={styles.largerBodyText}>
					I'm always happy to talk about thoughtful engineering, product
					challenges, or opportunities to build something useful.
				</p>
				<a href="mailto:mshamsrainey@gmail.com" className={styles.ctaButton}>
					Get in touch
				</a>
			</section>
		</div>
	);
};

export default HomePage;

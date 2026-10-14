import type { Metadata } from "next";
import linkStyles from "@/src/styles/links.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "About Me",
};

export const AboutPage = () => {
	return (
		<article className={styles.page}>
			<section>
				<div>
					<p className="eyebrow">01 / Introduction</p>
					<h1>Hi, I'm Miriam</h1>
				</div>
				<div className={styles.aboutHero}>
					<div className={styles.multiParagraphText}>
						<p>
							I'm a frontend-leaning full-stack software engineer who likes
							working where technical architecture, product decisions, and human
							behavior meet.
						</p>
						<p>
							I enjoy taking complicated, sometimes ambiguous problems and
							turning them into systems that make sense. At Atlassian, I've
							worked across frontend architecture, product analytics, developer
							tooling, and UX implementation, from building a new enterprise
							product to establishing engineering practices that help teams
							develop and improve their software.
						</p>
						<p>
							I'm especially drawn to problems that require thinking beyond the
							immediate implementation: where technical decisions shape user
							experiences, where product questions require engineering
							solutions, and where the assumptions behind a system deserve a
							closer look.
						</p>
						<p>
							I also have a habit of trying to break the happy path before users
							get the chance.
						</p>
					</div>
					<section>
						<dl>
							<dt className="eyebrow">Currently</dt>
							<dd>Software Engineer @ Atlassian</dd>
							<dt className="eyebrow">Location</dt>
							<dd>Atlanta, GA</dd>
							<dt className="eyebrow">Education</dt>
							<dd>B.S. in Computer Science, Duke University</dd>
						</dl>
					</section>
				</div>
			</section>
			<section>
				<div>
					<p className="eyebrow">02 / Approach</p>
					<h2>How I work</h2>
				</div>
				<div className={styles.approachGrid}>
					<section>
						<h3>Think in systems</h3>
						<p>
							I enjoy architecture and engineering problems where the
							interesting decisions happen between components, disciplines, or
							layers of a product. I care about creating systems that make sense
							to the people building them as well as those using them.
						</p>
					</section>
					<section>
						<h3>Design for real behavior</h3>
						<p>
							I'm a firm believer in exploring the edge cases. Users have a
							remarkable ability to find interactions nobody anticipated, and I
							find that some of the most interesting UX problems live there.
						</p>
					</section>
					<section>
						<h3>Learn from evidence</h3>
						<p>
							Shipping isn't the end of the story. I care about defining useful
							success metrics, creating opportunities to learn from real
							behavior, and using that evidence to inform what comes next.
						</p>
					</section>
				</div>
			</section>
			<section>
				<div>
					<p className="eyebrow">03 / Background</p>
					<h2>Experience + education</h2>
				</div>
				<div className={styles.timelineSection}>
					<section className={styles.timelineItem}>
						<p className="eyebrow">2023 - Now</p>
						<div>
							<div>
								<h3>Atlassian</h3>
								<p className={styles.timelineRole}>
									Software Engineer I → Software Engineer II
								</p>
							</div>
							<div className={styles.multiParagraphText}>
								<p>
									Frontend-leaning full-stack engineering across enterprise
									product development and internal platforms. My work has
									included designing client-side architecture for Atlassian
									Talent, establishing product analytics practices, building
									developer infrastructure, and contributing to engineering
									processes and incident management.
								</p>
								<p>
									Beyond implementation, I've mentored engineers, developed
									technical documentation, and helped teams adopt more
									systematic approaches to learning from production incidents.
								</p>
							</div>
						</div>
					</section>
					<section className={styles.timelineItem}>
						<p className="eyebrow">2022</p>
						<div>
							<div>
								<h3>WillowTree (now part of TELUS International)</h3>
								<p className={styles.timelineRole}>
									Software Engineering Intern
								</p>
							</div>
							<p>
								Developed an Android prototype exploring multimodal voice
								navigation, combining mobile engineering with interaction
								design, testing, and iterative UX improvements.
							</p>
						</div>
					</section>
					<section className={styles.timelineItem}>
						<p className="eyebrow">2020 - 2022</p>
						<div>
							<h3>Earlier research and product work</h3>
							<p>
								Worked across technical research, data automation, information
								architecture, and digital experiences, including projects with
								Duke University and the NEA Foundation.
							</p>
						</div>
					</section>
					<section className={styles.timelineItem}>
						<p className="eyebrow">2023</p>
						<div>
							<div>
								<h3>Duke University</h3>
								<p className={styles.timelineRole}>
									B.S. Computer Science, Minors in Linguistics and Asian
									American & Diaspora Studies
								</p>
							</div>
							<p>
								My academic interests extended beyond computer science into
								language, design, and human-centered research. That
								interdisciplinary background continues to inform how I approach
								technical problems and collaborate across functions.
							</p>
						</div>
					</section>
				</div>
			</section>
			<section>
				<div className={styles.contactSection}>
					<div>
						<p className="eyebrow">04 / Connect</p>
						<h2>Let's chat</h2>
					</div>
					<p>
						Interested in working together or discussing an engineering
						opportunity? I'd be happy to connect.
					</p>
					<nav aria-label="Contact links" className={styles.contactLinks}>
						<a
							href="mailto:mshamsrainey@gmail.com"
							className={linkStyles.ctaButton}
						>
							Email Me
						</a>
						<a
							href="https://www.linkedin.com/in/mshamsrainey"
							target="_blank"
							rel="noopener noreferrer"
							className={linkStyles.underlineLink}
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/mshamsrainey"
							target="_blank"
							rel="noopener noreferrer"
							className={linkStyles.underlineLink}
						>
							GitHub
						</a>
						{/* <a
						href="/resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className={linkStyles.underlineLink}
						hidden
					>
						Resume
					</a> */}
					</nav>
				</div>
			</section>
		</article>
	);
};

export default AboutPage;

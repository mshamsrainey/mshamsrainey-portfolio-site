import type { Metadata } from "next";
import Image from "next/image";
import aiSdlcGraphic from "@/public/ai_sdlc.png";
import compensationGraphic from "@/public/comp_ux_hero.png";
import talentGraphic from "@/public/talent_hero.png";
import linkStyles from "@/src/styles/links.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
	title: "Selected Work",
	description:
		"Selected software engineering, product, and creative computing projects by Miriam Shams-Rainey.",
};

export const WorkPage = () => {
	return (
		<div className={styles.page}>
			<header className={styles.intro}>
				<p className="eyebrow">Software engineering / Portfolio</p>

				<h1>Selected work</h1>

				<p>
					Building thoughtful interfaces, sustainable architectures, and tools
					that make complex systems easier to navigate.
				</p>
			</header>

			<article className={styles.featured} aria-labelledby="talent">
				<div className={styles.featuredOverview}>
					<p className="eyebrow">01 / Featured Product</p>
					<h2 id="talent">Atlassian Talent</h2>
				</div>
				<div className={styles.featuredGrid}>
					<div className={styles.featuredOverview}>
						<div className={styles.imageWrapperPlaceholder}>
							<Image
								fill={true}
								src={talentGraphic}
								alt="Atlassian Talent Graphic"
							/>
						</div>
						<p>
							Frontend architecture and product measurement for a zero-to-one
							enterprise workforce-planning application.
						</p>
					</div>
					<div className={styles.featuredStories}>
						<section>
							<p className="eyebrow">01A / Frontend Architecture</p>

							<h3>Type-safe routing and data fetching</h3>

							<p>
								Designed and implemented client-side routing architecture that
								connected route definitions, render-time data requirements, and
								page analytics metadata.
							</p>
							<ul>
								<li>TypeScript</li>
								<li>Relay</li>
								<li>React</li>
							</ul>
						</section>

						<section>
							<p className="eyebrow">01B / Product Analytics</p>

							<h3>Engineering product feedback loops</h3>

							<p>
								Established the instrumentation and measurement practices used
								to evaluate outcomes and make data-driven product decisions from
								the moment Talent was launched.
							</p>
							<ul>
								<li>Analytics</li>
								<li>Developer experience</li>
							</ul>
						</section>
					</div>
				</div>
			</article>
			<section className={styles.secondary}>
				<div className={styles.intro}>
					<p className="eyebrow">02 / Professional engineering</p>
					<h2>Systems + experiences</h2>
				</div>
				<div className={styles.secondaryStories}>
					<section
						id="compensation-revamp"
						aria-labelledby="compensation-revamp-title"
					>
						<div className={styles.imageWrapperPlaceholder}>
							<Image
								fill={true}
								src={compensationGraphic}
								alt="New hire compensation experience revamp"
							/>
						</div>
						<h3 id="compensation-revamp-title">
							New hire compensation experience revamp
						</h3>
						<p>
							Rebuilt a complex internal interface for recruiters and
							compensation experts to assemble policy-compliant new hire offers
							while investigating and helping correct the underlying
							compensation recommendation logic.
						</p>
						<ul>
							<li>UX engineering</li>
							<li>Domain logic</li>
						</ul>
					</section>
					<section aria-labelledby="ai-agent-sdlc">
						<div className={styles.imageWrapperPlaceholder}>
							<Image
								fill={true}
								src={aiSdlcGraphic}
								alt="AI agent software development lifecycle"
							/>
						</div>
						<h3 id="ai-agent-sdlc">AI agent software development lifecycle</h3>
						<p>
							Independently designed and implemented a code-first development
							prototype for AI agents, introducing automated validation, CI/CD,
							managed deployment workflows, and engineering governance.
						</p>
						<ul>
							<li>Developer experience</li>
							<li>AI governance</li>
						</ul>
					</section>
				</div>
			</section>
			<section className={styles.secondary}>
				<div className={styles.intro}>
					<p className="eyebrow">
						03 / Open source, research + creative computing
					</p>
					<h2>Other ways of building</h2>
				</div>
				<div className={styles.openSourceProjects}>
					<section aria-labelledby="description-audit">
						<div className={styles.openSourceProjectHeader}>
							<h3 id="description-audit">Duke Libraries description audit</h3>
							<a
								href="https://github.com/duke-libraries/description-audit"
								target="_blank"
								rel="noopener noreferrer"
								className={linkStyles.underlineLink}
							>
								View repository ↗
							</a>
						</div>
						<p>
							Expanded open-source tooling to help identify potentially harmful
							language in archival descriptions. Project used or extended by
							universities nationwide.
						</p>
					</section>
					<section aria-labelledby="gcode">
						<div className={styles.openSourceProjectHeader}>
							<h3>G-code painting visualizer</h3>
							<a
								href="https://github.com/mshamsrainey/gcode-painting-visualizer"
								target="_blank"
								rel="noopener noreferrer"
								className={linkStyles.underlineLink}
							>
								View repository ↗
							</a>
						</div>
						<p>
							Created computational previews that shorten the feedback loop for
							robotic painting.
						</p>
					</section>
				</div>
			</section>
		</div>
	);
};

export default WorkPage;

import Link from "next/link";
import styles from "./not-found.module.css";

export const NotFound = () => {
	return (
		<div className={styles.page}>
			<section className={styles.notFound}>
				<p className="eyebrow">404 / Page not found</p>
				<h1>Looks like we've hit an edge case.</h1>
				<p className={styles.largerBodyText}>
					We must've wandered off the happy path because this page wasn't found.
				</p>
				<Link href="/" className={styles.ctaButton}>
					Back to home →
				</Link>
			</section>
		</div>
	);
};

export default NotFound;

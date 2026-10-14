"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./TopNav.module.css";

export const TopNav = () => {
	const pathname = usePathname();
	const isOnWorkPage = pathname.startsWith("/work");
	const isOnAboutPage = pathname.startsWith("/about");
	return (
		<header className={styles.header}>
			<Link href="/">
				<Image
                    className={styles.wordmark}
					src="/wordmark.svg"
					alt="Miriam Shams-Rainey"
					width={300}
					height={32}
				/>
			</Link>

			<nav className={styles.navLinks} aria-label="Main navigation">
				<Link
					className={`${styles.navLink} ${isOnWorkPage ? styles.active : undefined}`}
					aria-current={isOnWorkPage ? "page" : undefined}
					href="/work"
				>
					Work
				</Link>
				<Link
					className={`${styles.navLink} ${isOnAboutPage ? styles.active : undefined}`}
					aria-current={isOnAboutPage ? "page" : undefined}
					href="/about"
				>
					About
				</Link>
			</nav>
		</header>
	);
};

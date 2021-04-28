import Link from "next/link"
import styles from "./mainHeader.module.css"

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href="/">
					<h1>
						<span className={styles.h}>H</span>oussam O.
					</h1>
				</Link>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li className={`${styles.btn} ${styles.btnWork}`}>
						<Link href="/projets">Mes Travaux</Link>
					</li>
					<li className={`${styles.btn} ${styles.btnWhoIAm}`}>
						<Link href="/houssam-ouatmani">Qui suis-je</Link>
					</li>
					<li className={`${styles.btn} ${styles.btnContact}`}>
						<Link href="/contact">Me contacter</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}


import styles from "./MainHero.module.css"

export default function MainHero({ children }) {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__content}>
               {children}
			</div>
		</div>
	)
}

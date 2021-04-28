import  styles from '../hero/MainHero.module.css'

export default function PresentationCard() {
	return (
		<div className={styles.presentation}>
			<p>Bonjour, je suis</p>
			<p className={styles.fullname}>
				<strong>
					<span className={`h ${styles.h_anime}`}>H</span>oussam
					<br />
					<span className={`h ${styles.h_anime}`}>O</span>uatmani
				</strong>
			</p>
			<p>Developpeur Web Javascript FullStack</p>
		</div>
	)
}

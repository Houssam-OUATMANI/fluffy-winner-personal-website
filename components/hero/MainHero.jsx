import Image from "next/image"
import styles from "./MainHero.module.css"

export default function MainHero() {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__content}>
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
				<div className={styles.picture}>
               qsdqsdqsd
					<Image
						src="/houssam.png"
						alt="houssam ouatmani Developpeur Web Javascript FullStack"
                  width = "400"
                  height = "400"
					/>
				</div>
			</div>
		</div>
	)
}

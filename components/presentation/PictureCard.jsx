import Image from "next/image"

import styles from '../hero/MainHero.module.css'

export default function PictureCard() {
	return (
		<div className={styles.picture}>
			<Image
				src="/houssam.png"
				alt="houssam ouatmani Developpeur Web Javascript FullStack"
				width="400"
				height="400"
			/>
		</div>
	)
}

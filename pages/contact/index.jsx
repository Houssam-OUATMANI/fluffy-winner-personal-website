import { useRef } from "react"

import styles from './Index.module.css'
import MainHero from "../../components/hero/MainHero"
import ContactForm from "../../components/form/ContactForm"

export default function ContactPage() {

	const nameRef = useRef()
	const emailRef = useRef()
	const messageRef = useRef()
	
	async function handleSubmit(e) {
		e.preventDefault()
		const name = nameRef.current.value
		const email = emailRef.current.value
		const message = messageRef.current.value

		console.log(name, email, message)
	}
	return (
		<div>
			<MainHero>
				<div className={styles.form__container}>
				<ContactForm
					nameRef={nameRef}
					emailRef={emailRef}
					messageRef={messageRef}
					onSubmit={handleSubmit}
				/>
				</div>
			</MainHero>
			<div className="container"></div>
		</div>
	)
}

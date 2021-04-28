import styles from "./ContactForm.module.css"

export default function ContactForm({
	nameRef,
	emailRef,
	messageRef,
	onSubmit,
}) {
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<div>
				<input
					type="text"
					placeholder="Nom & prénom"
					required
					minLength="3"
					ref={nameRef}
				/>
			</div>
			<div>
				<input type="email" placeholder="Email" required ref={emailRef} />
			</div>
			<div>
				<textarea placeholder="Description du projet" ref={messageRef} />
			</div>
			<button type="submit">Envoyer</button>
		</form>
	)
}

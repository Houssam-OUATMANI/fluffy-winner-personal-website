import Link from 'next/link'
import styles from './mainHeader.module.css'

export default function MainHeader() {
   return (
   <header className={styles.header}>
      <div className={styles.logo}>
         <Link href="/"><h1>Houssam OUATMANI.</h1></Link>
      </div>
      <nav className={styles.navigation}>
         <ul>
            <li><Link href="/projets">Mes Travaux</Link></li>
            <li><Link href="/houssam-ouatmani">Qui suis-je</Link></li>
            <li><Link href="/contact">Me contacter</Link></li>
         </ul>
      </nav>
   </header>
   )
}
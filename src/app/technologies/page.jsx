import Link from 'next/link';
import styles from '@styles/technologies.module.css';

export default function Credits() {
    return (
        <section className={styles.Container}>
            <div className={styles.Content}>
                <h1 id={styles.Title}>Technologies</h1>
                <p className={styles.Description}>
                    This site was conceived as an exemplary project aimed at highlighting proficiencies in design and programming, with the purpose of integrating my portfolio.
                </p>
                <p className={styles.Description}>The company represented is purely fictitious and has no connection with real entities.</p>

                <h2 id={styles.TitleList}>The Technologies Used Include</h2>
                <ul className={styles.List}>
                    <li className={styles.ItemList}>React JS</li>
                    <li className={styles.ItemList}>Next JS</li>
                    <li className={styles.ItemList}>Framer Motion</li>
                </ul>

                <div className={styles.LinkContainer}>
                    <Link href='/' id={styles.LinkToBack}>Return to Project</Link>
                </div>
            </div>
            <div id={styles.FirstCircle}></div>
            <div id={styles.LastCircle}></div>
        </section>
    )
}
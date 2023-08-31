import Link from 'next/link';
import styles from '@styles/technologies.module.css';

export default function Credits() {
    return (
        <section className={styles.Container}>
            <div className={styles.Content}>
                <h1 id={styles.Title}>Tecnologias</h1>
                <p className={styles.Description}>
                    Este site foi concebido como um projeto exemplar destinado a destacar proficiências em design e programação, com o propósito de integrar o meu portfólio.
                </p>
                <p className={styles.Description}>A empresa representada é puramente fictícia e não possui qualquer vínculo com entidades reais.</p>

                <h2 id={styles.TitleList}>As Tecnologias Usadas Incluem</h2>
                <ul className={styles.List}>
                    <li className={styles.ItemList}>React JS</li>
                    <li className={styles.ItemList}>Next JS</li>
                    <li className={styles.ItemList}>ScrollReveal</li>
                </ul>

                <div className={styles.LinkContainer}>
                    <Link href='/' id={styles.LinkToBack}> Voltar ao Projeto</Link>
                </div>
            </div>
            <div id={styles.FirstCircle}></div>
            <div id={styles.LastCircle}></div>
        </section>
    )
}
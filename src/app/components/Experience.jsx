import Image from 'next/image';
import styles from '@styles/experience.module.css'

export default function Experience() {
    return (
        <section className={styles.Container}>
            <div className={styles.TitleContainer}>
                <div id={styles.CircleTitle}></div>
                <h2 id={styles.Title}>Autêntica Culinária Japonesa, Sem Qualquer Alteração!</h2>
            </div>
            <div className={styles.Card}>
                <Image src={JapaneseChef} alt='Japanese Chef Image' className={styles.CardImage} />
                <p className={styles.CardDescription}>15 Anos de Culinária Japonesa que Impressiona</p>
            </div>
            <div className={styles.Card}>
                <Image src={Salmon} alt='Salmon Image' className={styles.CardImage} />
                <p className={styles.CardDescription}>Sempre Ingredientes Frescos e Selecionados com Cuidado</p>
            </div>
            <div className={styles.Card}>
                <Image src={JapaneseFood} alt='Japanese Food Image' className={styles.CardImage} />
                <p className={styles.CardDescription}>Uma Experiência Gastronômica Única e Incrível, o Renomado Umami</p>
            </div>
        </section>
    )
}
import Image from 'next/image';
import styles from '@styles/extracontent.module.css';

import Yokocho from '@png/yokocho.png'

export default function ExtraContent() {
    return (
        <section className={styles.Container}>
            <div className={styles.Card}>
                <Image src={Yokocho} alt='Yokocho Image' id={styles.CardImage} />
                <p id={styles.Content}>
                    Cada um dos pratos mencionados oferece uma gama de variações, abrangendo elementos como o tipo de peixe utilizado e os diversos molhos complementares. No nosso cardápio físico, você encontrará uma seleção de combos e porções, cada um acompanhado de seu respectivo valor. Importante destacar que todos esses combos e porções incluem os pratos mencionados anteriormente, proporcionando uma experiência completa da nossa oferta culinária.
                </p>
            </div>
            <div id={styles.CircleCard}></div>
        </section>
    )
}
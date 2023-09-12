'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@styles/extracontent.module.css';

import Yokocho from '@png/yokocho.png'

export default function ExtraContent() {

    const variants = {
        offscreen: {
            y: 300,
            opacity: 0
        },
        onscreen: {
            y:0,
            opacity: 1,
            transition: {
                type: "fade",
                duration: 0.7
            }
        }
    }

    return (
        <section className={styles.Container}>
            <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>
                <Image src={Yokocho} alt='Yokocho Image' id={styles.CardImage} />
                
                <p id={styles.Content}>
                    Cada um dos pratos mencionados oferece uma gama de variações, abrangendo elementos como o tipo de peixe utilizado e os diversos molhos complementares. No nosso cardápio físico, você encontrará uma seleção de combos e porções, cada um acompanhado de seu respectivo valor. Importante destacar que todos esses combos e porções incluem os pratos mencionados anteriormente, proporcionando uma experiência completa da nossa oferta culinária.
                </p>
            </motion.div>
            <motion.div id={styles.CircleCard} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}></motion.div>
        </section>
    )
}
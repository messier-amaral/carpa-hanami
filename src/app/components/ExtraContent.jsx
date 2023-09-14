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
                    Each of the dishes mentioned offers a range of variations, covering elements such as the type of fish used and the different complementary sauces. On our physical menu, you will find a selection of combos and portions, each accompanied by its respective price. It is important to highlight that all of these combos and portions include the previously mentioned dishes, providing a complete experience of our culinary offer.
                </p>
            </motion.div>
            <motion.div id={styles.CircleCard} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}></motion.div>
        </section>
    )
}
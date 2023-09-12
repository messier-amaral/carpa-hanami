'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@styles/experience.module.css'

// Images 
import JapaneseChef from '@png/japanese-chef.png';
import Salmon from '@png/salmon.png';
import JapaneseFood from '@png/japanese-food.png';

export default function Experience() {

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
            <motion.div className={styles.TitleContainer} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                <div id={styles.CircleTitle}></div>
                <h2 id={styles.Title}>Autêntica Culinária Japonesa, Sem Qualquer Alteração!</h2>
            </motion.div>
            <div className={styles.CardContainer}>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={JapaneseChef} alt='Japanese Chef Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>15 Anos de Culinária Japonesa que Impressiona.</p>
                </motion.div>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={Salmon} alt='Salmon Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>Sempre Ingredientes Frescos e Selecionados com Cuidado.</p>
                </motion.div>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={JapaneseFood} alt='Japanese Food Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>Uma Experiência Gastronômica Única e Incrível, o Renomado Umami.</p>
                </motion.div>
            </div>
        </section>
    )
}
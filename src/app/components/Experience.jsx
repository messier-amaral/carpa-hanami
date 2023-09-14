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
                <h2 id={styles.Title}>Authentic Japanese Cuisine, Without Any Alterations!</h2>
            </motion.div>
            <div className={styles.CardContainer}>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={JapaneseChef} alt='Japanese Chef Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>15 Years of Japanese Cuisine that Impresses.</p>
                </motion.div>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={Salmon} alt='Salmon Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>Always Fresh and Carefully Selected Ingredients.</p>
                </motion.div>
                <motion.div className={styles.Card} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants} >
                    <Image src={JapaneseFood} alt='Japanese Food Image' className={styles.CardImage} />
                    <p className={styles.CardDescription}>A Unique and Incredible Gastronomic Experience, the Renowned Umami.</p>
                </motion.div>
            </div>
        </section>
    )
}
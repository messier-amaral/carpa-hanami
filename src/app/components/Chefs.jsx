'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@styles/chefs.module.css';
import utilStyles from '@styles/utils.module.css';

// Images
import Kenji from '@chefs/kenji.png';
import Hiroshi from '@chefs/hiroshi.png';
import Alexander from '@chefs/alexander.png';
import Daniel from '@chefs/daniel.png';

import Bejamin from '@chefs/bejamin.png';
import Sophia from '@chefs/sophia.png';

export default function Chefs() {

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
            <div className={styles.ChefContent}>
                <motion.h2 id={styles.Title}  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>
                    Meet Our <span className={utilStyles.RedEmphasis}>Chefs</span>
                </motion.h2>
                
                <motion.div className={styles.FirstRow}  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>
                    <div className={styles.Chef}>
                        <Image src={Kenji} alt='Kenji' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Kenji Nakamura</p>
                    </div>
                    <div className={styles.Chef}>
                        <Image src={Hiroshi} alt='Hiroshi' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Hiroshi Nakamura</p>
                    </div>
                    <div className={styles.Chef}>
                        <Image src={Alexander} alt='Alexander' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Alexander Johnson</p>
                    </div>
                    <div className={styles.Chef}>
                        <Image src={Daniel} alt='Daniel' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Daniel Rodriguez </p>
                    </div>
                </motion.div>
                <motion.div className={styles.SecondRow}  initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>
                    <div className={styles.Chef}>
                        <Image src={Bejamin} alt='Bejamin' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Bejamin Willians</p>
                    </div>
                    <div className={styles.Chef} id={styles.ChefSophia}>
                        <Image src={Sophia} alt='Sophia' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Sophia Martinez</p>
                    </div>
                </motion.div>
            </div>
            <div id={styles.Circle}></div>
        </section>
    )
}
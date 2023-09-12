'use client';
import { motion } from 'framer-motion';
import styles from '@styles/address.module.css';

export default function Address() {

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
            <motion.div className={styles.Restaurants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>
                <div className={styles.AddressContainer}>
                    <address className={styles.Address}>
                        <p className={styles.RestaurantName}>Carpa Hanami Sushi House</p>
                        <p className={styles.Location}>459 Elm Street, Bellevue Way, Seattle, WA 98101 </p>
                    </address>
                    <address className={styles.Address}>
                        <p className={styles.RestaurantName}>Carpa Hanami Izakaya</p>
                        <p className={styles.Location}>5729 Maple Tree Avenue, Brookville, NY 67890</p>
                    </address>
                    <address className={styles.Address}>
                        <p className={styles.RestaurantName}>Carpa Hanami Ramen Bar</p>
                        <p className={styles.Location}>230 Douglas Governor Ave, Dallas, TX 75691 </p>
                    </address>
                    <address className={styles.Address}>
                        <p className={styles.RestaurantName}>Carpa Hanami Japanese Cuisine</p>
                        <p className={styles.Location}>542 Excelsior Street, San Francisco, CA 97026</p>
                    </address>
                </div>
                <div className={styles.NumberContainer}>
                    <p className={styles.Number}>
                        (206) 555-7890
                    </p>
                    <p className={styles.Number}>
                        (516) 555-9876
                    </p>
                    <p className={styles.Number}>
                        (214) 555-6543
                    </p>
                    <p className={styles.Number}>
                        (415) 555-9813
                    </p>
                </div>
            </motion.div>
            <motion.p id={styles.JapanLetter} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }} variants={variants}>花見鯉</motion.p>
        </section>
    )
}
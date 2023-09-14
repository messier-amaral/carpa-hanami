'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@styles/about.module.css';

import Sakura from '@png/sakura.png';

export default function AboutUs() {    

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
                duration: 0.8
            }
        }
    }
    return (
        <section className={styles.Container}>
            <motion.div className={styles.TitleContainer} 
                initial="offscreen" 
                whileInView="onscreen" 
                viewport={{ once: true, amount: 0.8 }} 
                variants={variants} >

                <h2 id={styles.Title} >About Us</h2>
                <div id={styles.CircleTitle} ></div>
            </motion.div>
            <div className={styles.AboutSection}>

                <motion.div className={styles.ContentContainer} 
                    initial="offscreen" 
                    whileInView="onscreen" 
                    viewport={{ once: true, amount: 0.8 }} 
                    variants={variants} >

                    <h3 id={styles.TitleContent} >
                        Carpa Hanami Restaurant - <br />The Taste of Japanese Tradition
                    </h3>
                    <p className={styles.Description} >
                        Welcome to Carpa Hanami Restaurant, where every dish pays homage to Japan&apos;s rich culinary heritage. The name &quot;Carpa Hanami&quot; reflects our deep connection with Japanese traditions, with a special focus on the concept of &quot;hanami&quot;.
                    </p>
                    <p className={styles.Description} >
                        Our journey takes us back to the origins of Japanese culture, celebrating each bite as a connection to centuries of tradition. Through our carefully prepared dishes, we share the ancient stories that have shaped our cuisine. Each sushi, sashimi and hot dish is a celebration of the culinary mastery passed down from generation to generation, inviting you to immerse yourself in the authenticity that defines Restaurante Carpa Hanami.
                    </p>
                    <p className={styles.Description} >
                        Join us for a gastronomic experience that transcends time, where authentic flavors intertwine with ancient narratives. At Carpa Hanami Restaurant, you are not just enjoying food; you are savoring the history and ephemeral beauty of Japanese cuisine.
                    </p>
                </motion.div>

                <motion.div className={styles.ExtraContainer} 
                    initial="offscreen" 
                    whileInView="onscreen" 
                    viewport={{ once: true, amount: 0.8 }} 
                    variants={variants}>
    
                    <Image src={Sakura} alt='Hanami Image' width={400} id={styles.SakuraImage}  />
                    <div className={styles.MeaningContainer}>
                        <p id={styles.MeaningHanami} >
                            &quot;Hanami&quot; is the Japanese practice of enjoying cherry blossoms in spring. This ephemeral act symbolizes the fleeting beauty of life, a philosophy we infuse into every aspect of our cooking.
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}
import Image from 'next/image';
import styles from '@styles/chefs.module.css';

export default function Chefs() {
    return (
        <section className={styles.Container}>
            <h2 id={styles.Title}>
                Meet Our <span className={utilStyles.RedEmphasis}>Chefs</span>
            </h2>
            <div className={styles.FirtRow}>
                <div className={styles.Chef}>
                    <Image src={Kenji} alt='Kenji' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Kenji Nakamura</p>
                </div>
                <div className={styles.Chef}>
                    <Image src={Hiroshi} alt='Hiroshi' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Hiroshi Nakamura</p>
                </div>
                <div className={styles.Chef}>
                    <Image src={Alexander} alt='Alexander' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Alexander Johnson</p>
                </div>
                <div className={styles.Chef}>
                    <Image src={Daniel} alt='Daniel' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Daniel Rodriguez </p>
                </div>
            </div>
            <div className={styles.SecondRow}>
                <div className={styles.Chef}>
                    <Image src={Bejamin} alt='Bejamin' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Bejamin Willians</p>
                </div>
                <div className={styles.Chef}>
                    <Image src={Sophia} alt='Sophia' className={styles.ChefImage} />
                    <p className={styles.ChefName}>Sophia Martinez</p>
                </div>
            </div>
        </section>
    )
}
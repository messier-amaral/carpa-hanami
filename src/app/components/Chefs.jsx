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
    return (
        <section className={styles.Container}>
            <div className={styles.ChefContent}>
                <h2 id={styles.Title}>
                    Meet Our <span className={utilStyles.RedEmphasis}>Chefs</span>
                </h2>
                
                <div className={styles.FirstRow}>
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
                </div>
                <div className={styles.SecondRow}>
                    <div className={styles.Chef}>
                        <Image src={Bejamin} alt='Bejamin' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Bejamin Willians</p>
                    </div>
                    <div className={styles.Chef} id={styles.ChefSophia}>
                        <Image src={Sophia} alt='Sophia' width={200} className={styles.ChefImage} />
                        <p className={styles.ChefName}>Sophia Martinez</p>
                    </div>
                </div>
            </div>
            <div id={styles.Circle}></div>
        </section>
    )
}
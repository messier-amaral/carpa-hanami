import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/credits.module.css';

import Yokocho from '@png/baka-gaijin-yokocho.png';

export default function Credits() {
    return (
        <section className={styles.Container}>
            <div className={styles.TitleContainer}>
                <h2 id={styles.Title}>Credits</h2>
                <div id={styles.TitleCircle}></div>
            </div>

            <div className={styles.Content}>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.Description}>
                        The Carpa Hanami project exemplifies my skills in Web Design, conventional Graphic Design and programming. It was created with the aim of enriching my professional portfolio.
                    </p>
                    <p className={styles.Description}>
                        If you are interested in discussing a real project for your business, please don&apos;t hesitate to get in touch. When sharing the details of your project, I am available to provide a personalized quote. I can&apos;t wait to be part of your project!
                    </p>
                </div>

                <Image src={Yokocho} alt='Yokocho of Baka Gaijin' id={styles.Yokocho} />
            </div>

            <p className={styles.Credits}>
                Images taken from <Link href='https://unsplash.com/pt-br' className={styles.CreditsLink}>Unsplash</Link> & <Link href='https://www.instagram.com/bkgaijin/' className={styles.CreditsLink}>Baka Gaijin</Link>
            </p>
            <p className={styles.Credits}>
                Created and Developed by <Link href='https://messier-amaral.com' className={styles.CreditsLink}>Messier Amaral</Link>
            </p>

            <div className={styles.SocialMedias}>
                <p className={styles.Social}>Website Portfolio</p>
                <p className={styles.Social}>Instagram</p>
                <p className={styles.Social}>GitHub</p>
                <p className={styles.Social}>Whatsapp</p>
            </div>

            <div className={styles.LinkContainer}>
                <Link href='/' id={styles.LinkToBack}>Return to Project</Link>
            </div>
        </section>
    )
}
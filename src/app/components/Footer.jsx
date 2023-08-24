import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.Container}>
            <div className={styles.LogoContainer}>
                <Image src={styles.Logo} alt='Logo Carpa Hanami' id={styles.Logo} />
                <p id={styles.NameLogo}>
                    Carpa <span className={utilStyles.RedEmphasis}>Hanami</span>
                </p>
            </div>
            <div className={styles.LinkContainer}>
                <div className={styles.Options}>
                    <Link href='#' className={styles.Option}>Welcome</Link>
                    <Link href='#' className={styles.Option}>About Us</Link>
                    <Link href='#' className={styles.Option}>Menu</Link>
                </div>
                <div className={styles.Options}>
                    <Link href='#' className={styles.Option}>Story</Link>
                    <Link href='#' className={styles.Option}>Adress</Link>
                    <Link href='#' className={styles.Option}>Chefs</Link>
                </div>
                <div className={styles.Options}>
                    <Link href='#' className={styles.Option}>Tecnologias</Link>
                    <Link href='#' className={styles.Option}>Créditos</Link>
                    <Link href='#' className={styles.Option}>Código</Link>
                </div>
            </div>
            <div className={styles.SocialMedia}>
                <Link href='#' className={styles.Icons}></Link>
                <Link href='#' className={styles.Icons}></Link>
                <Link href='#' className={styles.Icons}></Link>
                <Link href='#' className={styles.Icons}></Link>
            </div>
        </footer>
    )
}
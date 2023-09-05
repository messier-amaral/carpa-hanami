import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/navbar.module.css';

import HeaderLogo from '@svg/carpa-logo.svg';

export default function NavBar() {
    return (
        <header className={styles.Header}>
            <Image src={HeaderLogo} alt='Header Logo' width={50} className={styles.HeaderLogo} />

            <nav className={styles.NavBar}>
            <Link href='/' className={styles.NavOptions}>Welcome</Link>
            <Link href='#about-section' className={styles.NavOptions}>About us</Link>
            <Link href='#menu-section' className={styles.NavOptions}>Menu</Link>

            <Link href='#story-section' className={styles.NavOptions}>Story</Link>
            <Link href='#chefs-section' className={styles.NavOptions}>Chefs</Link>
            <Link href='#address-section' className={styles.NavOptions}>Address</Link>
            </nav>
        </header>
    );
}
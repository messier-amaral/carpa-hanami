'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/footer.module.css';
import utilStyles from '@styles/utils.module.css';

// Icons
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { SiUbereats } from 'react-icons/si'

import Logo from '@svg/carpa-logo.svg';

export default function Footer() {
    return (
        <footer className={styles.Container}>
            <div className={styles.LogoContainer}>
                <Image src={Logo} alt='Logo Carpa Hanami' id={styles.Logo} />
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
                    <Link href='/technologies' className={styles.Option}>Tecnologias</Link>
                    <Link href='/credits' className={styles.Option}>Créditos</Link>
                    <Link href='#' className={styles.Option}>Código</Link>
                </div>
            </div>
            <div className={styles.SocialMedia}>
                <Link href='#' className={styles.Icons}>
                    <SiUbereats />
                </Link>
                <Link href='#' className={styles.Icons}>
                    <BsWhatsapp />
                </Link>
                <Link href='#' className={styles.Icons}>
                    <BsInstagram />
                </Link>
            </div>
        </footer>
    )
}
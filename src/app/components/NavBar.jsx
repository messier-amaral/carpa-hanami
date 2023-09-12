'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/navbar.module.css';

import HeaderLogo from '@svg/carpa-logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function NavBar() {
    const [isMobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
    }

    const variantes = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        transition: {
            duration: 2000
        }
    }

    return (
        <header className={styles.Header}>
            <Image src={HeaderLogo} alt='Header Logo' width={50} id={styles.HeaderLogo} />

            <nav className={styles.NavBar}>
                <div className={styles.NavMenu}>
                    <Link href='/' className={styles.NavOptions}>Welcome</Link>
                    <Link href='#about-section' className={styles.NavOptions}>About us</Link>
                    <Link href='#menu-section' className={styles.NavOptions}>Menu</Link>
                    <Link href='#chefs-section' className={styles.NavOptions}>Chefs</Link>
                    <Link href='#address-section' className={styles.NavOptions}>Address</Link>
                </div>
                <button id={styles.MenuButton} onClick={toggleMobileMenu}>
                    <AiOutlineMenu className={styles.ButtonIcon} />
                </button>
                <AnimatePresence>
                    {isMobileMenu && (
                            <motion.div 
                                className={styles.MenuMobile}
                                initial="hidden"
                                animate="visible"
                                variants={variantes}
                            >
                                <button id={styles.MenuButton} onClick={toggleMobileMenu}>
                                    <AiOutlineClose className={styles.ButtonIcon} id={styles.CloseMenuMobile} />
                                </button>
                                <Link href='/' className={styles.OptionsMobile}>Welcome</Link>
                                <Link href='#about-section' className={styles.OptionsMobile} onClick={toggleMobileMenu}>About us</Link>
                                <Link href='#menu-section' className={styles.OptionsMobile} onClick={toggleMobileMenu}>Menu</Link>
                                <Link href='#story-section' className={styles.OptionsMobile} onClick={toggleMobileMenu}>Story</Link>
                                <Link href='#chefs-section' className={styles.OptionsMobile} onClick={toggleMobileMenu}>Chefs</Link>
                                <Link href='#address-section' className={styles.OptionsMobile} onClick={toggleMobileMenu}>Address</Link>
                            </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
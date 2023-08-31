import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from '@styles/page.module.css'
import utilStyles from '@styles/utils.module.css'

// Images and Icons
import HeaderLogo from '@svg/carpa-logo.svg';
import JapanesePattern from '@svg/japan-pattern.svg';
import Ramen from '@png/welcome-ramen.png';

import { BsArrowUpRight } from 'react-icons/bs';

// Components 
import About from './components/About';
import Experience from './components/Experience';
import Menu from './components/Menu';
import ExtraContent from './components/ExtraContent';
import Chefs from './components/Chefs';
import Address from './components/Address';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <nav className={styles.NavBar}>
          <Link href='#' className={styles.NavOptions}>Welcome</Link>
          <Link href='#about-section' className={styles.NavOptions} id={styles.OptionMarginOne} >About us</Link>
          <Link href='#' className={styles.NavOptions}>Menu</Link>

          <Image src={HeaderLogo} alt='Header Logo' width={50} className={styles.HeaderLogo} />

          <Link href='#' className={styles.NavOptions}>Story</Link>
          <Link href='#' className={styles.NavOptions} id={styles.OptionMarginTwo}>Chefs</Link>
          <Link href='#' className={styles.NavOptions}>Addres</Link>
        </nav>
      </header>
      
      <main className={styles.Main}>
        <section className={styles.ContentContainer}>
          <div className={styles.TitleContainer}>
            <h1 id={styles.Title}>Carpa <span className={utilStyles.RedEmphasis}>Hanami</span></h1>
            <div id={styles.CircleTitle}></div>
          </div>

          <p id={styles.Description}>
            Explore authentic Japanese cuisine at our restaurant, where each dish is a journey into tradition. Genuine flavors that tell ancient stories.
          </p>

          <div className={styles.ButtonContainer}>
            <Link href='#' id={styles.AboutUsButton}>About us</Link>
            <Link href='#' id={styles.SeeMenuButton}>See Our Menu <BsArrowUpRight id={styles.IconButton} /> </Link>
          </div>
        </section>
        <div className={styles.ImageContainer}>
          <div className={styles.BackgroundPattern}>
            <div className={styles.PatternContainer}>
              <div id={styles.CircleImage}></div>
              <Image src={JapanesePattern} alt='Japanese Pattern Image' height={550} id={styles.JapanesePattern} />
            </div>
            <p className={styles.TitleImage}>Ramen</p>
          </div>
          <Image src={Ramen} alt='Ramen Image' height={480} id={styles.RamenImage} />
        </div>
      </main>
      <div className={styles.ComponentsContainer}>
        <div id='about-section'>
          <About  />
        </div>
        <Experience />
        <Menu />
        <ExtraContent />
        <Chefs />
        <Address />
        <Footer />
      </div>
    </div>
  )
}

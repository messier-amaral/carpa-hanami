import Image from 'next/image';
import Link from 'next/link';

// Styles
import styles from '../../styles/page.module.css'

// Images and Icons
import JapanesePattern from ''

export default function Home() {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <nav className={styles.NavBar}>
          <Link href='#' className={styles.NavOptions}>Welcome</Link>
          <Link href='#' className={styles.NavOptions}>About us</Link>
          <Link href='#' className={styles.NavOptions}>Menu</Link>

          <Image src={styles.HeaderLogo} alt='Header Logo' />

          <Link className={styles.NavOptions}>Story</Link>
          <Link className={styles.NavOptions}>Chefs</Link>
          <Link className={styles.NavOptions}>Addres</Link>
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
            <Link href='#' id={styles.SeeMenuButton}>See Our Menu</Link>
          </div>
        </section>
        <div className={styles.ImageContainer}>
          <div className={styles.PatternContainer}>
            <div id={styles.CircleImage}></div>
            <Image src={JapanesePattern} alt='Japanese Pattern Image' id={styles.JapanesePattern} />
          </div>
          <p id={styles.TitleImage}>Ramen</p>
          <Image src={styles.Ramen} alt='Ramen Image' id={styles.RamenImage} />
        </div>
      </main>
    </div>
  )
}

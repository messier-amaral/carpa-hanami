import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/credits.module.css';

import Yokocho from '@png/baka-gaijin-yokocho.png';

export default function Credits() {
    return (
        <section className={styles.Container}>
            <div className={styles.TitleContainer}>
                <h2 id={styles.Title}>Creditos</h2>
                <div id={styles.TitleCircle}></div>
            </div>

            <div className={styles.Content}>
                <div className={styles.DescriptionContainer}>
                    <p className={styles.Description}>
                        O projeto Carpa Hanami exemplifica as minhas competências em Web Design, Design Gráfico convencional e programação. Ele foi criado com o intuito de enriquecer o meu portfólio profissional.
                    </p>
                    <p className={styles.Description}>
                        Caso você esteja interessado em discutir um projeto real para o seu negócio, por favor, não hesite em entrar em contato. Ao compartilhar os detalhes do seu projeto, estou à disposição para fornecer um orçamento personalizado. Não vejo a hora de fazer parte do seu projeto!
                    </p>
                </div>

                <Image src={Yokocho} alt='Yokocho of Baka Gaijin' id={styles.Yokocho} />
            </div>

            <p className={styles.Credits}>
                Imagens retiradas de <Link href='https://unsplash.com/pt-br' className={styles.CreditsLink}>Unsplash</Link> & <Link href='https://www.instagram.com/bkgaijin/' className={styles.CreditsLink}>Baka Gaijin</Link>
            </p>
            <p className={styles.Credits}>
                Criado e Desenvolvido por <Link href='https://messier-amaral.com' className={styles.CreditsLink}>Messier Amaral</Link>
            </p>

            <div className={styles.SocialMedias}>
                <p className={styles.Social}>Website Portfolio</p>
                <p className={styles.Social}>Instagram</p>
                <p className={styles.Social}>GitHub</p>
                <p className={styles.Social}>Whatsapp</p>
            </div>

            <div className={styles.LinkContainer}>
                <Link href='/' id={styles.LinkToBack}>Voltar ao Projeto</Link>
            </div>
        </section>
    )
}
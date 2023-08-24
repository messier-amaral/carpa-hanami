import Image from 'next/image';
import styles from '';

export default function AboutUs() {
    return (
        <section className={styles.Container}>
            <div className={styles.TitleContainer}>
                <h2 id={styles.Title}>About Us</h2>
                <div id={styles.CircleTitle}></div>
            </div>
            <div className={styles.AboutSection}>
                <div className={styles.ContentContainer}>
                    <h3 id={styles.TitleContent}>
                        Restaurante Carpa Hanami - O Sabor da Tradição Japonesa
                    </h3>
                    <p className={styles.Description}>
                        Bem-vindo ao Restaurante Carpa Hanami, onde cada prato é uma homenagem à rica herança culinária do Japão. O nome &quot;Carpa Hanami&quot; reflete nossa profunda conexão com as tradições japonesas, com um foco especial no conceito do &quot;hanami&quot;.
                    </p>
                    <p className={styles.Description}>
                        Nossa jornada nos leva de volta às origens da cultura japonesa, celebrando cada mordida como uma conexão com séculos de tradição. Através de nossos pratos cuidadosamente preparados, compartilhamos as histórias antigas que moldaram nossa cozinha. Cada sushi, sashimi e prato quente é uma celebração da maestria culinária que passou de geração em geração, convidando você a mergulhar na autenticidade que define o Restaurante Carpa Hanami.
                    </p>
                    <p className={styles.Description}>
                        Junte-se a nós para uma experiência gastronômica que transcende o tempo, onde os sabores autênticos se entrelaçam com narrativas ancestrais. No Restaurante Carpa Hanami, você não está apenas saboreando comida; você está saboreando a história e a beleza efêmera da culinária japonesa.
                    </p>
                </div>
            </div>
            <div className={styles.ExtraContainer}>
                <Image src={Sakura} alt='Hanami Image' id={styles.SakuraImage} />
                <div className={styles.MeaningContainer}>
                    <p id={styles.MeaningHanami}>
                        &quot;Hanami&quot; é a prática japonesa de apreciar as flores de cerejeira na primavera. Este ato efêmero simboliza a beleza fugaz da vida, uma filosofia que infundimos em cada aspecto de nossa cozinha.
                    </p>
                </div>
            </div>
        </section>
    )
}
import Image from 'next/image';
import styles from '@styles/menu.module.css';

export default function Menu() {
    return (
        <div className={styles.Container}>
            <div className={styles.TitleContainer}>
                <h2 id={styles.Title}>Menu</h2>
                <div className={styles.CircleTitle}></div>
            </div>

            <section className={styles.RamenContainer}>
                <h3 id={styles.RamenTitle}>Ramen</h3>
                <div className={styles.FirstRowRamen}>
                    <div className={styles.FoodCard}>
                        <Image src={ShoyuRamen} alt='Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Shoyu Ramen</h4>
                        <p className={styles.FoodIngredients}>
                            Macarrão fino, Caldo à base de shoyu, Osso de porco, Niboshi (sardinha desidratada), ajitama (ovo marinado), Nori (folhas de alga marinha), verduras  
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={TonkotsuRamen} alt='Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Tonkotsu Ramen</h4>
                        <p className={styles.FoodIngredients}>
                            Macarrão Fino, Caldo á base de tonkotsu & Shoyu, Barriga de porco, Ajitama (Ovo Marinado), Menma (broto de bambo), Oleo de gergelim, Nori (Folhas de alga Marinha, verduras
                        </p>
                    </div>
                    <div className={styles.Card}>
                        <Image src={MisoRamen} alt='Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Miso Ramen</h4>
                        <p className={styles.FoodIngredients}>
                            Macarrão Fino, miso, carne de frango, carne de porco, ajitama (ovo marinado) óleo de gergelim, menma (broto de bambu), Milho, óleo de pimenta, verduras, cogumelo
                        </p>
                    </div>
                </div>
                <div className={styles.LastRowRamen}>
                    <div className={styles.FoodCard}>
                        <Image src={ShioRamen} alt='Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Shio Ramen</h4>
                        <p className={styles.FoodIngredients}>
                            Macarrão Fino, caldo á base de shio (sal), carne de porco, salmão, óleo de gergelim, óleo de pimenta, ajitama (ovo marinado), nori (folhas de alga marinha), verduras
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={TsukemenRamen} alt='Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Tsukemen Ramen</h4>
                        <p className={styles.FoodIngredients}>
                            Macarrão grosso, caldo a base de tonkotsu & shoyu, carne de frango, carne de porco, Menma (ovo cozido), óleo de gergelim, óleo de pimenta, Alga Nori. (tudo servido separado)
                        </p>
                    </div>
                </div>
                <Image src={BackgroundRamen} alt='Background Ramen Image' id={styles.BackgroundRamen} />
                <div id={styles.CircleBottom}></div>
            </section>

            <section className={styles.SpecialtyContainer}>
                <h3 id={styles.SpecialtyTitle}>Especialidades</h3>
                <div className={styles.SpecialtyRow}>
                    <div className={styles.FoodCard}>
                        <Image src={Gyoza} alt='Gyoza Image' className={styles.FoodImage} />
                        <p className={styles.FoodIngredients}>
                            Massa de gyoza, carne de porco moída, repolho, óleo de gergelim, gengibre ralado, alho-poró, molho shoyu, óleo de pimenta
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={Yakisoba} alt='Yakisoba Image' className={styles.FoodImage} />
                        <p className={styles.FoodIngredients}>
                            macarrão de yakisoba, carne bovina em tiras finas, molho de yakisoba, molho shoyu, óleo vegetal, gengibre, óleo de pimenta, vegetais
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
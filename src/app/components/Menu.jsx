import Image from 'next/image';
import styles from '@styles/menu.module.css';

// Ramen Image
import ShoyuRamen from '@ramen/shoyu.png';
import TonkotsuRamen from '@ramen/tonkotsu.png';
import MisoRamen from '@ramen/miso.png';
import ShioRamen from '@ramen/shio.png';
import TsukemenRamen from '@ramen/tsukemen.png';

// Specialty Image
import Gyoza from '@specialty/gyoza.png';
import Yakisoba from '@specialty/yakisoba.png';
import Yakitori from '@specialty/yakitori.png';
import Teriyaki from '@specialty/teriyaki.png';
import Tempura from '@specialty/tempura.png';

// Sushi Image
import NigiriSushi from '@sushi/nigiri.png';
import MakiSushi from '@sushi/maki.png';
import UramakiSushi from '@sushi/uramaki.png';
import GunkanSushi from '@sushi/gunkan.png';
import TemakiSushi from '@sushi/gunkan.png';
import HotRollSushi from '@sushi/hot-roll.png';
import SashimiSushi from '@sushi/sashimi.png';
import HossomakiSushi from '@sushi/hossomaki.png';

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
                        <h4 className={styles.FoodName}>Gyoza</h4>
                        <p className={styles.FoodIngredients}>
                            Massa de gyoza, carne de porco moída, repolho, óleo de gergelim, gengibre ralado, alho-poró, molho shoyu, óleo de pimenta
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={Yakisoba} alt='Yakisoba Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Yakisoba</h4>
                        <p className={styles.FoodIngredients}>
                            macarrão de yakisoba, carne bovina em tiras finas, molho de yakisoba, molho shoyu, óleo vegetal, gengibre, óleo de pimenta, vegetais
                        </p>
                    </div>
                </div>
                <Image src={BackgroundRamen} alt='Background Ramen Image' id={styles.BackgroundSpecialty} />
            </section>

            <section className={styles.SushiContainer}>
                <h3 id={styles.SushiTitle}>Sushi</h3>
                <div className={styles.SushiFirstRow}>
                    <div className={styles.FoodCard}>
                        <Image src={NigiriSushi} alt='Nigiri Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Nigiri</h4>
                        <p className={styles.FoodIngredients}>
                            tira de salmão, arroz, wasabi, molho shoyu
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={MakiSushi} alt='Maki Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Maki</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, arroz, pepino, abacate, cenoura, alface, wasabi, molho shoyu
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={UramakiSushi} alt='Urumaki Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Urumaki</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, arroz, salmão, wasabi, molho shoyu, pepino, abacate, cenoura
                        </p>
                    </div>
                </div>

                <div className={styles.SushiSecondRow}>
                    <div className={styles.FoodCard}>
                        <Image src={GunkanSushi} alt='Gunkan Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Gunkan</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, arroz, atum picado, ovas de peixe, wasabi, molho shoyu
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={TemakiSushi} alt='Temaki Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Temaki</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, arroz, bastante salmão cortado em tiras, wasabi, cenoura, abacate
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={HotRollSushi} alt='HotRoll Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Hot Roll</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, arroz, atum, cream cheese, cebolinha, massa de tempura, óleo de pimenta, óleo vegetal
                        </p>
                    </div>
                </div>

                <div className={styles.SushiThirdRow}>
                    <div className={styles.FoodName}>
                        <Image src={SashimiSushi} alt='Sashimi Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Sashimi</h4>
                        <p className={styles.FoodIngredients}>
                            grande pedaço de salmão, wasabi, molho shoyu
                        </p>
                    </div>
                    <div className={styles.FoodName}>
                        <Image src={HossomakiSushi} alt='Hossomaki Sushi Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Hossomaki</h4>
                        <p className={styles.FoodIngredients}>
                            folhas de alga nori, tiras de salmão, arroz, abacate, cenoura, molho shoyu
                        </p>
                    </div>
                </div>
                <Image src={BackgroundRamen} alt='Background Ramen Image' id={styles.BackgroundSushi} />
            </section>

            <section className={styles.GrilledSpecialtyContainer}>
                <h3 id={styles.GrilledTitle}>
                    Especialidades <span className={utilStyles.RedEmphasis}>Grelhadas</span>
                </h3>
                <div className={styles.GrilledFirstRow}>
                    <div className={styles.FoodCard}>
                        <Image src={Yakitori} alt='Yakitori Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Yakitori</h4>
                        <p className={styles.FoodIngredients}>
                            Peito de frango cortado em pedaços pequenos, espetos de bambu, moho de yakitori (shoyu, saquê, mirin e acuçar), cebolinha
                        </p>
                    </div>
                    <div className={styles.FoodCard}>
                        <Image src={Teriyaki} alt='Teriyaki Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Teriyaki</h4>
                        <p className={styles.FoodIngredients}>
                            peito de frango em cubos, molho Teriyaki (Shoyu, mirin e acuçar), arroz, pimentão, brócolis, cebolinha, pimenta, semente de gergelim
                        </p>
                    </div>
                </div>
                <div className={styles.GrilledSecondRow}>
                    <div className={styles.FoodCard}>
                        <Image src={Tempura} alt='Tempura Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Tempura</h4>
                        <p className={styles.FoodIngredients}>
                            Massa de tempura,  abóbora, batata doce, pimentão, cenoura, pepino, camarão, molho shoyu e tsuyu
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
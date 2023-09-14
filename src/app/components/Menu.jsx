import Image from 'next/image';
import styles from '@styles/menu.module.css';
import utilStyles from '@styles/utils.module.css';

// Ramen Image
import ShoyuRamen from '@ramen/shoyu.png';
import TonkotsuRamen from '@ramen/tonkotsu.png';
import MisoRamen from '@ramen/miso.png';
import ShioRamen from '@ramen/shio.png';
import TsukemenRamen from '@ramen/tsukemen.png';

import BackgroundRamen from '@svg/background-ramen.svg';

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
import TemakiSushi from '@sushi/temaki.png';
import HotRollSushi from '@sushi/hot-roll.png';
import SashimiSushi from '@sushi/sashimi.png';
import HossomakiSushi from '@sushi/hossomaki.png';

import BackgroundSushi from '@svg/background-sushi.svg';

export default function Menu() {
    return (
        <div className={styles.Container}>
            <div className={styles.TitleContainer}>
                <h2 id={styles.Title}>Menu</h2>
                <div id={styles.CircleTitle}></div>
            </div>

            <section className={styles.RamenContainer}>
                <div className={styles.RamenContent}>
                    <h3 id={styles.RamenTitle}>Ramen</h3>
                    <div className={styles.FirstRowRamen}>
                        <div className={styles.FoodCard}>
                            <Image src={ShoyuRamen} alt='Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Shoyu Ramen</h4>
                            <p className={styles.FoodIngredients}>
                                Thin noodles, soy sauce broth, pork bone, niboshi (dried sardines), ajitama (marinated egg), nori (seaweed leaves), greens
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={TonkotsuRamen} alt='Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Tonkotsu Ramen</h4>
                            <p className={styles.FoodIngredients}>
                                Thin noodles, broth based on tonkotsu and shoyu, pork belly, ajitama (marinated egg), menma (bamboo shoot), sesame oil, nori (seaweed leaves, greens
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={MisoRamen} alt='Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Miso Ramen</h4>
                            <p className={styles.FoodIngredients}>
                                Thin noodles, miso, chicken meat, pork, ajitama (marinated egg) sesame oil, menma (bamboo shoot), corn, chili oil, greens, mushroom
                            </p>
                        </div>
                    </div>
                    <div className={styles.LastRowRamen}>
                        <div className={styles.FoodCard}  id={styles.FirstRamen}>
                            <Image src={ShioRamen} alt='Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Shio Ramen</h4>
                            <p className={styles.FoodIngredients}>
                                Thin noodles, shio (salt) based broth, pork, salmon, sesame oil, chili oil, ajitama (marinated egg), nori (seaweed sheets), vegetables
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={TsukemenRamen} alt='Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Tsukemen Ramen</h4>
                            <p className={styles.FoodIngredients}>
                                Thick noodles, tonkotsu shoyu-based broth, chicken meat, pork, Menma (boiled egg), sesame oil, chili oil, Nori Seaweed. (everything served separately)
                            </p>
                        </div>
                    </div>
                    <div id={styles.CircleBottom}></div>
                </div>
                <Image src={BackgroundRamen} alt='Background Ramen Section' width='auto' className={styles.BackgroundRamen} />
            </section>

            <section className={styles.SpecialtyContainer}>
                <h3 id={styles.SpecialtyTitle}>Specialties</h3>
                <div className={styles.SpecialtyRow}>
                    <div className={styles.FoodCardBlack}>
                        <Image src={Gyoza} alt='Gyoza Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Gyoza</h4>
                        <p className={styles.FoodIngredientsBlack}>
                            Thick noodles, tonkotsu shoyu-based broth, chicken meat, pork, Menma (boiled egg), sesame oil, chili oil, Nori Seaweed. (everything served separately)
                        </p>
                    </div>
                    <div className={styles.FoodCardBlack}>
                        <Image src={Yakisoba} alt='Yakisoba Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Yakisoba</h4>
                        <p className={styles.FoodIngredientsBlack}>
                            Yakisoba noodles, thinly sliced beef, yakisoba sauce, soy sauce, vegetable oil, ginger, chili oil, vegetables
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.SushiContainer}>
                <div className={styles.SushiContent}>
                    <h3 id={styles.SushiTitle}>Sushi</h3>
                    <div className={styles.SushiFirstRow}>
                        <div className={styles.FoodCard}>
                            <Image src={NigiriSushi} alt='Nigiri Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Nigiri</h4>
                            <p className={styles.FoodIngredients}>
                                Salmon strips, rice, wasabi, soy sauce
                            </p>
                        </div>
                        <div className={styles.FoodCard} id={styles.FirstSushi}>
                            <Image src={MakiSushi} alt='Maki Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Maki</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, rice, cucumber, avocado, carrot, lettuce, wasabi, soy sauce
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={UramakiSushi} alt='Urumaki Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Urumaki</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, rice, salmon, wasabi, soy sauce, cucumber, avocado, carrot
                            </p>
                        </div>
                    </div>
                    <div className={styles.SushiSecondRow}>
                        <div className={styles.FoodCard}>
                            <Image src={GunkanSushi} alt='Gunkan Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Gunkan</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, rice, chopped tuna, fish roe, wasabi, soy sauce
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={TemakiSushi} alt='Temaki Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Temaki</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, rice, plenty of salmon cut into strips, wasabi, carrots, avocado
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={HotRollSushi} alt='HotRoll Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Hot Roll</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, rice, tuna, cream cheese, chives, tempura batter, chili oil, vegetable oil
                            </p>
                        </div>
                    </div>
                    <div className={styles.SushiThirdRow}>
                        <div className={styles.FoodCard} id={styles.SashimiSushi} >
                            <Image src={SashimiSushi} alt='Sashimi Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Sashimi</h4>
                            <p className={styles.FoodIngredients}>
                                Large piece of salmon, wasabi, soy sauce
                            </p>
                        </div>
                        <div className={styles.FoodCard}>
                            <Image src={HossomakiSushi} alt='Hossomaki Sushi Image' className={styles.FoodImage} />
                            <h4 className={styles.FoodName}>Hossomaki</h4>
                            <p className={styles.FoodIngredients}>
                                Nori seaweed sheets, salmon strips, rice, avocado, carrot, soy sauce
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={BackgroundSushi} alt='Background Sushi Section' width='auto' className={styles.BackgroundSushi} />
            </section>

            <section className={styles.GrilledContainer}>
                <h3 id={styles.GrilledTitle}>
                    Grilled <br /> <span className={utilStyles.RedEmphasis}>Specialties</span>
                </h3>
                <div className={styles.GrilledFirstRow}>
                    <div className={styles.FoodCardBlack}>
                        <Image src={Yakitori} alt='Yakitori Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Yakitori</h4>
                        <p className={styles.FoodIngredientsBlack}>
                            Chicken breast cut into small pieces, bamboo skewers, yakitori moho (shoyu, sake, mirin and sugar), chives
                        </p>
                    </div>
                    <div className={styles.FoodCardBlack}>
                        <Image src={Teriyaki} alt='Teriyaki Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Teriyaki</h4>
                        <p className={styles.FoodIngredientsBlack}>
                            Diced chicken breast, Teriyaki sauce (Shoyu, mirin and sugar), rice, peppers, broccoli, chives, pepper, sesame seeds
                        </p>
                    </div>
                </div>
                <div className={styles.GrilledSecondRow}>
                    <div className={styles.FoodCardBlack}>
                        <Image src={Tempura} alt='Tempura Image' className={styles.FoodImage} />
                        <h4 className={styles.FoodName}>Tempura</h4>
                        <p className={styles.FoodIngredientsBlack}>
                            Tempura batter, pumpkin, sweet potato, peppers, carrots, cucumber, shrimp, soy sauce and tsuyu
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
import { Alegreya, Almendra } from 'next/font/google';
import Image from 'next/image';
import card from '../../public/card.jpg';
import cardInfo from '../../public/cardInfo.jpg';
import ContactMeButton from '../components/ContactMeButton';
import styles from './page.module.scss';

export const metadata = {
  title: 'Explore Wada-Art',
  description: 'Wada-Art',
};
const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });
const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function ContactPage() {
  return (
    <main className={styles.productPage}>
      <div className={styles.productContainer}>
        <div className={styles.imgContainer}>
          <div>
            <Image
              className={styles.img}
              src={card}
              alt="picture"
              width={0}
              sizes="100vw"
              height={0}
              style={{ width: '85%', height: 'auto' }}
            />
          </div>
          <div>
            <Image
              className={styles.img}
              src={cardInfo}
              alt="picture"
              width={0}
              sizes="100vw"
              height={0}
              style={{ width: '85%', height: 'auto' }}
            />
          </div>
        </div>

        <div className={`${styles.infoContainer} ${alegreya.className}`}>
          <div className={styles.nameDescription}>
            <p>
              My artistic journey is one of continuous growth and exploration,
              fueled by curiosity and a deep appreciation for the transformative
              power of art. I am constantly seeking new techniques, studying
              diverse artistic traditions, and pushing the boundaries of my
              creativity.
            </p>
            <p>
              As an artist, my ultimate goal is to touch hearts, ignite
              imagination, and leave a lasting impression on those who encounter
              my work. Whether it's adorning the skin or adorning a wall, I
              believe that art has the power to inspire, heal, and connect
              people from all walks of life.
            </p>{' '}
            <p>
              Thank you for joining me on this artistic adventure. Together, let
              us explore the beauty and depth of art, embracing the stories and
              emotions that art has the power to evoke.
            </p>
          </div>

          <div className={styles.categoryButton}>
            <ContactMeButton />
          </div>
        </div>
      </div>
    </main>
  );
}

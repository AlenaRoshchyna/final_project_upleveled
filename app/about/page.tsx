import { Alegreya, Almendra } from 'next/font/google';
import Image from 'next/image';
import mora from '../../public/mora.png';
import styles from './page.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });
const alegreya = Alegreya({
  weight: ['400', '700', '500', '600', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'About Wada-Art',
  description: 'About Wada artist',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={`${styles.text} ${alegreya.className}`}>
          <h1 className={almendra.className}>About me</h1>

          <p className={alegreya.className}>
            I am a passionate artist specializing in both tattooing and
            painting, dedicated to creating captivating and meaningful works of
            art. With a brush or a tattoo machine in hand, I embark on a
            creative journey that allows me to express my unique vision and
            connect with others on a profound level.
          </p>
          <p>
            In the world of tattoos, I have honed my craft to transform skin
            into a canvas that tells stories, captures emotions, and preserves
            memories. Each stroke of ink is infused with intention, as I
            collaborate closely with my clients to bring their ideas to life.
            Whether it's a small, intricate design or a larger, intricate
            masterpiece, I strive to ensure that every tattoo reflects their
            individuality and resonates with their soul.
          </p>
        </div>

        <Image
          className={styles.img}
          src={mora}
          alt="Painting"
          width={0}
          sizes="100vw"
          height={0}
          style={{ width: '25%', height: 'auto' }}
        />
      </div>
    </main>
  );
}

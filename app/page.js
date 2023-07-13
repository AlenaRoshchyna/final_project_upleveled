import { Alegreya, Almendra } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import distro from '../public/distro.jpg';
import landingImage from '../public/landingImage.jpg';
import visitGallery from '../public/visitGallery.jpg';
import ContactMeButton from './components/ContactMeButton';
import VisitGalleryButton from './components/VisitGalleryButton';
import styles from './page.module.scss';

const almendra = Almendra({ weight: ['400', '700'], subsets: ['latin'] });
const alegreya = Alegreya({
  weight: ['400', '700', '500', '600', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Wada-Art',
  description: 'World of Wada artist',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <Link
          className={`${almendra.className} ${styles.exploreMore}`}
          href="#anchor_one"
        >
          Explore more
        </Link>

        <div>
          <Image
            src={landingImage}
            alt="Painting"
            width={0}
            sizes="100vw"
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <div id="anchor_one" />
      <div className={styles.gallery}>
        <Image
          src={visitGallery}
          alt="Painting"
          width={0}
          sizes="100vw"
          height={0}
          style={{ width: '65%', height: 'auto' }}
        />
        <div className={styles.visitContainer}>
          <VisitGalleryButton />
        </div>
      </div>
      <div className={styles.distro}>
        <div>
          <div className={styles.text}>
            <h2 className={almendra.className}>Distro</h2>
            <p className={alegreya.className}>
              Does you new lable need a special design? Maybe you are planning
              to rock the new Distro look? Are you a popular musician and dream
              to have the most special looking instrument? If yes, you are on
              the right way to get it.{' '}
              <span>Do not hesitate to contact the artist!</span>
            </p>
          </div>

          <div className={styles.contactMeContainer}>
            <ContactMeButton />
          </div>
        </div>

        <Image
          className={styles.img}
          src={distro}
          alt="Painting"
          width={0}
          sizes="100vw"
          height={0}
          style={{ width: '55%', height: 'auto' }}
        />
      </div>
    </main>
  );
}

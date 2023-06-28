import Image from 'next/image';
import distro from '../public/distro.jpg';
import landingImage from '../public/landingImage.jpg';
import visitGallery from '../public/visitGallery.jpg';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
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
      <div>
        <Image
          src={visitGallery}
          alt="Painting"
          width={0}
          sizes="100vw"
          height={0}
          style={{ width: '65%', height: 'auto' }}
        />
      </div>
      <div>
        <Image
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

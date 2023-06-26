import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArtworkById } from '../../../database/artworks';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Explore the dream',
  description: 'Products',
};

type Props = {
  params: {
    artworkId: string;
  };
};

export default async function ArtworkPage(props: Props) {
  const singleArtwork = await getArtworkById(Number(props.params.artworkId)); // Convert the string into a number

  if (!singleArtwork) {
    notFound();
  }

  return (
    <main className={styles.productPage}>
      <Image
        src={singleArtwork.url}
        alt="picture"
        width={0}
        sizes="100vw"
        height={0}
        style={{ width: '25%', height: 'auto' }}
      />

      <div>
        <p>Name: {singleArtwork.name}</p>
        <p>Description: {singleArtwork.description}</p>
        <p>Category: {singleArtwork.category}</p>
      </div>
    </main>
  );
}

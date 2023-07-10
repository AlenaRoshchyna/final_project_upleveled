import ContactMeButton from '../components/ContactMeButton';
import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h1>About FoxySleep</h1>

      <ContactMeButton />
    </main>
  );
}

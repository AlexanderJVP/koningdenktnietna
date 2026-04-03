import Link from 'next/link';
import styles from './succes.module.css';

export const metadata = { title: 'Bedankt! — Liv' };

export default function Succes() {
  return (
    <div className={`sectie ${styles.wrapper}`}>
      <div className={styles.kaart}>
        <span className={styles.emoji}>🎉</span>
        <h1 className={styles.titel}>Bedankt voor je bestelling!</h1>
        <p className={styles.tekst}>
          Je betaling is gelukt. Ik neem zo snel mogelijk contact met je op
          om je boek te verzenden. Nog vragen? Stuur me een berichtje via de
          contactpagina.
        </p>
        <div className={styles.knoppen}>
          <Link href="/winkel" className="knop knop-blauw">Terug naar de winkel</Link>
          <Link href="/" className="knop">Naar de startpagina</Link>
        </div>
      </div>
    </div>
  );
}

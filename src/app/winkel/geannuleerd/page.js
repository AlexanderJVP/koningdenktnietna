import Link from 'next/link';
import styles from '../succes/succes.module.css';

export const metadata = { title: 'Bestelling geannuleerd — Liv' };

export default function Geannuleerd() {
  return (
    <div className={`sectie ${styles.wrapper}`}>
      <div className={styles.kaart}>
        <span className={styles.emoji}>😕</span>
        <h1 className={styles.titel}>Bestelling geannuleerd</h1>
        <p className={styles.tekst}>
          Je betaling werd geannuleerd. Geen zorgen — er werd niets aangerekend.
          Je kunt het opnieuw proberen of contact opnemen als je vragen hebt.
        </p>
        <div className={styles.knoppen}>
          <Link href="/winkel" className="knop knop-groen">Terug naar de winkel</Link>
          <Link href="/contact" className="knop knop-blauw">Contact opnemen</Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import styles from './BoekKaart.module.css';

export default function BoekKaart({ boek }) {
  return (
    <article className={styles.kaart}>
      {/* Vervang door: <Image src={boek.cover} alt={boek.titel} fill /> */}
      <div className="placeholder-afbeelding">
        📖 {boek.titel}
      </div>

      <div className={styles.info}>
        <h2 className={styles.titel}>{boek.titel}</h2>
        <p className={styles.beschrijving}>{boek.beschrijving}</p>
        <p className={styles.prijs}>€ {boek.prijs.toFixed(2).replace('.', ',')}</p>
        <div className={styles.knoppen}>
          <Link href={`/boek/${boek.id}`} className={`knop knop-blauw ${styles.knop}`}>
            Lees meer
          </Link>
          <Link href={`/order/${boek.id}`} className={`knop knop-groen ${styles.knop}`}>
            Bestel nu
          </Link>
        </div>
      </div>
    </article>
  );
}

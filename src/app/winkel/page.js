import Image from 'next/image';
import Link from 'next/link';
import { boeken } from '@/lib/boeken';
import KoopKnop from './KoopKnop';
import styles from './winkel.module.css';

export const metadata = {
  title: 'Winkel — Liv',
  description: 'Bestel de kinderboeken van Liv.',
};

export default function Winkel() {
  return (
    <div className="sectie">
      <h1 className="sectie-titel">Winkel</h1>
      <p className={styles.intro}>
        Bestel de boeken rechtstreeks bij Liv. Veilig betalen via Stripe.
        Na je bestelling neem ik zo snel mogelijk contact met je op voor de verzending.
      </p>

      <div className={styles.boekenGrid}>
        {boeken.map((boek) => (
          <article key={boek.id} className={styles.kaart}>
            <Image
              src={boek.cover}
              alt={boek.titel}
              width={300}
              height={400}
              className="placeholder-afbeelding"
              priority={false}
            />

            <div className={styles.info}>
              <h2 className={styles.titel}>{boek.titel}</h2>
              <p className={styles.beschrijving}>{boek.beschrijving}</p>
              <p className={styles.prijs}>
                € {boek.prijs.toFixed(2).replace('.', ',')}
              </p>
              <div className={styles.knoppen}>
                <Link href={`/boek/${boek.id}`} className="knop knop-blauw">
                  Lees meer
                </Link>
                <KoopKnop boekId={boek.id} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.verzending}>
        🚚 Verzending binnen België: gratis · Buiten België: neem contact op.
      </p>
    </div>
  );
}

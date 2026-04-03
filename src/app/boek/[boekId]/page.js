import Link from 'next/link';
import { boeken } from '@/lib/boeken';
import styles from './boek.module.css';
import BoekCarousel from './BoekCarousel';
import TerugKnop from './TerugKnop';

export async function generateMetadata({ params }) {
  const { boekId } = await params;
  const boek = boeken.find((b) => b.id === boekId);

  return {
    title: `${boek?.titel} — Liv`,
    description: boek?.beschrijving || 'Lees meer over dit boek van Liv.',
  };
}

export default async function BoekDetailPage({ params }) {
  const { boekId } = await params;
  const boek = boeken.find((b) => b.id === boekId);

  if (!boek) {
    return (
      <div className="sectie">
        <h1 className="sectie-titel">Boek niet gevonden</h1>
        <p>Het boek dat je zoekt bestaat niet.</p>
        <Link href="/winkel" className="knop knop-groen">
          Terug naar winkel
        </Link>
      </div>
    );
  }

  return (
    <div className="sectie">
      <TerugKnop />

      <div className={styles.container}>
        <BoekCarousel
          afbeeldingen={[
            { src: boek.cover,     alt: `${boek.titel} - voorkant`,  label: 'Voorkant'  },
            { src: boek.achterkant, alt: `${boek.titel} - achterkant`, label: 'Achterkant' },
          ]}
        />

        <div className={styles.info}>
          <h1 className={styles.titel}>{boek.titel}</h1>
          {boek.ondertitel && <p className={styles.ondertitel}>{boek.ondertitel}</p>}
          {boek.leeftijd && <p className={styles.leeftijd}>{boek.leeftijd}</p>}
          <p className={styles.prijs}>€ {boek.prijs.toFixed(2).replace('.', ',')}</p>
          <p className={styles.beschrijving}>{boek.beschrijving}</p>

          <div className={styles.knoppen}>
            <Link href={`/order/${boek.id}`} className="knop knop-groen">
              Bestel nu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

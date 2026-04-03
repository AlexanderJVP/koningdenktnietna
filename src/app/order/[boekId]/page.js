import Link from 'next/link';
import AdresFormulier from './AdresFormulier';
import styles from './AdresFormulier.module.css';

export const metadata = {
  title: 'Bestel — Liv',
  description: 'Bestel je boek en vul je verzendadres in.',
};

export default async function OrderPage({ params }) {
  const { boekId } = await params;

  return (
    <div className={`sectie ${styles.pagina}`}>
      <div className={styles.wrapper}>
        <Link href={`/boek/${boekId}`} className={styles.terug}>
          ← Terug naar boek
        </Link>
        <h1 className="sectie-titel">Jouw bestelling</h1>
      </div>
      <AdresFormulier boekId={boekId} />
    </div>
  );
}

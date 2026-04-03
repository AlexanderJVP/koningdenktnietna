import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { boeken } from '@/lib/boeken';

export default function Overzicht() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInhoud}>
          <h1 className={styles.heroTitel}>
            Hallo, ik ben Liv! ✏️
          </h1>
          <p className={styles.heroTekst}>
            Ik schrijf en teken kinderboeken vol magie, avontuur en grappige
            personages. Elk boek is met liefde gemaakt — van het eerste
            verhaal tot de laatste illustratie.
          </p>
          <div className={styles.heroKnoppen}>
            <Link href="/winkel" className="knop knop-groen">
              Bekijk de boeken
            </Link>
            <Link href="/blog" className="knop knop-blauw">
              Lees de blog
            </Link>
          </div>
        </div>

        {/* Portretfoto van Liv */}
        <div className={styles.heroAfbeelding}>
          <Image
            src="/liv/liv-abra-kaka-dabra.jpg"
            alt="Liv"
            fill
            className={styles.heroFoto}
          />
        </div>
      </section>

      {/* ── Boeken spotlight ── */}
      <section className={`sectie ${styles.boekenSectie}`}>
        <h2 className="sectie-titel">Mijn boeken</h2>
        <div className={styles.boekenRij}>
          {boeken.map((boek) => (
            <article key={boek.id} className={styles.spotlightKaart}>
              <div className={styles.spotlightAfbeeldingContainer}>
                <Image
                  src={boek.cover}
                  alt={boek.titel}
                  fill
                  className={styles.spotlightAfbeelding}
                />
              </div>
              <h3 className={styles.spotlightTitel}>{boek.titel}</h3>
              <p className={styles.spotlightTekst}>{boek.beschrijving}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Link href={`/boek/${boek.id}`} className="knop knop-blauw">
                  Lees meer
                </Link>
                <Link href={`/order/${boek.id}`} className="knop knop-groen">
                  Bestel nu — € {boek.prijs.toFixed(2).replace('.', ',')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Over Liv ── */}
      <section className={`sectie ${styles.overSectie}`}>
        <div className={styles.overAfbeelding}>
          <Image
            src="/liv/liv-abra-kaka-dabra.jpg"
            alt="Liv"
            fill
            className={styles.overFoto}
          />
        </div>
        <div className={styles.overTekst}>
          <h2 className="sectie-titel">Over mij</h2>
          <p>
            Ik ben Liv, schrijfster en illustratrice uit België. Ik maak
            boeken die kinderen laten dromen, lachen en voelen. Elk verhaal
            dat ik schrijf, teken ik ook zelf — zodat de wereld van het boek
            echt tot leven komt.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Wil je meer weten over mijn werk of een vraag stellen?
          </p>
          <Link href="/contact" className="knop knop-paars" style={{ marginTop: '1rem' }}>
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}

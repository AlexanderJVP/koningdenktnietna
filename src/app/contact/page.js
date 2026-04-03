import Image from 'next/image';
import ContactFormulier from './ContactFormulier';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact — Liv',
  description: 'Neem contact op met Liv.',
};

export default function Contact() {
  return (
    <div className="sectie">
      <h1 className="sectie-titel">Contact</h1>

      <div className={styles.layout}>
        <div className={styles.info}>
          <p className={styles.intro}>
            Liv Van Hyfte is werkzaam in het onderwijs en woont in Antwerpen.
            De verhalen die ze vroeger voor haar eigen kinderen vertelde krijgen
            nu een nieuw leven. Liv illustreert als hobby en heeft een
            voornamelijk decoratieve stijl.
          </p>
          <p className={styles.intro}>
            Illustrator en mede-auteur van <em>Mijn inspiratieboost. Aan de slag
            met cognitief talent in onderwijs</em> (2022, Die Keure) en
            mede-auteur van <em>Sticordi — een nieuwe generatie</em> (GO! Pro, 2013).
          </p>
          <p className={styles.intro}>
            Heb je een vraag over een bestelling of een schoolbezoek? Stuur me
            een berichtje — ik antwoord zo snel mogelijk!
          </p>

          <div className={styles.gegevens}>
            {/* Pas e-mailadres aan */}
            <p>
              <strong>E-mail:</strong>{' '}
              <a href="mailto:liv@voorbeeld.be" className={styles.link}>
                liv@voorbeeld.be
              </a>
            </p>
            <p>
              <strong>Sociaal:</strong> @liv.boeken (Instagram)
            </p>
          </div>

          <div className={styles.illustratie}>
            <Image
              src="/liv/liv.jpg"
              alt="Liv"
              width={260}
              height={260}
              className={styles.foto}
            />
          </div>
        </div>

        <ContactFormulier />
      </div>
    </div>
  );
}

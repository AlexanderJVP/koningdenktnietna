import styles from './blog.module.css';

export const metadata = {
  title: 'Blog — Liv',
  description: 'Lees over het schrijf- en tekenproces van Liv.',
};

// Later kan dit uit een CMS (bijv. Sanity, Contentful) of markdown-bestanden komen.
const blogberichten = [
  {
    id: 1,
    datum: '2024-03-15',
    titel: 'Hoe "Abra kaka dabra" ontstond',
    uittreksel:
      'Alles begon met een schetsboek vol rare figuren en een vraag van mijn nichtje: "Waarom kunnen tovenaars nooit iets goed doen?" Dat was het begin van een avontuur…',
  },
  {
    id: 2,
    datum: '2024-05-02',
    titel: 'Tekenen voor kinderen: mijn aanpak',
    uittreksel:
      'Als ik illustraties maak voor kinderboeken, denk ik altijd aan één ding: overdrijf. Grote ogen, brede grijnzen, wilde kleuren. Kinderen houden van…',
  },
  {
    id: 3,
    datum: '2024-09-20',
    titel: 'Het tweede boek is bijna klaar!',
    uittreksel:
      '"Hocus pocus op het veld" ligt bijna in de winkel. Na maanden tekenen en herschrijven ben ik zo blij met hoe het is geworden. Een klein voorproefje…',
  },
];

function datumOpmaken(isoString) {
  return new Date(isoString).toLocaleDateString('nl-BE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function Blog() {
  return (
    <div className="sectie">
      <h1 className="sectie-titel">Blog</h1>
      <p className={styles.intro}>
        Hier schrijf ik over het maken van mijn boeken, mijn tekenstijl en alles
        wat daarbijhoort.
      </p>

      <ul className={styles.lijst}>
        {blogberichten.map((bericht) => (
          <li key={bericht.id} className={styles.bericht}>
            {/* Placeholder cover per blogbericht */}
            <div className={styles.berichtAfbeelding}>
              <div className="placeholder-afbeelding" style={{ aspectRatio: '16/9' }}>
                Afbeelding blog
              </div>
            </div>
            <div className={styles.berichtInhoud}>
              <time className={styles.datum}>{datumOpmaken(bericht.datum)}</time>
              <h2 className={styles.berichtTitel}>{bericht.titel}</h2>
              <p className={styles.uittreksel}>{bericht.uittreksel}</p>
              {/* Vervang door een echte link wanneer blogpagina's aangemaakt zijn */}
              <span className={styles.leesWeer}>Binnenkort te lezen</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

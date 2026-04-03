'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './boek.module.css';

export default function BoekCarousel({ afbeeldingen }) {
  const [huidig, setHuidig] = useState(0);
  const touchStartX = useRef(null);

  const vorige = () => setHuidig((h) => (h - 1 + afbeeldingen.length) % afbeeldingen.length);
  const volgende = () => setHuidig((h) => (h + 1) % afbeeldingen.length);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) volgende();
    else if (delta < -50) vorige();
    touchStartX.current = null;
  };

  const { src, alt, label } = afbeeldingen[huidig];

  return (
    <div
      className={styles.carousel}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className={styles.carouselKnop} onClick={vorige} aria-label="Vorige afbeelding">
        ‹
      </button>

      <div className={styles.afbeelding}>
        <Image src={src} alt={alt} width={300} height={400} priority={huidig === 0} />
        <p className={styles.label}>{label}</p>
      </div>

      <button className={styles.carouselKnop} onClick={volgende} aria-label="Volgende afbeelding">
        ›
      </button>

      <div className={styles.carouselDots}>
        {afbeeldingen.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === huidig ? styles.dotActief : ''}`}
            onClick={() => setHuidig(i)}
            aria-label={`Afbeelding ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

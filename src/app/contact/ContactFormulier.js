'use client';

import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactFormulier() {
  const [status, setStatus] = useState(''); // 'verzonden' | 'fout' | ''
  const [laden, setLaden] = useState(false);

  async function handleVerzend(e) {
    e.preventDefault();
    setLaden(true);
    setStatus('');

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId || formspreeId.startsWith('VERVANG')) {
        throw new Error('Contactformulier is niet geconfigureerd. Check .env.local');
      }

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('verzonden');
        e.target.reset();
      } else {
        setStatus('fout');
      }
    } catch (err) {
      setStatus('fout');
    }

    setLaden(false);
  }

  return (
    <form className={styles.formulier} onSubmit={handleVerzend} noValidate>
      <div className={styles.veld}>
        <label htmlFor="naam">Naam</label>
        <input id="naam" name="naam" type="text" required placeholder="Jouw naam" />
      </div>

      <div className={styles.veld}>
        <label htmlFor="email">E-mailadres</label>
        <input id="email" name="email" type="email" required placeholder="jij@voorbeeld.be" />
      </div>

      <div className={styles.veld}>
        <label htmlFor="onderwerp">Onderwerp</label>
        <input id="onderwerp" name="onderwerp" type="text" required placeholder="Waarover gaat het?" />
      </div>

      <div className={styles.veld}>
        <label htmlFor="bericht">Bericht</label>
        <textarea id="bericht" name="bericht" rows={6} required placeholder="Schrijf hier je bericht…" />
      </div>

      <button type="submit" className="knop knop-groen" disabled={laden}>
        {laden ? 'Bezig met verzenden…' : 'Verstuur bericht'}
      </button>

      {status === 'verzonden' && (
        <p className={styles.succesmelding}>
          ✅ Je bericht is verstuurd! Ik kom zo snel mogelijk bij je terug.
        </p>
      )}
      {status === 'fout' && (
        <p className={styles.foutmelding}>
          😕 Er ging iets mis. Probeer het opnieuw of stuur een e-mail rechtstreeks.
        </p>
      )}
    </form>
  );
}

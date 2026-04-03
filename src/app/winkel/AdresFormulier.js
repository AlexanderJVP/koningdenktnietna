'use client';

import { useState } from 'react';
import { boeken } from '@/lib/boeken';
import styles from './AdresFormulier.module.css';

export default function AdresFormulier({ boekId, onVerzonden }) {
  const [geladen, setGeladen] = useState(false);
  const [fout, setFout] = useState('');
  const boek = boeken.find((b) => b.id === boekId);

  async function handleVerzend(e) {
    e.preventDefault();
    setGeladen(true);
    setFout('');

    const formData = new FormData(e.target);
    const data = {
      naam: formData.get('naam'),
      email: formData.get('email'),
      adres: formData.get('adres'),
      postcode: formData.get('postcode'),
      stad: formData.get('stad'),
      land: formData.get('land'),
      boekTitel: boek.titel,
      boekPrijs: boek.prijs,
    };

    try {
      // Verwacht NEXT_PUBLIC_FORMSPREE_ID in .env.local
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId || formspreeId.startsWith('VERVANG')) {
        throw new Error('Formspree is niet geconfigureerd. Check .env.local');
      }

      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Nieuwe bestelling: ${boek.titel}`,
        }),
      });

      if (!res.ok) throw new Error('Verzenden mislukt.');

      // Roep callback aan zodat uithoekje naar Stripe kan gaan
      onVerzonden();
    } catch (err) {
      setFout(err.message);
      setGeladen(false);
    }
  }

  return (
    <form className={styles.formulier} onSubmit={handleVerzend}>
      <h2 className={styles.titel}>Verzendadres</h2>
      <p className={styles.info}>
        Vul je gegevens in, dan neem ik contact met je op om je boek te verzenden.
      </p>

      <div className={styles.veld}>
        <label htmlFor="naam">Naam *</label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          placeholder="Jouw volledige naam"
        />
      </div>

      <div className={styles.veld}>
        <label htmlFor="email">E-mailadres *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jij@voorbeeld.be"
        />
      </div>

      <div className={styles.veld}>
        <label htmlFor="adres">Adres *</label>
        <input
          id="adres"
          name="adres"
          type="text"
          required
          placeholder="Straat en huisnummer"
        />
      </div>

      <div className={styles.rij}>
        <div className={styles.veld}>
          <label htmlFor="postcode">Postcode *</label>
          <input
            id="postcode"
            name="postcode"
            type="text"
            required
            placeholder="Bijv. 2000"
          />
        </div>
        <div className={styles.veld}>
          <label htmlFor="stad">Stad *</label>
          <input
            id="stad"
            name="stad"
            type="text"
            required
            placeholder="Bijv. Antwerpen"
          />
        </div>
      </div>

      <div className={styles.veld}>
        <label htmlFor="land">Land *</label>
        <select id="land" name="land" required defaultValue="BE">
          <option value="BE">België</option>
          <option value="NL">Nederland</option>
          <option value="LU">Luxemburg</option>
          <option value="DE">Duitsland</option>
          <option value="FR">Frankrijk</option>
        </select>
      </div>

      <button type="submit" className="knop knop-groen" disabled={geladen}>
        {geladen ? 'Bezig…' : 'Doorgaan naar betaling'}
      </button>

      {fout && <p className={styles.fout}>{fout}</p>}
    </form>
  );
}

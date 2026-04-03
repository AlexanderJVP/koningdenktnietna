'use client';

import { useRouter } from 'next/navigation';
import styles from './boek.module.css';

export default function TerugKnop() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={styles.terug}>
      ← Terug
    </button>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import styles from './winkel.module.css';

export default function KoopKnop({ boekId }) {
  const router = useRouter();

  return (
    <button
      className={`knop knop-groen ${styles.koopKnop}`}
      onClick={() => router.push(`/order/${boekId}`)}
    >
      Bestel nu
    </button>
  );
}

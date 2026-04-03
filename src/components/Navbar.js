'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const menuItems = [
  { href: '/',        label: 'Overzicht' },
  { href: '/winkel',  label: 'Winkel'    },
  { href: '/blog',    label: 'Blog'      },
  { href: '/contact', label: 'Contact'   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          {/* <Image src="/logo.png" alt="Liv" width={120} height={60} /> */}
          <span className="placeholder-logo">Koning denkt niet na</span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu openen"
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
        </button>

        <ul className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          {menuItems.map(({ href, label }) => (
            <li key={href} className={styles.menuItem}>
              <Image
                src="/logos/kroontje.png"
                alt=""
                width={28}
                height={28}
                className={styles.kroontje}
              />
              <Link href={href} className={styles.menuLink} onClick={() => setOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

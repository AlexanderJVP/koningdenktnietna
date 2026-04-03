import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.tekst}>
        © {new Date().getFullYear()} Liv — Met liefde gemaakt ✏️
      </p>
    </footer>
  );
}

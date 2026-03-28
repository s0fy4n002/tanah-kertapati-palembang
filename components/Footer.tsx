import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} · Tanah Dijual di Kertapati, Palembang</p>
      <p className={styles.sub}>Kertapati · Palembang · Sumatera Selatan · Indonesia</p>
    </footer>
  );
}
"use client";
import { useState } from "react";
import styles from "./HeroSection.module.css";

const WA_LINK = `https://wa.me/6282180851183?text=${encodeURIComponent("Halo, saya tertarik dengan tanah di Kertapati. Boleh info lebih lanjut?")}`;

// Ganti src: null dengan src: "/foto1.jpg" setelah foto dimasukkan ke /public/
const PHOTOS = [
  { src: '/foto1.jpeg' as string | null, label: "Tampak Depan" },
  { src: '/foto2.jpeg' as string | null, label: "Tampak Samping" },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>🏷️ Dijual</div>
      <div className={styles.inner}>
        <div className={styles.gallery}>
          <div className={styles.mainPhoto}>
            {PHOTOS[active].src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={PHOTOS[active].src!} alt={PHOTOS[active].label} />
            ) : (
              <div className={styles.placeholder}>
                <span>📸</span>
                <p>{PHOTOS[active].label}</p>
                <small>Tambahkan foto di /public/foto1.jpg</small>
              </div>
            )}
          </div>
          <div className={styles.thumbRow}>
            {PHOTOS.map((p, i) => (
              <button key={i} className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`} onClick={() => setActive(i)}>
                {p.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.src} alt={p.label} />
                ) : (
                  <div className={styles.thumbPlaceholder}><span>📷</span><small>{p.label}</small></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.location}>📍 Kertapati, Palembang</p>
          <h1 className={styles.title}>Dijual Tanah Strategis<br /><span>Samping Kecamatan Kertapati</span></h1>
          <div className={styles.price}>
            <span className={styles.priceLabel}>Harga</span>
            <span className={styles.priceValue}>Rp 7,2 Miliar</span>
            <span className={styles.priceSub}>Rp 900.000 / m²</span>
          </div>
          <div className={styles.specs}>
            <div className={styles.spec}><span>📐</span><div><strong>8.000 m²</strong><small>Luas Total</small></div></div>
            <div className={styles.spec}><span>↔️</span><div><strong>40 m</strong><small>Lebar</small></div></div>
            <div className={styles.spec}><span>↕️</span><div><strong>200 m</strong><small>Panjang</small></div></div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Hubungi via WhatsApp
          </a>
          <p className={styles.ctaNote}>Respon cepat · Tidak perlu perantara</p>
        </div>
      </div>
    </section>
  );
}
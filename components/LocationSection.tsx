import styles from "./LocationSection.module.css";

const LAT = -3.0866596553881576;
const LNG = 104.72671364554515;

export default function LocationSection() {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${LNG}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDUnMTIuMCJTIDEwNMKwNDMnMzYuMiJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid`;
  const mapsLink = `https://www.google.com/maps?q=${LAT},${LNG}`;

  return (
    <section className={styles.section} id="lokasi">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Lokasi Tanah</h2>
          <p>Samping Kantor Kecamatan Kertapati, Palembang, Sumatera Selatan</p>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            src={mapEmbedUrl}
            width="100%" height="400"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Tanah Dijual Kertapati Palembang"
          />
        </div>
        <div className={styles.infos}>
          <div className={styles.infoItem}><span>📍</span><div><strong>Alamat</strong><p>Samping Kantor Kecamatan Kertapati, Kota Palembang, Sumatera Selatan</p></div></div>
          <div className={styles.infoItem}><span>🗺️</span><div><strong>Koordinat GPS</strong><p>{LAT}, {LNG}</p></div></div>
          <div className={styles.infoItem}><span>🚗</span><div><strong>Akses</strong><p>Dapat diakses dari jalan utama Kertapati, mudah dilalui kendaraan besar</p></div></div>
        </div>
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={styles.mapsBtn}>
          🗺️ Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
import styles from "./DetailSection.module.css";

const KEUNGGULAN = [
  {
    icon: "🏢",
    title: "Lokasi Premium",
    desc: "Tepat di samping Kantor Kecamatan Kertapati — titik pusat aktivitas warga",
  },
  {
    icon: "🛣️",
    title: "Akses Jalan Mudah",
    desc: "Berada di tepi jalan utama, mudah dijangkau dari segala arah",
  },
  {
    icon: "📦",
    title: "Lahan Luas",
    desc: "8.000 m² dengan dimensi ideal 40×200m, cocok untuk berbagai peruntukan",
  },
  {
    icon: "💰",
    title: "Harga Kompetitif",
    desc: "Hanya Rp 900.000/m² untuk lokasi sestrategis ini di Palembang",
  },
  {
    icon: "📜",
    title: "Dokumen Lengkap",
    desc: "Legalitas bersih, proses balik nama mudah dan transparan",
  },
  {
    icon: "🏗️",
    title: "Serbaguna",
    desc: "Ideal untuk gudang, ruko, perumahan, atau properti komersial lainnya",
  },
];

export default function DetailSection() {
  return (
    <section className={styles.section} id="detail">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Kenapa Tanah Ini Layak Dibeli?</h2>
          <p>
            Lokasi strategis dengan harga yang masuk akal untuk investasi jangka
            panjang
          </p>
        </div>
        <div className={styles.grid}>
          {KEUNGGULAN.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.specsTable}>
          <h2 className={styles.specsTitle}>Spesifikasi Tanah</h2>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>
                  Luas Total
                </td>
                <td className={styles.cell}>
                  <strong>8.000 m²</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>Lebar</td>
                <td className={styles.cell}>
                  <strong>40 meter</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>
                  Panjang
                </td>
                <td className={styles.cell}>
                  <strong>200 meter</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>Lokasi</td>
                <td className={styles.cell}>
                  <strong>Kertapati, Palembang, Sumatera Selatan</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>Posisi</td>
                <td className={styles.cell}>
                  <strong>Samping Kantor Kecamatan Kertapati</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>
                  Harga Total
                </td>
                <td className={styles.cell}>
                  <strong>Rp 7.200.000.000</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>
                  Harga per m²
                </td>
                <td className={styles.cell}>
                  <strong>Rp 900.000</strong>
                </td>
              </tr>
              <tr className={styles.row}>
                <td className={`${styles.cell} ${styles.cellLabel}`}>Status</td>
                <td className={styles.cell}>
                  <strong>Tersedia / Bisa Nego</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

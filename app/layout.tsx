import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jual Tanah Strategis di Kertapati Palembang | 8.000 m² Pinggir Jalan",
  description: "Dijual tanah 8.000 m² (40m × 200m) lokasi strategis di Kertapati, Palembang — tepat di samping Kantor Kecamatan Kertapati. Cocok untuk investasi, gudang, atau komersial. Harga Rp 7,2 Miliar. Hubungi 082180851183.",
  keywords: ["jual tanah kertapati palembang","tanah dijual kertapati","tanah strategis palembang","kavling kertapati palembang","jual tanah palembang","tanah dekat kecamatan kertapati"],
  openGraph: {
    title: "Jual Tanah 8.000 m² Strategis di Kertapati, Palembang",
    description: "Tanah luas 8.000 m² (40×200m) di samping Kantor Kecamatan Kertapati. Harga Rp 7,2 Miliar.",
    locale: "id_ID",
    type: "website",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
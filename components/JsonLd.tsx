export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Jual Tanah Strategis di Kertapati, Palembang",
    description: "Tanah luas 8.000 m² (40m × 200m) di samping Kantor Kecamatan Kertapati, Palembang.",
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "7200000000",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Samping Kantor Kecamatan Kertapati",
      addressLocality: "Kertapati",
      addressRegion: "Palembang",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.0866596553881576,
      longitude: 104.72671364554515,
    },
    floorSize: { "@type": "QuantitativeValue", value: 8000, unitCode: "MTK" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
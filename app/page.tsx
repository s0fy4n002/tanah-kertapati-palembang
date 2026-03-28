import HeroSection from "@/components/HeroSection";
import DetailSection from "@/components/DetailSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <HeroSection />
        <DetailSection />
        <LocationSection /> 
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
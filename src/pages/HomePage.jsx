import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Intro from "../components/Intro";
import ProblemsSection from "../components/ProblemsSection";
import DomesticSection from "../components/DomesticSection";
import CommercialSection from "../components/CommercialSection";
import EmergencySection from "../components/EmergencySection";
import BrandsSection from "../components/BrandsSection";
import ProcessSection from "../components/ProcessSection";
import DiagnosisSection from "../components/DiagnosisSection";
import RegasSection from "../components/RegasSection";
import WorthRepairingSection from "../components/WorthRepairingSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ServiceAreasSection from "../components/ServiceAreasSection";
import CostSection from "../components/CostSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <ProblemsSection />
      <DomesticSection />
      <CommercialSection />
      <EmergencySection />
      <BrandsSection />
      <ProcessSection />
      <DiagnosisSection />
      <RegasSection />
      <WorthRepairingSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CostSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

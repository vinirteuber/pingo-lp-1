import CampainsSection from "./components/CampainsSection";
import Footer from "./components/Footer";
import GenericForm from "./components/GenericForm";
import Header from "./components/Header";
import HowToContractSection from "./components/HowToContractSection";
import PartnersSection from "./components/PartnersSection";
import SolutionssSection from "./components/SolutionsSection";
import WhyHireSection from "./components/WhyHireSection";
import StructuredData from "@/components/StructuredData";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pingo Estúdio Criativo",
  "url": "https://pingoestudiocriativo.com.br",
  "logo": "https://pingoestudiocriativo.com.br/assets/logo.png",
  "description": "Agência de marketing digital, branding e criação de conteúdo",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR",
    "addressLocality": "São Paulo"
  },
  "sameAs": [
    "https://instagram.com/pingoestudiocriativo",
    "https://facebook.com/pingoestudiocriativo"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pingo Estúdio Criativo",
  "url": "https://pingoestudiocriativo.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pingoestudiocriativo.com.br/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <Header />
      <PartnersSection />
      <SolutionssSection />
      <CampainsSection />
      <HowToContractSection />
      <WhyHireSection />
      <GenericForm />
      <Footer />
    </>
  );
}

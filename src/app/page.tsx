import CampainsSection from "./components/CampainsSection";
import Footer from "./components/Footer";
import GenericForm from "./components/GenericForm";
import Header from "./components/Header";
import HowToContractSection from "./components/HowToContractSection";
import PartnersSection from "./components/PartnersSection";
import WhyHireSection from "./components/WhyHireSection";

export default function Home() {
  return (
    <>
      <Header />
      <PartnersSection />
      <CampainsSection />
      <HowToContractSection />
      <WhyHireSection />
      <GenericForm />
      <Footer />
    </>
  );
}

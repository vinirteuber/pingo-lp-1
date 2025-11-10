import CampainsSection from "./components/CampainsSection";
import Footer from "./components/Footer";
import GenericForm from "./components/GenericForm";
import Header from "./components/Header";
import HowToContractSection from "./components/HowToContractSection";
import PartnersSection from "./components/PartnersSection";
import SolutionssSection from "./components/SolutionsSection";
import WhyHireSection from "./components/WhyHireSection";

export default function Home() {
  return (
    <>
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

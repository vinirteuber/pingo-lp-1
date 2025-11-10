import Header from "../components/Header";
import Footer from "../components/Footer";
import BestInfraVariationSection from "../components/BestInfraVariationSection";
import KnowTheCultureSection from "../components/KnowTheCultureSection";
import GenericForm from "../components/GenericForm";
import TeamCarousel from "../components/TeamCarrousel";

export default function AboutPage() {
    return (
        <>
            <Header />
            <BestInfraVariationSection />
            <KnowTheCultureSection />
            <GenericForm />
            <TeamCarousel />
            <Footer />
        </>
    );
}
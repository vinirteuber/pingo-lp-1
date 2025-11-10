import BestInfraSection from "../components/BestInfraSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import GenericForm from "../components/GenericForm";
import Header from "../components/Header";
import SolutionsSection from "../components/SolutionsSection";
import StudioSection from "../components/StudioSection";

export default function EstudioPage() {
    return (
        <>
            <Header />
            <BestInfraSection />
            <StudioSection />
            <div className="mt-20">
                <SolutionsSection />
            </div>
            <GenericForm showMap />
            <FaqSection />
            <Footer />
        </>
    );
}
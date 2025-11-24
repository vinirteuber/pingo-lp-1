import type { Metadata } from "next";
import BestInfraSection from "../components/BestInfraSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import GenericForm from "../components/GenericForm";
import Header from "../components/Header";
import SolutionsSection from "../components/SolutionsSection";
import StudioSection from "../components/StudioSection";

export const metadata: Metadata = {
    title: "Estúdio",
    description: "Conheça nossa infraestrutura completa e nossas soluções criativas. Estúdio profissional equipado para projetos de alta qualidade.",
    openGraph: {
        title: "Estúdio | Pingo Estúdio Criativo",
        description: "Conheça nossa infraestrutura completa e nossas soluções criativas. Estúdio profissional equipado para projetos de alta qualidade.",
    },
};

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
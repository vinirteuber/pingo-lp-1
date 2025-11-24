import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestInfraVariationSection from "../components/BestInfraVariationSection";
import KnowTheCultureSection from "../components/KnowTheCultureSection";
import GenericForm from "../components/GenericForm";
import TeamCarousel from "../components/TeamCarrousel";

export const metadata: Metadata = {
    title: "Sobre Nós",
    description: "Conheça nossa equipe, valores e cultura. Saiba mais sobre o Pingo Estúdio Criativo e como transformamos marcas.",
    openGraph: {
        title: "Sobre Nós | Pingo Estúdio Criativo",
        description: "Conheça nossa equipe, valores e cultura. Saiba mais sobre o Pingo Estúdio Criativo e como transformamos marcas.",
    },
};

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
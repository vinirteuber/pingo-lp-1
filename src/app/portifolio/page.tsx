import type { Metadata } from "next";
import Footer from "../components/Footer";
import LastJobsSection from "../components/LastJobsSection";
import SimpleHeader from "../components/SimpleHeader";

export const metadata: Metadata = {
    title: "Portfólio",
    description: "Conheça nossos trabalhos e projetos desenvolvidos. Cases de sucesso em marketing digital, branding e criação de conteúdo.",
    openGraph: {
        title: "Portfólio | Pingo Estúdio Criativo",
        description: "Conheça nossos trabalhos e projetos desenvolvidos. Cases de sucesso em marketing digital, branding e criação de conteúdo.",
    },
};

export default function Portifolio() {
    return (
        <>
            <SimpleHeader />
            <LastJobsSection />
            <Footer />
        </>
    );
}

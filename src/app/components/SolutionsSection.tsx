import { ChartCandlestick, Clapperboard, Handshake, SprayCan } from "lucide-react";

export default function SolutionssSection() {
    return (
        <div className="container mx-auto px-6 mb-20">
            <div className="bg-white text-black rounded-3xl shadow-xl p-10 md:p-12">
                <h3 className="text-center text-[#00285F] font-bold tracking-wide mb-10 text-base md:text-lg">
                    SOLUÇÕES PARA CADA NECESSIDADE
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col items-start gap-4 pb-8 border-b border-gray-200 md:border-b-0 md:pb-0">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Clapperboard className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Cinema</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal max-w-xl leading-relaxed">
                                Produzimos filmes: curtos ou longos, horizontais ou verticais!
                                Direção de arte e criação, direção de fotografia, produção,
                                pós-produção (montagem, sound design, color grading, VFX, animações
                                2D/3D e mais).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pb-8 border-b border-gray-200 md:border-b-0 md:pb-0">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Handshake className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Produção Executiva</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal max-w-xl leading-relaxed">
                                Orçamentos para produção, curadoria de modelos/atores, logística,
                                equipamentos/infra, locais, cenografia, figurino/styling, gestão de
                                projetos e mais.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <SprayCan className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Arte e Criação</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl leading-relaxed">
                                Identidade visual, direção criativa, key visual, ilustração,
                                design de peças publicitárias/artes, design de embalagem, design de moda.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <ChartCandlestick className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Resultados</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl  leading-relaxed">
                                Entendemos o contexto e as metas, gerenciamos o projeto,
                                executamos as entregas e tornamos real o universo idealizado da sua
                                marca ou campanha.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
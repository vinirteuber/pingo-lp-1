'use client'
import Image from "next/image"
import { Clapperboard, Palette, ClipboardList, BarChart3 } from "lucide-react"

export default function PartnersSection() {
    const logos = [
        "/assets/Partners/logo1.svg",
        "/assets/Partners/logo2.svg",
        "/assets/Partners/logo3.svg",
        "/assets/Partners/logo4.svg",
        "/assets/Partners/logo5.svg",
        "/assets/Partners/logo6.svg",
        "/assets/Partners/logo7.svg",
        "/assets/Partners/logo8.svg",
        "/assets/Partners/logo9.svg",
        "/assets/Partners/logo10.svg",
        "/assets/Partners/logo11.svg",
        "/assets/Partners/logo12.svg",
    ]

    const logosSequence = () => logos.map((logo, i) => (
        <div key={i} className="mx-6 flex items-center justify-center flex-shrink-0">
            <Image
                src={logo}
                alt={`Logo ${i}`}
                width={80}
                height={40}
                className="object-contain transition-opacity invert brightness-0"
            />
        </div>
    ))

    return (
        <section className="bg-[#00285F] text-white py-20 flex flex-col items-center">
            <div className="w-full overflow-hidden mb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
                        <div className="w-full md:w-1/5 flex items-center md:items-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#00C9FF]">
                                <span className="block md:inline">Conheça os parceiros da</span>
                                <span className="block md:inline"> Pingo!</span>
                            </h2>
                        </div>

                        <div className="w-full md:w-4/5 overflow-hidden">
                            <div className="relative">
                                <div className="marquee">
                                    <div className="marquee-track">
                                        {logosSequence()}
                                        {logosSequence()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
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
                                <h4 className="text-[#00285F] text-lg md:text-xl font-normal mb-2">Cinema</h4>
                                <p className="text-[#00285F] text-sm md:text-base font-normal leading-relaxed">
                                    Produzimos filmes: curtos ou longos, horizontais ou verticais!
                                    Direção de arte e criação, direção de fotografia, produção,
                                    pós-produção (montagem, sound design, color grading, VFX, animações
                                    2D/3D e mais).
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 pb-8 border-b border-gray-200 md:border-b-0 md:pb-0">
                            <div className="bg-[#3DE6FF] p-3 rounded-xl">
                                <ClipboardList className="text-[#003672]" size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-[#00285F] text-lg md:text-xl font-normal mb-2">Produção Executiva</h4>
                                <p className="text-[#00285F] text-sm md:text-base font-normal leading-relaxed">
                                    Orçamentos para produção, curadoria de modelos/atores, logística,
                                    equipamentos/infra, locais, cenografia, figurino/styling, gestão de
                                    projetos e mais.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="bg-[#3DE6FF] p-3 rounded-xl">
                                <Palette className="text-[#003672]" size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-[#00285F] text-lg md:text-xl font-normal mb-2">Arte e Criação</h4>
                                <p className="text-[#00285F] text-sm md:text-base font-normal leading-relaxed">
                                    Identidade visual, direção criativa, key visual, ilustração,
                                    design de peças publicitárias/artes, design de embalagem, design de moda.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4">
                            <div className="bg-[#3DE6FF] p-3 rounded-xl">
                                <BarChart3 className="text-[#003672]" size={28} strokeWidth={2} />
                            </div>
                            <div>
                                <h4 className="text-[#00285F] text-lg md:text-xl font-normal mb-2">Resultados</h4>
                                <p className="text-[#00285F] text-sm md:text-base font-normal leading-relaxed">
                                    Entendemos o contexto e as metas, gerenciamos o projeto,
                                    executamos as entregas e tornamos real o universo idealizado da sua
                                    marca ou campanha.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 28s;
          }
        }

        @media (min-width: 769px) {
          .marquee-track {
            animation-duration: 18s;
          }
        }
      `}</style>
        </section>
    )
}
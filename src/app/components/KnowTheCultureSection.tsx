import { Crosshair, Lightbulb, Megaphone, Palette, ShieldCheck, UserStar } from "lucide-react";

export default function KnowTheCultureSection() {
    return (
        <div className="container mx-auto px-6 mb-20">
            <div className="bg-white text-black rounded-3xl shadow-xl p-10 md:p-12">
                <h3 className="text-center text-[#00285F] font-bold tracking-wide mb-10 text-base md:text-lg">
                    CONHEÇA A CULTURA QUE VAI TE ATENDER
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="flex flex-col items-start gap-4 pb-8 border-b border-gray-200 md:border-b-0 md:pb-0">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Crosshair className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Propósito</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal max-w-xl leading-relaxed">
                                Nosso propósito é injetar arte, criatividade e estratégia em tudo que tocamos. Existimos para elevar o nível da comunicação de marcas, tornando realidade o universo idealizado.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 pb-8 border-b border-gray-200 md:border-b-0 md:pb-0">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Lightbulb className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Empreendedores</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal max-w-xl leading-relaxed">
                                Somos um time de empreendedores, não de síndicos. Essa mentalidade muda tudo: somos proativos na busca por resultados, incansáveis na otimização de processos e obcecados por transformar cada projeto em um case de sucesso.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <ShieldCheck className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Responsabilidade</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl leading-relaxed">
                                O sucesso do seu negócio é nossa maior responsabilidade. Assumimos cada projeto com a mentalidade de donos, cuidando de cada detalhe, do planejamento à execução. Para nós, ser responsável é ser o guardião da visão e dos objetivos que traçamos juntos.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Megaphone className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Comunicação & Gestão</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl  leading-relaxed">
                                Clareza e alinhamento são a base de tudo. Acreditamos que a comunicação transparente e a gestão eficiente são os pilares que sustentam grandes projetos. &apos;Jogamos o jogo falando&apos;, garantindo que todos – nosso time e nossos clientes – estejam sempre na mesma página
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <UserStar className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Foco do Cliente</h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl  leading-relaxed">
                                Nós somos a empresa que vive o negócio junto com os nossos parceiros. Nosso foco é o foco do cliente e nosso time entende, adapta e executa o que for necessário.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Palette className="text-[#003672]" size={28} strokeWidth={2} />
                        </div>
                        <div>
                            <h4 className="text-[#00285F] text-2xl font-normal mb-2">Atletas criativos de alta Perfomance </h4>
                            <p className="text-[#00285F] text-sm md:text-base font-normal  max-w-xl  leading-relaxed">
                                Encaramos nosso trabalho como um esporte coletivo de alta performance. Somos atletas criativos: treinamos constantemente nossas habilidades, executamos com disciplina e nos comunicamos com intenção. A genialidade individual só brilha quando está a serviço de um resultado coletivo extraordinário.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client'
import { Send, UserRound, FileCheck2 } from "lucide-react"

export default function HowToContractSection() {
    return (
        <section className="bg-[#00285F] text-white py-24 flex flex-col items-center justify-center">
            <div className="w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="flex flex-col gap-6">
                    <div className="bg-white text-[#003672] rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Send className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Envie sua ideia</h4>
                            <p className="text-sm">
                                Conte-nos sobre seu projeto com nosso formulário rápido,
                                adoramos desafios criativos!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-[#003672] rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <UserRound className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Primeiros contatos</h4>
                            <p className="text-sm">
                                Entramos em contato com você logo em seguida para entender o
                                contexto e ver se o projeto se encaixa no nosso propósito!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-[#003672] rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <FileCheck2 className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Plano sob medida</h4>
                            <p className="text-sm">
                                Criamos uma proposta personalizada, assinamos o contrato e
                                começamos a produção. Sua visão vira realidade com resultados
                                que impressionam!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  text-left md:pl-10">
                    <h2 className="text-3xl md:text-4xl top-0 font-bold text-[#3DE6FF] mb-4">
                        Como Contratar?
                    </h2>
                    <p className="text-lg text-[#FAFFE3] font-normal leading-relaxed">
                        Na Pingo! acreditamos que grandes
                        ideias merecem um time apaixonado. Selecionamos projetos que nos
                        inspirem e adoramos transformar sua visão em algo incrível.
                    </p>
                </div>
            </div>
        </section>
    )
}

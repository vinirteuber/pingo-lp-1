'use client'
import { Send, Users, ClipboardList } from "lucide-react"

export default function HowToContractSection() {

    return (
        <section className=" text-white py-24 flex flex-col items-center justify-center">
            <div className="w-full container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="flex flex-col gap-6">
                    <div className="bg-white text-[#003672] rounded-2xl p-3 flex items-start gap-4 max-w-[650px] h-full shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Send className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Envie sua ideia</h4>
                            <p className="text-[14px] leading-[178%] tracking-[0.01em] font-normal max-w-[550px] h-[50px] text-[#003672]/70">

                                Conte-nos sobre seu projeto com nosso formulário rápido,
                                adoramos desafios criativos!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-[#003672] rounded-2xl p-3 flex items-start gap-4 max-w-[650px] h-full shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <Users className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Primeiros contatos</h4>
                            <p className="text-[14px] leading-[178%] tracking-[0.01em] font-normal max-w-[550px] h-[50px] text-[#003672]/70">

                                Entramos em contato com você logo em seguida para entendermos o
                                contexto e se o projeto se encaixa no nosso propósito!
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-[#003672] rounded-2xl p-3 flex items-start gap-4 max-w-[650px] h-full shadow-md hover:shadow-lg transition-all">
                        <div className="bg-[#3DE6FF] p-3 rounded-xl">
                            <ClipboardList className="text-[#003672]" size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-normal mb-1">Plano sob medida</h4>
                            <p className="text-[14px] leading-[178%] tracking-[0.01em] font-normal max-w-[500px] h-[50px] text-[#003672]/70 mb-5">

                                Depois, criamos uma proposta personalizada, assinamos o contrato e começamos a produção. Sua visão vira realidade com resultados que impressionam!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col  text-left md:pl-10">
                    <h2 className="text-3xl md:text-4xl top-0 font-semibold text-[#3DE6FF] mb-4">
                        Como Contratar?
                    </h2>
                    <p className=" font-normal text-base leading-[1.78] tracking-[0.01em] text-[#FAFFE3] max-w-[450px]">
                        Na Pingo! acreditamos que grandes ideias merecem um time apaixonado. Selecionamos projetos que nos
                        inspirem e adoramos transformar sua visão em algo incrível.
                    </p>
                </div>
            </div>
        </section>
    )
}

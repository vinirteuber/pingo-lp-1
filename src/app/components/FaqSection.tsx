'use client'

import { useState } from "react"
import { PlusCircle, MinusCircle } from "lucide-react"

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        "question": "Como locar o Estúdio Pingo!?",
        "answer": "Por Whatsapp ou formulário do site, faça seu pedido, em seguida preencha nosso cadastro digital e pague o sinal para confirmar sua reserva."
    },
    {
        "question": "A locação inclui equipamentos e equipe técnica?",
        "answer": "Existe a opção de locar com ou sem equipamentos inclusos e sempre deixamos um assistente de estúdio disponível. Para trabalhos técnicos de elétrica, mecânica ou de tecnologia, entre em contato com nosso time para recomendarmos nossos parceiros."
    },
    {
        "question": "Cancelamento/remarcação: como funciona?",
        "answer": "É necessário aviso com 48h de antecedência; é possível remarcar 1 vez; sem aviso perde o sinal. Datas já remarcadas não podem ser canceladas ou remarcadas novamente (exige novo sinal)."
    },
    {
        "question": "Precisa agendar com antecedência?",
        "answer": "Recomenda-se 7 dias (ou mais em alta demanda)."
    },
    {
        "question": "Cliente chega antes: alguém recebe?",
        "answer": "Sim! Nosso time de atendimento sempre espera por vocês."
    },
    {
        "question": "Posso atender vários(as) clientes no mesmo dia dentro do meu horário?",
        "answer": "Sim; fotógrafos costumam pegar pacotes longos para atender mais de um cliente no período."
    },
    {
        "question": "Posso personalizar cenário?",
        "answer": "Sim, fique à vontade para criar! Consulte nosso time para entender sobre taxas de limpeza e responsabilidades durante o trabalho."
    },
    {
        "question": "Posso ficar horas além do que contratei?",
        "answer": "Sim, mediante hora extra — apenas se o horário seguinte estiver livre."
    },
    {
        "question": "Aceita pagamento em cartão?",
        "answer": "Aceitamos cartão de débito para todos os valores, crédito em 1x (uma vez) quando contratado meia diária (4 horas) ou mais. Há repasse de taxas."
    },
    {
        "question": "Tem estacionamento?",
        "answer": "Sim! Monitorado por câmera."
    }

]

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="w-full py-10 text-white">
            <div className="container mx-auto px-6 ">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#65D2FF]">
                    Dúvidas Frequentes
                </h2>

                <div className="flex flex-col gap-3">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => toggle(index)}
                            className={`cursor-pointer rounded-lg transition-all overflow-hidden ${openIndex === index ? "bg-[#FBFE6E] text-blue-900" : "bg-[#08468A]"
                                }`}
                        >
                            <div className="flex items-center px-5 py-5">
                                {openIndex === index ? (
                                    <MinusCircle className="w-5 h-5 mr-5" />
                                ) : (
                                    <PlusCircle className="w-5 h-5 mr-5" />
                                )}
                                <h3 className="text-base md:text-lg font-medium">{item.question}</h3>
                            </div>

                            {openIndex === index && (
                                <div className="px-15 pb-4 text-sm md:text-base font-normal">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

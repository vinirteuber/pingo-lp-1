'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function BestInfraVariationSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    const stats = [
        { number: 240, label: "Captações" },
        { number: 300, label: "Vídeos pílulas verticais" },
        { number: 100, label: "Campanhas completas" },
        { number: 70, label: "Clientes satisfeitos" },
        { number: 240, label: "Shortfilms horizontais" },
    ]

    return (
        <section ref={ref} className="relative w-full mx-auto px-6 container py-20 text-white overflow-hidden">
            <div className="mx-auto flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-2 w-full lg:w-1/2">
                    <div className="rounded-[24px] overflow-hidden">
                        <Image
                            src="/assets/bestinfra.svg"
                            alt="Melhor infraestrutura de estúdio de Joinville"
                            width={700}
                            height={400}
                            className="object-cover "
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4 max-w-lg ml-10 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#3DE6FF]">
                        A Melhor Infraestrutura de Estúdio de Joinville!
                    </h2>
                    <p className="font-normal text-base leading-[1.78] tracking-[0.01em] text-[#FAFFE3]">
                        Amplo estúdio com 25m² de fundo infinito de alvenaria de 5m x 5m x 3m
                        em um galpão de 100m² preparado para trabalhos profissionais.
                    </p>
                    <p className="font-normal text-base leading-[1.78] tracking-[0.01em] text-[#FAFFE3]">
                        Suporta estruturas de cenografia, iluminação, veículos e todo tipo de trabalho com peso.
                    </p>
                </div>
            </div>

            <div className="px-6 mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15">
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <h3 className="text-[42pt] font-semibold text-[#3DE6FF]">
                            {inView && <CountUp end={item.number} duration={2} />}+
                        </h3>
                        <p className="text-[#FAFFE3] mt-2 text-sm md:text-base font-medium">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const team = [
    { name: 'André Sato', role: 'Diretor Criativo', img: '/assets/team/andresato.jpeg' },
    { name: 'Augusto Prim', role: 'Designer', img: '/assets/team/augustoprim.jpeg' },
    { name: 'Daniel Melara', role: 'Pós Produção', img: '/assets/team/danielmelara.jpeg' },
    { name: 'Mateus Mautone', role: 'Produtor Executivo', img: '/assets/team/mateusmautone.jpeg' },
    { name: 'Henrique Leandro', role: 'Diretor Executivo', img: '/assets/team/henriqueleandro.jpeg' },
    { name: 'Murilo Bernardo', role: 'Diretor de Produção', img: '/assets/team/murilobernardo.jpeg' },
]

export default function TeamCarousel() {
    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = marqueeRef.current
        if (!el) return

        let current = 0
        const speed = 0.5
        const loop = () => {
            current -= speed
            if (Math.abs(current) >= el.scrollWidth / 2) current = 0
            el.style.transform = `translateX(${current}px)`
            requestAnimationFrame(loop)
        }
        loop()
    }, [])

    return (
        <div className="relative w-full overflow-hidden py-10">
            <h2 className="text-[#3DE6FF] text-3xl font-semibold mb-8 px-[15rem]">
                Conheça nosso time
            </h2>
            <div className="relative w-full overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="flex gap-6"
                    style={{
                        width: 'max-content',
                        willChange: 'transform',
                        transition: 'none',
                    }}
                >
                    {[...team, ...team].map((member, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[30px] shadow-2xl overflow-hidden flex-shrink-0"
                            style={{
                                width: '362px',
                                maxWidth: '362px',
                            }}
                        >
                            <Image
                                src={member.img}
                                alt={member.name}
                                width={362}
                                height={362}
                                className="object-fill w-[362px]"
                            />
                            <div className="p-4 flex align-center justify-between">
                                <h3 className="font-bold text-lg text-[#0A2166]">
                                    {member.name}
                                </h3>
                                <p className="text-[#0A2166]/70 mt-1 text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

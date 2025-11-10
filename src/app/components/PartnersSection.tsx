'use client'
import Image from "next/image"

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
        <section className="text-white mt-20 flex flex-col items-center">
            <div className="w-full overflow-hidden mb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
                        <div className="w-full md:w-1/3 flex items-center md:items-center">
                            <h2 className="text-4xl font-semibold text-[#3DE6FF]">
                                <span className="block md:inline">Conheça os parceiros </span> <br />
                                <span className="block md:inline">da Pingo!</span>
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


        </section>
    )
}
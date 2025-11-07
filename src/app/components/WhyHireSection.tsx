'use client'
import Image from "next/image"
import Link from "next/link"

export default function WhyHireSection() {
    return (
        <section className="bg-[#00285F] flex justify-center align-center py-24 overflow-hidden">
            <div className="container flex justify-center align-center px-6">
                <div className="bg-[#3DE6FF] rounded-3xl w-full container mx-auto px-6 text-[#00285F] relative overflow-visible">
                    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between relative">
                        <div className="w-full md:w-[50%] z-20 relative flex flex-col justify-center p-8">
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-3">
                                Do simples ao cinema!
                            </h2>
                            <p className="text-normal mb-6 md:mb-8">
                                Vamos construir algo juntos.
                            </p>

                            <Link
                                href="https://wa.me/5547992743083"
                                target="_blank"
                                className="inline-flex items-center gap-2 bg-[#FFEA00] text-[#00285F] font-semibold px-6 py-3 rounded-lg hover:bg-[#fbe83f] transition-all w-fit"
                            >
                                <span>Avalie meu projeto</span>
                                <Image src="/assets/pingowhats.svg" alt="WhatsApp" width={20} height={20} />
                            </Link>
                        </div>

                        <div className=" right-0 bottom-0  hidden md:flex items-end justify-center">
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/assets/pingoPhoneMockup.svg"
                                    alt="Mockup Pingo"
                                    width={400}
                                    height={140}
                                    className="relative z-10 mr-10 drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="md:hidden flex items-center justify-center mt-8 relative">
                            <Image
                                src="/assets/pingoPhoneMockup.svg"
                                alt="Mockup Pingo"
                                width={260}
                                height={460}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
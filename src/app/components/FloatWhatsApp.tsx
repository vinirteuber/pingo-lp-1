'use client'
import Image from "next/image"

export default function FloatingWhatsApp() {
    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-50">
            <a
                href="https://wa.me/5547992743083"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:scale-105 transition-transform"

            >
                <Image
                    src="/assets/whatsapp.svg"
                    alt="WhatsApp"
                    width={60}
                    height={60}
                />
            </a>

            <a href="https://wa.me/5547992743083" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/assets/henrique.svg"
                        alt="Perfil"
                        width={70}
                        height={70}
                        className="object-cover"
                    />
                </div>
            </a>
        </div>
    )
}

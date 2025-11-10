'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 0);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const isActive = (path: string) => pathname === path

    return (
        <>
            <header
                style={{
                    backdropFilter: scrolled ? 'blur(30px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(30px)' : 'none',
                    backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.5)' : 'transparent'
                }}
                className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
                <div className={"mx-auto flex max-w-8xl items-center justify-between gap-6 px-4 md:px-8 lg:px-[8rem] " + (scrolled ? "py-3 md:py-2 transition-all duration-300" : "py-2 md:py-3")}>

                    <Image src="/assets/logo.svg" alt="Pingo Logo" width={120} height={60} className="relative z-[100] md:w-[200px] md:h-[80px]" />

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative z-[100] text-[#FAFFE3] p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <ul className="hidden md:flex text-[#FAFFE3] text-lg relative z-[100]">
                        <Link href="/">
                            <li className={`mr-10 ${isActive('/') ? 'font-bold' : ''}`}>Home</li>
                        </Link>
                        <Link href="/portifolio">
                            <li className={`mr-10 ${isActive('/portifolio') ? 'font-bold' : ''}`}>Portifólio</li>
                        </Link>
                        <Link href="/estudio">
                            <li className={`mr-10 ${isActive('/estudio') ? 'font-bold' : ''}`}>Estúdio</li>
                        </Link>
                        <Link href="/sobrenos">
                            <li className={`mr-10 ${isActive('/sobrenos') ? 'font-bold' : ''}`}>Sobre nós</li>
                        </Link>
                        <Link href="https://wa.me/5547992743083" target="_blank">
                            <li>Contato</li>
                        </Link>
                    </ul>

                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl">
                        <ul className="flex flex-col text-[#FAFFE3] text-lg px-4 py-6 space-y-4">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                <li className={`py-2 ${isActive('/') ? 'font-bold' : ''}`}>Home</li>
                            </Link>
                            <Link href="/portifolio" onClick={() => setMobileMenuOpen(false)}>
                                <li className={`py-2 ${isActive('/portifolio') ? 'font-bold' : ''}`}>Portifólio</li>
                            </Link>
                            <Link href="/estudio" onClick={() => setMobileMenuOpen(false)}>
                                <li className={`py-2 ${isActive('/estudio') ? 'font-bold' : ''}`}>Estúdio</li>
                            </Link>
                            <Link href="/sobrenos" onClick={() => setMobileMenuOpen(false)}>
                                <li className={`py-2 ${isActive('/sobrenos') ? 'font-bold' : ''}`}>Sobre nós</li>
                            </Link>
                            <Link href="https://wa.me/5547992743083" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                                <li className="py-2">Contato</li>
                            </Link>
                        </ul>
                    </div>
                )}
            </header>
            <div className="relative w-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full object-cover h-[50vh] md:h-auto"
                >
                    <source src="/assets/herovideo.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos em HTML5.
                </video>
                <Image
                    src="/assets/pingoHeroImage.svg"
                    alt="User Avatar"
                    width={180}
                    style={{
                        animation: "spin 45s linear infinite"
                    }}
                    height={180}
                    className="min-w-[200px] md:min-w-[350px] lg:min-w-[500px] absolute left-4 md:left-8 bottom-10 md:bottom-20 select-none pointer-events-none"
                />
            </div>
        </>
    )
}
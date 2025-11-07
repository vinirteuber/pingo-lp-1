import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div>
            <footer className="py-6 px-6 md:px-[10rem]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <Image
                        src="/assets/logo.svg"
                        alt="Pingo Estudio Criativo"
                        width={150}
                        height={50}
                    />
                    <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-[#FAFFE3] font-semibold text-sm md:text-base">
                        <li>INSTAGRAM</li>
                        <li>LINKEDIN</li>
                        <li>YOUTUBE</li>
                        <li>FACEBOOK</li>
                    </ul>
                </div>
            </footer>

            <div className="bg-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-6 md:px-[10rem] py-6 text-[#003772] text-xs md:text-sm text-center md:text-left">
                <span>
                    Pingo! Estúdios/A: 61.186.490/0001-57 | Rua Guaíra, 994, Iririú, Joinville / SC - CEP 89227-445
                    <br className="hidden md:block" />
                    Pingo! Estúdios - Todos os direitos reservados.
                </span>
                <Link href="https://solanis.ai" target="_blank">
                    <Image
                        src="/assets/solanis.svg"
                        alt="Desenvolvido pela Solanis"
                        width={200}
                        height={100}
                        className="mx-auto md:mx-0"
                    />
                </Link>
            </div>
        </div>
    );
}

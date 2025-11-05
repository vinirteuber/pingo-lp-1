import Image from "next/image";

export default function Footer() {
    return (
        <div className="">
            <footer className=" py-6 px-[10rem]">
                <div className="flex justify-between">
                    <Image src="/assets/logo.svg" alt="Pingo Estudio Criativo" width={150} height={50} />
                    <ul className="flex gap-3 text-[#FAFFE3] font-semibold">
                        <li>INSTAGRAM</li>
                        <li>LINKEDIN</li>
                        <li>YOUTUBE</li>
                        <li>FACEBOOK</li>
                    </ul>
                </div>
                {/* <p>&copy; {new Date().getFullYear()} Pingo Estudio Criativo. Todos os direitos reservados.</p> */}
            </footer>
            <div className="bg-white flex justify-between items-center px-[10rem] py-4 text-[#003772] text-sm">
                <span>Pingo! Estúdios/A: 61.186.490/0001-57 | Rua Guaíra, 994, Iririú, Joinville / SC - CEP 89227-445 <br />
                    Pingo! Estúdios - Todos os direitos reservados.</span>
                <Image src="/assets/solanis.svg" alt="Desenvolvido pela Solanis" width={200} height={100} />
            </div>
        </div>
    );
}
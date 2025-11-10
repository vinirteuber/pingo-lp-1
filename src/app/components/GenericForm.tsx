import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface GenericFormProps {
    title?: string;
    subtitle?: string;
    showMap?: boolean;
    mapSrc?: string;
}

export default function GenericForm({
    title = "Quer começar?",
    subtitle = "Envie sua ideia agora!",
    showMap = false,
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.9087158111097!2d-48.8194458!3d-26.264625900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deae1881777265%3A0x3e61077d1fa7803e!2sR.%20Gua%C3%ADra%2C%20994%20-%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089227-445!5e0!3m2!1spt-BR!2sbr!4v1762782338863!5m2!1spt-BR!2sbr"
}: GenericFormProps) {
    return (
        <div className="relative w-full mb-10">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
                <div className="flex flex-col container mx-auto px-6 md:flex-row">
                    <div className="flex-1 md:ml-10 flex flex-col justify-center text-center md:text-left mt-8 md:mt-0">
                        <h2 className="text-3xl md:text-4xl font-normal text-blue-900 mb-2">
                            {title}
                        </h2>
                        <p className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                            {subtitle}
                        </p>
                        <p className="text-sm md:text-normal text-blue-900 leading-relaxed">
                            Nosso tempo médio de resposta em<br className="hidden md:block" />
                            horário comercial é 30 minutos.
                        </p>
                    </div>

                    <div className="flex-1 py-10 md:py-[5rem]">
                        <h3 className="text-left text-xl md:text-2xl font-normal text-gray-700 mb-6">
                            Preencha o formulário:
                        </h3>

                        <form className="space-y-3">
                            <Input
                                placeholder="Seu nome"
                                className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input
                                    placeholder="Telefone"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                                <Input
                                    placeholder="Email"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input
                                    placeholder="Cargo/Função"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                                <Input
                                    placeholder="Segmento"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                            </div>

                            <Textarea
                                placeholder="Escreva a sua mensagem"
                                className="bg-gray-100 border-0 min-h-[100px] text-sm rounded-md shadow-sm resize-none"
                            />

                            <Button
                                type="submit"
                                className="w-full md:w-auto bg-[#003772] text-white font-semibold h-11 rounded-lg mt-4"
                            >
                                Seguir com a locação
                            </Button>
                        </form>
                    </div>
                </div>

                {showMap && (
                    <div className="w-full h-[600px]">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: "40px 40px 0px 0px" }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}

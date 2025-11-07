import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function GenericForm() {
    return (
        <div className="relative w-full mb-10">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1 ml-[13rem] flex flex-col justify-center">
                        <h2 className="text-4xl font-normal text-blue-900 mb-2">
                            Quer começar?
                        </h2>
                        <p className="text-4xl font-bold text-blue-900 mb-6">
                            Envie sua ideia agora!
                        </p>
                        <p className="text-normal text-blue-900 leading-relaxed">
                            Nosso tempo médio de resposta em<br />
                            horário comercial é 30 minutos.
                        </p>
                    </div>

                    <div className="flex-1 px-[15rem] py-[5rem]">
                        <h3 className="text-left text-2xl font-normal text-gray-700 mb-6">
                            Preencha o formulário:
                        </h3>

                        <form className="space-y-3">
                            <Input
                                placeholder="Seu nome"
                                className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <Input
                                    placeholder="Telefone"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                                <Input
                                    placeholder="Email"
                                    className="bg-gray-100 border-0 h-10 text-sm rounded-md shadow-sm"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
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
                                className=" bg-[#003772] text-white font-semibold h-11 rounded-lg mt-4"
                            >
                                Seguir com a locação
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
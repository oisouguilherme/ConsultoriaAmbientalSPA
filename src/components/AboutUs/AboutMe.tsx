import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 items-center">
        <div className="px-4 h-full">
          <Image
            src="/edvaldo2.jpg"
            alt="Imagem Teste"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-4 sm:p-12">
          <Subtitle subtitle="Conheça o Especialista em Consultoria Ambiental" />
          <Title title="Sobre Edivaldo Antonio Dourado da Silva" />
          <p className="text-lg pt-2 italic">Crbio4-134316/D</p>
          <p className="py-8">
            Olá! Sou Edivaldo Antonio Dourado da Silva, um apaixonado por
            conservação ambiental e sustentabilidade. Com uma trajetória de anos
            dedicados à consultoria ambiental, tenho o prazer de oferecer meu
            conhecimento e experiência para empresas e organizações que buscam
            soluções eficientes e responsáveis para lidar com questões
            ambientais. <br /> Desde o início da minha carreira, meu objetivo tem sido
            promover a harmonia entre o desenvolvimento humano e a preservação
            do meio ambiente. Acredito que é possível alcançar um futuro melhor
            por meio da adoção de práticas sustentáveis e da conscientização
            sobre a importância da conservação dos recursos naturais. <br />Com uma
            abordagem personalizada, trabalho em parceria com meus clientes para
            identificar os desafios ambientais específicos que enfrentam.
          </p>
        </div>
      </div>
    </div>
  );
}

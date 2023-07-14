import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";
import Image from "next/image";

export function AboutConsultor() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto text-center px-4 pt-20 pb-12">
        <Subtitle subtitle="Transformando a Natureza em Negócios Lucrativos"/>
        <Title title="Descubra o Mundo da Consultoria Ambiental"/>
      </div>
      <div className="max-w-6xl mx-auto pb-20 grid md:grid-cols-2 items-center">
        <div className="px-4 flex items-center justify-center">
          <Image
            src="/consultor.jpg"
            alt="Imagem Teste"
            width={800}
            height={800}
            className="w-full object-cover"
          />
        </div>
        <div className="bg-white p-4 sm:p-12">
          <Subtitle subtitle="O que faz um consultor ambiental?" />
          <Title title="Descubra como essa profissão molda um mundo mais verde e impulsiona o crescimento econômico." />
          <p className="py-8">
            Um consultor ambiental é um profissional especializado em questões
            ambientais que oferece serviços de assessoria e consultoria. Suas
            funções incluem avaliação e gerenciamento de impactos ambientais,
            licenciamento e conformidade, desenvolvimento de planos e políticas
            ambientais, gestão de resíduos e recursos naturais, auditoria e
            certificação ambiental, além de educação e treinamento. O objetivo
            principal é promover práticas sustentáveis e proteger o meio
            ambiente.
          </p>
        </div>
      </div>
    </div>
  );
}

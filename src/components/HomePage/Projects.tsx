import Image from "next/image";
import { Title } from "../Utils/Title";
import { Subtitle } from "../Utils/Subtitle";

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center py-20">
      <Subtitle subtitle="Conheça as soluções inovadoras que desenvolvemos para nossos clientes" />
      <Title title="Experiência em Projetos Ambientais de Sucesso" />
      <div className="grid md:grid-cols-2 mt-12">
        <div className="bg-gray-100 text-start text-lg p-12">
          <Title title="Transformando Desafios em Resultados Sustentáveis" />
          <p className="text-base pt-8">
            Desenvolvemos soluções personalizadas que equilibram as necessidades
            do negócio com a preservação do meio ambiente.
          </p>
          <p className="text-base pb-8 pt-2">
            Nossos projetos alcançaram resultados significativos, reduzindo o
            impacto ambiental e proporcionando benefícios tangíveis. Estamos
            comprometidos em entregar soluções eficientes e criar um legado
            sustentável.
          </p>
          <p className="font-medium text-sm">
            - Reduzimos as emissões de carbono em mais de 30% em nossos projetos
            anteriores.
          </p>
          <p className="font-medium text-sm">
            - Alcançamos uma redução de consumo de água de 40% em instalações
            industriais por meio de nossas soluções inovadoras.
          </p>
        </div>
        <Image
          src="/resultado.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <Image
          src="/resultado1.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src="/resultado2.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src="/resultado3.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import { Title } from "../Utils/Title";
import { Subtitle } from "../Utils/Subtitle";

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center py-20">
      <Subtitle subtitle="Conheça as soluções inovadoras que desenvolvemos para nossos clientes" />
      <Title title="Experiência em Projetos Ambientais de Sucesso" />
      <div className="grid md:grid-cols-2 mt-12">
        <div className="bg-gray-100 text-start text-lg p-4 sm:p-12">
          <Title title="Implantação de Cultura de Abacaxi no vale do Rio Paranã no Município de São João d' Aliança." />
          <p className="text-base pt-8">
            A cultura do abacaxi é uma atividade agrícola de grande importância econômica e social, proporcionando tanto a produção de frutos para consumo in natura como para a indústria de sucos e alimentos processados.
          </p>
          <p className="text-base pt-2">
            Este projeto teve como objetivo a implantação de uma cultura de abacaxi, visando o estabelecimento de um sistema produtivo eficiente, sustentável e rentável.
          </p>
        </div>
        <Image
          src="/abacaxi3.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <Image
          src="/abacaxi.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src="/abacaxi2.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src="/abacaxi4.jpg"
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
  );
}

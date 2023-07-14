import { CardProjeto } from "@/components/ProjectsPage/CardProjeto";
import { HeaderProjects } from "@/components/ProjectsPage/HeaderProjects";
import { Subtitle } from "@/components/Utils/Subtitle";
import { Title } from "@/components/Utils/Title";

export default function Projetos() {
  return (
    <div>
      <HeaderProjects />
      <div className="max-w-6xl mx-auto text-center pt-20">
        <Subtitle subtitle="Conheça as soluções inovadoras que desenvolvemos para nossos clientes" />
        <Title title="Experiência em Projetos Ambientais de Sucesso" />
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-20 flex gap-12 flex-wrap justify-center">
        <CardProjeto
          title="Inventário da Flora do Cerrado em Cavalcante estado de Goiás"
          text1="O Cerrado é um dos biomas mais ricos em biodiversidade do mundo e é reconhecido como uma das principais savanas tropicais. No entanto, o Cerrado tem sido ameaçado por diversas atividades humanas, como desmatamento e expansão agrícola."
          text2="Este projeto teve como objetivo realizar um inventário da flora do Cerrado, visando a catalogação e a preservação da diversidade vegetal existente nesse bioma."
          image1="/flora.jpg"
          image2="/flora1.jpg"
          image3="/flora2.jpg"
          image4="/flora3.jpg"
        />
        <CardProjeto
          title="Implantação de Cultura de Abacaxi no vale do Rio Paranã no Município de São João d' Aliança"
          text1="A cultura do abacaxi é uma atividade agrícola de grande importância econômica e social, proporcionando tanto a produção de frutos para consumo in natura como para a indústria de sucos e alimentos processados."
          text2="Este projeto teve como objetivo a implantação de uma cultura de abacaxi, visando o estabelecimento de um sistema produtivo eficiente, sustentável e rentável."
          image1="/abacaxi3.jpg"
          image2="/abacaxi2.jpg"
          image3="/abacaxi.jpg"
          image4="/abacaxi4.jpg"
        />
      </div>
    </div>
  );
}

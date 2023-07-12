import Image from "next/image";
import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";
import { IconChecked } from "@/assets/Icons";

export function MainAbout() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 grid gap-12 md:grid-cols-2 items-center">
        <div className="bg-white p-4 sm:p-12">
          <Subtitle subtitle="Experiência em Consultoria Ambiental de Alto Nível" />
          <Title title="Guiando Empresas Rumo à Sustentabilidade" />
          <p className="py-8">
            Com anos de atuação na área de consultoria ambiental, tenho o
            compromisso de oferecer soluções personalizadas e inovadoras para
            empresas que buscam uma gestão ambiental eficiente e sustentável.
            Meu trabalho consiste em identificar os desafios ambientais
            enfrentados pelas organizações e desenvolver estratégias para
            minimizar impactos negativos, promovendo a adoção de práticas
            sustentáveis em suas operações.
          </p>
          <div className="flex gap-4 items-center text-sm">
            <div className="bg-green-500 text-white rounded-full p-3">
              <IconChecked />
            </div>
            <p>
              Minha formação em Biologia e vasto conhecimento nas
              regulamentações ambientais garantem uma abordagem fundamentada e
              atualizada.
            </p>
          </div>
          <div className="flex gap-4 items-center text-sm pt-2">
            <div className="bg-green-500 text-white rounded-full p-3">
              <IconChecked />
            </div>
            <p>
              Com diversos projetos bem-sucedidos no currículo, já auxiliei
              empresas de diversos setores a alcançar metas de sustentabilidade
              e obter certificações ambientais
            </p>
          </div>
        </div>

        <div className="px-4">
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/e-jSRKsFam4"
            title="chalé Ribeirão no município de São João d&#39; aliança Goiás"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

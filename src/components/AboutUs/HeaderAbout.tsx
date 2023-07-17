import { ServiceCard } from "../HomePage/ServiceHome/ServiceCard";
import { Title } from "../Utils/Title";

export function HeaderAbout() {
  return (
    <div>
      <div className="text-center text-white bg-[url('/arvores.jpg')] bg-cover">
        <div className="bg-green-800 py-24 bg-opacity-90 ">
          <div className="max-w-4xl px-4 mx-auto">
            <p className="sm:text-lg text-yellow-400">
              Consultoria Ambiental Especializada
            </p>
            <Title title="Experiência em Conservação Ambiental e Sustentabilidade" />
          </div>
        </div>
      </div>

      <div className="flex gap-12 text-center justify-center flex-wrap py-12 max-w-6xl mx-auto">
        <ServiceCard
          image="/rio.webp"
          title="Gestão Sustentável"
          subtitle="Promova a sustentabilidade em seu negócio com soluções eficientes de gestão ambiental. Reduza os impactos e otimize recursos para um futuro mais verde."
        />
        <ServiceCard
          image="/licenciamento.webp"
          title="Licenciamento Ambiental"
          subtitle="Conte com nosso expertise em licenciamento ambiental para garantir o cumprimento das regulamentações e o desenvolvimento sustentável do seu empreendimento."
        />
        <ServiceCard
          image="/solar.webp"
          title="Energias Renováveis"
          subtitle="Explore as possibilidades das energias renováveis para impulsionar sua empresa rumo a um futuro mais sustentável. Reduza custos e contribua para um planeta mais limpo."
        />
        <ServiceCard
            image="/ecoturismo.jpg"
            title="Ecoturismo"
            subtitle="Desbrave a natureza com consciência através do ecoturismo. Nossa consultoria ambiental está aqui para oferecer experiências de viagem sustentáveis, preservando os tesouros naturais e apoiando as comunidades locais."
          />
      </div>
    </div>
  );
}

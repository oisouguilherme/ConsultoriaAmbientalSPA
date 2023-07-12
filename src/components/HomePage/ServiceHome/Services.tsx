import { Title } from "@/components/Utils/Title";
import { ServiceCard } from "./ServiceCard";
import { Subtitle } from "@/components/Utils/Subtitle";

export function Services(){
  return(
    <div>
      <div className="max-w-6xl mx-auto px-4 text-center py-20">
        <Subtitle subtitle="Ajudo você a atingir a sustentabilidade e o cumprimento das normas ambientais"/>
        <Title title="Soluções Ambientais Personalizadas para o seu Negócio"/>
        <div className="flex gap-4 justify-around flex-wrap pt-12">
          <ServiceCard title="Gestão Sustentável" subtitle="Promova a sustentabilidade em seu negócio com soluções eficientes de gestão ambiental. Reduza os impactos e otimize recursos para um futuro mais verde."/>
          <ServiceCard title="Licenciamento Ambiental" subtitle="Conte com nosso expertise em licenciamento ambiental para garantir o cumprimento das regulamentações e o desenvolvimento sustentável do seu empreendimento."/>
          <ServiceCard title="Energias Renováveis" subtitle="Explore as possibilidades das energias renováveis para impulsionar sua empresa rumo a um futuro mais sustentável. Reduza custos e contribua para um planeta mais limpo."/>
        </div>
      </div>
    </div>
  )
}
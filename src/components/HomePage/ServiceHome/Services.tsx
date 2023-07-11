import { Title } from "@/components/Utils/Title";
import { ServiceCard } from "./ServiceCard";

export function Services(){
  return(
    <div>
      <div className="max-w-6xl mx-auto px-4 text-center text-lg py-20">
        <p className="text-green-600">Ajudamos você a atingir a sustentabilidade e o cumprimento das normas ambientais</p>
        <Title title="Soluções Ambientais Personalizadas para o seu Negócio"/>
        <div className="flex gap-4 justify-around flex-wrap pt-12">
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </div>
      </div>
    </div>
  )
}
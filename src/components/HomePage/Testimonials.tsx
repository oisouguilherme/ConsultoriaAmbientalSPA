import Image from "next/image";
import { Title } from "../Utils/Title";

export function Testimonials() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-lg flex flex-col items-center">
        <Title title="Depoimentos de Clientes Satisfeitos" />
        <p className="py-12 max-w-xl italic">
          "Demonstrou um profundo comprometimento com a sustentabilidade e sua experiência foi inestimável para o sucesso do meu empreendimento. Recomendo fortemente os serviços do Edivaldo para qualquer pessoa que esteja buscando uma abordagem responsável e consciente em seus projetos ambientais."
        </p>
      </div>
    </div>
  );
}

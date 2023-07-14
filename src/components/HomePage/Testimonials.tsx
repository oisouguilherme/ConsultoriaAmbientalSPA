import Image from "next/image";
import { Title } from "../Utils/Title";

export function Testimonials() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center text-lg flex flex-col items-center">
        <Title title="Depoimentos de Clientes Satisfeitos" />
        <p className="py-12 max-w-xl italic">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minus
          repudiandae illo alias, optio id autem ipsa! Aliquam accusamus fugiat,
          ratione quidem veritatis adipisci ducimus a eum sequi expedita fugit."
        </p>
        <div className="flex flex-col items-center font-medium">
          <Image
            src="/imageTest.webp"
            alt="Imagem Teste"
            width={320}
            height={320}
            className="w-16 h-16 rounded-full object-cover"
          />
          <p>Guilherme H</p>
        </div>
      </div>
    </div>
  );
}

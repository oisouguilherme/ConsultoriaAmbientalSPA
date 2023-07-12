import Image from "next/image";
import { Title } from "../Utils/Title";
import { Subtitle } from "../Utils/Subtitle";

export function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center py-20">
      <Subtitle subtitle="Conheça as soluções inovadoras que desenvolvemos para nossos clientes" />
      <Title title="Experiência em Projetos Ambientais de Sucesso"/>
      <div className="grid md:grid-cols-2 mt-12">
        <div className="bg-gray-100 text-start text-lg p-12 relative">
          <p>Conheça as soluções inovadoras que desenvolvemos para nossos clientes</p>
          <Title title="Experiência em Projetos Ambientais de Sucesso"/>
          <p className="text-base py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora
            rem, doloribus sunt repellat iste?
          </p>
          <p className="font-bold">
            Goal: <span className="font-medium">1000000 USD</span>
          </p>
          <p className="font-bold">
            Relsed: <span className="font-medium">2000000 USD</span>
          </p>
          <div className="bg-green-700 rounded-full items-center justify-center w-20 h-20 absolute text-xs text-white font-medium top-40 -right-10 text-center hidden md:flex">
            10% <br /> Donated
          </div>
        </div>
        <Image
          src="/imageTest.webp"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <Image
          src="/imageTest.webp"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-full"
        />
        <Image
          src="/imageTest.webp"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-full"
        />
        <Image
          src="/imageTest.webp"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-full"
        />
      </div>
    </div>
  );
}

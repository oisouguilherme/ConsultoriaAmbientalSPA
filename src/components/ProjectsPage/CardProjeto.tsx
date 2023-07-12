import Image from "next/image";

export function CardProjeto() {
  return (
    <div className="w-80">
      <div>
        <Image
          src="/imageTest.webp"
          alt="Imagem Teste"
          className="w-full"
          width={320}
          height={320}
        />
      </div>
      <div className="bg-gray-100 p-12 space-y-4 flex flex-col">
        <h2 className="text-2xl font-bold">Lorem, ipsum dolor</h2>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cum distinctio
        </p>

        <a href="#" className="bg-green-700 hover:bg-green-600 duration-300 text-center text-white py-2 font-medium sm:text-lg">Saiba mais</a>
      </div>
    </div>
  );
}

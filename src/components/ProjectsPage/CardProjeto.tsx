import Image from "next/image";

export function CardProjeto({image}:any) {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-lg">
      <div>
        <Image
          src={image}
          alt="Imagem Teste"
          className="w-full h-64 object-cover"
          width={800}
          height={800}
        />
      </div>
      <div className="bg-gray-100 py-4 px-8 space-y-4 flex flex-col">
        <h2 className="text-xl font-bold">Lorem, ipsum dolor</h2>
        <p className="text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cum distinctio
        </p>

        <a href="#" className="bg-green-700 hover:bg-green-600 duration-300 text-center text-white py-2 font-medium sm:text-lg">Saiba mais</a>
      </div>
    </div>
  );
}

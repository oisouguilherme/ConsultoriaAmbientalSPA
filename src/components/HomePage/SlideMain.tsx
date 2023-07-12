import { Subtitle } from "../Utils/Subtitle";

export function SlideMain(){
  return(
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center text-white">
      <div className="bg-green-800 bg-opacity-95 py-32">
        <div className="max-w-6xl px-4 mx-auto ">
          <div className="flex flex-col items-start md:w-1/2">
            <p className="text-yellow-400">Gestão sustentável dos recursos naturais impulsionando o desenvolvimento econômico e financeiro com preservação do recursosnaturais.</p>
            <h1 className="text-4xl md:text-5xl font-bold">Consultoria Ambiental: Desenvolvendo soluções para um mundo melhor.</h1>
            <a href="#" className="bg-yellow-300 hover:bg-yellow-400 duration-300 text-black font-medium px-8 py-2 mt-12 text-lg">Comece agora!</a>
          </div>
        </div>
      </div>
    </div>
  )
}
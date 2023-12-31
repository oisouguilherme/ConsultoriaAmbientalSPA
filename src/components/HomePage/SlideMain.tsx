import Image from "next/image";

export function SlideMain(){
  return(
    <div className="bg-[url('/resultado1.jpg')] bg-cover bg-center text-white">
      <div className="bg-green-800 bg-opacity-90 py-32">
        <div className="max-w-6xl px-4 mx-auto gap-12 grid md:grid-cols-2">
          <div className="flex flex-col items-start">
            <p className="text-lg">Olá! Sou <span className="font-medium">Edivaldo Antonio Dourado da Silva</span>, Biólogo. <br /> Crbio4-134316/D, apaixonado por conservação ambiental e sustentabilidade.</p>
            <h1 className="text-4xl md:text-5xl font-bold">Consultor Ambiental: Desenvolvendo soluções para um mundo melhor.</h1>
            <a href="https://wa.me/5561999211039" target="_blank" className="bg-yellow-300 hover:bg-yellow-400 duration-300 text-black font-medium px-8 py-2 mt-12 text-lg">Comece agora!</a>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image src="/edvaldo.jpg" alt="" width={400} height={400} className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}
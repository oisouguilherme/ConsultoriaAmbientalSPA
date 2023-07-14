import { Title } from "../Utils/Title";

export function HeaderNotice(){
  return(
    <div className="text-center text-white bg-[url('/arvores.jpg')] bg-cover">
      <div className="bg-green-800 py-24 bg-opacity-90">
        <div className="max-w-5xl mx-auto px-4">
          <p className="sm:text-lg text-yellow-400">Entre em Contato Conosco</p>
          <Title title="Estamos Aqui para Atender suas Necessidades Ambientais" />
        </div>
      </div>
    </div>
  )
}
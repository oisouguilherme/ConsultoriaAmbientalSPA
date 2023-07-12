import { CardProjeto } from "@/components/ProjectsPage/CardProjeto";
import { HeaderProjects } from "@/components/ProjectsPage/HeaderProjects";

export default function Projetos(){
  return(
    <div>
      <HeaderProjects/>
      <div className="max-w-6xl mx-auto px-4 py-20 flex gap-12 flex-wrap justify-center">
        <CardProjeto/>
        <CardProjeto/>
        <CardProjeto/>
        <CardProjeto/>
        <CardProjeto/>
        <CardProjeto/>
      </div>
    </div>
  )
}
import { CardProjeto } from "@/components/ProjectsPage/CardProjeto";
import { HeaderProjects } from "@/components/ProjectsPage/HeaderProjects";

export default function Projetos(){
  return(
    <div>
      <HeaderProjects/>
      <div className="max-w-6xl mx-auto px-4 py-20 flex gap-12 flex-wrap justify-center">
        <CardProjeto image="/images/projetos/projetoAgro.jpg"/>
        <CardProjeto image="/images/projetos/projetoLav.jpg"/>
        <CardProjeto image="/images/projetos/projetoMico.jpg"/>
        <CardProjeto image="/images/projetos/projetoMot.jpg"/>
        <CardProjeto image="/images/projetos/projetoPark.jpg"/>
        <CardProjeto image="/images/projetos/projetoAgro.jpg"/>
      </div>
    </div>
  )
}
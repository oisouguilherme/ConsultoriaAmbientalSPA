import { CardProjeto } from "@/components/ProjectsPage/CardProjeto";
import { HeaderProjects } from "@/components/ProjectsPage/HeaderProjects";

export default function Projetos() {
  return (
    <div>
      <HeaderProjects />
      <div className="max-w-6xl mx-auto px-4 py-20 flex gap-12 flex-wrap justify-center">
        <CardProjeto image="/projetoAgro.jpg" />
        <CardProjeto image="/projetoLav.jpg" />
        <CardProjeto image="/projetoMico.jpg" />
        <CardProjeto image="/projetoMot.jpg" />
        <CardProjeto image="/projetoPark.jpg" />
        <CardProjeto image="/projetoAgro.jpg" />
      </div>
    </div>
  );
}

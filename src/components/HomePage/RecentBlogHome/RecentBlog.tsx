import { Title } from "@/components/Utils/Title";
import { BlogCard } from "./BlogCard";
import { Subtitle } from "@/components/Utils/Subtitle";

export function RecentBlog() {
  return (
    <div className="max-w-6xl mx-auto text-center py-20">
      <Subtitle subtitle="Postagem Recente" />
      <Title title="Mantenha-se Atualizado com as Últimas Notícias Ambientais" />
      <div className="flex justify-center gap-8 flex-wrap text-start pt-12">
        <BlogCard
          style="bg-[url('/arvores.jpg')]"
          titleNotice="Consultoria Ambiental: Promovendo a Sustentabilidade e o Cumprimento das Normas Ambientais."
        />
        <BlogCard
          style="bg-[url('/gestao.jpg')]"
          titleNotice="Gestão Ambiental: Preservando Recursos Naturais e Promovendo o Equilíbrio Sustentável."
        />
        <BlogCard
          style="bg-[url('/licensa.jpg')]"
          titleNotice="Licenciamento Ambiental: Promovendo a Sustentabilidade e a Proteção do Meio Ambiente."
        />
      </div>
    </div>
  );
}

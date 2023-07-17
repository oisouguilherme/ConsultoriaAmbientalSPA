import { Title } from "@/components/Utils/Title";
import { BlogCard } from "./BlogCard";
import { Subtitle } from "@/components/Utils/Subtitle";
import Link from "next/link";

export function RecentBlog() {
  return (
    <div className="max-w-6xl mx-auto text-center py-20 flex flex-col items-center">
      <Subtitle subtitle="Postagem Recente" />
      <Title title="Mantenha-se Atualizado com as Últimas Notícias Ambientais" />
      <div className="flex justify-center gap-8 flex-wrap text-start pt-12">
        <BlogCard
          style="bg-[url('/arvores.jpg')]"
          titleNotice="Fazenda solar gera energia limpa, produz sal e cultiva camarões"
          link="https://olhardigital.com.br/2023/07/13/ciencia-e-espaco/fazenda-solar-gera-energia-limpa-produz-sal-e-cultiva-camaroes/"
        />
        <BlogCard
          style="bg-[url('/gestao.jpg')]"
          titleNotice="Oceanos estão mudando de cor devido à crise climática, sugere estudo"
          link="https://umsoplaneta.globo.com/clima/noticia/2023/07/12/oceanos-estao-mudando-de-cor-devido-a-crise-climatica-sugere-estudo.ghtml"
        />
        <BlogCard
          style="bg-[url('/licensa.jpg')]"
          titleNotice="Marco Legal do Saneamento completa dois anos nesta sexta-feira (15)"
          link="https://www.gov.br/mdr/pt-br/ultimas-noticias/marco-legal-do-saneamento-completa-dois-anos-nesta-sexta-feira-15#:~:text=Aprovada%20pelo%20Congresso%20Nacional%20e,privados%20significativos%20para%20o%20setor"
        />
      </div>
      <Link href={"/noticias"} className="bg-green-700 hover:bg-green-600 duration-300 text-white font-medium px-24 rounded-md py-2 mt-12">
        VER MAIS
      </Link>
    </div>
  );
}

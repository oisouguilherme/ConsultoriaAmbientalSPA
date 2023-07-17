import { BlogCard } from "../HomePage/RecentBlogHome/BlogCard";
import { CardNotice } from "./CardNotices";

export function MainNotice() {
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 py-20">
      <BlogCard
        style="bg-[url('/farm.webp')]"
        titleNotice="Fazenda solar gera energia limpa, produz sal e cultiva camarões"
        link="https://olhardigital.com.br/2023/07/13/ciencia-e-espaco/fazenda-solar-gera-energia-limpa-produz-sal-e-cultiva-camaroes/"
      />
      <BlogCard
        style="bg-[url('/rio.webp')]"
        titleNotice="Oceanos estão mudando de cor devido à crise climática, sugere estudo"
        link="https://umsoplaneta.globo.com/clima/noticia/2023/07/12/oceanos-estao-mudando-de-cor-devido-a-crise-climatica-sugere-estudo.ghtml"
      />
      <BlogCard
        style="bg-[url('/licensa.jpg')]"
        titleNotice="Marco Legal do Saneamento completa dois anos nesta sexta-feira (15)"
        link="https://www.gov.br/mdr/pt-br/ultimas-noticias/marco-legal-do-saneamento-completa-dois-anos-nesta-sexta-feira-15#:~:text=Aprovada%20pelo%20Congresso%20Nacional%20e,privados%20significativos%20para%20o%20setor"
      />
    </div>
  );
}

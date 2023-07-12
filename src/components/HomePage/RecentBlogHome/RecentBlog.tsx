import { Title } from "@/components/Utils/Title";
import { BlogCard } from "./BlogCard";
import { Subtitle } from "@/components/Utils/Subtitle";

export function RecentBlog(){
  return(
    <div className="max-w-6xl mx-auto text-center py-20">
      <Subtitle subtitle="Postagem Recente" />
      <Title title="Mantenha-se Atualizado com as Últimas Notícias Ambientais"/>
      <div className="flex justify-center gap-8 flex-wrap text-start pt-12">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
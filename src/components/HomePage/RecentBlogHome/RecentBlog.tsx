import { Title } from "@/components/Utils/Title";
import { BlogCard } from "./BlogCard";

export function RecentBlog(){
  return(
    <div className="max-w-6xl mx-auto text-center py-20">
      <p className="text-green-600">Postagem Recente</p>
      <Title title="Mantenha-se Atualizado com as Últimas Notícias Ambientais"/>
      <div className="flex justify-center gap-8 flex-wrap text-start pt-12">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
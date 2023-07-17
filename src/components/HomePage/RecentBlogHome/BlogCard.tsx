import Link from "next/link";

export function BlogCard({titleNotice, style, link}:any){
  return(
    <Link target="_blank" href={link} className={`${style} bg-cover w-80 cursor-pointer`}>
      <div className="px-12 py-8 space-y-20 bg-black h-full bg-opacity-70 flex flex-col justify-between">
        <div className="bg-yellow-300 w-fit font-medium px-3 py-1 text-center text-xs">
          <p className="uppercase">Ler Mais</p>
        </div>
        <p className="text-white font-medium">"{titleNotice}"</p>
      </div>
    </Link>
  )
}
export function BlogCard({titleNotice, style}:any){
  return(
    <div className={`${style} bg-cover w-80 cursor-pointer`}>
      <div className="px-12 py-8 space-y-20 bg-black h-full bg-opacity-70 flex flex-col justify-between">
        <div className="bg-yellow-300 w-fit font-medium px-3 py-1 text-center text-xs">
          <p>Jul</p>
          <p className="font-bold text-lg">12</p>
        </div>
        <p className="text-white font-medium text-sm">{titleNotice}</p>
      </div>
    </div>
  )
}
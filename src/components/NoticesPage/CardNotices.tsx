import Image from "next/image";

export function CardNotice({title, content}:any){
  return(
    <div className="w-80">
      <div className="relative">
        <Image src="/imagetest.webp" className="w-full" alt="Image" width={400} height={400}/>
        <div className="absolute bg-white rounded-md text-sm text-center font-medium px-3 top-2 left-2">
          <p>Jul <br /> 13</p>
        </div>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}
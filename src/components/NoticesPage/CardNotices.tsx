import Image from "next/image";

export function CardNotice(){
  return(
    <div className="w-80">
      <div className="relative">
        <Image src="/imagetest.webp" className="w-full" alt="Image" width={400} height={400}/>
        <div className="absolute bg-white rounded-md text-sm text-center font-medium px-2 top-2 left-2">
          <p>Aug <br /> 20</p>
        </div>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-bold pb-4">Lorem ipsum dolor sit amet consectetur</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate officia nisi qui quam maxime illo</p>
      </div>
    </div>
  )
}
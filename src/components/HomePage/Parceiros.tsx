import Image from "next/image";

export function Parceiros(){
  return(
    <div className="bg-gray-100 border-t-2">
      <div className="max-w-6xl mx-auto flex justify-around flex-wrap py-20 gap-4">
        <Image src="/logo.png" alt="Logo" width={150} height={0} className="w-12"/>
        <Image src="/logo.png" alt="Logo" width={150} height={0} className="w-12"/>
        <Image src="/logo.png" alt="Logo" width={150} height={0} className="w-12"/>
        <Image src="/logo.png" alt="Logo" width={150} height={0} className="w-12"/>
        <Image src="/logo.png" alt="Logo" width={150} height={0} className="w-12"/>
      </div>
    </div>
  )
}
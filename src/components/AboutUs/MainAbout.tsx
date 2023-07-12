import Image from "next/image";
import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";
import { IconChecked } from "@/assets/Icons";

export function MainAbout(){
  return(
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 items-center">
        <div className="bg-white p-4 sm:p-12">
          <Subtitle subtitle="Teste"/>
          <Title title="Aprenda um pouco mais sobre nós"/>
          <p className="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam excepturi aspernatur voluptates assumenda quaerat praesentium, culpa quas alias error nam voluptatum et ab saepe inventore</p>
          <div className="flex gap-4 items-center font-medium sm:text-lg">
            <div className="bg-green-500 text-white rounded-full p-3">
              <IconChecked/>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
          <div className="flex gap-4 items-center font-medium pt-2 sm:text-lg">
            <div className="bg-green-500 text-white rounded-full p-3">
              <IconChecked/>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        </div>

        <div>
          <Image src="/imageTest.webp" className="w-full h-80" alt="Teste" width={400} height={400}/>
        </div>
      </div>
    </div>
  )
}
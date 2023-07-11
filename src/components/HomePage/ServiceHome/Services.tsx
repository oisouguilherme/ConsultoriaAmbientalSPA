import { ServiceCard } from "./ServiceCard";

export function Services(){
  return(
    <div>
      <div className="max-w-6xl mx-auto px-4 text-center text-lg py-20">
        <p className="text-green-600">Lorem, ipsum dolor.</p>
        <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet.</h2>
        <div className="flex gap-4 justify-around flex-wrap pt-12">
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
        </div>
      </div>
    </div>
  )
}
import { ServiceCard } from "../HomePage/ServiceHome/ServiceCard";
import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";

export function HeaderAbout() {
  return (
    <div>
      <div className="text-center text-white bg-[url('/grass.jpg')] bg-bottom">
        <div className="bg-green-700 py-24 bg-opacity-95">
        <p className="sm:text-lg text-yellow-400">Sobre Nós</p>
          <Title title="Um pouco sobre nós" />
        </div>
      </div>

      <div className="flex gap-4 text-center justify-around flex-wrap py-12 max-w-6xl mx-auto">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

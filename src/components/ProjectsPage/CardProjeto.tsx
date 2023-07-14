import Image from "next/image";
import { Title } from "../Utils/Title";

export function CardProjeto({
  title,
  text1,
  text2,
  image1,
  image2,
  image3,
  image4,
}: any) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 mt-12">
        <div className="bg-gray-100 text-start text-lg p-4 sm:p-12">
          <Title title={title} />
          <p className="text-base pt-8">
            {text1}
          </p>
          <p className="text-base pt-2">
            {text2}
          </p>
        </div>
        <Image
          src={image1}
          alt={title}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <Image
          src={image2}
          alt={title}
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src={image3}
          alt={title}
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
        <Image
          src={image4}
          alt={title}
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
  );
}

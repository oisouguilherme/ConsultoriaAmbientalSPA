import { IconMeioAmbiente } from "@/assets/Icons";

export function OurNumbers() {
  return (
    <div className="bg-[url('/grass.jpg')] bg-bottom">
      <div className="bg-green-800 bg-opacity-95">
        <div className="max-w-6xl mx-auto px-4 flex justify-around flex-wrap gap-12 py-20">
          <div className="flex flex-col items-center">
            <div className="bg-white flex items-center justify-center p-5 rounded-full">
              <IconMeioAmbiente />
            </div>
            <p className="text-lg text-yellow-400 pt-5">Lorem</p>
            <p className="text-5xl text-white">5469</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white flex items-center justify-center p-5 rounded-full">
              <IconMeioAmbiente />
            </div>
            <p className="text-lg text-yellow-400 pt-5">Lorem</p>
            <p className="text-5xl text-white">5469</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white flex items-center justify-center p-5 rounded-full">
              <IconMeioAmbiente />
            </div>
            <p className="text-lg text-yellow-400 pt-5">Lorem</p>
            <p className="text-5xl text-white">5469</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white flex items-center justify-center p-5 rounded-full">
              <IconMeioAmbiente />
            </div>
            <p className="text-lg text-yellow-400 pt-5">Lorem</p>
            <p className="text-5xl text-white">5469</p>
          </div>
        </div>
      </div>
    </div>
  );
}

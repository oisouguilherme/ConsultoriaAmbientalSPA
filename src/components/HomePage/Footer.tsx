import {
  IconFacebook,
  IconLinkedIn,
  IconTwitter,
  IconWhatsApp,
} from "@/assets/Icons";
import Image from "next/image";

export function Footer() {
  return (
    <div className="bg-green-950">
      <div className="flex gap-4 flex-wrap justify-between max-w-6xl mx-auto px-4 py-8">
        <Image
          src="/logo.png"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-16"
        />
        <div className="flex gap-4 items-center">
          <div className="bg-white p-2 rounded-full">
            <IconTwitter />
          </div>
          <div className="bg-white p-2 rounded-full">
            <IconFacebook />
          </div>
          <div className="bg-white p-2 rounded-full">
            <IconLinkedIn />
          </div>
          <div className="bg-white p-2 rounded-full">
            <IconWhatsApp />
          </div>
        </div>
      </div>
      <p className="text-white text-sm text-center pb-1">
        Todos os direitos reservados © 2023
      </p>
    </div>
  );
}

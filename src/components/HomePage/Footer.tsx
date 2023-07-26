import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconTwitter,
  IconWhatsApp,
} from "@/assets/Icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-green-950">
      <div className="flex gap-4 flex-wrap justify-between max-w-6xl mx-auto px-4 py-8">
        <Image
          src="/logo.png"
          alt="Imagem Teste"
          width={320}
          height={320}
          className="w-12 sm:w-16"
        />
        <div className="flex gap-4 items-center">
          <Link href={"https://www.instagram.com/edivaldofazdourado/"} className="bg-white p-2 rounded-full">
            <IconInstagram />
          </Link>
          <Link href={"https://www.facebook.com/edivaldo.dourado.90"} className="bg-white p-2 rounded-full">
            <IconFacebook />
          </Link>
          <Link href={""} className="bg-white p-2 rounded-full">
            <IconLinkedIn />
          </Link>
          <Link href={"https://wa.me/5561999211039"} className="bg-white p-2 rounded-full">
            <IconWhatsApp />
          </Link>
        </div>
      </div>
      <p className="text-white text-sm text-center pb-1">
        Todos os direitos reservados © 2023
      </p>
    </div>
  );
}

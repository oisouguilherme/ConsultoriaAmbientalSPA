import Image from "next/image";
import { Title } from "../Utils/Title";
import Link from "next/link";
import { Subtitle } from "../Utils/Subtitle";

export function About() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 py-20 gap-12">
        <div className="sm:text-lg">
          <Subtitle subtitle="Especialista em Consultoria Ambiental" />
          <Title title="Transformando a Paixão pela Natureza em Soluções Sustentáveis" />
          <p className="py-12">
            Sou um consultor ambiental especializado, dedicado a ajudar empresas
            a implementar práticas sustentáveis e atender às regulamentações
            ambientais. Com conhecimento técnico e paixão pelo meio ambiente,
            ofereço soluções personalizadas para reduzir impactos e promover um
            futuro mais verde. Vamos construir um mundo melhor, juntos!
          </p>
          <Link
            href={"#"}
            className="flex items-center gap-8 bg-green-700 hover:bg-green-800 duration-300 text-white font-medium py-6 px-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-telephone-forward-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <p>Transforme seu Negócio Agora!</p>
          </Link>
        </div>
        <div>
          <Image
            src="/florestaSol.jpg"
            alt="Teste"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

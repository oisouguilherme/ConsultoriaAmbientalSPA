import Image from "next/image";
import Link from "next/link";

export function ServiceCard({title, subtitle, image}:any){
  return (
    <div className="w-96">
      <div>
        <Image
          src={image}
          alt="Imagem Teste"
          width={800}
          height={800}
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="px-8 py-3">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm">
          {subtitle}
        </p>
        <button className="mt-4 bg-gray-100 rounded-full p-3">
          <Link href="/projetos">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
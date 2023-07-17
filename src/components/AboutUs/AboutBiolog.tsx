import { Subtitle } from "../Utils/Subtitle";
import { Title } from "../Utils/Title";
import Image from "next/image";

export function AboutBiolog() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 items-center">
        <div className="bg-white p-4 sm:p-12">
          <Subtitle subtitle="Conheça o Especialista em Consultoria Ambiental" />
          <Title title="O que é ser Biólogo para mim" />
          <p className="py-8">
            O que é ser Biólogo para mim: Ser biólogo é uma parte essencial da
            minha identidade. Desde muito cedo, sempre fui fascinado pela
            natureza e pela diversidade de seres vivos que habitam o nosso
            planeta. Essa paixão me impulsionou a escolher a Biologia como minha
            área de estudo e carreira. <br /> Como biólogo, mergulho de cabeça na
            compreensão dos processos vitais que regem a vida na Terra. Sou
            movido pela curiosidade científica e pela vontade incessante de
            desvendar os segredos da natureza. Através de estudos e pesquisas,
            observo os organismos em seu habitat natural, analiso suas
            características, comportamentos e interações, e busco compreender os
            mecanismos que permitem sua sobrevivência e evolução. <br /> Cada dia como
            biólogo é uma aventura. Seja explorando florestas, mapeando recifes
            de coral, coletando amostras em rios ou estudando os seres
            microscópicos, estou constantemente em contato com a riqueza e
            complexidade da vida. Essas experiências me proporcionam uma
            sensação de conexão profunda com a natureza e uma compreensão mais
            ampla de como todos os seres estão interligados. <br /> Além do trabalho de
            campo, também dedico uma parte significativa do meu tempo a estudos
            em laboratório. Analisar amostras, realizar experimentos,
            interpretar dados e colaborar com outros cientistas são elementos
            fundamentais da minha jornada como biólogo. Essas atividades me
            permitem aprofundar meu conhecimento, testar hipóteses e contribuir
            para a produção de conhecimento científico. <br /> Ser biólogo não se
            resume apenas ao aspecto científico. É também uma responsabilidade
            em relação à conservação e proteção do meio ambiente. Como defensor
            da biodiversidade, tenho um compromisso em conscientizar as pessoas
            sobre a importância da preservação dos ecossistemas e da adoção de
            práticas sustentáveis. Busco inspirar outros a apreciar e respeitar
            a natureza, e a compreender que cada ação individual pode fazer a
            diferença. <br /> Ser biólogo é mais do que um trabalho ou uma profissão. É
            uma paixão, um estilo de vida que permeia todos os aspectos da minha
            existência. Através da minha dedicação à Biologia, sinto-me parte de
            algo maior, contribuindo para desvendar os mistérios da vida e
            promover um futuro sustentável para nosso planeta. <br /> É um privilégio e
            uma fonte constante de gratificação poder chamar-me de biólogo e
            continuar explorando, descobrindo e compartilhando minha paixão pela
            vida em todas as suas formas.
          </p>
        </div>
        <div className="px-4 h-full">
          <Image
            src="/edivaldo3.jpg"
            alt="Imagem Teste"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

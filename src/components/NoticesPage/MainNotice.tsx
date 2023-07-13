import { CardNotice } from "./CardNotices";

export function MainNotice() {
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 py-20">
      <CardNotice
        image="/images/arvores.jpg"
        title="Consultoria Ambiental:"
        content="Promovendo a Sustentabilidade e o Cumprimento das Normas Ambientais."
      />
      <CardNotice
        image="/images/gestao.jpg"
        title="Gestão Ambiental:"
        content="Preservando Recursos Naturais e Promovendo o Equilíbrio Sustentável."
      />
      <CardNotice 
        image="/images/licensa.jpg"
        title="Licenciamento Ambiental:"
        content="Promovendo a Sustentabilidade e a Proteção do Meio Ambiente."
      />
      <CardNotice title="" content="" />
      <CardNotice title="" content="" />
      <CardNotice title="" content="" />
    </div>
  );
}

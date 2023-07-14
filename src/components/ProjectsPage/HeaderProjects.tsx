import { Title } from "../Utils/Title";

export function HeaderProjects() {
  return (
    <div className="text-center text-white bg-[url('/arvores.jpg')] bg-cover">
      <div className="bg-green-800 py-24 bg-opacity-90">
        <p className="sm:text-lg text-yellow-400">Nossos projetos</p>
        <Title title="Um pouco dos nossos Projetos" />
      </div>
    </div>
  );
}

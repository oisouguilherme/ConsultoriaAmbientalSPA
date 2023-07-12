import { Title } from "../Utils/Title";

export function HeaderProjects() {
  return (
    <div className="text-center text-white bg-[url('/grass.jpg')] bg-bottom">
      <div className="bg-green-700 py-24 bg-opacity-95">
        <p className="sm:text-lg text-yellow-400">Nossos projetos</p>
        <Title title="Um pouco dos nossos Projetos" />
      </div>
    </div>
  );
}

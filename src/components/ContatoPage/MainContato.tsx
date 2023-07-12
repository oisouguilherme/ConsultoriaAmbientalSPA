export function MainContato() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sobre Nós</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quidem iure impedit quibusdam aperiam at
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Nosso Endereço</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br />
              Adipisicing elit. Suscipit <br />
              Quidem iure impedit quibusdam aperiam at
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Informações de Contato</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur <br />
              Adipisicing elit. Suscipit <br />
              Quidem iure impedit quibusdam aperiam at
            </p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.410707341002!2d-46.428227525211334!3d-15.623102984993618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9356b345c79de8f1%3A0xd205e2f38816890a!2sCentro%20Cl%C3%ADnico%20Buritis!5e0!3m2!1spt-BR!2sbr!4v1689167311066!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

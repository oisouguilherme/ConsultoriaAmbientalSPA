export function MainContato() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sobre Nós</h3>
            <p className="text-gray-500 text-sm">
              Identifico os desafios ambientais específicos que você enfrenta e
              desenvolvo estratégias inovadoras para minimizar impactos
              negativos.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Atendemos em</h3>
            <p className="text-gray-500 text-sm">
              Formosa - GO <br />
              Alto Paraíso - GO <br />
              Cabeceiras - GO
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Informações de Contato</h3>
            <p className="text-gray-500 text-sm">
              Email: ifgdourado@gmail.com <br />
              Telefone: (61) 99921-1039 <br />
              <a target="_blank" href="https://wa.me/5561999211039">
                WhatsApp: (61) 99921-1039
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61501.78727164105!2d-47.317940899999996!3d-15.54554275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a2912067fad5%3A0x6a35994b2edf538b!2sFormosa%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1689351708538!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30710.82607397855!2d-46.95042010692828!3d-15.811689629166171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93572e9d7e78c4d9%3A0x8d910e8f0402a43a!2sCabeceiras%2C%20GO%2C%2073870-000!5e0!3m2!1spt-BR!2sbr!4v1689351735966!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30951.808758053336!2d-47.537403709233935!3d-14.137503072909121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93457f2175bd1f01%3A0xda1a6754d116a0e7!2sAlto%20Para%C3%ADso%20de%20Goi%C3%A1s%2C%20GO%2C%2073770-000!5e0!3m2!1spt-BR!2sbr!4v1689351754631!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

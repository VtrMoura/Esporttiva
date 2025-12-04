export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-8">Sobre a esporttiva</h1>

      <div className="space-y-6 text-zinc-300">
        <p>
          A <span className="text-accent font-semibold">esporttiva</span> é uma
          plataforma inovadora que conecta pessoas apaixonadas por esporte,
          facilitando a reserva de espaços esportivos, a organização de
          campeonatos e a formação de grupos para jogar.
        </p>

        <p>
          Nossa missão é tornar o acesso ao esporte mais simples e democrático,
          permitindo que qualquer pessoa possa encontrar um lugar para praticar
          sua atividade favorita, conhecer novos amigos e participar de
          competições organizadas.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          Como funciona?
        </h2>

        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>
            <strong className="text-white">Espaços:</strong> Navegue por centenas de
            quadras, campos e espaços esportivos disponíveis para reserva.
          </li>
          <li>
            <strong className="text-white">Patotas:</strong> Encontre grupos de pessoas
            para jogar regularmente ou participe de peladas avulsas.
          </li>
          <li>
            <strong className="text-white">Campeonatos:</strong> Crie ou participe de
            torneios organizados com tabelas e classificações.
          </li>
        </ul>

        <p className="mt-8">
          Junte-se a milhares de usuários que já estão vivendo o esporte de
          forma mais conectada e organizada.
        </p>
      </div>
    </div>
  );
}

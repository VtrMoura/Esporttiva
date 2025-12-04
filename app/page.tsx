import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section com imagem de fundo */}
      <section className="hero-bg flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Jogue. Conecte.
            <br />
            <span className="text-accent">Viva o esporte.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            A plataforma completa para atletas amadores: encontre espaços, forme
            patotas e organize campeonatos.
          </p>
          <Link href="/dashboard">
            <Button className="!px-8 !py-4 !text-lg">
              Ir para Dashboard →
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏟️</div>
            <h3 className="text-2xl font-bold text-white mb-3">Alugar Espaços</h3>
            <p className="text-gray-400 mb-6">
              Encontre e reserve quadras, campos e espaços esportivos perto de você.
            </p>
            <Link href="/espacos">
              <Button variant="outline" className="w-full">
                Ver espaços
              </Button>
            </Link>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-white mb-3">Patotas</h3>
            <p className="text-gray-400 mb-6">
              Encontre pessoas para jogar e participe de grupos esportivos.
            </p>
            <Link href="/patotas">
              <Button variant="outline" className="w-full">
                Ver patotas
              </Button>
            </Link>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-white mb-3">Campeonatos</h3>
            <p className="text-gray-400 mb-6">
              Crie e participe de torneios e campeonatos organizados.
            </p>
            <Link href="/campeonatos">
              <Button variant="outline" className="w-full">
                Ver campeonatos
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}

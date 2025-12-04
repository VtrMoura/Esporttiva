"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getCurrentUser, User } from "@/lib/auth";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      router.push("/login");
    } else {
      setUser(currentUser);
    }
  }, [router]);

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-zinc-400 mb-8">Bem-vindo, {user.name}!</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Reservas</h3>
          <p className="text-3xl font-bold text-accent mb-2">0</p>
          <p className="text-zinc-400 text-sm">Reservas ativas</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Patotas</h3>
          <p className="text-3xl font-bold text-accent mb-2">0</p>
          <p className="text-zinc-400 text-sm">Grupos participando</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Campeonatos</h3>
          <p className="text-3xl font-bold text-accent mb-2">0</p>
          <p className="text-zinc-400 text-sm">Torneios ativos</p>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-white mb-2">Próximos Jogos</h3>
          <p className="text-3xl font-bold text-accent mb-2">0</p>
          <p className="text-zinc-400 text-sm">Nos próximos 7 dias</p>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
          <div className="space-y-3">
            <Link href="/espacos">
              <Button variant="outline" className="w-full">
                Reservar Espaço
              </Button>
            </Link>
            <Link href="/patotas">
              <Button variant="outline" className="w-full">
                Encontrar Patota
              </Button>
            </Link>
            <Link href="/campeonatos">
              <Button variant="outline" className="w-full">
                Ver Campeonatos
              </Button>
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-white mb-4">Calendário</h3>
          <p className="text-zinc-400 mb-4">
            Você não tem eventos agendados nos próximos dias.
          </p>
          <Link href="/calendario">
            <Button variant="outline" className="w-full">
              Ver Calendário Completo
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

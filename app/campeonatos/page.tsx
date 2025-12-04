"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { formatDate } from "@/lib/helpers";

interface Tournament {
  id: string;
  name: string;
  date: string;
  teams: string[];
}

export default function Campeonatos() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTournament, setNewTournament] = useState({
    name: "",
    date: "",
    teams: "",
  });

  const handleCreateTournament = async () => {
    const teams = newTournament.teams.split(",").map((t) => t.trim());

    const response = await fetch("/api/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newTournament.name,
        date: newTournament.date,
        teams,
      }),
    });

    if (response.ok) {
      const created = await response.json();
      setTournaments([...tournaments, created]);
      setIsModalOpen(false);
      setNewTournament({ name: "", date: "", teams: "" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Campeonatos</h1>
          <p className="text-zinc-400">
            Crie e participe de torneios organizados
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>+ Criar Campeonato</Button>
      </div>

      {tournaments.length === 0 ? (
        <Card className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-white mb-2">
            Nenhum campeonato cadastrado
          </h3>
          <p className="text-zinc-400 mb-4">
            Seja o primeiro a criar um campeonato!
          </p>
          <Button onClick={() => setIsModalOpen(true)}>Criar Campeonato</Button>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card key={tournament.id}>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {tournament.name}
              </h3>
              <p className="text-zinc-400 text-sm mb-3">
                📅 {formatDate(tournament.date)}
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                {tournament.teams.length} times inscritos
              </p>
              <Button variant="outline" className="w-full">
                Ver Detalhes
              </Button>
            </Card>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Criar Campeonato"
      >
        <div className="space-y-4">
          <Input
            label="Nome do Campeonato"
            value={newTournament.name}
            onChange={(e) =>
              setNewTournament({ ...newTournament, name: e.target.value })
            }
          />
          <Input
            label="Data de Início"
            type="date"
            value={newTournament.date}
            onChange={(e) =>
              setNewTournament({ ...newTournament, date: e.target.value })
            }
          />
          <Input
            label="Times (separados por vírgula)"
            value={newTournament.teams}
            onChange={(e) =>
              setNewTournament({ ...newTournament, teams: e.target.value })
            }
            placeholder="Time A, Time B, Time C"
          />
          <Button onClick={handleCreateTournament} className="w-full">
            Criar Campeonato
          </Button>
        </div>
      </Modal>
    </div>
  );
}

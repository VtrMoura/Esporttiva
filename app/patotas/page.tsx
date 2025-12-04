"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { formatDate } from "@/lib/helpers";

interface Pickup {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  players: string[];
  maxPlayers: number;
}

export default function Patotas() {
  const [pickups, setPickups] = useState<Pickup[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPickup, setNewPickup] = useState({
    name: "",
    sport: "",
    date: "",
    location: "",
    maxPlayers: "10",
  });

  useEffect(() => {
    fetch("/api/pickups")
      .then((res) => res.json())
      .then((data) => setPickups(data));
  }, []);

  const handleCreatePickup = async () => {
    const response = await fetch("/api/pickups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newPickup,
        maxPlayers: parseInt(newPickup.maxPlayers),
      }),
    });

    if (response.ok) {
      const created = await response.json();
      setPickups([...pickups, created]);
      setIsModalOpen(false);
      setNewPickup({ name: "", sport: "", date: "", location: "", maxPlayers: "10" });
    }
  };

  const handleJoinPickup = async (id: string) => {
    const userName = JSON.parse(localStorage.getItem("user") || "{}").name || "Jogador";
    const pickup = pickups.find((p) => p.id === id);
    if (pickup && pickup.players.length < pickup.maxPlayers) {
      const updated = {
        ...pickup,
        players: [...pickup.players, userName],
      };
      setPickups(pickups.map((p) => (p.id === id ? updated : p)));
      alert("Você entrou na patota!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Patotas</h1>
          <p className="text-zinc-400">
            Encontre pessoas para jogar ou crie sua própria patota
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>+ Criar Patota</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pickups.map((pickup) => (
          <Card key={pickup.id}>
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-2">{pickup.name}</h3>
            <p className="text-zinc-400 text-sm mb-1">⚽ {pickup.sport}</p>
            <p className="text-zinc-400 text-sm mb-1">
              📅 {formatDate(pickup.date)}
            </p>
            <p className="text-zinc-400 text-sm mb-3">📍 {pickup.location}</p>
            <p className="text-accent text-sm mb-4">
              {pickup.players.length}/{pickup.maxPlayers} jogadores
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleJoinPickup(pickup.id)}
              disabled={pickup.players.length >= pickup.maxPlayers}
            >
              {pickup.players.length >= pickup.maxPlayers
                ? "Lotado"
                : "Entrar na Patota"}
            </Button>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Criar Patota"
      >
        <div className="space-y-4">
          <Input
            label="Nome da Patota"
            value={newPickup.name}
            onChange={(e) => setNewPickup({ ...newPickup, name: e.target.value })}
          />
          <Input
            label="Esporte"
            value={newPickup.sport}
            onChange={(e) => setNewPickup({ ...newPickup, sport: e.target.value })}
            placeholder="Ex: Futebol, Vôlei, Basquete"
          />
          <Input
            label="Data"
            type="date"
            value={newPickup.date}
            onChange={(e) => setNewPickup({ ...newPickup, date: e.target.value })}
          />
          <Input
            label="Local"
            value={newPickup.location}
            onChange={(e) =>
              setNewPickup({ ...newPickup, location: e.target.value })
            }
          />
          <Input
            label="Máximo de Jogadores"
            type="number"
            value={newPickup.maxPlayers}
            onChange={(e) =>
              setNewPickup({ ...newPickup, maxPlayers: e.target.value })
            }
          />
          <Button onClick={handleCreatePickup} className="w-full">
            Criar Patota
          </Button>
        </div>
      </Modal>
    </div>
  );
}

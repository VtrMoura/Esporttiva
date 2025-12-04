"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import { formatCurrency } from "@/lib/helpers";

interface Space {
  id: string;
  name: string;
  type: string;
  location: string;
  price: number;
  description: string;
  image?: string;
}

export default function Espacos() {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSpace, setNewSpace] = useState({
    name: "",
    type: "",
    location: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    fetch("/api/spaces")
      .then((res) => res.json())
      .then((data) => setSpaces(data));
  }, []);

  const handleCreateSpace = async () => {
    const response = await fetch("/api/spaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newSpace,
        price: parseFloat(newSpace.price),
      }),
    });

    if (response.ok) {
      const created = await response.json();
      setSpaces([...spaces, created]);
      setIsModalOpen(false);
      setNewSpace({ name: "", type: "", location: "", price: "", description: "" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Espaços Esportivos</h1>
          <p className="text-zinc-400">
            Encontre e reserve o espaço perfeito para seu jogo
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>+ Cadastrar Espaço</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space) => (
          <Card key={space.id}>
            {space.image ? (
              <img
                src={space.image}
                alt={space.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="h-48 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-zinc-600">
                🏟️
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{space.name}</h3>
            <p className="text-zinc-400 text-sm mb-1">{space.type}</p>
            <p className="text-zinc-400 text-sm mb-3">📍 {space.location}</p>
            <p className="text-accent font-bold text-lg mb-4">
              {formatCurrency(space.price)}/hora
            </p>
            <Link href={`/espacos/${space.id}`}>
              <Button variant="outline" className="w-full">
                Ver Detalhes
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Cadastrar Novo Espaço"
      >
        <div className="space-y-4">
          <Input
            label="Nome do Espaço"
            value={newSpace.name}
            onChange={(e) => setNewSpace({ ...newSpace, name: e.target.value })}
          />
          <Input
            label="Tipo"
            value={newSpace.type}
            onChange={(e) => setNewSpace({ ...newSpace, type: e.target.value })}
            placeholder="Ex: Quadra de Futebol"
          />
          <Input
            label="Localização"
            value={newSpace.location}
            onChange={(e) => setNewSpace({ ...newSpace, location: e.target.value })}
          />
          <Input
            label="Preço por hora (R$)"
            type="number"
            value={newSpace.price}
            onChange={(e) => setNewSpace({ ...newSpace, price: e.target.value })}
          />
          <Input
            label="Descrição"
            value={newSpace.description}
            onChange={(e) => setNewSpace({ ...newSpace, description: e.target.value })}
          />
          <Button onClick={handleCreateSpace} className="w-full">
            Cadastrar
          </Button>
        </div>
      </Modal>
    </div>
  );
}

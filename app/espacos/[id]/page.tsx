"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { formatCurrency } from "@/lib/helpers";

interface Space {
  id: string;
  name: string;
  type: string;
  location: string;
  price: number;
  description: string;
}

export default function EspacoDetalhes() {
  const params = useParams();
  const router = useRouter();
  const [space, setSpace] = useState<Space | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [booking, setBooking] = useState({ date: "", time: "" });

  useEffect(() => {
    fetch(`/api/spaces/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSpace(data));
  }, [params.id]);

  const handleBooking = async () => {
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        spaceId: params.id,
        date: booking.date,
        time: booking.time,
      }),
    });

    if (response.ok) {
      alert("Reserva realizada com sucesso!");
      setIsModalOpen(false);
      router.push("/dashboard");
    }
  };

  if (!space) return <div className="container mx-auto px-4 py-16 text-white">Carregando...</div>;

  return (
    <div className="container mx-auto px-4 py-16">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        ← Voltar
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-96 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 text-6xl">
          🏟️
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white mb-4">{space.name}</h1>
          <p className="text-xl text-zinc-400 mb-2">{space.type}</p>
          <p className="text-zinc-400 mb-4">📍 {space.location}</p>
          <p className="text-accent font-bold text-3xl mb-6">
            {formatCurrency(space.price)}/hora
          </p>

          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Descrição</h3>
            <p className="text-zinc-400">{space.description}</p>
          </Card>

          <Button onClick={() => setIsModalOpen(true)} className="w-full">
            Reservar Agora
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Fazer Reserva"
      >
        <div className="space-y-4">
          <Input
            label="Data"
            type="date"
            value={booking.date}
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
          />
          <Input
            label="Horário"
            type="time"
            value={booking.time}
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
          />
          <Button onClick={handleBooking} className="w-full">
            Confirmar Reserva
          </Button>
        </div>
      </Modal>
    </div>
  );
}

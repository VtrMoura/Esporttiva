"use client";

import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/helpers";

export default function Calendario() {
  const events = [
    {
      id: "1",
      type: "Reserva",
      title: "Quadra Poliesportiva Central",
      date: "2024-12-10",
      time: "18:00",
    },
    {
      id: "2",
      type: "Patota",
      title: "Pelada de Sábado",
      date: "2024-12-07",
      time: "10:00",
    },
    {
      id: "3",
      type: "Campeonato",
      title: "Torneio de Verão",
      date: "2024-12-15",
      time: "14:00",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Reserva":
        return "bg-blue-500/20 border-blue-500 text-blue-400";
      case "Patota":
        return "bg-green-500/20 border-green-500 text-green-400";
      case "Campeonato":
        return "bg-yellow-500/20 border-yellow-500 text-yellow-400";
      default:
        return "bg-zinc-800 border-zinc-700 text-zinc-400";
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-white mb-2">Calendário</h1>
      <p className="text-zinc-400 mb-8">
        Visualize todos os seus eventos esportivos
      </p>

      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(
                  event.type
                )}`}
              >
                {event.type}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {event.title}
                </h3>
                <p className="text-zinc-400 text-sm">
                  {formatDate(event.date)} às {event.time}
                </p>
              </div>
            </div>
            <div className="text-zinc-400">📅</div>
          </Card>
        ))}
      </div>

      {events.length === 0 && (
        <Card className="text-center py-12">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-white mb-2">
            Nenhum evento agendado
          </h3>
          <p className="text-zinc-400">
            Seus próximos eventos aparecerão aqui
          </p>
        </Card>
      )}
    </div>
  );
}

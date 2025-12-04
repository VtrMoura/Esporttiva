export interface Space {
  id: string;
  name: string;
  type: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export interface Booking {
  id: string;
  spaceId: string;
  userId: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  teams: string[];
  createdBy: string;
}

export interface Pickup {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  players: string[];
  maxPlayers: number;
  createdBy: string;
}

export const spaces: Space[] = [
  {
    id: "1",
    name: "Quadra Poliesportiva Central",
    type: "Poliesportiva",
    location: "Centro, São Paulo",
    price: 150,
    image: "/images/quadra-poliesportiva.jpeg",
    description: "Quadra coberta com iluminação LED",
  },
  {
    id: "2",
    name: "Campo Society Vila Nova",
    type: "Futebol Society",
    location: "Vila Nova, São Paulo",
    price: 200,
    image: "/images/campo-society.png",
    description: "Grama sintética de alta qualidade",
  },
  {
    id: "3",
    name: "Quadra de Beach Tennis Sunset",
    type: "Beach Tennis",
    location: "Praia, Santos",
    price: 100,
    image: "/images/beach-tennis.jpg",
    description: "Areia importada e vista para o mar",
  },
];

export const bookings: Booking[] = [];

export const tournaments: Tournament[] = [];

export const pickups: Pickup[] = [
  {
    id: "1",
    name: "Pelada de Sábado",
    sport: "Futebol",
    date: "2024-12-07",
    location: "Campo Society Vila Nova",
    players: ["João", "Pedro"],
    maxPlayers: 10,
    createdBy: "1",
  },
];

import { NextResponse } from "next/server";
import { pickups } from "@/data/mock";
import { generateId } from "@/lib/helpers";

export async function GET() {
  return NextResponse.json(pickups);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newPickup = {
    id: generateId(),
    players: [],
    createdBy: "1", // Mock user ID
    ...body,
  };

  pickups.push(newPickup);

  return NextResponse.json(newPickup, { status: 201 });
}

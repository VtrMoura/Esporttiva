import { NextResponse } from "next/server";
import { tournaments } from "@/data/mock";
import { generateId } from "@/lib/helpers";

export async function GET() {
  return NextResponse.json(tournaments);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newTournament = {
    id: generateId(),
    createdBy: "1", // Mock user ID
    ...body,
  };

  tournaments.push(newTournament);

  return NextResponse.json(newTournament, { status: 201 });
}

import { NextResponse } from "next/server";
import { spaces } from "@/data/mock";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const space = spaces.find((s) => s.id === params.id);

  if (!space) {
    return NextResponse.json({ error: "Espaço não encontrado" }, { status: 404 });
  }

  return NextResponse.json(space);
}

import { NextResponse } from "next/server";
import { spaces } from "@/data/mock";
import { generateId } from "@/lib/helpers";

export async function GET() {
  return NextResponse.json(spaces);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newSpace = {
    id: generateId(),
    ...body,
    image: "/placeholder-space.jpg",
  };

  spaces.push(newSpace);

  return NextResponse.json(newSpace, { status: 201 });
}

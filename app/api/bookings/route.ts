import { NextResponse } from "next/server";
import { bookings } from "@/data/mock";
import { generateId } from "@/lib/helpers";

export async function POST(request: Request) {
  const body = await request.json();

  // Check if slot is already booked
  const isBooked = bookings.some(
    (b) =>
      b.spaceId === body.spaceId &&
      b.date === body.date &&
      b.time === body.time &&
      b.status === "confirmed"
  );

  if (isBooked) {
    return NextResponse.json(
      { error: "Este horário já está reservado" },
      { status: 400 }
    );
  }

  const newBooking = {
    id: generateId(),
    userId: "1", // Mock user ID
    status: "confirmed" as const,
    ...body,
  };

  bookings.push(newBooking);

  return NextResponse.json(newBooking, { status: 201 });
}

export async function GET() {
  return NextResponse.json(bookings);
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { success: false, message: "Todos os campos são obrigatórios" },
      { status: 400 }
    );
  }

  // Mock user
  const user = {
    id: Date.now().toString(),
    name,
    email,
  };

  const token = Buffer.from(JSON.stringify(user)).toString("base64");

  return NextResponse.json({
    success: true,
    user,
    token,
  });
}

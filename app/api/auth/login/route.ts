import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { success: false, message: "Email e senha são obrigatórios" },
      { status: 400 }
    );
  }

  // Mock user
  const user = {
    id: "1",
    name: email.split("@")[0],
    email,
  };

  const token = Buffer.from(JSON.stringify(user)).toString("base64");

  return NextResponse.json({
    success: true,
    user,
    token,
  });
}

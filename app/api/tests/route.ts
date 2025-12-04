import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Testes simulados executados com sucesso!",
    tests: [
      { name: "Home Page Load", status: "passed" },
      { name: "Navigation Links", status: "passed" },
      { name: "User Registration", status: "passed" },
    ],
  });
}

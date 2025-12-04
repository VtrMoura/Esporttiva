import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST() {
  try {
    // Executar testes Cypress em modo headless
    const { stdout, stderr } = await execAsync(
      "cd /home/ubuntu/esporttiva && npx cypress run --headless",
      { timeout: 120000 } // 2 minutos de timeout
    );

    return NextResponse.json({
      success: true,
      message: "Testes executados com sucesso!",
      output: stdout,
      errors: stderr || null,
    });
  } catch (error: unknown) {
    const err = error as { stdout?: string; stderr?: string; message?: string };
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao executar testes",
        output: err.stdout || null,
        errors: err.stderr || err.message || "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

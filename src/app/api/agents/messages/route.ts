import { NextResponse } from "next/server";
import { readAllInboxes } from "@/lib/agents/persona-manager";

export async function GET() {
  try {
    const messages = await readAllInboxes();
    return NextResponse.json({ messages });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import {
  getDismissedAlertIds,
  dismissAlert,
  dismissAlerts,
} from "@/lib/agents/alert-dismiss";

export async function GET() {
  try {
    const dismissed = await getDismissedAlertIds();
    return NextResponse.json({ dismissedIds: [...dismissed] });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, messageId, messageIds } = body;

    if (action === "dismiss" && messageId) {
      await dismissAlert(messageId);
      return NextResponse.json({ ok: true });
    }

    if (action === "dismiss-all" && Array.isArray(messageIds)) {
      await dismissAlerts(messageIds);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { error: "Invalid action. Use 'dismiss' with messageId or 'dismiss-all' with messageIds." },
      { status: 400 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

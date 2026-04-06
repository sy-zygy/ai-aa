import path from "path";
import fs from "fs/promises";
import { DATA_DIR } from "@/lib/storage/path-utils";
import { fileExists, ensureDirectory } from "@/lib/storage/fs-operations";

const SLACK_DIR = path.join(DATA_DIR, ".agents", ".slack");
const DISMISSED_FILE = path.join(SLACK_DIR, ".dismissed-alerts.json");

interface DismissedAlerts {
  dismissedIds: string[];
  dismissedAt: Record<string, string>;
}

async function readState(): Promise<DismissedAlerts> {
  await ensureDirectory(SLACK_DIR);
  if (!(await fileExists(DISMISSED_FILE))) {
    return { dismissedIds: [], dismissedAt: {} };
  }
  const raw = await fs.readFile(DISMISSED_FILE, "utf-8");
  return JSON.parse(raw) as DismissedAlerts;
}

async function writeState(state: DismissedAlerts): Promise<void> {
  await fs.writeFile(DISMISSED_FILE, JSON.stringify(state, null, 2), "utf-8");
}

export async function getDismissedAlertIds(): Promise<Set<string>> {
  const state = await readState();
  return new Set(state.dismissedIds);
}

export async function dismissAlert(messageId: string): Promise<void> {
  const state = await readState();
  if (state.dismissedAt[messageId]) return; // already dismissed
  state.dismissedIds.push(messageId);
  state.dismissedAt[messageId] = new Date().toISOString();
  await writeState(state);
}

export async function dismissAlerts(messageIds: string[]): Promise<void> {
  const state = await readState();
  const now = new Date().toISOString();
  for (const id of messageIds) {
    if (!state.dismissedAt[id]) {
      state.dismissedIds.push(id);
      state.dismissedAt[id] = now;
    }
  }
  await writeState(state);
}

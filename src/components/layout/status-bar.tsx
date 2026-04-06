"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { GitBranch, RefreshCw, Check, CloudDownload } from "lucide-react";
import { useEditorStore } from "@/stores/editor-store";
import { useTreeStore } from "@/stores/tree-store";


export function StatusBar() {
  const { saveStatus, currentPath } = useEditorStore();
  const loadTree = useTreeStore((s) => s.loadTree);
  const [uncommitted, setUncommitted] = useState(0);
  const [pullStatus, setPullStatus] = useState<"idle" | "pulling" | "pulled" | "up-to-date" | "error">("idle");
  const [pulling, setPulling] = useState(false);
  const didAutoPullRef = useRef(false);

  const fetchGitStatus = async () => {
    try {
      const res = await fetch("/api/git/commit");
      if (res.ok) {
        const data = await res.json();
        setUncommitted(data.uncommitted || 0);
      }
    } catch {
      // ignore
    }
  };

  const pullAndRefresh = useCallback(async () => {
    if (pulling) return;
    setPulling(true);
    setPullStatus("pulling");
    try {
      const res = await fetch("/api/git/pull", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        if (data.pulled) {
          setPullStatus("pulled");
          // Reload tree to reflect new/changed files
          await loadTree();
        } else {
          setPullStatus("up-to-date");
        }
      } else {
        setPullStatus("error");
      }
    } catch {
      setPullStatus("error");
    } finally {
      setPulling(false);
      // Reset status after 3 seconds
      setTimeout(() => setPullStatus("idle"), 3000);
    }
  }, [pulling, loadTree]);

  // Auto-pull on mount (page load)
  useEffect(() => {
    if (didAutoPullRef.current) return;
    didAutoPullRef.current = true;

    const initialPull = window.setTimeout(() => {
      void pullAndRefresh();
    }, 0);
    return () => window.clearTimeout(initialPull);
  }, [pullAndRefresh]);

  // Poll git status
  useEffect(() => {
    const initialFetch = window.setTimeout(() => {
      void fetchGitStatus();
    }, 0);
    const interval = setInterval(fetchGitStatus, 15000);
    return () => {
      window.clearTimeout(initialFetch);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-3 py-1 border-t border-border text-[11px] text-muted-foreground/60 bg-background">
      <div className="flex min-w-0 items-center gap-3">
        {currentPath && (
          <span>
            {saveStatus === "saving"
              ? "Saving..."
              : saveStatus === "saved"
              ? "Saved"
              : saveStatus === "error"
              ? "Save failed"
              : "Ready"}
          </span>
        )}
        {pullStatus === "pulling" && (
          <span className="flex items-center gap-1 text-blue-400">
            <CloudDownload className="h-3 w-3 animate-pulse" />
            Pulling...
          </span>
        )}
        {pullStatus === "pulled" && (
          <span className="flex items-center gap-1 text-green-400">
            <Check className="h-3 w-3" />
            Updated from remote
          </span>
        )}
        {pullStatus === "up-to-date" && (
          <span className="flex items-center gap-1 text-muted-foreground/60">
            <Check className="h-3 w-3" />
            Up to date
          </span>
        )}
        {pullStatus === "error" && (
          <span className="flex items-center gap-1 text-red-400">
            Pull failed
          </span>
        )}
        <span className="flex items-center gap-1">
          <GitBranch className="h-3 w-3" />
          {uncommitted > 0 ? `${uncommitted} uncommitted` : "All committed"}
        </span>
        <button
          onClick={pullAndRefresh}
          disabled={pulling}
          aria-label="Pull latest changes from GitHub and refresh"
          className="flex items-center gap-1 rounded-md px-1.5 py-0.5 hover:bg-muted hover:text-foreground transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-1"
          title="Pull latest from GitHub & refresh"
        >
          <RefreshCw className={`h-3 w-3 ${pulling ? "animate-spin" : ""}`} />
          Sync
        </button>
      </div>
      <div />
    </div>
  );
}

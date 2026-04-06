"use client";

import { useState, useEffect, useCallback } from "react";
import { Mail, ArrowRight, Inbox, RefreshCw, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PendingMessage {
  from: string;
  to: string;
  timestamp: string;
  message: string;
}

export function MessageQueue({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<PendingMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/agents/messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
      }
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, 15000);
    return () => clearInterval(interval);
  }, [load]);

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const formatTime = (ts: string) => {
    if (!ts) return "";
    try {
      const d = new Date(ts);
      const now = new Date();
      const diffMs = now.getTime() - d.getTime();
      const diffMin = Math.floor(diffMs / 60000);
      if (diffMin < 1) return "just now";
      if (diffMin < 60) return `${diffMin}m ago`;
      const diffHr = Math.floor(diffMin / 60);
      if (diffHr < 24) return `${diffHr}h ago`;
      return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    } catch {
      return ts;
    }
  };

  const preview = (msg: string, maxLen = 120) => {
    const oneLine = msg.replace(/\n/g, " ").trim();
    return oneLine.length > maxLen ? oneLine.slice(0, maxLen) + "..." : oneLine;
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          <h2 className="text-[13px] font-semibold tracking-[-0.02em]">
            Pending Messages
          </h2>
          <span className="text-[11px] text-muted-foreground/60 tabular-nums">
            {messages.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-7 text-[12px] gap-1.5" onClick={load}>
            <RefreshCw className={cn("h-3 w-3", loading && "animate-spin")} />
            Refresh
          </Button>
          <Button variant="ghost" size="sm" className="h-7 text-[12px]" onClick={onClose}>
            Back
          </Button>
        </div>
      </div>

      {/* Message list */}
      <div className="flex-1 overflow-y-auto">
        {loading && messages.length === 0 ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground/40" />
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-16 space-y-2">
            <Inbox className="h-10 w-10 mx-auto text-muted-foreground/20" />
            <p className="text-[13px] text-muted-foreground/60">No pending messages</p>
            <p className="text-[11px] text-muted-foreground/40">
              Messages appear here when agents send them and disappear after the recipient&apos;s next heartbeat.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-border/50">
            {messages.map((msg, idx) => {
              const isExpanded = expanded.has(idx);
              return (
                <button
                  key={`${msg.timestamp}-${msg.from}-${msg.to}`}
                  className="w-full text-left px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {isExpanded ? (
                      <ChevronDown className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                    ) : (
                      <ChevronRight className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                    )}
                    <span className="text-[12px] font-medium">{msg.from}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground/40 shrink-0" />
                    <span className="text-[12px] font-medium">{msg.to}</span>
                    <span className="text-[10px] text-muted-foreground/50 ml-auto tabular-nums shrink-0">
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                  {isExpanded ? (
                    <div className="ml-5 text-[12px] text-muted-foreground whitespace-pre-wrap leading-relaxed">
                      {msg.message}
                    </div>
                  ) : (
                    <p className="ml-5 text-[11px] text-muted-foreground/60 truncate">
                      {preview(msg.message)}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

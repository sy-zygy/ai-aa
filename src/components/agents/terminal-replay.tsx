"use client";

import { useEffect, useRef } from "react";

interface TerminalReplayProps {
  transcript: string;
}

/** Chunk size in bytes for writing transcript into xterm without blocking the UI */
const WRITE_CHUNK = 64 * 1024;

export function TerminalReplay({ transcript }: TerminalReplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let terminal: import("@xterm/xterm").Terminal | null = null;
    let fitAddon: import("@xterm/addon-fit").FitAddon | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let disposed = false;
    let writeTimer: ReturnType<typeof setTimeout> | null = null;

    const init = async () => {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");
      const { WebLinksAddon } = await import("@xterm/addon-web-links");
      const { Unicode11Addon } = await import("@xterm/addon-unicode11");
      await import("@xterm/xterm/css/xterm.css");

      if (disposed || !containerRef.current) return;

      terminal = new Terminal({
        cursorBlink: false,
        cursorStyle: "bar",
        cursorInactiveStyle: "none",
        disableStdin: true,
        fontSize: 13,
        fontFamily:
          "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Menlo, Monaco, 'Courier New', monospace",
        lineHeight: 1.2,
        letterSpacing: 0,
        theme: {
          background: "#0a0a0a",
          foreground: "#e5e5e5",
          cursor: "#0a0a0a", // hidden
          cursorAccent: "#0a0a0a",
          selectionBackground: "#ffffff30",
          selectionForeground: "#ffffff",
          black: "#1a1a2e",
          red: "#ff6b6b",
          green: "#51cf66",
          yellow: "#ffd43b",
          blue: "#74c0fc",
          magenta: "#cc5de8",
          cyan: "#66d9e8",
          white: "#e5e5e5",
          brightBlack: "#555570",
          brightRed: "#ff8787",
          brightGreen: "#69db7c",
          brightYellow: "#ffe066",
          brightBlue: "#91d5ff",
          brightMagenta: "#da77f2",
          brightCyan: "#99e9f2",
          brightWhite: "#ffffff",
        },
        scrollback: 100000,
        allowProposedApi: true,
        convertEol: false,
        drawBoldTextInBrightColors: true,
        minimumContrastRatio: 1,
      });

      fitAddon = new FitAddon();
      terminal.loadAddon(fitAddon);
      terminal.loadAddon(new WebLinksAddon());
      const unicode11 = new Unicode11Addon();
      terminal.loadAddon(unicode11);
      terminal.unicode.activeVersion = "11";

      terminal.open(containerRef.current);

      requestAnimationFrame(() => {
        if (disposed || !fitAddon) return;
        fitAddon.fit();
        writeTranscript();
      });

      resizeObserver = new ResizeObserver(() => {
        if (!disposed) {
          requestAnimationFrame(() => {
            if (!disposed) fitAddon?.fit();
          });
        }
      });
      resizeObserver.observe(containerRef.current);

      /** Write transcript in chunks to avoid freezing the UI on large files */
      function writeTranscript() {
        if (disposed || !terminal) return;
        let offset = 0;

        function writeNext() {
          if (disposed || !terminal) return;
          const chunk = transcript.slice(offset, offset + WRITE_CHUNK);
          if (!chunk) {
            // Done — scroll to bottom
            terminal.scrollToBottom();
            return;
          }
          terminal.write(chunk, () => {
            offset += WRITE_CHUNK;
            writeTimer = setTimeout(writeNext, 0);
          });
        }

        writeNext();
      }
    };

    init();

    return () => {
      disposed = true;
      if (writeTimer) clearTimeout(writeTimer);
      resizeObserver?.disconnect();
      terminal?.dispose();
    };
  }, [transcript]);

  return (
    <div className="h-full w-full overflow-hidden bg-[#0a0a0a]">
      <div
        ref={containerRef}
        className="h-full w-full overflow-hidden"
        style={{ padding: "4px 8px" }}
      />
    </div>
  );
}

# Progress

[2026-04-07] Rewrote README.md to reflect AI Access Alliance's mission and the organization-as-code concept. Replaced the generic Cabinet open-source product README with sections covering the accessibility problem, legal argument, year-one goal, how the org-as-code model works, and repo structure.

[2026-04-07] Added "Interactive Mode" toggle in Settings > Heartbeats. When enabled (default), heartbeats launch Claude Code TUI for review and follow-ups. When disabled, heartbeats run headless via the -p flag (non-interactive). Threaded `args` through daemon-client and conversation-runner so heartbeat.ts can switch between interactive and non-interactive spawning.

[2026-04-07] Added "Heartbeat Timeout" toggle in Settings > Heartbeats. When disabled, heartbeat sessions no longer get killed after 30 minutes — they run until manually closed. Moved Scheduling Defaults section from the Integrations tab into a new dedicated Heartbeats tab. Both the PTY-level kill timer and the completion waiter deadline are disabled when the toggle is off.

[2026-04-07] Added try/catch around polling fetches in agents-workspace (`refreshAgents` and `refreshConversations`) to silence "Failed to fetch" TypeErrors during network blips or dev server HMR reloads.

[2026-04-06] Fixed heartbeat prompt not being passed to Claude CLI. The daemon was writing the multiline prompt directly to the PTY, where newlines were interpreted as Enter (submitting only the first line). Fixed by wrapping the prompt write in bracketed paste escape sequences (`\x1b[200~`...`\x1b[201~`) so Claude CLI's TUI treats newlines as literal text, preserving interactive mode for follow-up messages.

[2026-04-06] Rebranded user-visible references from "Cabinet" to "AI-AA". Updated package.json name, page title, login heading, settings about text, notification titles, agent system prompts, terminal error messages, git identity, and documentation headers. Internal identifiers (DB filename, env vars, auth salt, custom events) left as-is for backward compatibility.

[2026-04-05] Added alert dismiss/acknowledge feature. Alerts in the #alerts Slack channel can now be individually dismissed (hover → Dismiss button) or bulk-dismissed (Dismiss All). Dismissed alerts appear muted with "dismissed" badge. PulseStrip count now only reflects undismissed alerts. State persisted in /data/.agents/.slack/.dismissed-alerts.json.

[2026-04-05] Removed Chat (Discord), Contribute (GitHub), and Stars buttons from the status bar. Cleaned up related dead code (SVG icons, constants, star-fetching logic).

[2026-04-05] Added "Messages" tab to Mission Control showing all pending inter-agent messages. New API endpoint GET /api/agents/messages scans all inbox directories. Read-only view with from/to/timestamp, expandable message bodies, auto-refresh every 15s, and badge count in the header button.

[2026-04-05] Replaced the Cabinet logo+text in the sidebar with the AI:AA styled text logo from the website v0.1.0 (bold "AI:AA" with gold accent colon). Updated header fallback text to match.

[2026-04-06] Fixed root cause of heartbeat failures — `readInbox` in persona-manager.ts crashed because gray-matter parses ISO timestamps as Date objects, but the sort function called `localeCompare` (a string method) on them. Also handled `date:` vs `timestamp:` frontmatter key inconsistency in agent inbox messages. This bug caused 500 errors on all `/api/agents/personas/[slug]` endpoints, which in turn caused all heartbeat triggers (both scheduled and manual) to fail silently.

[2026-04-05] Fixed agent conversation transcript formatting — completed sessions now use a `TerminalReplay` component that renders transcripts in a read-only xterm.js instance, identical to the live terminal view. Writes transcript in 64KB chunks to avoid UI freezes on large files (some transcripts are 2.8MB / 150K+ lines). Replaced the previous ansi-to-html approach which lost formatting and froze the browser.

[2026-04-03] Rebuilt the agents experience around durable filesystem-backed conversations. Added a shared conversation store (`data/.agents/.conversations/*`), moved manual sessions/jobs/heartbeats onto the daemon PTY runtime, added conversations APIs, and replaced the old agent list/detail split with a three-pane agents workspace focused on live and replayable Claude sessions. Also added `scripts/launch-chrome-debug.sh` plus `npm run debug:chrome` for CDP-based Chrome debugging on port 9222.

[2026-04-03] Major agent system refactor — removed "Plays" concept entirely: deleted play-manager.ts, trigger-engine.ts, api/plays/ routes, playbook-catalog.tsx, webhook/[slug] and triggers API routes. Unified all Claude invocations to use PTY via the cabinet daemon (heartbeat.ts runHeartbeat, daemon executeJob). Cleaned up all play references from 15+ components/types/API routes. Build passes clean with no play routes.

[2026-04-03] Dead code removal: deleted agent-dashboard.tsx (never rendered), chat/ components (ChatPage, ChannelList, ChannelView — never used), mention-input.tsx (no longer imported), api/missions/, api/activity/, api/jobs/, api/ai/edit/ (all legacy routes with no frontend callers), lib/missions/, lib/activity/, and removed setViewMode() alias from app-store. Build remains clean.

[2026-04-03] Removed dead code: deleted agent-session-view.tsx (AgentSessionView was never rendered). Extracted GeneralAgentView into its own general-agent-view.tsx and updated the import in app-shell.tsx.

[2026-04-03] Created marketing/reddit-campaign/index.md with a full Reddit organic outreach plan for Bible Way — 15 targeted subreddits across Bible study, church, and podcast categories, a 3-phase engagement strategy, high-value thread search queries, rules, and KPIs.

[2026-04-03] Added @mention support to the agent session view prompt input. Replaced the plain `<input>` + Send button with the reusable `MentionInput` component; `handleSendPrompt` now accepts `(text, mentionedPages)` and fetches KB page content as context via `fetchMentionedPagesContext` before building the full prompt.

[2026-04-03] Created product/roadmap/index.md with 5 milestones covering Foundation Launch, 1,000 paying users, 10 church partnerships, public podcast, and Scale & Community — aligned to Bible Way company goals.

[2026-04-03] Created /marketing/app-store/apple/index.md with the iOS App Store listing draft (title, subtitle, keywords, description, copy notes) from the drafts directory.

[2026-04-03] Added marketing/app-store/index.md parent page (launch checklist + platform comparison table) so both App Store listings appear in the sidebar tree. Fixed Android listing title field: Play Store allows 50 chars, not 30; updated to "Bible Way: Read the Bible as One Story" (38 chars).

[2026-04-03] Created /marketing/app-store/android/index.md with the Google Play Store listing draft (title, short description, full description, category, content rating, keyword table, and copy notes).

[2026-04-03] Live agent sessions: agent heartbeats now run via the daemon PTY (same path as AI editor) instead of `child_process.spawn`. Added `POST /sessions` to daemon, `startManualHeartbeat()` to heartbeat.ts, `agentSessions` slice to ai-panel-store, new `AgentLivePanel` component (identical card+terminal UX to AI editor panel), and wired into `AgentDashboard` — clicking a persona opens the live panel where "Run Now" shows a streaming xterm.js terminal.

[2026-03-31] Phase 1, Step 1: Added `better-sqlite3` dependency and created DB initialization. Created `server/db.ts` and `src/lib/db.ts` (shared accessor for Next.js API routes) with automatic schema migrations. Initial migration (`server/migrations/001_initial.sql`) creates tables: sessions, messages, activity, job_runs, mission_tasks, schema_version. Database stored at `/data/.cabinet.db` with WAL mode enabled.

[2026-03-31] Phase 1, Step 2: Created agent library templates in `/data/.agents/.library/` for CEO, Editor, Content Marketer, SEO Specialist, Sales Agent, and QA Agent. Each template has a `persona.md` with full frontmatter (name, slug, emoji, type, department, goals, channels, etc.) and markdown body with role instructions. Added API endpoints: `GET /api/agents/library` (list templates) and `POST /api/agents/library/[slug]/add` (instantiate agent from template).

[2026-03-31] Phase 1, Step 3: Built new agent list view (`src/components/agents/agent-list.tsx`) with card grid layout showing agent emoji, name, type, status indicator, role, and job count. Includes "Add from Library" button that opens a modal dialog browsing available templates grouped by department, with one-click instantiation. Also has a "New Agent" placeholder card.

[2026-03-31] Phase 1, Step 4: Built agent detail view (`src/components/agents/agent-detail.tsx`) with 5 tabs: Definition (metadata grid + persona body), Jobs (agent's plays list), Skills (placeholder), Sessions (heartbeat history), and Goals (progress bars with color-coded completion). Header shows back button, agent emoji/name, Run/Pause/Refresh controls.

[2026-03-31] Phase 1, Step 5: Restructured job storage to live under agents. Updated `job-manager.ts` to load jobs from both legacy `/data/.jobs/` and new `/data/.agents/{slug}/jobs/` directories. Added `agentSlug` field to `JobConfig` type. Created agent-scoped job API endpoints: `GET/POST /api/agents/[slug]/jobs` and `GET/PUT/DELETE /api/agents/[slug]/jobs/[id]` with run and toggle actions.

[2026-03-31] Phase 1, Step 6: Updated sidebar navigation with Team section (Agents, Missions, Chat) and System section (Activity, Settings). Added `NavButton` component for consistent nav items with active state highlighting. Added new section types to `SectionType` union: `missions`, `mission`, `chat`, `activity`.

[2026-03-31] Phase 1, Step 7: Updated `app-shell.tsx` routing to use new `AgentList` and `AgentDetail` components for agents/agent sections. Added placeholder views for missions, chat, and activity sections. Onboarding completion now navigates to agents view instead of mission-control. Phase 1 (Foundation) is now complete.

[2026-03-31] Phase 2 (Onboarding): Rewrote onboarding wizard with PRD's 5-question flow (company name, description, top 3 goals, team size, immediate priority) plus smart team suggestion step that recommends agents based on user answers. Created `/api/onboarding/setup` endpoint that: saves company config, marks onboarding complete, instantiates agents from library templates with company context injected, creates default chat channels (#general + department channels), and sets up channel directories. Existing first-run detection in app-shell already works with the new setup. Phase 2 complete.

[2026-03-31] Phase 3 (Missions): Built complete mission system. Storage layer (`src/lib/missions/mission-io.ts`) combines file-based mission definitions (`/data/.missions/{id}/mission.md` with frontmatter) and SQLite for task tracking (using mission_tasks table). Full REST API: `GET/POST /api/missions`, `GET/PUT/DELETE /api/missions/[id]`, `POST /api/missions/[id]/tasks`, `PUT/DELETE /api/missions/[id]/tasks/[tid]`. UI components: `mission-list.tsx` (card list with progress bars, grouped by active/completed), `mission-detail.tsx` (goal display, progress bar, task list with status icons, inline task creation), `create-mission-dialog.tsx` (title, goal, output path form). Wired into app-shell routing. Phase 3 complete.

[2026-03-31] Phase 4 (Chat): Built complete internal chat system. Storage layer (`src/lib/chat/chat-io.ts`) uses file-based channel config (`/data/.chat/channels.json`) and SQLite messages table for message storage. REST API: `GET/POST /api/chat/channels` (list/create channels), `GET/POST /api/chat/channels/[slug]` (get messages/post message/pin). UI: `channel-list.tsx` (sidebar with channel list, create new channel), `channel-view.tsx` (message thread with date separators, message input, pin toggle), `chat-page.tsx` (layout combining channel list and view). Messages poll every 5 seconds. Human can post messages; agent message posting wired via API. Phase 4 complete.

[2026-03-31] Phase 5 (Activity Feed): Built activity event logging system. Storage layer (`src/lib/activity/activity-io.ts`) uses SQLite activity table with support for agent, event type, summary, details, links, mission, and channel fields. REST API: `GET /api/activity` (paginated, filterable by agent/type) and `POST /api/activity` (internal logging). UI: `activity-feed.tsx` with chronological timeline grouped by date, color-coded event type dots, filter tabs (All, Agent Runs, Completions, Errors). Wired into app-shell routing. Phase 5 complete.

[2026-03-31] Phase 6 (Server & Polish): Created `cabinet-daemon.ts` extending terminal server with job scheduler (scans agent directories for cron jobs, executes via Claude CLI), WebSocket event bus (broadcast channels for job:started, job:completed, agent:output events), SQLite job run logging, and HTTP trigger endpoint. Updated package.json with `dev:daemon`, `start`, `start:daemon` scripts so `npm run start` launches both Next.js and daemon. Added @mention detection in chat message posting (returns detected agent slugs). Chat messages now log to activity feed. Removed unused PlaceholderSection. All 6 PRD phases implemented.

[2026-03-31] Fixed cabinet-daemon.ts to include PTY terminal server functionality. The daemon was missing the PTY session management from terminal-server.ts, causing the AI panel to show "Connection error". Merged full PTY support (spawn, reconnect, detach, output capture) into the daemon using noServer WebSocket routing: root path for PTY terminals, /events path for event bus. Also added /sessions and /session/:id/output HTTP endpoints for session management.

[2026-03-31] Fixed agents system — core bug: `listPersonas()` and `readPersona()` only looked for flat files (`{slug}.md`) but PRD restructured agents into directories (`{slug}/persona.md`). Updated persona-manager.ts to support both formats (directory-based first, flat file fallback). Also updated `writePersona` to create directory structure and `deletePersona` to handle directories. Removed mission-control as default view — app now defaults to agents list. Cleaned up all mission-control references from app-shell, tree-view, keyboard-shortcuts, and app-store.

[2026-03-31] Fixed onboarding channel creation — setup endpoint now creates channels from agent `channels` fields (not just departments), so every channel an agent references (#general, #marketing, #content, #leadership, #sales) gets created with correct member lists. Leadership agents are added to all channels. Fixed company config format to use nested `company` object. Uses `wx` flag to avoid overwriting existing messages on re-onboard.

[2026-04-03] Moved Settings from the System nav section to a gear icon button at the bottom of the sidebar, next to the + New Page button on the right.

[2026-04-03] Redesigned agent detail panel: Sessions tab now has a ChatGPT/Claude Code-style session sidebar on the left (session list with status, timestamp, duration) and a content panel on the right showing session output. New session view has centered prompt input. Other tabs (Definition, Jobs, Skills, Goals) remain as-is.

[2026-04-03] Removed Activity and Missions features entirely (nav items, components, app-shell routing, store types, logActivity calls from chat). Redesigned agent detail view: replaced horizontal tabs with vertical sidebar navigation (Definition, Goals, Skills, Jobs, Sessions). Each agent maps to a real subdir on disk at /data/.agents/{slug}/. Updated PRD to reflect all removals and new agent detail layout.

[2026-04-03] Created LLM Comparison embedded app at /data/llm-comparison/ with .app marker for full-screen mode. Interactive side-by-side comparison of 13 LLMs (Claude, GPT, Gemini, DeepSeek, Llama, Grok, Mistral) with benchmark bar charts, feature diff grid, pricing calculator, and tier filters.

[2026-04-03] Removed Chat section from sidebar and routing. Removed Goals tab from agent detail view. Added collapsible agent list in sidebar under Agents — each agent shows emoji, name, and active status dot, clicking navigates directly to the agent detail.

[2026-04-03] Added General agent as a permanent entry at the top of the sidebar agent list (always present, not fetched from API). Editor agent is sorted to appear second, before the rest of the agents.

[2026-04-03] Updated PRD to reflect current state: removed Chat and Goals sections, documented collapsible agent list in sidebar with General (always present) and Editor (sorted first) as defaults, updated sidebar diagram, removed chat storage/API/components references, simplified implementation phases, updated glossary.

[2026-04-03] Fixed AI panel terminal height: when a Claude session is running, the terminal now fills all available vertical space (flex-1) instead of being capped at 300px. Uses min-h-[200px] as a floor.

[2026-04-03] Agent Sessions tab now spawns a real Claude Code terminal (WebTerminal) instead of calling the headless API. When sending a prompt, a live interactive terminal session appears with the agent's persona as context — same component used by the AI Editor panel. Session list sidebar shows a spinning indicator for live sessions.

[2026-04-03] Made agent Definition tab fully editable: click any field (department, type, heartbeat, workspace) to edit inline. Persona instructions have an Edit button that opens a textarea. Removed budget and channels fields. Jobs tab now supports add/remove/edit: create new jobs with name+cron, click cron to edit schedule inline, toggle enabled/disabled, delete jobs.

[2026-04-03] Added CronPicker component with 15 human-readable presets (Every hour, Weekdays at 9am, etc.) plus Custom input. Used in: agent heartbeat field (Definition tab), add-job form (Jobs tab), and inline job schedule editor. Cron values show both the expression and human label.

[2026-04-03] Added job description/prompt field — jobs now have a body that serves as the prompt sent to the agent. Visible as a preview on the job card, editable in the expanded edit form. Add-job form also has a prompt textarea. Persona instructions now render as formatted markdown (prose) using a /api/ai/render-md endpoint, with click-to-edit switching to raw markdown textarea. Added @tailwindcss/typography for prose styling.

[2026-04-03] Replaced emoji with Lucide icons for agents in the sidebar. Each agent slug maps to a specific icon: General=Bot, Editor=Pencil, CEO=Crown, Content Marketer=Megaphone, SEO=Search, QA=ShieldCheck, Sales=BarChart3, Developer=Code. Unknown agents fall back to Bot icon.

[2026-04-03] Removed Skills tab from agent detail view. Added 14 new agent library templates (20 total): COO, CFO, CTO, Product Manager, UX Designer, Data Analyst, Social Media Manager, Growth Marketer, Customer Success, Copywriter, DevOps Engineer, People Ops, Legal Advisor, Researcher. Each has full persona.md with role description, responsibilities, and working style. Updated sidebar icon mapping for all new agent types.

[2026-04-03] Added light cabinet icon as sidebar logo (public/logo-light.png) next to 'Cabinet' text. Updated favicon to match.

[2026-04-03] Fixed scheduled plays never executing: added cron registration for plays with schedule triggers in play-manager.ts. Plays with schedule triggers now get registered with node-cron on app startup (via /api/agents/personas init) and re-registered when plays are created/updated. Added "schedule" case to trigger-engine.ts. Rewrote README.md to match runcabinet.com website style with demo video, problem/solution framing, feature matrix, comparison table, and strong CTAs.

[2026-04-05] Fixed double-menu bug in AI-AA website (data/website/v0.1.0/index.html): the bare `nav` CSS selector was applying fixed positioning to both the header `<nav id="nav">` and the footer `<nav class="footer-links">`, causing the footer nav to appear as an unstyled menu at the top. Changed selectors to `#nav` to scope styles to the header nav only.

[2026-04-05] Wired up the Mission Control view as a new section type. Added "mission-control" to SectionType, imported MissionControl in app-shell, and added a Gauge-icon sidebar button under the Team section. Existing Agents workspace remains untouched.

[2026-04-05] Fixed agent heartbeats ending prematurely before directors could complete work. Root cause: daemon PTY timeout was 600s (10 min) and conversation waiter deadline was 15 min — both too short for complex agent work requiring 15-30 min. Increased daemon timeout to 1800s (30 min), waiter deadline to 35 min, and default job timeout to 1800s. Re-enabled Sponsorships Director agent that was auto-paused after 3 consecutive timeout-induced failures.

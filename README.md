# AI Access Alliance

**Ensuring AI comprehension tools are recognized as legitimate accessibility accommodations under existing law.**

---

## The Problem

Millions of people with cognitive, intellectual, learning, and neurodevelopmental disabilities rely on AI tools to understand written information that affects their lives: medical forms, benefits applications, school documents, legal notices, employment contracts.

These tools summarize, explain, reformat, and answer questions about text. For many people, they are the difference between comprehension and exclusion.

At the same time, institutions are increasingly blocking AI tools from accessing their content — anti-bot measures on patient portals, blanket AI bans in schools, CAPTCHAs on government benefits sites. These measures are usually aimed at scraping and fraud, but they also cut off people who depend on AI to read.

## Our Position

The law already covers this. The ADA, Section 504, and Section 1557 require covered entities to provide auxiliary aids and services for effective communication. The statutory definition is explicitly non-exhaustive and technology-neutral — designed to evolve as new tools emerge. Screen readers were once novel technology too.

AI comprehension tools serve the same functional purpose for people with reading-related disabilities as screen readers serve for blind users: they transform text into a format the person can meaningfully understand.

When an institution blocks someone's AI comprehension tool from processing text that person is already entitled to read, it may be failing its effective-communication obligation under existing law.

We are not pursuing litigation. We are building the doctrine, evidence, and coalition support needed to persuade federal agencies (DOJ, HHS, Department of Education) to issue guidance recognizing AI comprehension tools within existing regulatory frameworks.

## What We Do

- **Legal doctrine** — Build the formal argument that AI comprehension tools qualify as auxiliary aids under the ADA, Section 504, and Section 1557
- **Evidence base** — Document real user stories, harm cases, and sector-specific research showing how blocking AI tools creates accessibility barriers
- **Corporate sponsorship** — Secure backing from companies whose products are already being used as comprehension aids (Anthropic, Microsoft, Google)
- **Coalition building** — Recruit an advisory council of disability-rights leaders, legal scholars, and accessibility experts
- **Public advocacy** — Launch social media, publish articles, and build public awareness that this is a civil rights issue
- **Organizational infrastructure** — Form a 501(c)(3) nonprofit with proper governance, recruit a board, establish institutional credibility

## Year-One Goal

Win formal recognition that blocking a person's user-authorized AI comprehension tool can be an accessibility barrier under existing effective-communication and auxiliary-aids principles. By end of year one, at least one federal agency has issued guidance, published an FAQ, or accepted a petition treating AI comprehension tools as a category of auxiliary aid.

---

## Organization as Code

This repository is not just a website or a document collection. It is the operating system for a mission-driven organization.

Every aspect of AI Access Alliance — strategy, legal doctrine, research, sponsorship pipelines, board recruitment, communications, governance — lives as structured markdown files in the `data/` directory. AI agents (powered by Claude) operate autonomously within departments, each with defined roles, goals, and scheduled work. A human founder provides strategic direction, approves key decisions, and retains final authority.

The idea is simple: **define the organization in code, let AI agents execute the work, use version control as institutional memory.**

### How it works

- **Knowledge base as shared memory.** Every page in `data/` is a living document that agents read, update, and cross-reference. Strategy decisions, research findings, draft communications, legal analysis — it all lives in one place, versioned by git.
- **AI agents as staff.** Each department (Policy, Research, Sponsorships, Communications, Operations) has a director agent that runs on scheduled heartbeats. Agents read their inbox, check the strategic priorities, do their work, and update the KB. They coordinate through internal Slack-style channels.
- **Human as executive.** The founder reviews agent output, makes strategic decisions, approves external communications, and unblocks work. The system is designed so that a single human can direct an entire organization's operations.
- **Git as audit trail.** Every change is auto-committed. You can see exactly what changed, when, and why. Strategy pivots, document revisions, agent work sessions — all in the commit history.

### Why this approach

Traditional nonprofits spend most of their early energy on overhead: hiring, meetings, status updates, document management, internal coordination. An organization-as-code approach collapses that overhead. The AI agents handle research, drafting, cross-team handoffs, and routine operations. The human focuses on judgment, relationships, and decisions that require human authority.

This is not a replacement for human-led organizations. It is an experiment in how far a mission-driven effort can get with one committed human and a team of AI agents — and whether that model can produce real policy impact.

---

## Repository Structure

```
data/                          # The organization's knowledge base
  strategy/                    #   Strategic roadmap and priorities
  legal-policy/                #   Core doctrine, legal analysis
  research/                    #   User stories, evidence, case studies
  sponsorship/                 #   Sponsor profiles, pitch materials, outreach
  brand-communications/        #   Social media, articles, press materials
  operations/                  #   501(c)(3) formation, governance, board recruitment
  .agents/                     #   Agent state (history, memory, messages, config)
src/                           # Web UI and API (Next.js)
server/                        # Daemon (WebSocket, agent executor, scheduler)
```

## Tech Stack

Next.js, TypeScript, Tailwind CSS, Tiptap editor, Zustand, xterm.js. All content stored as markdown on disk. No database. Built on [Cabinet](https://github.com/hilash/cabinet), the open-source AI-first knowledge base.

## Running Locally

```bash
npm install
npm run dev:all    # Starts web UI on :3000 and daemon on :3001
```

Requires Node.js 20+ and [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code).

---

## License

The source code in this repository is licensed under the [MIT License](LICENSE).

The **AI Access Alliance** name, logo, and brand identity are not covered by the MIT License and may not be used without permission.

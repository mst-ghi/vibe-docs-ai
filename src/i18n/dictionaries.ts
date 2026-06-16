import type { Locale } from "./config"

/**
 * Bilingual content for the whole site. `en` is the source of truth; its shape
 * defines the `Dict` type, and every other locale must match it exactly. Pages
 * read from here through the `useI18n()` hook so a language switch re-renders
 * the entire UI without any route change (the site is a static export).
 */
const en = {
  nav: {
    brand: "Vibe Coding",
    docs: "Handbook",
    editors: "Editors",
    models: "Models",
    toolbox: "Toolbox",
    skillGuides: "Tricks",
    loops: "Loops",
    roadmap: "Roadmap",
    changelog: "Changelog",
    resources: "Resources",
    security: "Security",
    support: "Support",
    getStarted: "Get Started",
    searchPlaceholder: "Command + K to search",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Switch language",
    openMenu: "Open menu",
  },
  home: {
    badge: "A field guide to coding with AI agents",
    titleLead: "Code with",
    titleHighlight: "AI agents",
    titleTail: "like you mean it.",
    subtitle:
      "Hard-won notes on working with coding agents in your editor — the models worth using, the system tools that make them genuinely capable, and the day-to-day tricks that move real work forward. No hype, just what holds up in practice.",
    ctaPrimary: "Start with the handbook",
    ctaSecondary: "Browse the toolbox",
    pillars: [
      { value: "Hands-on", label: "Field notes, not marketing" },
      { value: "Claude · DeepSeek · Gemini", label: "Model-agnostic" },
      { value: "EN / فارسی", label: "Written in two languages" },
    ],
    marqueeLabel: "Tools & agents in these notes",
    marquee: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Windsurf",
      "Aider",
      "Zed",
      "Cline",
      "Codex",
      "DeepSeek",
      "Gemini",
      "MCP",
      "git worktrees",
      "ripgrep",
      "uv",
      "Playwright",
    ],
    guidesEyebrow: "What's inside",
    guidesTitle: "Everything I'd tell a teammate picking up agents",
    guidesLead:
      "Seven field guides, from first principles to the gnarly details. Read them in any order.",
    guides: [
      {
        tag: "Start here",
        title: "The handbook",
        desc: "How to actually work with a coding agent: context files, roles vs skills, plan then verify, and keeping context dense.",
        href: "/handbook",
      },
      {
        tag: "Tools",
        title: "Editors & agents",
        desc: "Claude Code, Cursor, Copilot, Windsurf, Aider, Zed, Cline — what each is good at and how to choose.",
        href: "/editors",
      },
      {
        tag: "Models",
        title: "Models for coding",
        desc: "Claude, DeepSeek and Gemini compared for real work — strengths, cost, and when to reach for each.",
        href: "/models",
      },
      {
        tag: "Setup",
        title: "System toolbox",
        desc: "Python, Node, git, ripgrep, jq, gh, Docker, MCP — the tools that let an agent do, not just suggest.",
        href: "/toolbox",
      },
      {
        tag: "Practice",
        title: "Tricks & workflows",
        desc: "Worktrees, screenshots, test-first, parallel agents, and managing tasks without losing the thread.",
        href: "/skill-guides",
      },
      {
        tag: "Advanced",
        title: "Loops",
        desc: "Stop prompting; design loops that prompt your agents — and know how to make them halt.",
        href: "/loops",
      },
      {
        tag: "Safety",
        title: "Running safely",
        desc: "Sandboxing, permission modes, secrets, and the prompt-injection risks of letting an agent run commands.",
        href: "/security",
      },
    ],
    principleEyebrow: "The one idea",
    principleTitle: "An agent that can run your tools is a different animal.",
    principleBody:
      "The leap isn't a smarter model — it's giving the model a terminal and the right tools. Then it stops guessing and starts checking its own work: writing a quick script instead of reasoning token-by-token, running the tests, reading the diff, fixing what failed. Your job shifts from typing code to designing that loop.",
    principlePoints: [
      {
        title: "Offload to code, not tokens",
        desc: "Parsing, math, and format conversion are exact and cheap as a script — and the data never floods the context window.",
      },
      {
        title: "Let it verify itself",
        desc: "Tests, linters, and a real browser turn “looks done” into “proven done.” Give the agent a way to check and it will.",
      },
      {
        title: "Stay the engineer",
        desc: "The faster it ships code you didn't write, the more it matters that you read the diff and actually understand it.",
      },
    ],
    closerEyebrow: "Open notes",
    closerTitle: "A living field guide, not a finished book.",
    closerBody:
      "This is a working set of notes — bilingual, opinionated, and updated as the tools change. Start anywhere, take what's useful, and ignore the rest.",
    closerPrimary: "Read the handbook",
    closerSecondary: "See the toolbox",
  },
  editors: {
    eyebrow: "Editors & agents",
    title: "Where the agent lives",
    lead: "The model matters less than the harness around it. These are the editors and agent tools worth knowing in 2026 — what each is genuinely good at, who it fits, and whether you can bring your own API key. The space changes monthly, so treat this as a snapshot, not scripture.",
    byokLabel: "Your key",
    byok: { full: "Bring your own", limited: "Chat only", no: "Locked in" },
    tools: [
      {
        name: "Claude Code",
        kind: "Terminal · IDE extensions",
        strength:
          "Raw code quality plus end-to-end autonomy on real repos: reads the whole codebase, plans multi-file changes, runs your tests, returns reviewable diffs.",
        fit: "Experienced engineers in tidy repos who live in the terminal.",
        byok: "full",
      },
      {
        name: "Cursor",
        kind: "AI-first IDE (VS Code fork)",
        strength:
          "The best Tab autocomplete in the field, plus repo-wide agents and parallel worktree runs.",
        fit: "Devs who want AI on every keystroke in a visual editor.",
        byok: "limited",
      },
      {
        name: "GitHub Copilot",
        kind: "Extension · cloud agent",
        strength:
          "Deepest GitHub integration — issue → branch → PR → review, right where your code already is.",
        fit: "Teams already living in GitHub's flow.",
        byok: "limited",
      },
      {
        name: "Windsurf / Devin Desktop",
        kind: "AI-native IDE",
        strength:
          "The Cascade agent plans, builds, runs tests and self-corrects with less hand-holding on larger codebases.",
        fit: "Solo devs and teams fanning out autonomous agent tasks.",
        byok: "limited",
      },
      {
        name: "Zed",
        kind: "Native editor (Rust)",
        strength:
          "Blazing-fast native feel and an open agent protocol — run Claude Code, Codex or Gemini right inside it.",
        fit: "Keyboard-centric devs who bring their own agent.",
        byok: "full",
      },
      {
        name: "Cline",
        kind: "Open-source VS Code agent",
        strength:
          "A disciplined Plan/Act workflow, rich MCP support, and approval gates so it doesn't go off the rails.",
        fit: "Supervised, tool-using work with any provider you like.",
        byok: "full",
      },
      {
        name: "Aider",
        kind: "Terminal, open source",
        strength:
          "Best-in-class git hygiene — every change is an atomic, reversible commit. Lean on tokens, easy to undo.",
        fit: "Terminal devs on well-scoped, cost-controlled tasks.",
        byok: "full",
      },
      {
        name: "Antigravity / Jules",
        kind: "Google, agent-first",
        strength:
          "Agents plan, run commands, drive a browser to verify, and open PRs; Gemini-powered, with a Claude key optional.",
        fit: "Gemini-centric teams trying agent-first workflows.",
        byok: "limited",
      },
    ],
    chooseTitle: "How to choose",
    chooseLead:
      "Don't agonize — most strong engineers run two: a terminal agent for heavy lifting and an IDE for fast edits.",
    choosePoints: [
      {
        title: "Autonomy on a real codebase",
        desc: "Claude Code or Aider in the terminal, or Cline supervised inside VS Code.",
      },
      {
        title: "AI on every keystroke",
        desc: "Cursor for its Tab; Copilot if your team already lives in GitHub.",
      },
      {
        title: "Bring your own model",
        desc: "Zed, Cline, Aider and Continue are fully BYO-key; Cursor and Copilot only for chat.",
      },
    ],
    noteTitle: "A word on the churn",
    noteBody:
      "Every major tool hit a pricing or ownership shake-up in 2025–2026 — Cursor's credit switch, Copilot's token billing, Windsurf changing hands twice, Claude Code's harness regression. Pick on fit, not on this quarter's leaderboard, and keep your workflow portable.",
    ctaPrimary: "Compare the models",
    ctaSecondary: "Set up your toolbox",
  },
  models: {
    eyebrow: "Models for coding",
    title: "Pick the right brain for the job",
    lead: "Three families do most coding work in 2026: Anthropic's Claude, the open-weight DeepSeek line, and Google's Gemini — with strong local models close behind. Here's how they actually differ, and the pattern that saves the most money. Benchmarks churn weekly and many top scores are vendor-run, so trust the shape and verify the numbers.",
    familiesLabel: "The three you'll reach for",
    families: [
      {
        name: "Claude",
        who: "Anthropic",
        tagline: "The quality-first default",
        strengths:
          "Cleanest, most convention-following code and the strongest end-to-end agent autonomy. Opus 4.8 for hard reasoning, Sonnet 4.6 as the everyday workhorse, Haiku 4.5 for cheap high-volume work.",
        watch: "Priciest at the top end; harness changes have caused real quality swings.",
        cost: "$$–$$$",
      },
      {
        name: "DeepSeek",
        who: "Open weights",
        tagline: "Near-frontier for pennies",
        strengths:
          "Open-weight and self-hostable, with coding close to the frontier at a tiny fraction of the cost. The V4 line ships a 1M-token context; a full endpoint audit can cost cents instead of dollars.",
        watch:
          "Reasoning variants overthink and run long; vendor benchmark figures run optimistic.",
        cost: "$",
      },
      {
        name: "Gemini",
        who: "Google",
        tagline: "Context and multimodal",
        strengths:
          "A uniform 1M-token window across every tier and the best multimodal grounding. Flash tiers are fast and cheap; Pro is a strong one-shot prototyper.",
        watch:
          "Tool-calling can be flaky and it leaks its thinking — a great planner, so pair it with another model to execute.",
        cost: "$–$$",
      },
    ],
    alsoTitle: "Also worth knowing",
    also: [
      {
        name: "OpenAI GPT / Codex",
        desc: "A strong agentic coder plus a popular open-source terminal agent (Codex CLI). Many devs run it alongside Claude.",
      },
      {
        name: "Local / open models",
        desc: "Qwen Coder, GLM and Kimi K2 now rival closed models and run on your own hardware — the privacy and offline story.",
      },
    ],
    routingEyebrow: "The money-saver",
    routingTitle: "Cheap-and-fast for most, frontier for the hard 20%",
    routingBody:
      "Route the bulk of the work — boilerplate, edits, searches, simple fixes — to a cheap, fast model, and escalate only the hard parts (architecture, multi-file refactors, auth, payments, subtle bugs) to a frontier one. Done well it cuts cost sharply with little quality loss. Done badly — too weak a model on a hard task — it costs more, because you pay for three sloppy passes plus your own review instead of one clean one.",
    routingPoints: [
      {
        title: "Set roles, not a magic router",
        desc: "Most tools tier statically: a planner model and an executor model. That still beats today's immature automatic routers.",
      },
      {
        title: "Keep frontier for the dangerous stuff",
        desc: "Migrations, security, payments, and production bugs are where a stronger model pays for itself.",
      },
      {
        title: "Bring your own key to mix freely",
        desc: "Cline, Aider, Zed and Continue let one key reach hundreds of models, so you can downshift per task.",
      },
    ],
    honestTitle: "An honest caveat",
    honestBody:
      "Don't pick a model from a leaderboard screenshot. SWE-bench Verified is partly saturated, top scores are often vendor-run, and prices move monthly. Try two on your own codebase for a week — the one that needs the fewest corrections wins.",
    ctaPrimary: "Set up your toolbox",
    ctaSecondary: "Read the handbook",
  },
  toolbox: {
    eyebrow: "System toolbox",
    title: "Install the tools, unlock the agent",
    lead: "A coding agent that can run shell commands gets dramatically more capable the moment useful tools exist on your machine. Instead of being stuck editing files, it writes a quick script, queries the data, drives a browser, opens a PR. Often, installing the binary is the whole integration — the agent already knows how to drive it.",
    principleTitle: "Two wins drive everything",
    principlePoints: [
      {
        title: "Offload deterministic work to code",
        desc: "Sorting, parsing, math, and format conversion are faster and exact when run as a script — not “computed” token by token.",
      },
      {
        title: "Keep big data out of context",
        desc: "A script's code never enters the context window — only its small output does. That's the difference between choking on a 28MB CSV and streaming a multi-GB file for a few hundred tokens.",
      },
    ],
    groupsLabel: "The kit",
    groups: [
      {
        name: "Runtimes",
        tools: [
          {
            name: "Python + uv",
            install: "curl -LsSf https://astral.sh/uv/install.sh | sh",
            use: "Throwaway scripts for data, parsing and automation. uv spins up isolated envs instantly — modern Claude emits `uv run` scripts with inline deps unprompted.",
          },
          {
            name: "Node.js + npx",
            install: "brew install node",
            use: "Run CLI tools without installing — `npx prettier --write .` — scaffold apps, execute JS. The JS twin of uvx.",
          },
          {
            name: "TypeScript / tsx",
            install: "npm i -D tsx",
            use: "Run a throwaway `.ts` script that imports the project's own types — `npx tsx check.ts` — with no build step.",
          },
        ],
      },
      {
        name: "Search & data",
        tools: [
          {
            name: "git",
            install: "brew install git",
            use: "The safety net and the parallelism layer — atomic revertible commits, plus worktrees so several agents work at once without colliding.",
          },
          {
            name: "ripgrep (rg)",
            install: "brew install ripgrep",
            use: "Fast, gitignore-aware code search the agent leans on to navigate without dragging build artifacts into context.",
          },
          {
            name: "fd",
            install: "brew install fd",
            use: "Fast file discovery by name, to build a candidate set before reading or editing.",
          },
          {
            name: "jq / yq",
            install: "brew install jq yq",
            use: "Reliably query and reshape JSON/YAML — `gh pr list --json … | jq …` instead of fragile string parsing.",
          },
          {
            name: "sqlite3",
            install: "brew install sqlite",
            use: "Load a CSV dump and run real grouped/joined queries; an agentic inspect → query → self-heal loop.",
          },
        ],
      },
      {
        name: "Network, media & docs",
        tools: [
          {
            name: "gh (GitHub CLI)",
            install: "brew install gh",
            use: "Reuses your auth to open PRs, poll CI, read failing logs and comment. One dev semi-automated ~200 PRs this way.",
          },
          {
            name: "curl / httpie",
            install: "brew install httpie",
            use: "Smoke-test an endpoint it just wrote, capture IDs, assert the response shape, loop until the route works.",
          },
          {
            name: "Docker",
            install: "brew install --cask docker",
            use: "Spin up a throwaway Postgres to verify against — and the safest place to run an autonomous agent, isolated from your host.",
          },
          {
            name: "ffmpeg",
            install: "brew install ffmpeg",
            use: "A vision bridge: split a screen-recording bug report into frames the agent can actually look at.",
          },
          {
            name: "pandoc",
            install: "brew install pandoc",
            use: "Convert a PDF spec to Markdown to read it cheaply, or turn its Markdown report into a polished PDF.",
          },
        ],
      },
      {
        name: "Verify the work",
        tools: [
          {
            name: "ruff / biome",
            install: "uvx ruff check .",
            use: "Near-instant lint + format so the agent checks its own output on every edit and tightens the fix loop.",
          },
          {
            name: "pytest",
            install: "pip install pytest",
            use: "Closes the loop — a failing test tells the agent “not done,” prompting an autonomous fix-and-rerun.",
          },
          {
            name: "shellcheck",
            install: "brew install shellcheck",
            use: "Lints any shell script it writes before running it — catches unquoted-var and bad-glob bugs.",
          },
        ],
      },
      {
        name: "MCP servers",
        tools: [
          {
            name: "Playwright MCP",
            install: "claude mcp add playwright npx @playwright/mcp@latest",
            use: "Real browser control via the accessibility tree — the agent QAs the web app it just built, no vision model needed.",
          },
          {
            name: "Database / filesystem MCP",
            install: "claude mcp add my-db -- npx …",
            use: "Typed, scoped access to a live DB or files — structured and auditable, unlike raw shell.",
          },
        ],
      },
    ],
    starterLabel: "One-liner to seed a machine",
    starterCode: [
      "# macOS — the high-leverage core",
      "brew install git ripgrep fd jq gh sqlite pandoc ffmpeg",
      "curl -LsSf https://astral.sh/uv/install.sh | sh",
      "brew install node && npm i -g tsx",
    ],
    safetyEyebrow: "Don't skip this",
    safetyTitle: "An agent with a shell is a security surface",
    safetyBody:
      "The same power that lets an agent run your tools lets it run anything. Give it room to work, but put real boundaries around it — especially when it runs unattended.",
    safetyPoints: [
      {
        title: "Sandbox it",
        desc: "Run autonomous agents in a disposable container or VM, mounting only the repo. Anthropic's own sandbox cut permission prompts ~84%.",
      },
      {
        title: "Allowlist, don't YOLO",
        desc: "Approve safe commands (lint, test) and keep prompts for the rest. Skip-all-permissions only inside a container with no network.",
      },
      {
        title: "Mind the lethal trifecta",
        desc: "Private data + untrusted content + a way to send data out = exfiltration from a single injected prompt. Break one leg, or keep a human in the loop.",
      },
    ],
    ctaPrimary: "See which editor fits",
    ctaSecondary: "Read the handbook",
  },
  sidebar: {
    title: "System Core",
    version: "v2.0.4-alpha",
    joinCommunity: "Join Community",
    items: [
      { id: "handbook", label: "Introduction" },
      { id: "skill-guides", label: "Skill Guides" },
      { id: "loops", label: "Loops" },
      { id: "roadmap", label: "Roadmap" },
      { id: "resources", label: "Resource Hub" },
      { id: "security", label: "Security" },
      { id: "changelog", label: "Changelog" },
    ],
  },
  handbook: {
    eyebrow: "The handbook",
    title: "How to actually work with a coding agent",
    subtitle:
      "The foundations — the handful of habits that separate “the AI keeps making a mess” from work you'd ship. None of it is model-specific; it's about how you set up the agent and stay in the loop.",
    status: [
      { label: "Read time", value: "~10 min" },
      { label: "Level", value: "Foundations" },
    ],
    claudeMdLabel: "A CLAUDE.md worth its tokens",
    claudeMdFile: "CLAUDE.md",
    claudeMd: [
      "# Project: acme-api",
      "",
      "## Commands",
      "- Test: `pnpm test`  ·  Lint: `pnpm lint`  ·  Dev: `pnpm dev`",
      "- One test: `pnpm test -- path/to/file.test.ts`",
      "",
      "## Conventions",
      "- TypeScript strict, no `any`. Named exports only.",
      "- Use the `db` helper in src/lib/db.ts — never import `pg` directly.",
      "",
      "## Gotchas",
      "- /auth routes need SESSION_SECRET in .env.local.",
      "- IMPORTANT: never edit files under src/generated/.",
      "",
      "<!-- Keep under ~200 lines. If a rule gets ignored, it's buried — cut. -->",
    ],
    sections: [
      {
        num: "01",
        title: "Give it the context it can't guess",
        lead: "An agent infers a lot from your code, but not your conventions, your gotchas, or which command runs the tests. Write those down once in a file it reads every session — CLAUDE.md, AGENTS.md, .cursorrules — and stop repeating yourself.",
        points: [
          {
            title: "Only what it can't infer",
            desc: "Commands, house style that differs from defaults, repo etiquette, real gotchas. Skip anything obvious from the code — it's noise that buries the signal.",
          },
          {
            title: "Keep it short",
            desc: "The whole file loads every turn, so it's a constant tax. Aim under ~200 lines; if the agent keeps breaking a rule, the file is too long and that rule got buried.",
          },
          {
            title: "Layer it",
            desc: "Global preferences in your user file, shared rules in the project file, personal scratch in a gitignored local one. Path-scoped rules load only when the agent touches matching files.",
          },
        ],
      },
      {
        num: "02",
        title: "Split roles from skills",
        lead: "Divide your instructions into always-on Roles (invariant rules) and on-demand Skills (named workflows). The agent applies rules everywhere and pulls in a skill only when the task calls for it.",
        points: [
          {
            title: "Roles are rules",
            desc: "Invariant constraints in CLAUDE.md or .cursorrules. Keep them concise and split by domain so they apply conditionally instead of all at once.",
          },
          {
            title: "Skills are workflows",
            desc: "A SKILL.md with a sharp description and explicit steps. Its body loads only when triggered, so ten skills cost a few hundred tokens until you actually need one.",
          },
          {
            title: "Write it down once",
            desc: "A skill the agent can call beats re-explaining the same workflow every session. The loop is plumbing; the skill is the asset that compounds.",
          },
        ],
      },
      {
        num: "03",
        title: "Plan, then act",
        lead: "The biggest quality jump is making the agent plan before it edits. Let it explore read-only, propose an approach, and only then write code — explore → plan → code → commit.",
        points: [
          {
            title: "Use plan mode",
            desc: "Have it research and lay out steps before touching files. A wrong plan is cheap to fix; a wrong refactor spread across ten files is not.",
          },
          {
            title: "Be specific",
            desc: "Point at files, paste the actual error, link an example. Ambiguity is exactly where agents hallucinate APIs and wander off.",
          },
          {
            title: "Spec, then fresh start",
            desc: "Write the plan to a file, then start a clean session to execute it. Less clutter in context means sharper output.",
          },
        ],
      },
      {
        num: "04",
        title: "Verify — “done” is a claim",
        lead: "An agent left to grade its own homework is generous. Give it something objective to check against, and read the result yourself.",
        points: [
          {
            title: "Tests first",
            desc: "Say you're doing TDD: write the tests, watch them fail, commit them, then implement until green without touching the tests. Each red→green is unambiguous feedback.",
          },
          {
            title: "A second pair of eyes",
            desc: "Have a separate agent — ideally a different model — review the diff. The maker is too kind; a fresh context is a sharper critic.",
          },
          {
            title: "Watch for shortcuts",
            desc: "Under pressure, agents delete failing tests, stub mocks, or swallow errors. Forbid editing tests during implementation, and read what actually changed.",
          },
        ],
      },
      {
        num: "05",
        title: "Manage the context window",
        lead: "Context is the real constraint. As it fills, recall rots and old failed attempts drown the signal. Keep sessions tight on purpose.",
        points: [
          {
            title: "Clear vs compact",
            desc: "Clear between unrelated tasks; compact to summarize within one long task. Corrected it twice on the same thing? Clear and rewrite the prompt — a clean session beats a cluttered one.",
          },
          {
            title: "Delegate to subagents",
            desc: "Send research to a subagent: it works in its own window and returns a short summary, so exploration never pollutes the main thread.",
          },
          {
            title: "Small files win",
            desc: "Feature-sliced files and explicit imports keep what the agent reads dense and cheap — for it and for you.",
          },
        ],
      },
    ],
    closerTitle: "The one rule under all the rules",
    closerBody:
      "Read what it makes. The faster an agent ships code you didn't write, the wider your comprehension gap grows — unless you actually read the diff. Use the tools to go faster, not to stop understanding.",
    ctaPrimary: "Tricks & workflows",
    ctaSecondary: "Set up your toolbox",
  },
  roadmap: {
    badge: "Living doc",
    version: "EN · فارسی",
    title: "What's planned for the guide",
    titleHighlight: "planned",
    lead: "Where these notes are headed. The guide grows as the tools change and as I hit things worth writing down — this is the rough plan, not a promise.",
    statusLabels: { done: "Shipped", active: "In progress", upcoming: "Planned" },
    phases: [
      {
        num: "Now",
        tag: "Shipped",
        title: "The core guide",
        status: "done",
        items: [
          {
            title: "Editors, models & toolbox",
            desc: "The three flagship topics, with real comparisons and one-line installs.",
          },
          {
            title: "Handbook & safety",
            desc: "Foundational practice, plus how to run agents without regret.",
          },
        ],
      },
      {
        num: "Next",
        tag: "In progress",
        title: "Depth & polish",
        status: "active",
        items: [
          {
            title: "More worked examples",
            desc: "Real transcripts and before/after diffs, not just principles.",
          },
          {
            title: "Keeping models current",
            desc: "Refreshing the comparison as the lineup keeps shifting.",
          },
        ],
      },
      {
        num: "Later",
        tag: "Planned",
        title: "Backlog",
        status: "upcoming",
        items: [
          {
            title: "Real client-side search",
            desc: "An index over the guide so you can jump straight to an answer.",
          },
          {
            title: "More languages",
            desc: "Beyond English and Persian, if there's demand.",
          },
          {
            title: "MDX long-form",
            desc: "Move long content into content files instead of the dictionary.",
          },
        ],
      },
    ],
    phaseStats: [
      { value: "9", label: "Guides" },
      { value: "EN / فا", label: "Languages" },
    ],
    ctaTitle: "Have a suggestion, or a war story worth adding?",
    ctaPrimary: "Read the handbook",
    ctaSecondary: "Browse resources",
  },
  skillGuides: {
    eyebrow: "Tricks & workflows",
    related: ["Worktrees", "Test-first", "Task management"],
    relatedLabel: "In here",
    title: "The moves that actually move work",
    lead: "The handbook is the theory; these are the habits. Small, concrete tricks for getting more out of an agent day to day — and for managing tasks so the thread never gets lost.",
    tricksLabel: "Day-to-day tricks",
    tricks: [
      {
        name: "Run agents in parallel",
        tag: "Worktrees",
        desc: "git worktree gives each agent its own branch and checkout. Run two or three at once on independent tasks — they can't step on each other.",
      },
      {
        name: "Give it a target to diff against",
        tag: "Screenshots",
        desc: "Paste a mockup or a screenshot of the bug. Let the agent screenshot its own output and iterate until they match — a browser MCP beats raw pixels.",
      },
      {
        name: "Write the test first",
        tag: "TDD",
        desc: "Failing test, commit it, then implement until green without touching the test. Each red→green is feedback the agent can't fake.",
      },
      {
        name: "Point, don't describe",
        tag: "Context",
        desc: "Reference files with @, paste the real error, link an example. Vague prompts are exactly where it hallucinates and wanders.",
      },
      {
        name: "Plan in a file",
        tag: "Spec",
        desc: "Have it write plan.md, review it, then execute in a fresh session. The plan survives a restart; the cluttered chat doesn't.",
      },
      {
        name: "The maker isn't the checker",
        tag: "Review",
        desc: "Send the diff to a second agent — ideally a different model. A clean context is a far sharper critic than the one that wrote it.",
      },
      {
        name: "Two strikes, then reset",
        tag: "Recovery",
        desc: "Corrected it twice on the same thing? Clear and rewrite the prompt. A clean session beats piling fixes on a confused one.",
      },
      {
        name: "Wire the loop shut",
        tag: "Hooks",
        desc: "A post-edit hook that auto-formats and runs the affected tests turns “please remember to lint” into something that just happens.",
      },
    ],
    terminalLabel: "a worktree + test loop",
    terminal: [
      "$ git worktree add ../fix-auth -b fix-auth",
      "$ cd ../fix-auth && claude",
      "> write a failing test for the expired-token case, then fix it",
      "✓ added tests/auth.test.ts  (1 failing)",
      "✓ patched src/auth/session.ts",
      "✓ pnpm test — 42 passing",
      "> open a PR",
      "✓ gh pr create — #218 opened",
    ],
    taskEyebrow: "Managing tasks",
    taskTitle: "Give the work a memory outside the chat",
    taskBody:
      "The agent forgets; the repo doesn't. Keep a PROGRESS.md it reads and checks off, so work survives a /clear, a restart, or tomorrow's fresh session.",
    taskSteps: [
      "List the work as a checklist the agent owns — it flips `- [ ]` to `- [x]` as it finishes.",
      "Have it write down what it tried and what's left at the end of each session.",
      "The next run starts by reading that file — no re-deriving the project from zero.",
      "You skim the file to see progress without scrolling the whole transcript.",
    ],
    ctaPrimary: "Go deeper: loops",
    ctaSecondary: "The toolbox",
  },
  security: {
    eyebrow: "Running safely",
    title: "Letting an agent run commands, without regret",
    lead: "An agent that can run your shell is the whole point — and the whole risk. The same loop that runs your tests can delete files, leak secrets, or be hijacked by text it reads. None of this should stop you; it should shape how you set it up.",
    riskEyebrow: "The real threat",
    riskTitle: "The lethal trifecta",
    riskBody:
      "Prompt injection is the danger that surprises people: text the agent reads — an issue, a web page, a dependency's README — can carry instructions it follows. It turns into a real exploit when three things line up at once.",
    riskLegs: [
      {
        title: "Access to private data",
        desc: "Your repo, your env, your database — anything sensitive the agent can read.",
      },
      {
        title: "Exposure to untrusted content",
        desc: "Issues, web pages, PRs, package docs — any text written by someone else that the agent ingests.",
      },
      {
        title: "A way to send data out",
        desc: "The network, a PR body, a webhook — any channel that can carry data off the machine.",
      },
    ],
    riskClose:
      "Break any one leg — scope the data, distrust the input, or cut egress — or keep a human in the loop. All three together is an exfiltration tool waiting for a single injected prompt.",
    permsTitle: "Pick a permission posture",
    permsLead:
      "How much you let the agent do without asking should match how much damage a wrong move could cause.",
    perms: [
      {
        name: "Prompt by default",
        desc: "Out of the box it asks before running a command or editing a file. Slower, but you see everything. Start here on anything that matters.",
      },
      {
        name: "Allowlist the safe stuff",
        desc: "Auto-approve read-only and idempotent commands — lint, test, build, git status — so they run without nagging, and keep prompts for the rest.",
      },
      {
        name: "Plan / read-only mode",
        desc: "For exploration, let it read and run read-only commands but make no edits. Perfect for “investigate this” with zero blast radius.",
      },
      {
        name: "Skip-permissions only in a box",
        desc: "“YOLO” / skip-all-permissions belongs in a disposable container with no network — never on your real machine with your real keys.",
      },
    ],
    practicesTitle: "The boundaries that matter",
    practices: [
      {
        title: "Sandbox unattended runs",
        desc: "A disposable container or VM with only the repo mounted means a runaway agent breaks nothing you can't delete. Anthropic's own sandbox cut permission prompts ~84%.",
      },
      {
        title: "Keep secrets out of reach",
        desc: "Don't leave real production keys in an env the agent can read. Use throwaway or test credentials, and scope what's mounted.",
      },
      {
        title: "Read the diff before you trust it",
        desc: "Unattended doesn't mean unreviewed. “Done” is a claim; a bad change you never read is still your bad change.",
      },
      {
        title: "Cut egress",
        desc: "No network, or a domain allowlist, stops both an accidental data leak and a hijacked agent phoning home.",
      },
    ],
    ctaPrimary: "Back to the toolbox",
    ctaSecondary: "Read the handbook",
  },
  resources: {
    eyebrow: "Resources",
    title: "Where to go deeper",
    lead: "A short, opinionated set of starting points — the official docs worth reading, the people worth following, and the tools worth installing. Curated, not comprehensive.",
    note: "Links and tools move fast in this space. If something here has shifted, the idea behind it usually hasn't.",
    groups: [
      {
        name: "Official docs",
        links: [
          {
            label: "Claude Code docs",
            href: "https://code.claude.com/docs",
            desc: "Memory, skills, hooks, permissions, MCP — the canonical reference.",
          },
          {
            label: "Model Context Protocol",
            href: "https://modelcontextprotocol.io",
            desc: "The open standard for connecting agents to real tools and data.",
          },
          {
            label: "Aider",
            href: "https://aider.chat",
            desc: "Docs, plus the multi-language Polyglot leaderboard for models.",
          },
          {
            label: "Anthropic engineering",
            href: "https://www.anthropic.com/engineering",
            desc: "Context engineering, harnesses, and agent design — from the source.",
          },
        ],
      },
      {
        name: "People worth following",
        links: [
          {
            label: "Simon Willison",
            href: "https://simonwillison.net",
            desc: "Sharp, frequent notes on agents, prompt injection, and the “lethal trifecta.”",
          },
          {
            label: "Addy Osmani",
            href: "https://addyo.substack.com",
            desc: "Context engineering and practical AI-assisted workflows.",
          },
          {
            label: "Claude Code best practices",
            href: "https://www.anthropic.com/engineering/claude-code-best-practices",
            desc: "The official playbook — worth a slow, careful read.",
          },
        ],
      },
      {
        name: "Tools to install",
        links: [
          {
            label: "uv (Astral)",
            href: "https://docs.astral.sh/uv",
            desc: "The fast Python runner agents reach for unprompted.",
          },
          {
            label: "ripgrep",
            href: "https://github.com/BurntSushi/ripgrep",
            desc: "The fast code search under a lot of agent tooling.",
          },
          {
            label: "GitHub CLI",
            href: "https://cli.github.com",
            desc: "Let the agent open PRs, read CI, and comment.",
          },
          {
            label: "Playwright MCP",
            href: "https://github.com/microsoft/playwright-mcp",
            desc: "Give the agent a real browser to test what it built.",
          },
        ],
      },
    ],
    ctaPrimary: "Set up your toolbox",
    ctaSecondary: "Read the handbook",
  },
  support: {
    eyebrow: "FAQ",
    title: "Questions people actually ask",
    lead: "Honest answers to the things that come up when you start coding with agents — getting going, what it costs, and whether you can trust it.",
    categories: [
      {
        name: "Getting started",
        faqs: [
          {
            q: "I've never used a coding agent. Where do I start?",
            a: "Pick one tool (Claude Code or Cursor), open a project you already understand, and give it a small, well-scoped task with a clear way to check the result. Then read the diff. The handbook walks through the habits that matter.",
          },
          {
            q: "Will it replace me?",
            a: "No — it changes what you do. The judgment, the architecture, and reading what it produced are still yours. The faster it writes code, the more those things matter.",
          },
          {
            q: "Do I need to be an expert already?",
            a: "It helps most when you can tell good output from bad. Beginners ship faster but also ship more subtle bugs they can't yet see — so verify everything, and learn from the diffs.",
          },
        ],
      },
      {
        name: "Cost & models",
        faqs: [
          {
            q: "Which model should I use?",
            a: "There's no single answer. Use a cheap, fast model for routine work and a frontier one for hard reasoning. Try two on your own codebase for a week — the one that needs the fewest corrections wins. The models page goes deeper.",
          },
          {
            q: "How do I keep the cost down?",
            a: "Route routine work to a cheap model, clear context between tasks, avoid loading dozens of MCP servers at once, and never let an unattended loop run without a budget cap.",
          },
          {
            q: "Open or closed models?",
            a: "Open-weight models (DeepSeek, Qwen, GLM) are now close enough for a lot of work and far cheaper — or free to self-host. Closed frontier models still lead on the hardest tasks. Plenty of people use both.",
          },
        ],
      },
      {
        name: "Trust & safety",
        faqs: [
          {
            q: "Can I let it run commands on my machine?",
            a: "Yes, but shape it: prompt by default, allowlist the safe commands, and sandbox anything unattended. Skip-all-permissions belongs in a throwaway container with no network. See running safely.",
          },
          {
            q: "What about it hallucinating APIs?",
            a: "Give it ground truth — point at real files, paste real errors, and let it run the code so reality corrects it. Plan mode and tests catch most of the rest.",
          },
          {
            q: "Is my code being used for training?",
            a: "It depends on the provider and plan — check the terms. For sensitive code, prefer providers with a no-training guarantee, or run an open model locally.",
          },
        ],
      },
    ],
    ctaTitle: "Still stuck?",
    ctaBody:
      "Start with the handbook for the fundamentals, or the toolbox to set your machine up right.",
    ctaPrimary: "Read the handbook",
    ctaSecondary: "Set up your toolbox",
  },
  changelog: {
    eyebrow: "Changelog",
    title: "What's new in the guide",
    lead: "This is a living set of notes, not a finished book. Here's what's been added or reworked, newest first.",
    latestLabel: "Latest",
    releasedLabel: "Updated",
    releases: [
      {
        version: "The honest rewrite",
        latest: true,
        date: "June 2026",
        groups: [
          {
            label: "Added",
            items: [
              "New pages: Editors & agents, Models for coding, and the System toolbox.",
              "“Running safely” — permission posture and the lethal trifecta of prompt injection.",
            ],
          },
          {
            label: "Changed",
            items: [
              "Rewrote the home and handbook around real, model-agnostic practice.",
              "Retired the old fictional “Vibe Protocol” content end to end.",
            ],
          },
          {
            label: "Design",
            items: [
              "Scroll reveals, drifting aurora backgrounds, a marquee, and a conic glow border — all CSS-first and reduced-motion aware.",
            ],
          },
        ],
      },
      {
        version: "Loop engineering",
        latest: false,
        date: "Earlier",
        groups: [
          {
            label: "Added",
            items: ["The Loops deep-dive, drawn from Addy Osmani's and Matt Van Horn's writing."],
          },
        ],
      },
      {
        version: "Foundation",
        latest: false,
        date: "Earlier",
        groups: [
          {
            label: "Added",
            items: [
              "Bilingual English / Persian site, dark and light themes, static export, RTL-aware layout.",
            ],
          },
        ],
      },
    ],
    subscribeTitle: "It keeps changing",
    subscribeDesc: "The tools move monthly; these notes follow. Start with the handbook.",
    subscribeCta: "Read the handbook",
  },
  loops: {
    eyebrow: "LOOP ENGINEERING",
    title: "Stop prompting. Start designing loops.",
    lead: "The loudest idea in AI coding right now is six words long: you shouldn't be prompting coding agents anymore — you should be designing loops that prompt your agents. Here's what that actually means, and how to build one.",
    sources: [
      {
        label: "“Loop Engineering” — Addy Osmani",
        href: "https://x.com/addyosmani/status/2064127981161959567",
      },
      {
        label: "“WTF Is a Loop?” — Matt Van Horn",
        href: "https://x.com/mvanhorn/status/2063865685558903149",
      },
    ],
    quotes: [
      {
        text: "You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents.",
        who: "Peter Steinberger",
      },
      {
        text: "I don't prompt Claude anymore. I have loops running that prompt Claude and figure out what to do. My job is to write loops.",
        who: "Boris Cherny · Claude Code, Anthropic",
      },
    ],
    defEyebrow: "THE DEFINITION",
    defTitle: "What a loop actually is",
    defBody: [
      "A loop is a small program you write that prompts the coding agent for you, reads what it produced, decides whether it's done, and if not, prompts it again. You stop being the thing inside the loop typing prompts — you become the author of the loop, and the model becomes a subroutine.",
      "Put plainly: a loop is cron plus a decision-maker in the body. A cron job runs a fixed script. A loop runs a model that looks at the current state, decides the next action, does it, checks whether it worked, and decides whether to keep going.",
    ],
    ladderTitle: "The leverage point moved up an altitude",
    ladder: [
      { stage: "Then", title: "Hand-coding", desc: "You write code by hand with autocomplete." },
      {
        stage: "Recently",
        title: "Parallel prompting",
        desc: "You run 5–10 agent sessions at once and prompt each one.",
      },
      {
        stage: "Now",
        title: "Writing loops",
        desc: "You don't prompt at all. You write the loops that prompt the agents and decide what to build next.",
      },
    ],
    blocksEyebrow: "THE BUILDING BLOCKS",
    blocksTitle: "Five pieces, and one place to remember",
    blocksLead:
      "A loop needs five capabilities and then one place to keep state. Claude Code and Codex both ship all of them now — the names differ, the shape is identical.",
    blocks: [
      {
        name: "Automations",
        tag: "The heartbeat",
        desc: "Scheduled runs that do discovery and triage by themselves, then route findings to an inbox — via /loop, cron, lifecycle hooks, or CI.",
      },
      {
        name: "Worktrees",
        tag: "Parallel isolation",
        desc: "A separate working directory on its own branch, so two agents working at once can't touch each other's checkout.",
      },
      {
        name: "Skills",
        tag: "Written-down intent",
        desc: "A SKILL.md of project knowledge the agent would otherwise guess. Without it the loop re-derives your project from zero every cycle.",
      },
      {
        name: "Connectors",
        tag: "Reach your real tools",
        desc: "MCP-based plugins that let the loop read the issue tracker, query a DB, open the PR, ping Slack — act inside your environment, not just advise.",
      },
      {
        name: "Sub-agents",
        tag: "Maker ≠ checker",
        desc: "One agent writes, a different one (often a different model) checks. The maker is far too kind grading its own homework.",
      },
      {
        name: "Memory",
        tag: "State on disk",
        desc: "A markdown file or a board that lives outside the conversation and holds what's done and what's next. The agent forgets; the repo doesn't.",
      },
    ],
    lineageEyebrow: "THE LINEAGE",
    lineageTitle: "Five years, five rungs",
    lineageLead:
      "“Loop” hides at least five different things. Here's the ladder, oldest to newest, so you can stop talking past people.",
    lineage: [
      {
        year: "2022",
        name: "ReAct",
        desc: "The academic while-loop: the model reasons, calls a tool, reads the result, repeats — one model, a human watching.",
      },
      {
        year: "2023",
        name: "AutoGPT",
        desc: "Give it a goal and let it prompt itself. Famous for spinning forever doing nothing.",
      },
      {
        year: "2025",
        name: "ralph",
        desc: "A bash one-liner that pipes the same prompt file in over and over, resetting context to fixed anchor files each pass.",
      },
      {
        year: "2026",
        name: "/goal",
        desc: "Productized ralph: runs until a small validator model confirms the task is actually done.",
      },
      {
        year: "Now",
        name: "Orchestration",
        desc: "Loops supervising other loops, on a schedule, with durable git-backed state that survives a restart.",
      },
    ],
    anatomyEyebrow: "ANATOMY",
    anatomyTitle: "What one loop looks like",
    anatomySteps: [
      "An automation runs every morning. It calls a triage skill that reads yesterday's CI failures, open issues, and recent commits, and writes the findings to a state file.",
      "For each finding worth doing, the loop opens an isolated worktree and sends a sub-agent to draft the fix.",
      "A second sub-agent reviews that draft against the project skills and the existing tests.",
      "Connectors open the PR and update the ticket. Anything the loop can't handle lands in the triage inbox for you.",
      "The state file remembers what was tried, what passed, and what's still open — so tomorrow's run picks up where today stopped.",
    ],
    starterLabel: "The on-ramp is one line",
    starterCode: [
      "/loop babysit all my PRs. Auto-fix build issues,",
      "and when comments come in, use a worktree agent",
      "to fix them.",
    ],
    guardEyebrow: "THE HARD PART",
    guardTitle: "The loop is now the expensive part",
    guardBody:
      "Once the model writes code for almost nothing, the cost moves to the loop running it. The romantic version is that a thousand agents build your company overnight. The production version is that most of your job is making sure they halt.",
    guards: [
      { title: "Max iteration count", desc: "A hard ceiling on how many times the loop may run." },
      { title: "No-progress detection", desc: "Stop when successive runs stop changing anything." },
      {
        title: "Budget ceiling",
        desc: "A token or dollar cap so a runaway loop can't surprise you orders of magnitude over budget.",
      },
    ],
    cautionTitle: "What the loop still does not do for you",
    cautions: [
      {
        title: "Verification is still on you",
        desc: "A loop running unattended is also a loop making mistakes unattended. “Done” is a claim, not a proof.",
      },
      {
        title: "Your understanding still rots",
        desc: "The faster the loop ships code you didn't write, the bigger the comprehension gap — unless you read what it made.",
      },
      {
        title: "Comfort is the risk",
        desc: "Designing the loop with judgement is the cure; doing it to avoid thinking is the accelerant. Same action, opposite result.",
      },
    ],
    closerEyebrow: "THE TAKEAWAY",
    closerTitle: "It's not loops. It's skills.",
    closerBody:
      "The loop is plumbing; the asset is the skill it calls. A loop with no reusable skills is just a while-true around a stranger. A loop that calls a library of sharp, tested, named skills compounds. Write the loop once, give it skills worth calling and feedback so it can check itself, cap it so it halts — then build it like someone who intends to stay the engineer, not just the person who presses go.",
    ctaPrimary: "Read the handbook",
    ctaSecondary: "Explore skill guides",
  },
  footer: {
    tagline:
      "A bilingual field guide to coding with AI agents — the tools, the models, and the tricks that hold up.",
    copyright: "© 2026 Vibe Coding Field Guide. An open, evolving set of notes.",
    builtBy: "Written & built by",
    developerName: "Mostafa Gholami",
    developerRole: "Full-stack engineer",
    developerUrl: "https://mst-ghi.github.io/",
    developerCta: "View portfolio",
    builtWith: "Built with",
    aiModel: "Claude Opus 4.8",
    aiProvider: "Anthropic",
    aiUrl: "https://claude.com/claude-code",
    columns: [
      {
        title: "Guides",
        links: [
          { label: "Handbook", href: "/handbook" },
          { label: "Editors & agents", href: "/editors" },
          { label: "Models", href: "/models" },
          { label: "Toolbox", href: "/toolbox" },
        ],
      },
      {
        title: "Practice",
        links: [
          { label: "Tricks & workflows", href: "/skill-guides" },
          { label: "Loops", href: "/loops" },
          { label: "Running safely", href: "/security" },
        ],
      },
      {
        title: "More",
        links: [
          { label: "Resources", href: "/resources" },
          { label: "FAQ", href: "/support" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
    ],
  },
}

export type Dict = typeof en

const fa: Dict = {
  nav: {
    brand: "وایب‌کدینگ",
    docs: "راهنما",
    editors: "ویرایشگرها",
    models: "مدل‌ها",
    toolbox: "جعبه‌ابزار",
    skillGuides: "ترفندها",
    loops: "حلقه‌ها",
    roadmap: "نقشه‌راه",
    changelog: "تغییرات",
    resources: "منابع",
    security: "امنیت",
    support: "پشتیبانی",
    getStarted: "شروع کنید",
    searchPlaceholder: "برای جست‌وجو Command + K",
    toggleTheme: "تغییر پوسته",
    toggleLanguage: "تغییر زبان",
    openMenu: "باز کردن منو",
  },
  home: {
    badge: "راهنمای میدانی کدنویسی با عامل‌های هوش مصنوعی",
    titleLead: "با عامل‌های",
    titleHighlight: "هوش مصنوعی",
    titleTail: "جدی کد بزنید.",
    subtitle:
      "یادداشت‌هایی از تجربه‌ی واقعیِ کارکردن با عامل‌های کدنویسی در ویرایشگر — مدل‌هایی که ارزش استفاده دارند، ابزارهای سیستمی که عامل را واقعاً توانمند می‌کنند، و ترفندهای روزمره‌ای که کار را پیش می‌برند. بدون هیاهو، فقط آنچه در عمل جواب می‌دهد.",
    ctaPrimary: "از راهنما شروع کنید",
    ctaSecondary: "کاوش جعبه‌ابزار",
    pillars: [
      { value: "عملی", label: "یادداشت میدانی، نه تبلیغات" },
      { value: "Claude · DeepSeek · Gemini", label: "مستقل از مدل" },
      { value: "EN / فارسی", label: "نوشته‌شده به دو زبان" },
    ],
    marqueeLabel: "ابزارها و عامل‌های این یادداشت‌ها",
    marquee: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Windsurf",
      "Aider",
      "Zed",
      "Cline",
      "Codex",
      "DeepSeek",
      "Gemini",
      "MCP",
      "git worktrees",
      "ripgrep",
      "uv",
      "Playwright",
    ],
    guidesEyebrow: "آنچه اینجاست",
    guidesTitle: "هرآنچه به یک هم‌تیمیِ تازه‌وارد به عامل‌ها می‌گفتم",
    guidesLead:
      "هفت راهنمای میدانی، از اصول اولیه تا جزئیات دشوار. به هر ترتیبی که خواستید بخوانید.",
    guides: [
      {
        tag: "از اینجا شروع کنید",
        title: "راهنما",
        desc: "چطور واقعاً با یک عامل کدنویسی کار کنیم: فایل‌های زمینه، نقش‌ها در برابر مهارت‌ها، اول نقشه بعد وارسی، و متراکم نگه‌داشتن زمینه.",
        href: "/handbook",
      },
      {
        tag: "ابزارها",
        title: "ویرایشگرها و عامل‌ها",
        desc: "Claude Code، Cursor، Copilot، Windsurf، Aider، Zed، Cline — هرکدام در چه‌چیزی خوب‌اند و چطور انتخاب کنیم.",
        href: "/editors",
      },
      {
        tag: "مدل‌ها",
        title: "مدل‌ها برای کدنویسی",
        desc: "مقایسه‌ی Claude، DeepSeek و Gemini برای کار واقعی — نقاط قوت، هزینه، و اینکه کِی سراغ کدام برویم.",
        href: "/models",
      },
      {
        tag: "راه‌اندازی",
        title: "جعبه‌ابزار سیستم",
        desc: "Python، Node، git، ripgrep، jq، gh، Docker، MCP — ابزارهایی که به عامل اجازه می‌دهند انجام دهد، نه فقط پیشنهاد.",
        href: "/toolbox",
      },
      {
        tag: "تمرین",
        title: "ترفندها و گردش‌کارها",
        desc: "ورک‌تری‌ها، اسکرین‌شات، اول‌آزمون، عامل‌های موازی، و مدیریت کارها بدون گم‌کردن رشته‌ی کار.",
        href: "/skill-guides",
      },
      {
        tag: "پیشرفته",
        title: "حلقه‌ها",
        desc: "پرامپت‌دادن را کنار بگذارید؛ حلقه‌هایی طراحی کنید که به عامل‌ها پرامپت می‌دهند — و بدانید چطور متوقفشان کنید.",
        href: "/loops",
      },
      {
        tag: "ایمنی",
        title: "اجرای ایمن",
        desc: "سندباکس، حالت‌های دسترسی، رازها، و خطرات تزریق پرامپت وقتی به عامل اجازه‌ی اجرای فرمان می‌دهید.",
        href: "/security",
      },
    ],
    principleEyebrow: "یک ایده",
    principleTitle: "عاملی که می‌تواند ابزارهای شما را اجرا کند، موجود دیگری است.",
    principleBody:
      "جهش بزرگ، یک مدل باهوش‌تر نیست — دادن یک ترمینال و ابزارهای درست به مدل است. آن‌وقت دیگر حدس نمی‌زند و به وارسی کار خودش می‌پردازد: به‌جای استدلال توکن‌به‌توکن یک اسکریپت کوتاه می‌نویسد، آزمون‌ها را اجرا می‌کند، diff را می‌خواند و آنچه را شکست خورده اصلاح می‌کند. کار شما از تایپ‌کردن کد به طراحی آن حلقه منتقل می‌شود.",
    principlePoints: [
      {
        title: "بار را به کد بسپارید، نه به توکن",
        desc: "تجزیه، ریاضی و تبدیل قالب به‌صورت اسکریپت دقیق و ارزان‌اند — و داده هرگز پنجره‌ی زمینه را پر نمی‌کند.",
      },
      {
        title: "بگذارید خودش وارسی کند",
        desc: "آزمون‌ها، لینترها و یک مرورگر واقعی، «انگار تمام شد» را به «ثابت شد که تمام است» تبدیل می‌کنند. به عامل راهی برای بررسی بدهید تا انجامش دهد.",
      },
      {
        title: "مهندس بمانید",
        desc: "هرچه سریع‌تر کدی را بفرستد که شما ننوشته‌اید، خواندن و فهمیدن واقعیِ diff مهم‌تر می‌شود.",
      },
    ],
    closerEyebrow: "یادداشت‌های باز",
    closerTitle: "یک راهنمای زنده، نه کتابی تمام‌شده.",
    closerBody:
      "این مجموعه‌ای کاری از یادداشت‌هاست — دوزبانه، دارای موضع، و به‌روزشونده با تغییر ابزارها. از هرجا شروع کنید، آنچه مفید است بردارید و بقیه را رها کنید.",
    closerPrimary: "مطالعه‌ی راهنما",
    closerSecondary: "دیدن جعبه‌ابزار",
  },
  editors: {
    eyebrow: "ویرایشگرها و عامل‌ها",
    title: "جایی که عامل زندگی می‌کند",
    lead: "مدل کمتر از سازوکار پیرامونش اهمیت دارد. این‌ها ویرایشگرها و ابزارهای عاملی هستند که در ۲۰۲۶ ارزش شناختن دارند — هرکدام واقعاً در چه‌چیزی خوب‌اند، به‌درد چه‌کسی می‌خورند، و آیا می‌توانید کلید API خودتان را بیاورید. این فضا ماه‌به‌ماه تغییر می‌کند، پس این را یک عکس لحظه‌ای بدانید، نه حکم ابدی.",
    byokLabel: "کلید شما",
    byok: { full: "کلید خودتان", limited: "فقط گفت‌وگو", no: "قفل‌شده" },
    tools: [
      {
        name: "Claude Code",
        kind: "ترمینال · افزونه‌ی ویرایشگر",
        strength:
          "کیفیت بالای کد به‌علاوه‌ی خودمختاری سرتاسری روی مخازن واقعی: کل کدبیس را می‌خواند، تغییرات چندفایلی را نقشه می‌کشد، آزمون‌ها را اجرا می‌کند و diff قابل‌بازبینی برمی‌گرداند.",
        fit: "مهندسان باتجربه در مخازن مرتب که در ترمینال زندگی می‌کنند.",
        byok: "full",
      },
      {
        name: "Cursor",
        kind: "ویرایشگر هوش‌مصنوعی‌محور (فورک VS Code)",
        strength:
          "بهترین تکمیل خودکار Tab در این حوزه، به‌علاوه‌ی عامل‌های سراسر مخزن و اجرای موازی با ورک‌تری.",
        fit: "توسعه‌دهندگانی که هوش مصنوعی را روی هر کلید می‌خواهند.",
        byok: "limited",
      },
      {
        name: "GitHub Copilot",
        kind: "افزونه · عامل ابری",
        strength:
          "عمیق‌ترین یکپارچگی با گیت‌هاب — ایشو ← شاخه ← PR ← بازبینی، دقیقاً همان‌جا که کدتان است.",
        fit: "تیم‌هایی که از پیش در جریان کار گیت‌هاب‌اند.",
        byok: "limited",
      },
      {
        name: "Windsurf / Devin Desktop",
        kind: "ویرایشگر هوش‌مصنوعی‌بنیان",
        strength:
          "عامل Cascade نقشه می‌کشد، می‌سازد، آزمون اجرا می‌کند و با دستِ‌کمتری روی کدبیس‌های بزرگ‌تر خودش را اصلاح می‌کند.",
        fit: "توسعه‌دهندگان منفرد و تیم‌هایی که کارهای عاملیِ خودمختار را موازی پخش می‌کنند.",
        byok: "limited",
      },
      {
        name: "Zed",
        kind: "ویرایشگر بومی (Rust)",
        strength:
          "حس بومیِ بسیار سریع و پروتکل عامل باز — Claude Code، Codex یا Gemini را درون آن اجرا کنید.",
        fit: "توسعه‌دهندگان کیبوردمحور که عامل خودشان را می‌آورند.",
        byok: "full",
      },
      {
        name: "Cline",
        kind: "عامل متن‌بازِ VS Code",
        strength:
          "گردش‌کار منضبط نقشه/اجرا، پشتیبانی غنی از MCP، و دروازه‌های تأیید تا از مسیر خارج نشود.",
        fit: "کار تحت‌نظارت و ابزارمحور با هر ارائه‌دهنده‌ای که دوست دارید.",
        byok: "full",
      },
      {
        name: "Aider",
        kind: "ترمینال، متن‌باز",
        strength:
          "بهترین نظم گیت در کلاس خود — هر تغییر یک کامیت اتمی و قابل‌بازگشت است. کم‌مصرف در توکن و آسان برای undo.",
        fit: "توسعه‌دهندگان ترمینالی روی کارهای خوش‌تعریف و کنترل‌شده از نظر هزینه.",
        byok: "full",
      },
      {
        name: "Antigravity / Jules",
        kind: "گوگل، عامل‌محور",
        strength:
          "عامل‌ها نقشه می‌کشند، فرمان اجرا می‌کنند، مرورگر را برای وارسی می‌رانند و PR باز می‌کنند؛ مبتنی بر Gemini، با امکان افزودن کلید Claude.",
        fit: "تیم‌های Gemini‌محور که گردش‌کار عامل‌محور را امتحان می‌کنند.",
        byok: "limited",
      },
    ],
    chooseTitle: "چطور انتخاب کنیم",
    chooseLead:
      "زیاد سخت نگیرید — بیشتر مهندسان قوی دو ابزار را با هم به‌کار می‌برند: یک عامل ترمینالی برای کارهای سنگین و یک ویرایشگر برای ویرایش‌های سریع.",
    choosePoints: [
      {
        title: "خودمختاری روی کدبیس واقعی",
        desc: "Claude Code یا Aider در ترمینال، یا Cline تحت‌نظارت درون VS Code.",
      },
      {
        title: "هوش مصنوعی روی هر کلید",
        desc: "Cursor به‌خاطر Tab؛ و Copilot اگر تیم‌تان از پیش در گیت‌هاب است.",
      },
      {
        title: "آوردن مدل خودتان",
        desc: "Zed، Cline، Aider و Continue کاملاً با کلید خودتان کار می‌کنند؛ Cursor و Copilot فقط برای گفت‌وگو.",
      },
    ],
    noteTitle: "نکته‌ای درباره‌ی تلاطم بازار",
    noteBody:
      "هر ابزار بزرگ در ۲۰۲۵–۲۰۲۶ دستخوش تغییر قیمت یا مالکیت شد — تغییر اعتبار Cursor، صورتحساب توکنی Copilot، دوبار دست‌به‌دست‌شدن Windsurf، و افت سازوکار Claude Code. بر اساس تناسب انتخاب کنید، نه جدولِ این فصل، و گردش‌کارتان را قابل‌انتقال نگه دارید.",
    ctaPrimary: "مقایسه‌ی مدل‌ها",
    ctaSecondary: "راه‌اندازی جعبه‌ابزار",
  },
  models: {
    eyebrow: "مدل‌ها برای کدنویسی",
    title: "مغز مناسب کار را انتخاب کنید",
    lead: "سه خانواده بیشتر کار کدنویسی در ۲۰۲۶ را انجام می‌دهند: Claude از Anthropic، خط متن‌بازِ DeepSeek، و Gemini از گوگل — با مدل‌های محلیِ قدرتمند در همان نزدیکی. این‌جا می‌بینید واقعاً چه فرقی دارند و کدام الگو بیشترین صرفه‌جویی را می‌کند. بنچمارک‌ها هفته‌به‌هفته عوض می‌شوند و بسیاری از نمرات بالا توسط خود سازنده گرفته شده‌اند، پس به شکل کلی اعتماد کنید و عددها را راستی‌آزمایی کنید.",
    familiesLabel: "آن سه که بیشتر سراغشان می‌روید",
    families: [
      {
        name: "Claude",
        who: "Anthropic",
        tagline: "پیش‌فرضِ کیفیت‌محور",
        strengths:
          "تمیزترین کد و سازگارترین با قراردادها، و قوی‌ترین خودمختاری عاملیِ سرتاسری. Opus 4.8 برای استدلال سخت، Sonnet 4.6 به‌عنوان اسب‌بارکشِ روزمره، و Haiku 4.5 برای کارهای ارزان و پرحجم.",
        watch: "گران‌ترین در رده‌ی بالا؛ تغییرات سازوکار، نوسان واقعی در کیفیت ایجاد کرده است.",
        cost: "$$–$$$",
      },
      {
        name: "DeepSeek",
        who: "وزن‌های باز",
        tagline: "نزدیک به مرز فناوری، با چند سِنت",
        strengths:
          "وزن‌باز و قابل‌میزبانی روی سرور خودتان، با کدنویسی نزدیک به مرز فناوری و کسری کوچک از هزینه. خط V4 زمینه‌ی یک‌میلیون توکنی دارد؛ ممیزی کامل یک اندپوینت می‌تواند به‌جای دلار، چند سِنت هزینه ببرد.",
        watch:
          "نسخه‌های استدلالی زیادی فکر می‌کنند و طولانی می‌شوند؛ ارقام بنچمارکِ سازنده خوش‌بینانه‌اند.",
        cost: "$",
      },
      {
        name: "Gemini",
        who: "Google",
        tagline: "زمینه و چندوجهی",
        strengths:
          "پنجره‌ی یکدستِ یک‌میلیون توکنی در همه‌ی رده‌ها و بهترین درک چندوجهی. رده‌های Flash سریع و ارزان‌اند؛ Pro یک نمونه‌سازِ تک‌مرحله‌ایِ قوی است.",
        watch:
          "فراخوانی ابزار گاهی بی‌ثبات است و فکرش را لو می‌دهد — برنامه‌ریز خوبی است، پس برای اجرا با مدلی دیگر جفتش کنید.",
        cost: "$–$$",
      },
    ],
    alsoTitle: "این‌ها هم ارزش دانستن دارند",
    also: [
      {
        name: "OpenAI GPT / Codex",
        desc: "یک کدنویس عاملیِ قوی به‌علاوه‌ی یک عامل ترمینالیِ متن‌باز محبوب (Codex CLI). بسیاری آن را در کنار Claude به‌کار می‌برند.",
      },
      {
        name: "مدل‌های محلی / باز",
        desc: "Qwen Coder، GLM و Kimi K2 اکنون با مدل‌های بسته رقابت می‌کنند و روی سخت‌افزار خودتان اجرا می‌شوند — داستانِ حریم خصوصی و کارِ آفلاین.",
      },
    ],
    routingEyebrow: "صرفه‌جوییِ هزینه",
    routingTitle: "ارزان‌و‌سریع برای بیشترِ کار، مرزِ فناوری برای ۲۰٪ سخت",
    routingBody:
      "بخش عمده‌ی کار — قالب‌های تکراری، ویرایش‌ها، جست‌وجوها، اصلاح‌های ساده — را به یک مدل ارزان و سریع بسپارید و فقط بخش‌های سخت (معماری، بازآرایی چندفایلی، احراز هویت، پرداخت‌ها، باگ‌های ظریف) را به مدلِ مرزِ فناوری ارتقا دهید. درست انجام‌شده هزینه را به‌شدت کم می‌کند با افت کیفیتِ ناچیز. بد انجام‌شده — مدلی بیش‌ازحد ضعیف روی کاری سخت — گران‌تر تمام می‌شود، چون به‌جای یک پاسِ تمیز، بهای سه پاسِ شلخته به‌اضافه‌ی بازبینی خودتان را می‌پردازید.",
    routingPoints: [
      {
        title: "نقش تعریف کنید، نه مسیریابِ جادویی",
        desc: "بیشتر ابزارها به‌صورت ایستا رده‌بندی می‌کنند: یک مدل برنامه‌ریز و یک مدل مجری. همین هنوز از مسیریاب‌های خودکارِ نابالغِ امروز بهتر است.",
      },
      {
        title: "مرزِ فناوری را برای کارهای خطرناک نگه دارید",
        desc: "مهاجرت‌ها، امنیت، پرداخت‌ها و باگ‌های محیط تولید جایی‌اند که مدل قوی‌تر هزینه‌اش را درمی‌آورد.",
      },
      {
        title: "کلید خودتان را بیاورید تا آزادانه ترکیب کنید",
        desc: "Cline، Aider، Zed و Continue با یک کلید به صدها مدل می‌رسند، پس می‌توانید برای هر کار دنده عوض کنید.",
      },
    ],
    honestTitle: "یک نکته‌ی صادقانه",
    honestBody:
      "مدل را از روی اسکرین‌شاتِ یک جدول انتخاب نکنید. SWE-bench Verified تا حدی اشباع شده، نمرات بالا اغلب توسط سازنده گرفته شده‌اند، و قیمت‌ها ماه‌به‌ماه جابه‌جا می‌شوند. دو مدل را یک هفته روی کدبیس خودتان امتحان کنید — آن‌که کمترین اصلاح را لازم دارد برنده است.",
    ctaPrimary: "راه‌اندازی جعبه‌ابزار",
    ctaSecondary: "مطالعه‌ی راهنما",
  },
  toolbox: {
    eyebrow: "جعبه‌ابزار سیستم",
    title: "ابزارها را نصب کنید، عامل را آزاد کنید",
    lead: "عامل کدنویسی‌ای که می‌تواند فرمان‌های شِل را اجرا کند، به‌محض وجودِ ابزارهای مفید روی دستگاهتان به‌طرز چشمگیری تواناتر می‌شود. به‌جای آنکه فقط فایل ویرایش کند، یک اسکریپت کوتاه می‌نویسد، داده را کوئری می‌گیرد، مرورگر را می‌راند و PR باز می‌کند. اغلب، نصبِ خودِ ابزار همه‌ی یکپارچه‌سازی است — عامل از پیش بلد است چطور آن را براند.",
    principleTitle: "دو بُرد، محرکِ همه‌چیز",
    principlePoints: [
      {
        title: "کارِ قطعی را به کد بسپارید",
        desc: "مرتب‌سازی، تجزیه، ریاضی و تبدیل قالب، وقتی به‌صورت اسکریپت اجرا شوند سریع‌تر و دقیق‌اند — نه «محاسبه‌شده» توکن‌به‌توکن.",
      },
      {
        title: "داده‌ی بزرگ را بیرون از زمینه نگه دارید",
        desc: "کدِ اسکریپت هرگز وارد پنجره‌ی زمینه نمی‌شود — فقط خروجی کوچکش وارد می‌شود. همین فرقِ خفه‌شدن روی یک CSVِ ۲۸ مگابایتی است با جاری‌کردن یک فایل چندگیگابایتی برای چند صد توکن.",
      },
    ],
    groupsLabel: "محتوای جعبه",
    groups: [
      {
        name: "زمان‌اجراها",
        tools: [
          {
            name: "Python + uv",
            install: "curl -LsSf https://astral.sh/uv/install.sh | sh",
            use: "اسکریپت‌های یک‌بارمصرف برای داده، تجزیه و خودکارسازی. uv فوراً محیط‌های ایزوله می‌سازد — Claudeِ امروزی بدون درخواست، اسکریپت‌های `uv run` با وابستگیِ درون‌خطی تولید می‌کند.",
          },
          {
            name: "Node.js + npx",
            install: "brew install node",
            use: "اجرای ابزارهای CLI بدون نصب — `npx prettier --write .` — ساخت اسکلت پروژه، اجرای JS. دوقلوی جاوااسکریپتیِ uvx.",
          },
          {
            name: "TypeScript / tsx",
            install: "npm i -D tsx",
            use: "اجرای یک اسکریپت `.ts`ِ یک‌بارمصرف که تایپ‌های خودِ پروژه را ایمپورت می‌کند — `npx tsx check.ts` — بدون مرحله‌ی build.",
          },
        ],
      },
      {
        name: "جست‌وجو و داده",
        tools: [
          {
            name: "git",
            install: "brew install git",
            use: "تورِ ایمنی و لایه‌ی موازی‌سازی — کامیت‌های اتمی و قابل‌بازگشت، به‌علاوه‌ی ورک‌تری‌ها تا چند عامل هم‌زمان بدون تداخل کار کنند.",
          },
          {
            name: "ripgrep (rg)",
            install: "brew install ripgrep",
            use: "جست‌وجوی سریع و آگاه به gitignore که عامل برای پیمایش به آن تکیه می‌کند، بی‌آنکه فایل‌های ساخت را به زمینه بکشد.",
          },
          {
            name: "fd",
            install: "brew install fd",
            use: "یافتن سریع فایل بر اساس نام، برای ساختن مجموعه‌ای از نامزدها پیش از خواندن یا ویرایش.",
          },
          {
            name: "jq / yq",
            install: "brew install jq yq",
            use: "کوئری و بازچینیِ مطمئنِ JSON/YAML — `gh pr list --json … | jq …` به‌جای تجزیه‌ی شکننده‌ی رشته.",
          },
          {
            name: "sqlite3",
            install: "brew install sqlite",
            use: "یک خروجی CSV را بارگذاری کنید و کوئری‌های واقعیِ گروهی/جوین اجرا کنید؛ یک حلقه‌ی عاملیِ بازبینی ← کوئری ← خوددرمانی.",
          },
        ],
      },
      {
        name: "شبکه، رسانه و اسناد",
        tools: [
          {
            name: "gh (GitHub CLI)",
            install: "brew install gh",
            use: "از احراز هویت خودتان استفاده می‌کند تا PR باز کند، CI را بپاید، لاگ‌های شکست را بخواند و کامنت بگذارد. یک توسعه‌دهنده با همین روش حدود ۲۰۰ PR را نیمه‌خودکار کرد.",
          },
          {
            name: "curl / httpie",
            install: "brew install httpie",
            use: "اندپوینتی را که همین حالا نوشته دود-آزمایی می‌کند، شناسه‌ها را می‌گیرد، شکل پاسخ را بررسی می‌کند و تا درست‌شدنِ مسیر حلقه می‌زند.",
          },
          {
            name: "Docker",
            install: "brew install --cask docker",
            use: "یک Postgresِ یک‌بارمصرف بالا می‌آورد تا در برابرش راستی‌آزمایی کند — و امن‌ترین جا برای اجرای یک عامل خودمختار، جدا از میزبان شما.",
          },
          {
            name: "ffmpeg",
            install: "brew install ffmpeg",
            use: "پلِ بینایی: یک گزارش باگِ ضبط‌شده از صفحه را به فریم‌هایی تقسیم می‌کند که عامل واقعاً می‌تواند ببیندشان.",
          },
          {
            name: "pandoc",
            install: "brew install pandoc",
            use: "یک مشخصاتِ PDF را به Markdown تبدیل کنید تا ارزان بخواندش، یا گزارش Markdown را به PDFِ تمیز بدل کنید.",
          },
        ],
      },
      {
        name: "وارسی کار",
        tools: [
          {
            name: "ruff / biome",
            install: "uvx ruff check .",
            use: "لینت + قالب‌بندیِ تقریباً آنی تا عامل خروجی خودش را هر ویرایش بررسی کند و حلقه‌ی اصلاح را تنگ‌تر کند.",
          },
          {
            name: "pytest",
            install: "pip install pytest",
            use: "حلقه را می‌بندد — یک آزمونِ شکست‌خورده به عامل می‌گوید «تمام نشده» و او را به اصلاح و اجرای دوباره وامی‌دارد.",
          },
          {
            name: "shellcheck",
            install: "brew install shellcheck",
            use: "هر اسکریپت شِلی را که می‌نویسد پیش از اجرا لینت می‌کند — باگ‌های متغیرِ نقل‌قول‌نشده و گلابِ بد را می‌گیرد.",
          },
        ],
      },
      {
        name: "سرورهای MCP",
        tools: [
          {
            name: "Playwright MCP",
            install: "claude mcp add playwright npx @playwright/mcp@latest",
            use: "کنترل واقعیِ مرورگر از طریق درختِ دسترس‌پذیری — عامل، وب‌اپی را که همین حالا ساخته QA می‌کند، بدون نیاز به مدل بینایی.",
          },
          {
            name: "MCPِ پایگاه‌داده / فایل‌سیستم",
            install: "claude mcp add my-db -- npx …",
            use: "دسترسیِ تایپ‌دار و محدوده‌دار به یک پایگاه‌داده‌ی زنده یا فایل‌ها — ساختارمند و قابل‌ممیزی، برخلاف شِلِ خام.",
          },
        ],
      },
    ],
    starterLabel: "یک‌خطی برای آماده‌سازیِ یک دستگاه",
    starterCode: [
      "# macOS — هسته‌ی پراهرم",
      "brew install git ripgrep fd jq gh sqlite pandoc ffmpeg",
      "curl -LsSf https://astral.sh/uv/install.sh | sh",
      "brew install node && npm i -g tsx",
    ],
    safetyEyebrow: "این را رد نکنید",
    safetyTitle: "عاملی با دسترسی به شِل، یک سطحِ حمله است",
    safetyBody:
      "همان قدرتی که به عامل اجازه می‌دهد ابزارهای شما را اجرا کند، اجازه می‌دهد هر چیزی را اجرا کند. فضای کار بدهید، اما مرزهای واقعی دورش بکشید — به‌ویژه وقتی بی‌نظارت اجرا می‌شود.",
    safetyPoints: [
      {
        title: "سندباکسش کنید",
        desc: "عامل‌های خودمختار را در یک کانتینر یا VMِ یک‌بارمصرف اجرا کنید که فقط مخزن را سوار کرده باشد. سندباکس خودِ Anthropic پرسش‌های دسترسی را حدود ۸۴٪ کاهش داد.",
      },
      {
        title: "فهرست مجاز بسازید، نه YOLO",
        desc: "فرمان‌های امن (لینت، آزمون) را تأیید کنید و برای بقیه پرسش را نگه دارید. پرشِ کامل از دسترسی‌ها فقط درون کانتینرِ بدون شبکه.",
      },
      {
        title: "مراقبِ سه‌گانه‌ی مرگبار باشید",
        desc: "داده‌ی خصوصی + محتوای نامطمئن + راهی برای فرستادن داده به بیرون = نشت با یک پرامپتِ تزریق‌شده. یک پایه‌اش را قطع کنید، یا انسان را در حلقه نگه دارید.",
      },
    ],
    ctaPrimary: "ببینید کدام ویرایشگر مناسب است",
    ctaSecondary: "مطالعه‌ی راهنما",
  },
  sidebar: {
    title: "هسته‌ی سیستم",
    version: "نسخه ۲.۰.۴-آلفا",
    joinCommunity: "پیوستن به انجمن",
    items: [
      { id: "handbook", label: "مقدمه" },
      { id: "skill-guides", label: "راهنمای مهارت‌ها" },
      { id: "loops", label: "حلقه‌ها" },
      { id: "roadmap", label: "نقشه‌راه" },
      { id: "resources", label: "مرکز منابع" },
      { id: "security", label: "امنیت" },
      { id: "changelog", label: "تغییرات" },
    ],
  },
  handbook: {
    eyebrow: "راهنما",
    title: "چطور واقعاً با یک عامل کدنویسی کار کنیم",
    subtitle:
      "اصول اولیه — همان چند عادتی که مرز میان «هوش مصنوعی همه‌چیز را به‌هم می‌ریزد» و کاری است که حاضرید منتشرش کنید. هیچ‌کدام مختص یک مدل نیست؛ بحث بر سرِ نحوه‌ی راه‌اندازی عامل و در حلقه‌ماندنِ شماست.",
    status: [
      { label: "زمان مطالعه", value: "حدود ۱۰ دقیقه" },
      { label: "سطح", value: "مبانی" },
    ],
    claudeMdLabel: "یک CLAUDE.md که ارزش توکنش را دارد",
    claudeMdFile: "CLAUDE.md",
    claudeMd: [
      "# Project: acme-api",
      "",
      "## Commands",
      "- Test: `pnpm test`  ·  Lint: `pnpm lint`  ·  Dev: `pnpm dev`",
      "- One test: `pnpm test -- path/to/file.test.ts`",
      "",
      "## Conventions",
      "- TypeScript strict, no `any`. Named exports only.",
      "- Use the `db` helper in src/lib/db.ts — never import `pg` directly.",
      "",
      "## Gotchas",
      "- /auth routes need SESSION_SECRET in .env.local.",
      "- IMPORTANT: never edit files under src/generated/.",
      "",
      "<!-- Keep under ~200 lines. If a rule gets ignored, it's buried — cut. -->",
    ],
    sections: [
      {
        num: "۰۱",
        title: "زمینه‌ای را بده که نمی‌تواند حدس بزند",
        lead: "عامل خیلی چیزها را از کدِ شما استنباط می‌کند، اما نه قراردادها، نه گیر‌و‌گرفت‌ها، و نه اینکه کدام فرمان آزمون‌ها را اجرا می‌کند. این‌ها را یک‌بار در فایلی بنویس که هر نشست می‌خواندش — CLAUDE.md، AGENTS.md، .cursorrules — و از تکرار خلاص شو.",
        points: [
          {
            title: "فقط آنچه نمی‌تواند استنباط کند",
            desc: "فرمان‌ها، سبکِ خانگی که با پیش‌فرض‌ها فرق دارد، آداب مخزن، و گیرهای واقعی. هرچه از کد پیداست را رها کن — نویز است و سیگنال را دفن می‌کند.",
          },
          {
            title: "کوتاهش نگه دار",
            desc: "کل فایل هر نوبت بارگذاری می‌شود، پس مالیاتی ثابت است. زیر حدود ۲۰۰ خط هدف بگیر؛ اگر عامل یک قاعده را مدام می‌شکند، فایل زیادی بلند است و آن قاعده دفن شده.",
          },
          {
            title: "لایه‌بندی‌اش کن",
            desc: "ترجیحات سراسری در فایل کاربری، قواعد مشترک در فایل پروژه، یادداشت‌های شخصی در یک فایلِ گیت‌ایگنورشده. قواعدِ مسیرمحور فقط وقتی بارگذاری می‌شوند که عامل فایل‌های منطبق را لمس کند.",
          },
        ],
      },
      {
        num: "۰۲",
        title: "نقش‌ها را از مهارت‌ها جدا کن",
        lead: "دستورها را به نقش‌های همیشه‌فعال (قواعد ثابت) و مهارت‌های درخواستی (گردش‌کارهای نام‌دار) تقسیم کن. عامل قواعد را همه‌جا اعمال می‌کند و مهارت را فقط وقتی کار اقتضا کند فرامی‌خواند.",
        points: [
          {
            title: "نقش‌ها قاعده‌اند",
            desc: "محدودیت‌های ثابت در CLAUDE.md یا .cursorrules. کوتاه نگهشان دار و بر اساس حوزه تقسیمشان کن تا شرطی اعمال شوند، نه همه با هم.",
          },
          {
            title: "مهارت‌ها گردش‌کارند",
            desc: "یک SKILL.md با توصیفی دقیق و گام‌های صریح. بدنه‌اش فقط هنگام فراخوانی بار می‌شود، پس ده مهارت تا وقتی واقعاً لازمشان نداری چند صد توکن هزینه دارند.",
          },
          {
            title: "یک‌بار بنویسش",
            desc: "مهارتی که عامل می‌تواند صدا بزند، بهتر از توضیح دوباره‌ی همان گردش‌کار در هر نشست است. حلقه لوله‌کشی است؛ مهارت دارایی‌ای است که انباشته می‌شود.",
          },
        ],
      },
      {
        num: "۰۳",
        title: "اول نقشه، بعد اجرا",
        lead: "بزرگ‌ترین جهشِ کیفیت این است که عامل را وادار کنی پیش از ویرایش نقشه بکشد. بگذار فقط‌خواندنی کاوش کند، رویکردی پیشنهاد دهد، و تنها بعد کد بنویسد — کاوش ← نقشه ← کد ← کامیت.",
        points: [
          {
            title: "از حالت نقشه استفاده کن",
            desc: "بگذار پیش از دست‌زدن به فایل‌ها تحقیق کند و گام‌ها را بچیند. نقشه‌ی غلط ارزان اصلاح می‌شود؛ بازآراییِ غلط در ده فایل نه.",
          },
          {
            title: "دقیق باش",
            desc: "به فایل‌ها اشاره کن، خطای واقعی را بچسبان، یک نمونه لینک بده. ابهام دقیقاً جایی است که عامل API توهم می‌زند و سرگردان می‌شود.",
          },
          {
            title: "اسپک، بعد شروعِ تازه",
            desc: "نقشه را در فایلی بنویس، سپس نشستی تمیز برای اجرایش آغاز کن. زمینه‌ی شلوغ‌تر کمتر یعنی خروجی تیزتر.",
          },
        ],
      },
      {
        num: "۰۴",
        title: "وارسی کن — «تمام شد» یک ادعاست",
        lead: "عاملی که خودش به مشق خودش نمره بدهد، دست‌ودلباز است. چیزی عینی بده تا در برابرش بسنجد، و خودت نتیجه را بخوان.",
        points: [
          {
            title: "اول آزمون",
            desc: "بگو TDD می‌کنیم: آزمون‌ها را بنویس، شکستشان را ببین، کامیتشان کن، سپس تا سبزشدن پیاده‌سازی کن بی‌آنکه آزمون‌ها را دست بزنی. هر چرخه‌ی قرمز‌به‌سبز بازخوردی بی‌ابهام است.",
          },
          {
            title: "یک جفت‌چشمِ دیگر",
            desc: "بگذار عاملی جدا — ترجیحاً مدلی متفاوت — diff را بازبینی کند. سازنده زیادی مهربان است؛ زمینه‌ی تازه منتقدِ تیزتری است.",
          },
          {
            title: "مراقبِ میان‌بُرها باش",
            desc: "عامل‌ها زیر فشار آزمون‌های شکست‌خورده را حذف می‌کنند، ماک جعل می‌کنند یا خطا را قورت می‌دهند. ویرایش آزمون‌ها حین پیاده‌سازی را ممنوع کن و آنچه واقعاً تغییر کرده را بخوان.",
          },
        ],
      },
      {
        num: "۰۵",
        title: "پنجره‌ی زمینه را مدیریت کن",
        lead: "زمینه قید واقعی است. هرچه پر می‌شود، بازیابی می‌پوسد و تلاش‌های شکست‌خورده‌ی قدیمی سیگنال را غرق می‌کنند. نشست‌ها را عمداً جمع‌وجور نگه دار.",
        points: [
          {
            title: "پاک‌کردن در برابر فشرده‌سازی",
            desc: "بین کارهای نامرتبط پاک کن؛ درون یک کار طولانی فشرده کن تا خلاصه شود. دوبار سرِ یک چیز اصلاحش کردی؟ پاک کن و پرامپت را بازنویس — نشست تمیز از نشست شلوغ بهتر است.",
          },
          {
            title: "به زیرعامل‌ها بسپار",
            desc: "تحقیق را به یک زیرعامل بده: در پنجره‌ی خودش کار می‌کند و خلاصه‌ای کوتاه برمی‌گرداند، پس کاوش هرگز رشته‌ی اصلی را آلوده نمی‌کند.",
          },
          {
            title: "فایل‌های کوچک برنده‌اند",
            desc: "فایل‌های ویژگی‌محور و ایمپورت‌های صریح، آنچه عامل می‌خواند را متراکم و کم‌هزینه نگه می‌دارند — هم برای او، هم برای شما.",
          },
        ],
      },
    ],
    closerTitle: "آن یک قاعده که زیرِ همه‌ی قاعده‌هاست",
    closerBody:
      "آنچه می‌سازد را بخوان. هرچه عامل سریع‌تر کدی را بفرستد که شما ننوشته‌اید، شکاف فهم شما بازتر می‌شود — مگر آنکه واقعاً diff را بخوانید. از ابزارها برای سریع‌تر‌رفتن استفاده کن، نه برای فکرنکردن.",
    ctaPrimary: "ترفندها و گردش‌کارها",
    ctaSecondary: "راه‌اندازی جعبه‌ابزار",
  },
  roadmap: {
    badge: "سند زنده",
    version: "EN · فارسی",
    title: "برنامه‌ی پیشِ‌روی راهنما",
    titleHighlight: "برنامه",
    lead: "این یادداشت‌ها به کجا می‌روند. راهنما با تغییر ابزارها و با برخوردن به چیزهای ارزش‌نوشتن رشد می‌کند — این طرحِ کلی است، نه یک قول.",
    statusLabels: { done: "منتشرشده", active: "در حال انجام", upcoming: "برنامه‌ریزی‌شده" },
    phases: [
      {
        num: "اکنون",
        tag: "منتشرشده",
        title: "هسته‌ی راهنما",
        status: "done",
        items: [
          {
            title: "ویرایشگرها، مدل‌ها و جعبه‌ابزار",
            desc: "سه موضوع پرچم‌دار، با مقایسه‌های واقعی و نصبِ یک‌خطی.",
          },
          {
            title: "راهنما و ایمنی",
            desc: "تمرینِ پایه، به‌علاوه‌ی نحوه‌ی اجرای عامل‌ها بدون پشیمانی.",
          },
        ],
      },
      {
        num: "بعدی",
        tag: "در حال انجام",
        title: "عمق و پرداخت",
        status: "active",
        items: [
          {
            title: "نمونه‌های کاربردیِ بیشتر",
            desc: "ترنسکریپت‌های واقعی و diffهای قبل/بعد، نه فقط اصول.",
          },
          {
            title: "به‌روز نگه‌داشتن مدل‌ها",
            desc: "تازه‌سازی مقایسه با جابه‌جاشدنِ مدام رده‌ها.",
          },
        ],
      },
      {
        num: "بعدتر",
        tag: "برنامه‌ریزی‌شده",
        title: "فهرست انتظار",
        status: "upcoming",
        items: [
          {
            title: "جست‌وجوی واقعیِ سمت‌کلاینت",
            desc: "نمایه‌ای روی راهنما تا مستقیم به پاسخ بپری.",
          },
          {
            title: "زبان‌های بیشتر",
            desc: "فراتر از انگلیسی و فارسی، اگر تقاضایی باشد.",
          },
          {
            title: "MDX برای متن بلند",
            desc: "انتقال محتوای بلند به فایل‌های محتوا به‌جای دیکشنری.",
          },
        ],
      },
    ],
    phaseStats: [
      { value: "۹", label: "راهنما" },
      { value: "EN / فا", label: "زبان‌ها" },
    ],
    ctaTitle: "پیشنهادی داری، یا خاطره‌ای ارزش‌افزودن؟",
    ctaPrimary: "مطالعه‌ی راهنما",
    ctaSecondary: "مرور منابع",
  },
  skillGuides: {
    eyebrow: "ترفندها و گردش‌کارها",
    related: ["ورک‌تری‌ها", "اول‌آزمون", "مدیریت کار"],
    relatedLabel: "در این بخش",
    title: "حرکت‌هایی که واقعاً کار را پیش می‌برند",
    lead: "راهنما نظریه است؛ این‌ها عادت‌اند. ترفندهای کوچک و ملموس برای بیرون‌کشیدنِ بیشتر از یک عامل در کار روزمره — و برای مدیریت کارها تا رشته‌ی کار هرگز گم نشود.",
    tricksLabel: "ترفندهای روزمره",
    tricks: [
      {
        name: "عامل‌ها را موازی اجرا کن",
        tag: "ورک‌تری",
        desc: "git worktree به هر عامل شاخه و چک‌اوت خودش را می‌دهد. دو یا سه‌تا را هم‌زمان روی کارهای مستقل اجرا کن — نمی‌توانند پای هم را لگد کنند.",
      },
      {
        name: "هدفی بده تا با آن مقایسه کند",
        tag: "اسکرین‌شات",
        desc: "یک ماک‌آپ یا اسکرین‌شاتِ باگ را بچسبان. بگذار عامل از خروجی خودش اسکرین‌شات بگیرد و تا منطبق‌شدن تکرار کند — یک MCPِ مرورگر از پیکسلِ خام بهتر است.",
      },
      {
        name: "اول آزمون را بنویس",
        tag: "TDD",
        desc: "آزمونِ شکست‌خورده، کامیتش کن، سپس تا سبزشدن پیاده‌سازی کن بی‌آنکه آزمون را دست بزنی. هر قرمز‌به‌سبز بازخوردی است که عامل نمی‌تواند جعلش کند.",
      },
      {
        name: "اشاره کن، توصیف نکن",
        tag: "زمینه",
        desc: "با @ به فایل‌ها ارجاع بده، خطای واقعی را بچسبان، یک نمونه لینک کن. پرامپت مبهم دقیقاً جایی است که توهم می‌زند و سرگردان می‌شود.",
      },
      {
        name: "در یک فایل نقشه بکش",
        tag: "اسپک",
        desc: "بگذار plan.md را بنویسد، بازبینی‌اش کن، سپس در نشستی تازه اجرایش کن. نقشه از سرِنو زنده می‌ماند؛ چتِ شلوغ نه.",
      },
      {
        name: "سازنده بازرس نیست",
        tag: "بازبینی",
        desc: "diff را به عاملی دوم بفرست — ترجیحاً مدلی متفاوت. زمینه‌ی تمیز منتقدِ بسیار تیزتری از همانی است که نوشته.",
      },
      {
        name: "دو خطا، بعد ریست",
        tag: "بازیابی",
        desc: "دوبار سرِ یک چیز اصلاحش کردی؟ پاک کن و پرامپت را بازنویس. نشست تمیز از انباشتنِ اصلاح روی یک نشستِ گیج بهتر است.",
      },
      {
        name: "حلقه را ببند",
        tag: "قلاب‌ها",
        desc: "یک قلابِ پس‌از‌ویرایش که خودکار قالب‌بندی می‌کند و آزمون‌های متأثر را اجرا می‌کند، «لطفاً یادت باشد لینت کنی» را به چیزی بدل می‌کند که خودبه‌خود رخ می‌دهد.",
      },
    ],
    terminalLabel: "حلقه‌ی ورک‌تری + آزمون",
    terminal: [
      "$ git worktree add ../fix-auth -b fix-auth",
      "$ cd ../fix-auth && claude",
      "> write a failing test for the expired-token case, then fix it",
      "✓ added tests/auth.test.ts  (1 failing)",
      "✓ patched src/auth/session.ts",
      "✓ pnpm test — 42 passing",
      "> open a PR",
      "✓ gh pr create — #218 opened",
    ],
    taskEyebrow: "مدیریت کار",
    taskTitle: "به کار، حافظه‌ای بیرون از چت بده",
    taskBody:
      "عامل فراموش می‌کند؛ مخزن نه. یک PROGRESS.md نگه دار که می‌خواند و تیک می‌زند، تا کار از یک ‎/clear‏، یک ری‌استارت، یا نشستِ تازه‌ی فردا جان به‌در ببرد.",
    taskSteps: [
      "کار را به‌صورت چک‌لیستی که عامل صاحبش است فهرست کن — هنگام اتمام، ‏`- [ ]`‏ را به ‏`- [x]`‏ تبدیل می‌کند.",
      "بگذار در پایان هر نشست بنویسد چه آزمود و چه مانده.",
      "اجرای بعدی با خواندن همان فایل شروع می‌شود — بدون بازسازی پروژه از صفر.",
      "تو فایل را مرور می‌کنی تا پیشرفت را ببینی، بی‌آنکه کل گفت‌وگو را بالا‌پایین کنی.",
    ],
    ctaPrimary: "عمیق‌تر: حلقه‌ها",
    ctaSecondary: "جعبه‌ابزار",
  },
  security: {
    eyebrow: "اجرای ایمن",
    title: "اجازه‌ی اجرای فرمان به عامل، بدون پشیمانی",
    lead: "عاملی که می‌تواند شِل شما را اجرا کند، هم همه‌ی فایده است و هم همه‌ی خطر. همان حلقه‌ای که آزمون‌ها را اجرا می‌کند می‌تواند فایل پاک کند، راز لو دهد، یا با متنی که می‌خواند ربوده شود. هیچ‌کدامِ این‌ها نباید جلویت را بگیرد؛ باید شکلِ راه‌اندازی‌ات را تعیین کند.",
    riskEyebrow: "تهدید واقعی",
    riskTitle: "سه‌گانه‌ی مرگبار",
    riskBody:
      "تزریق پرامپت همان خطری است که آدم‌ها را غافلگیر می‌کند: متنی که عامل می‌خواند — یک ایشو، یک صفحه‌ی وب، README یک وابستگی — می‌تواند دستوری حمل کند که عامل دنبالش می‌رود. وقتی سه چیز هم‌زمان کنار هم بیایند، به یک سوءاستفاده‌ی واقعی بدل می‌شود.",
    riskLegs: [
      {
        title: "دسترسی به داده‌ی خصوصی",
        desc: "مخزن، env، پایگاه‌داده‌ات — هر چیز حساسی که عامل می‌تواند بخواند.",
      },
      {
        title: "مواجهه با محتوای نامطمئن",
        desc: "ایشوها، صفحات وب، PRها، مستندات بسته‌ها — هر متنی که دیگری نوشته و عامل می‌بلعدش.",
      },
      {
        title: "راهی برای فرستادن داده به بیرون",
        desc: "شبکه، بدنه‌ی یک PR، یک وب‌هوک — هر کانالی که می‌تواند داده را از دستگاه بیرون ببرد.",
      },
    ],
    riskClose:
      "یک پایه را قطع کن — داده را محدود کن، به ورودی بی‌اعتماد باش، یا خروج را ببند — یا انسان را در حلقه نگه دار. هر سه با هم، ابزارِ نشتی است که منتظر یک پرامپتِ تزریق‌شده نشسته.",
    permsTitle: "یک موضعِ دسترسی انتخاب کن",
    permsLead:
      "اینکه چقدر بدون پرسیدن به عامل اجازه‌ی کار بدهی، باید با میزان آسیبی که یک حرکتِ غلط می‌تواند بزند تناسب داشته باشد.",
    perms: [
      {
        name: "پیش‌فرض: پرسیدن",
        desc: "به‌صورت پیش‌فرض پیش از اجرای فرمان یا ویرایش فایل می‌پرسد. کندتر، اما همه‌چیز را می‌بینی. روی هر چیز مهمی از همین‌جا شروع کن.",
      },
      {
        name: "موارد امن را فهرست مجاز کن",
        desc: "فرمان‌های فقط‌خواندنی و idempotent — لینت، آزمون، build، git status — را خودکار تأیید کن تا بی‌غرغر اجرا شوند، و برای بقیه پرسش را نگه دار.",
      },
      {
        name: "حالت نقشه / فقط‌خواندنی",
        desc: "برای کاوش، بگذار بخواند و فرمان‌های فقط‌خواندنی اجرا کند اما هیچ ویرایشی نکند. عالی برای «این را بررسی کن» با شعاعِ تخریبِ صفر.",
      },
      {
        name: "پرشِ دسترسی فقط درون جعبه",
        desc: "«YOLO» / پرش از همه‌ی دسترسی‌ها متعلق به یک کانتینرِ یک‌بارمصرفِ بدون شبکه است — نه دستگاه واقعی‌ات با کلیدهای واقعی‌ات.",
      },
    ],
    practicesTitle: "مرزهایی که اهمیت دارند",
    practices: [
      {
        title: "اجراهای بی‌نظارت را سندباکس کن",
        desc: "یک کانتینر یا VMِ یک‌بارمصرف که فقط مخزن را سوار کرده، یعنی عاملِ لجام‌گسیخته چیزی را خراب نمی‌کند که نتوانی حذفش کنی. سندباکس خودِ Anthropic پرسش‌های دسترسی را حدود ۸۴٪ کم کرد.",
      },
      {
        title: "رازها را دور از دسترس نگه دار",
        desc: "کلیدهای واقعی محیط تولید را در env‌ای که عامل می‌تواند بخواند رها نکن. از اعتبارنامه‌های یک‌بارمصرف یا آزمایشی استفاده کن و آنچه سوار می‌شود را محدود کن.",
      },
      {
        title: "پیش از اعتماد، diff را بخوان",
        desc: "بی‌نظارت یعنی بدون نظارت، نه بدون بازبینی. «تمام شد» یک ادعاست؛ تغییرِ بدی که نخوانده‌ای هنوز تغییرِ بدِ توست.",
      },
      {
        title: "خروج را ببند",
        desc: "بدون شبکه، یا با فهرست مجازِ دامنه، هم نشتِ تصادفیِ داده را می‌گیرد و هم عاملِ ربوده‌شده‌ای را که می‌خواهد به خانه زنگ بزند.",
      },
    ],
    ctaPrimary: "بازگشت به جعبه‌ابزار",
    ctaSecondary: "مطالعه‌ی راهنما",
  },
  resources: {
    eyebrow: "منابع",
    title: "از کجا عمیق‌تر شویم",
    lead: "مجموعه‌ای کوتاه و دارای موضع از نقطه‌های شروع — مستندات رسمیِ ارزش‌خواندن، آدم‌های ارزش‌دنبال‌کردن، و ابزارهای ارزش‌نصب. گزیده، نه جامع.",
    note: "لینک‌ها و ابزارها در این فضا سریع تغییر می‌کنند. اگر چیزی این‌جا جابه‌جا شده، معمولاً ایده‌ی پشتش جابه‌جا نشده.",
    groups: [
      {
        name: "مستندات رسمی",
        links: [
          {
            label: "مستندات Claude Code",
            href: "https://code.claude.com/docs",
            desc: "حافظه، مهارت‌ها، قلاب‌ها، دسترسی‌ها، MCP — مرجع اصلی.",
          },
          {
            label: "Model Context Protocol",
            href: "https://modelcontextprotocol.io",
            desc: "استاندارد باز برای اتصال عامل‌ها به ابزارها و داده‌های واقعی.",
          },
          {
            label: "Aider",
            href: "https://aider.chat",
            desc: "مستندات، به‌علاوه‌ی جدولِ چندزبانه‌ی Polyglot برای مدل‌ها.",
          },
          {
            label: "Anthropic engineering",
            href: "https://www.anthropic.com/engineering",
            desc: "مهندسیِ زمینه، سازوکارها و طراحی عامل — از منبع اصلی.",
          },
        ],
      },
      {
        name: "آدم‌های ارزش‌دنبال‌کردن",
        links: [
          {
            label: "Simon Willison",
            href: "https://simonwillison.net",
            desc: "یادداشت‌های تیز و پرتکرار درباره‌ی عامل‌ها، تزریق پرامپت و «سه‌گانه‌ی مرگبار».",
          },
          {
            label: "Addy Osmani",
            href: "https://addyo.substack.com",
            desc: "مهندسیِ زمینه و گردش‌کارهای عملیِ کدنویسی با هوش مصنوعی.",
          },
          {
            label: "Claude Code best practices",
            href: "https://www.anthropic.com/engineering/claude-code-best-practices",
            desc: "کتابِ بازیِ رسمی — ارزش یک خواندنِ آرام و دقیق را دارد.",
          },
        ],
      },
      {
        name: "ابزارهایی برای نصب",
        links: [
          {
            label: "uv (Astral)",
            href: "https://docs.astral.sh/uv",
            desc: "اجراکننده‌ی سریعِ پایتون که عامل‌ها بی‌درخواست سراغش می‌روند.",
          },
          {
            label: "ripgrep",
            href: "https://github.com/BurntSushi/ripgrep",
            desc: "جست‌وجوی سریعِ کد که زیرِ بسیاری از ابزارهای عاملی است.",
          },
          {
            label: "GitHub CLI",
            href: "https://cli.github.com",
            desc: "بگذار عامل PR باز کند، CI را بخواند و کامنت بگذارد.",
          },
          {
            label: "Playwright MCP",
            href: "https://github.com/microsoft/playwright-mcp",
            desc: "یک مرورگر واقعی به عامل بده تا آنچه ساخته را آزمایش کند.",
          },
        ],
      },
    ],
    ctaPrimary: "راه‌اندازی جعبه‌ابزار",
    ctaSecondary: "مطالعه‌ی راهنما",
  },
  support: {
    eyebrow: "پرسش‌های متداول",
    title: "پرسش‌هایی که آدم‌ها واقعاً می‌پرسند",
    lead: "پاسخ‌های صادقانه به چیزهایی که هنگام شروعِ کدنویسی با عامل‌ها پیش می‌آید — شروع‌کردن، هزینه، و اینکه آیا می‌شود بهش اعتماد کرد.",
    categories: [
      {
        name: "شروع کار",
        faqs: [
          {
            q: "تا حالا از عامل کدنویسی استفاده نکرده‌ام. از کجا شروع کنم؟",
            a: "یک ابزار را انتخاب کن (Claude Code یا Cursor)، پروژه‌ای که می‌شناسی را باز کن، و کاری کوچک و خوش‌تعریف با راهی روشن برای بررسی نتیجه به آن بده. بعد diff را بخوان. راهنما عادت‌هایی را که مهم‌اند مرور می‌کند.",
          },
          {
            q: "جای من را می‌گیرد؟",
            a: "نه — کاری که می‌کنی را عوض می‌کند. قضاوت، معماری، و خواندنِ آنچه تولید کرده هنوز با توست. هرچه سریع‌تر کد بنویسد، این‌ها مهم‌تر می‌شوند.",
          },
          {
            q: "باید از قبل متخصص باشم؟",
            a: "بیشترین کمک را وقتی می‌کند که بتوانی خروجی خوب را از بد تشخیص دهی. تازه‌کارها سریع‌تر می‌سازند اما باگ‌های ظریف‌تری هم می‌فرستند که هنوز نمی‌بینند — پس همه‌چیز را وارسی کن و از diffها یاد بگیر.",
          },
        ],
      },
      {
        name: "هزینه و مدل‌ها",
        faqs: [
          {
            q: "از کدام مدل استفاده کنم؟",
            a: "پاسخ واحدی نیست. برای کار روزمره از مدلی ارزان و سریع استفاده کن و برای استدلال سخت از مدلی مرزِ فناوری. دو مدل را یک هفته روی کدبیس خودت امتحان کن — آن‌که کمترین اصلاح را لازم دارد برنده است. صفحه‌ی مدل‌ها عمیق‌تر می‌رود.",
          },
          {
            q: "چطور هزینه را پایین نگه دارم؟",
            a: "کار روزمره را به مدلی ارزان بسپار، بین کارها زمینه را پاک کن، از بارکردنِ ده‌ها سرور MCP هم‌زمان پرهیز کن، و هرگز نگذار حلقه‌ی بی‌نظارت بدون سقف بودجه اجرا شود.",
          },
          {
            q: "مدل‌های باز یا بسته؟",
            a: "مدل‌های وزن‌باز (DeepSeek، Qwen، GLM) حالا برای خیلی از کارها به‌اندازه‌ی کافی خوب‌اند و بسیار ارزان‌تر — یا برای میزبانی روی سرور خودت رایگان. مدل‌های بسته‌ی مرزِ فناوری هنوز در سخت‌ترین کارها پیش‌اند. خیلی‌ها از هر دو استفاده می‌کنند.",
          },
        ],
      },
      {
        name: "اعتماد و ایمنی",
        faqs: [
          {
            q: "می‌توانم بگذارم روی دستگاهم فرمان اجرا کند؟",
            a: "بله، اما شکلش بده: پیش‌فرض پرسیدن، فرمان‌های امن را فهرست مجاز کن، و هر چیز بی‌نظارت را سندباکس کن. پرش از همه‌ی دسترسی‌ها متعلق به یک کانتینرِ یک‌بارمصرفِ بدون شبکه است. «اجرای ایمن» را ببین.",
          },
          {
            q: "توهم‌زدنِ API چه؟",
            a: "حقیقتِ پایه بهش بده — به فایل‌های واقعی اشاره کن، خطای واقعی را بچسبان، و بگذار کد را اجرا کند تا واقعیت اصلاحش کند. حالت نقشه و آزمون‌ها بیشترِ بقیه را می‌گیرند.",
          },
          {
            q: "آیا کدم برای آموزش استفاده می‌شود؟",
            a: "بستگی به ارائه‌دهنده و پلن دارد — شرایط را بخوان. برای کدِ حساس، ارائه‌دهنده‌ای با تضمینِ عدم‌آموزش را ترجیح بده، یا مدلی باز را به‌صورت محلی اجرا کن.",
          },
        ],
      },
    ],
    ctaTitle: "هنوز گیر کرده‌ای؟",
    ctaBody: "برای مبانی از راهنما شروع کن، یا از جعبه‌ابزار تا دستگاهت را درست بچینی.",
    ctaPrimary: "مطالعه‌ی راهنما",
    ctaSecondary: "راه‌اندازی جعبه‌ابزار",
  },
  changelog: {
    eyebrow: "تغییرات",
    title: "تازه‌های راهنما",
    lead: "این مجموعه‌ای زنده از یادداشت‌هاست، نه کتابی تمام‌شده. این‌جا می‌بینی چه افزوده یا بازنویسی شده، از تازه‌ترین.",
    latestLabel: "آخرین",
    releasedLabel: "به‌روزرسانی",
    releases: [
      {
        version: "بازنویسیِ صادقانه",
        latest: true,
        date: "ژوئن ۲۰۲۶",
        groups: [
          {
            label: "افزوده‌شد",
            items: [
              "صفحه‌های تازه: ویرایشگرها و عامل‌ها، مدل‌ها برای کدنویسی، و جعبه‌ابزار سیستم.",
              "«اجرای ایمن» — موضعِ دسترسی و سه‌گانه‌ی مرگبارِ تزریق پرامپت.",
            ],
          },
          {
            label: "تغییر‌کرد",
            items: [
              "خانه و راهنما حول تمرینِ واقعی و مستقل از مدل بازنویسی شدند.",
              "محتوای داستانیِ قدیمیِ «پروتکل وایب» سراسر بازنشسته شد.",
            ],
          },
          {
            label: "طراحی",
            items: [
              "اسکرول‌ریویل، پس‌زمینه‌های شناورِ aurora، یک مارکی، و یک حاشیه‌ی درخشانِ مخروطی — همه CSS-محور و آگاه به کاهش‌حرکت.",
            ],
          },
        ],
      },
      {
        version: "مهندسی حلقه",
        latest: false,
        date: "پیش‌تر",
        groups: [
          {
            label: "افزوده‌شد",
            items: ["کاوش عمیقِ حلقه‌ها، برگرفته از نوشته‌های ادی اوسمانی و مت ون هورن."],
          },
        ],
      },
      {
        version: "پایه",
        latest: false,
        date: "پیش‌تر",
        groups: [
          {
            label: "افزوده‌شد",
            items: [
              "سایتِ دوزبانه‌ی انگلیسی/فارسی، پوسته‌ی تیره و روشن، خروجی ایستا، و چیدمانِ آگاه به RTL.",
            ],
          },
        ],
      },
    ],
    subscribeTitle: "مدام تغییر می‌کند",
    subscribeDesc:
      "ابزارها ماه‌به‌ماه جابه‌جا می‌شوند؛ این یادداشت‌ها دنبالشان می‌روند. از راهنما شروع کن.",
    subscribeCta: "مطالعه‌ی راهنما",
  },
  loops: {
    eyebrow: "مهندسی حلقه",
    title: "پرامپت‌نویسی را کنار بگذارید. حلقه طراحی کنید.",
    lead: "پرسروصداترین ایده‌ی این روزهای کدنویسی با هوش مصنوعی در یک جمله است: دیگر نباید به عامل‌های کدنویسی پرامپت بدهید — باید حلقه‌هایی طراحی کنید که به عامل‌های شما پرامپت می‌دهند. این یعنی چه، و چطور یک حلقه بسازیم.",
    sources: [
      {
        label: "«مهندسی حلقه» — ادی اوسمانی",
        href: "https://x.com/addyosmani/status/2064127981161959567",
      },
      {
        label: "«حلقه یعنی چه؟» — مت ون هورن",
        href: "https://x.com/mvanhorn/status/2063865685558903149",
      },
    ],
    quotes: [
      {
        text: "دیگر نباید به عامل‌های کدنویسی پرامپت بدهید. باید حلقه‌هایی طراحی کنید که به عامل‌های شما پرامپت می‌دهند.",
        who: "پیتر اشتاینبرگر",
      },
      {
        text: "دیگر به Claude پرامپت نمی‌دهم. حلقه‌هایی در حال اجرا دارم که به Claude پرامپت می‌دهند و تصمیم می‌گیرند چه کند. کار من نوشتن حلقه‌هاست.",
        who: "بوریس چرنی · Claude Code، Anthropic",
      },
    ],
    defEyebrow: "تعریف",
    defTitle: "حلقه دقیقاً چیست",
    defBody: [
      "حلقه برنامه‌ی کوچکی است که می‌نویسید تا به‌جای شما به عامل کدنویسی پرامپت بدهد، خروجی‌اش را بخواند، تصمیم بگیرد که تمام شده یا نه، و اگر نشده دوباره پرامپت بدهد. دیگر شما آن چیزی نیستید که درون حلقه پرامپت تایپ می‌کند — شما نویسنده‌ی حلقه می‌شوید و مدل به یک زیربرنامه تبدیل می‌شود.",
      "ساده بگوییم: حلقه یعنی cron به‌علاوه‌ی یک تصمیم‌گیرنده در بدنه. یک کرون‌جاب اسکریپت ثابتی را اجرا می‌کند. اما حلقه مدلی را اجرا می‌کند که به وضعیت کنونی نگاه می‌کند، کنش بعدی را برمی‌گزیند، انجامش می‌دهد، بررسی می‌کند که کار کرد یا نه، و تصمیم می‌گیرد ادامه دهد یا نه.",
    ],
    ladderTitle: "نقطه‌ی اهرم یک طبقه بالاتر رفت",
    ladder: [
      { stage: "آن‌وقت", title: "کدنویسی دستی", desc: "کد را با تکمیل خودکار با دست می‌نوشتید." },
      {
        stage: "اخیراً",
        title: "پرامپت موازی",
        desc: "۵ تا ۱۰ نشست عامل را هم‌زمان اجرا می‌کنید و به هرکدام پرامپت می‌دهید.",
      },
      {
        stage: "اکنون",
        title: "نوشتن حلقه‌ها",
        desc: "اصلاً پرامپت نمی‌دهید. حلقه‌هایی می‌نویسید که به عامل‌ها پرامپت می‌دهند و تصمیم می‌گیرند بعد چه ساخته شود.",
      },
    ],
    blocksEyebrow: "بلوک‌های سازنده",
    blocksTitle: "پنج قطعه، و یک جای به‌خاطرسپاری",
    blocksLead:
      "یک حلقه به پنج قابلیت و سپس یک جا برای نگه‌داشتن وضعیت نیاز دارد. اکنون هم Claude Code و هم Codex همه‌ی این‌ها را دارند — نام‌ها فرق دارد، اما شکل یکسان است.",
    blocks: [
      {
        name: "اتوماسیون‌ها",
        tag: "ضربان قلب",
        desc: "اجراهای زمان‌بندی‌شده که خودشان کشف و تریاژ می‌کنند و یافته‌ها را به یک صندوق می‌فرستند — با ‎/loop‏، cron، قلاب‌های چرخه‌ی حیات یا CI.",
      },
      {
        name: "ورک‌تری‌ها",
        tag: "جداسازی موازی",
        desc: "یک پوشه‌ی کاری مجزا روی شاخه‌ی خودش، تا دو عاملِ هم‌زمان نتوانند چک‌اوت یکدیگر را دستکاری کنند.",
      },
      {
        name: "مهارت‌ها",
        tag: "نیتِ مکتوب",
        desc: "یک SKILL.md از دانش پروژه که عامل وگرنه حدس می‌زند. بدون آن، حلقه هر چرخه پروژه‌ی شما را از صفر بازسازی می‌کند.",
      },
      {
        name: "کانکتورها",
        tag: "دسترسی به ابزارهای واقعی",
        desc: "پلاگین‌های مبتنی بر MCP که به حلقه اجازه می‌دهند تریاژ ایشو را بخواند، از پایگاه‌داده کوئری بگیرد، PR باز کند و در Slack پیام بدهد — درون محیط شما کنش کند، نه فقط توصیه.",
      },
      {
        name: "زیرعامل‌ها",
        tag: "سازنده ≠ بازرس",
        desc: "یک عامل می‌نویسد و عاملی دیگر (اغلب با مدلی متفاوت) بررسی می‌کند. سازنده در نمره‌دادن به مشق خودش بیش از حد مهربان است.",
      },
      {
        name: "حافظه",
        tag: "وضعیت روی دیسک",
        desc: "یک فایل مارک‌داون یا بُرد که بیرون از گفت‌وگو زندگی می‌کند و نگه می‌دارد چه انجام شده و چه مانده. عامل فراموش می‌کند؛ مخزن نه.",
      },
    ],
    lineageEyebrow: "تبارشناسی",
    lineageTitle: "پنج سال، پنج پله",
    lineageLead:
      "«حلقه» دست‌کم پنج چیز متفاوت را پنهان می‌کند. این نردبان از قدیمی به جدید است تا دیگر از کنار هم حرف نزنید.",
    lineage: [
      {
        year: "۲۰۲۲",
        name: "ReAct",
        desc: "حلقه‌ی while آکادمیک: مدل استدلال می‌کند، ابزاری را صدا می‌زند، نتیجه را می‌خواند و تکرار می‌کند — یک مدل و یک انسانِ ناظر.",
      },
      {
        year: "۲۰۲۳",
        name: "AutoGPT",
        desc: "هدفی به آن بده و بگذار خودش به خودش پرامپت بدهد. مشهور به چرخیدن بی‌پایان بدون انجام کاری.",
      },
      {
        year: "۲۰۲۵",
        name: "ralph",
        desc: "یک تک‌خطیِ bash که همان فایل پرامپت را بارها و بارها می‌فرستد و هر بار زمینه را به فایل‌های لنگرِ ثابت بازنشانی می‌کند.",
      },
      {
        year: "۲۰۲۶",
        name: "/goal",
        desc: "نسخه‌ی محصول‌شده‌ی ralph: تا وقتی یک مدل اعتبارسنجِ کوچک تأیید کند کار واقعاً تمام شده، اجرا می‌شود.",
      },
      {
        year: "اکنون",
        name: "هماهنگ‌سازی",
        desc: "حلقه‌هایی که حلقه‌های دیگر را نظارت می‌کنند، روی زمان‌بندی، با وضعیت بادوامِ مبتنی بر git که از سرِنو زنده می‌ماند.",
      },
    ],
    anatomyEyebrow: "کالبدشناسی",
    anatomyTitle: "یک حلقه چه شکلی است",
    anatomySteps: [
      "یک اتوماسیون هر صبح اجرا می‌شود. مهارت تریاژی را صدا می‌زند که شکست‌های CI دیروز، ایشوهای باز و کامیت‌های اخیر را می‌خواند و یافته‌ها را در یک فایل وضعیت می‌نویسد.",
      "برای هر یافته‌ی ارزشمند، حلقه یک ورک‌تری ایزوله باز می‌کند و یک زیرعامل می‌فرستد تا اصلاح را پیش‌نویس کند.",
      "زیرعامل دومی آن پیش‌نویس را در برابر مهارت‌های پروژه و آزمون‌های موجود بازبینی می‌کند.",
      "کانکتورها PR را باز و تیکت را به‌روزرسانی می‌کنند. هرچه حلقه نتواند مدیریت کند به صندوق تریاژ شما می‌رود.",
      "فایل وضعیت به یاد دارد چه آزموده شد، چه قبول شد و چه هنوز باز است — تا اجرای فردا از جایی که امروز ایستاد ادامه دهد.",
    ],
    starterLabel: "نقطه‌ی ورود یک خط است",
    starterCode: [
      "/loop babysit all my PRs. Auto-fix build issues,",
      "and when comments come in, use a worktree agent",
      "to fix them.",
    ],
    guardEyebrow: "بخش دشوار",
    guardTitle: "حالا حلقه بخش پرهزینه است",
    guardBody:
      "وقتی مدل کد را تقریباً مجانی می‌نویسد، هزینه به سمت اجرای حلقه می‌رود. نسخه‌ی رؤیایی این است که هزار عامل یک‌شبه شرکت شما را می‌سازند. نسخه‌ی تولیدی این است که بیشتر کار شما این است که مطمئن شوید آن‌ها متوقف می‌شوند.",
    guards: [
      { title: "حداکثر شمار تکرار", desc: "سقفی سخت برای تعداد دفعاتی که حلقه می‌تواند اجرا شود." },
      {
        title: "تشخیص عدم‌پیشرفت",
        desc: "وقتی اجراهای پیاپی دیگر چیزی را تغییر نمی‌دهند، متوقف شو.",
      },
      {
        title: "سقف بودجه",
        desc: "سقفی برحسب توکن یا دلار تا یک حلقه‌ی لجام‌گسیخته شما را با هزینه‌ای چند برابر بودجه غافلگیر نکند.",
      },
    ],
    cautionTitle: "کاری که حلقه هنوز برایتان انجام نمی‌دهد",
    cautions: [
      {
        title: "اعتبارسنجی هنوز با شماست",
        desc: "حلقه‌ای که بی‌نظارت اجرا می‌شود، حلقه‌ای است که بی‌نظارت هم خطا می‌کند. «تمام شد» یک ادعاست، نه اثبات.",
      },
      {
        title: "درک شما همچنان می‌پوسد",
        desc: "هرچه حلقه سریع‌تر کدی را بفرستد که شما ننوشته‌اید، شکاف فهم بزرگ‌تر می‌شود — مگر آنکه آنچه را ساخته بخوانید.",
      },
      {
        title: "راحتی همان ریسک است",
        desc: "طراحی حلقه با قضاوت، درمان است؛ طراحی آن برای فرار از فکرکردن، شتاب‌دهنده. یک کنش، نتیجه‌ی وارونه.",
      },
    ],
    closerEyebrow: "جمع‌بندی",
    closerTitle: "مسئله حلقه نیست. مهارت است.",
    closerBody:
      "حلقه لوله‌کشی است؛ دارایی، مهارتی است که صدا می‌زند. حلقه‌ای بدون مهارت‌های قابل‌استفاده‌ی مجدد، فقط یک while-true به دور یک غریبه است. حلقه‌ای که کتابخانه‌ای از مهارت‌های تیز، آزموده و نام‌دار را صدا می‌زند، انباشته می‌شود. حلقه را یک‌بار بنویسید، به آن مهارت‌های ارزشمند و بازخورد بدهید تا خودش را بسنجد، و محدودش کنید تا متوقف شود — سپس آن را مثل کسی بسازید که می‌خواهد مهندس بماند، نه فقط کسی که دکمه را فشار می‌دهد.",
    ctaPrimary: "مطالعه‌ی راهنما",
    ctaSecondary: "کاوش راهنمای مهارت‌ها",
  },
  footer: {
    tagline:
      "یک راهنمای میدانیِ دوزبانه برای کدنویسی با عامل‌های هوش مصنوعی — ابزارها، مدل‌ها و ترفندهایی که جواب می‌دهند.",
    copyright: "© ۲۰۲۶ راهنمای میدانیِ وایب‌کدینگ. مجموعه‌ای باز و در حال تحول از یادداشت‌ها.",
    builtBy: "نوشته و ساخته توسط",
    developerName: "مصطفی غلامی",
    developerRole: "مهندس فول‌استک",
    developerUrl: "https://mst-ghi.github.io/",
    developerCta: "مشاهده نمونه‌کار",
    builtWith: "ساخته‌شده با",
    aiModel: "Claude Opus 4.8",
    aiProvider: "Anthropic",
    aiUrl: "https://claude.com/claude-code",
    columns: [
      {
        title: "راهنماها",
        links: [
          { label: "راهنما", href: "/handbook" },
          { label: "ویرایشگرها و عامل‌ها", href: "/editors" },
          { label: "مدل‌ها", href: "/models" },
          { label: "جعبه‌ابزار", href: "/toolbox" },
        ],
      },
      {
        title: "تمرین",
        links: [
          { label: "ترفندها و گردش‌کارها", href: "/skill-guides" },
          { label: "حلقه‌ها", href: "/loops" },
          { label: "اجرای ایمن", href: "/security" },
        ],
      },
      {
        title: "بیشتر",
        links: [
          { label: "منابع", href: "/resources" },
          { label: "پرسش‌های متداول", href: "/support" },
          { label: "تغییرات", href: "/changelog" },
        ],
      },
    ],
  },
}

export const dictionaries: Record<Locale, Dict> = { en, fa }

import type { Locale } from "./config"

/**
 * Bilingual content for the whole site. `en` is the source of truth; its shape
 * defines the `Dict` type, and every other locale must match it exactly. Pages
 * read from here through the `useI18n()` hook so a language switch re-renders
 * the entire UI without any route change (the site is a static export).
 */
const en = {
  nav: {
    brand: "VibeDocs AI",
    docs: "Docs",
    skillGuides: "Skill Guides",
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
    badge: "VIBE ENGINE v2.0.4 ACTIVE",
    titleLead: "The Internet-Scale",
    titleHighlight: "Documentation",
    titleTail: "Protocol",
    subtitle:
      "VibeDocs AI transforms complex “black box” systems into fluid, visual, and agentic documentation. Engineered for the era of high-performance Vibe Coding.",
    ctaPrimary: "Start building",
    ctaSecondary: "Read the handbook",
    stats: [
      { value: "~0.002s", label: "LATENCY" },
      { value: "3,697+", label: "NODES" },
      { value: "9.21M", label: "OBJECTS" },
    ],
    principlesEyebrow: "CORE PROTOCOLS",
    principlesTitle: "Let's make documentation fluid for your team",
    principles: [
      {
        title: "Roles vs Skills",
        desc: "Split AI instructions into always-on Roles and on-demand Skills. Route every query to the most capable agent and kill documentation bottlenecks.",
      },
      {
        title: "Token Efficiency",
        desc: "Feature-sliced, small files and explicit imports keep context dense and cheap.",
      },
      {
        title: "State Sharding",
        desc: "Horizontally scalable, distributed docs that never go stale.",
      },
      {
        title: "AI Agents",
        desc: "Documentation that maintains itself with self-healing links and automated upkeep.",
      },
    ],
    featuredTag: "EXPERIMENTAL",
    featuredTitle: "Sovereign Vibe Coding Protocol",
    featuredDesc:
      "A unified interface for high-impact visual programming. Build at the speed of thought with integrated AI orchestration and real-time visualization.",
    featuredCta: "JOIN PROTOCOL",
    ecosystemTitle: "Discover the ecosystem",
    ecosystemDesc:
      "Explore projects and partners from all around the world who chose to build using VibeDocs AI technology.",
    ecosystemCta: "Explore Ecosystem",
    ecosystemStats: [
      {
        value: "2,324",
        label: "Projects",
        desc: "A new dimension of utility built and launched on VibeDocs.",
      },
      {
        value: "126",
        label: "Partners",
        desc: "Connected with leading platforms and protocols worldwide.",
      },
      {
        value: "3,521",
        label: "Validators",
        desc: "Securing the documentation network and earning rewards.",
      },
      {
        value: "14K",
        label: "Providers",
        desc: "Link your engineering intelligence with the VibeDocs network.",
      },
    ],
    newsletterTitle: "Stay in-the-know and never miss an update",
    newsletterPlaceholder: "Enter a valid email address",
    newsletterCta: "Sign up",
    newsletterFineprint:
      "We're committed to your privacy. VibeDocs uses the information you provide to contact you about content and events. You may unsubscribe at any time.",
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
    title: "Vibe Coding Handbook",
    subtitle:
      "Master the art of agentic engineering. This handbook defines the standard for fluid, visual development in the age of large language models.",
    status: [
      { label: "AI STATUS", value: "READY" },
      { label: "READ TIME", value: "12 MIN" },
    ],
    philosophy: {
      num: "01",
      title: "The Philosophy",
      lead: "Vibe Coding is a paradigm shift where the developer focuses on intent, architecture, and high-level patterns while delegating granular implementation to autonomous agents. It's about maintaining a flow state with sensory-rich interfaces that provide immediate feedback.",
      cards: [
        {
          title: "Visual Precision",
          desc: "Debug by sight. Use real-time visualizers to observe agent behavior and system health in a 3D coordinate space.",
        },
        {
          title: "Agentic Intent",
          desc: "Code via context. High-level directives are translated into tactical actions by your local AI swarm.",
        },
      ],
    },
    roles: {
      num: "02",
      title: "Roles vs Skills",
      lead: "Divide your instructions into always-on Roles (rules) and on-demand Skills (workflows) so AI behaves predictably across any project.",
      items: [
        {
          title: "Roles (Rules)",
          desc: "Invariant constraints that live in CLAUDE.md or .cursorrules. Keep them concise and split them by domain so IDEs apply them conditionally.",
        },
        {
          title: "Skills (Workflows)",
          desc: "Step-by-step, user-initiated tasks in .agents/skills/<name>/SKILL.md with YAML frontmatter and explicit instructions.",
        },
      ],
    },
    implementation: {
      num: "03",
      title: "Implementation",
      lead: "Integrating the Vibe Protocol into your stack requires a specialized configuration. Below is a standard agent initialization script using our proprietary vibe-kit.",
      codeFile: "agent_init.js",
      code: [
        "import { AgentSwarm } from '@vibecos/core'",
        "",
        "// Initialize a high-vibe agent instance",
        "const nexus = new AgentSwarm({",
        "  mode: 'ultra-fluid',",
        "  intent_depth: 0.95,",
        "  visualize: true,",
        "})",
        "",
        "nexus.on('thought', (vibe) => {",
        "  // Render holographic trace",
        "  NexusVis.push(vibe.geometric_representation)",
        "})",
        "",
        "nexus.deploy()",
      ],
    },
    documentation: {
      num: "04",
      title: "Documenting for Agents",
      lead: "AI models have limited context windows. Distribute documentation so it is scannable and cheap to read.",
      items: [
        {
          title: "Single Source of Truth",
          desc: "Keep a ROADMAP.md the agent checks off so it knows progress without reading the whole tree.",
        },
        {
          title: "Design Handoff",
          desc: "Read exported code.html for layout and copy, but never paste raw HTML — translate intent into native components.",
        },
        {
          title: "Architecture Files",
          desc: "Isolate structural rules in ARCHITECTURE.md and ui-architecture.md instead of one giant rule file.",
        },
      ],
    },
    maps: {
      num: "05",
      title: "Holographic Maps",
      traceLabel: "Architecture Trace",
      traceSub: "Vibe Coding Node Map v2.0",
      agentsLabel: "Active Agents",
      agents: ["ARCHITECT-01", "DEBUGGER-X", "REFACTOR_BOT"],
    },
  },
  roadmap: {
    badge: "Live Progress",
    version: "v2.0.4-alpha",
    title: "The Vibe Coding Roadmap",
    titleHighlight: "Roadmap",
    lead: "A multi-phase protocol for engineering internet-scale AI agents. From foundational environment setup to autonomous production deployments, follow our high-performance trajectory.",
    statusLabels: { done: "COMPLETE", active: "IN PROGRESS", upcoming: "PLANNED" },
    phases: [
      {
        num: "Phase 1",
        tag: "Setup",
        title: "Environment Foundation",
        status: "done",
        items: [
          {
            title: "Agentic Sandbox Isolation",
            desc: "Configure secure Dockerized runtimes for untrusted code execution.",
          },
          {
            title: "LLM Context Mapping",
            desc: "Establish vector-embedded project knowledge bases.",
          },
        ],
      },
      {
        num: "Phase 2",
        tag: "Coding",
        title: "Agentic Engineering",
        status: "active",
        items: [
          {
            title: "Refactoring Synthesis",
            desc: "Continuous optimization loops driven by agent reflection.",
          },
          {
            title: "Multi-Agent Handshakes",
            desc: "Synchronized coordination between specialized AI roles.",
          },
        ],
      },
      {
        num: "Phase 3",
        tag: "Testing",
        title: "Validation & Scale",
        status: "upcoming",
        items: [
          {
            title: "Adversarial Simulation",
            desc: "Final stress-testing of AI-generated logic through formal verification methods.",
          },
        ],
      },
    ],
    phaseStats: [
      { value: "99.8%", label: "SUCCESS RATE" },
      { value: "Full", label: "COVERAGE" },
    ],
    ctaTitle: "Ready to sync with the Protocol?",
    ctaPrimary: "Start Building",
    ctaSecondary: "Join Community",
  },
  skillGuides: {
    related: ["Neural Sync Patterns", "Recursive Debugging"],
    relatedLabel: "Related Skillsets",
    title: "On-Demand Workflows",
    lead: "Master the orchestration of transient agentic environments. This guide focuses on the protocol for initializing, validating, and deploying skill stacks.",
    liveActivityLabel: "Live Activity",
    liveActivitySub: "Users currently in this section",
    liveActivityCount: "+14 watching",
    step1: {
      num: "01",
      title: "Environment Initialization",
      desc: "Define the workspace manifest. The AI agent requires specific context injection before it can begin processing the local environment for Vibe Coding.",
      terminalLabel: "TERMINAL: KITTNE_FIRE",
      terminal: [
        '$ vibe init --stack "agentic-v2"',
        ">> Initializing kernel...",
        '>> Handshake successful. Agent "Specter" online.',
        ">> Listening for prompt_",
      ],
      instructionsLabel: "Agent Instructions",
      instructions: [
        "Ensure kernel v2.0.4 is active.",
        "Sync local skill definitions.",
        "Await manual confirmation.",
      ],
    },
    step2: {
      num: "02",
      title: "Holographic Validation",
      desc: "Visualize the stack before execution. The Protocol uses 3D geometric reasoning to check for logic collisions.",
      badge: "Simulating Workflow...",
    },
  },
  security: {
    sidebarTitle: "Documentation",
    sidebarVersion: "v2.1.0-alpha",
    sidebarItems: [
      { id: "intro", label: "Introduction" },
      { id: "policy", label: "Security Policy" },
      { id: "sandbox", label: "Agentic Sandbox" },
      { id: "api", label: "API Reference" },
      { id: "compliance", label: "Compliance Roadmap" },
    ],
    badge: "ENTERPRISE GRADE COMPLIANCE",
    title: "Fortified Intelligence. Agentic Isolation.",
    lead: "VibeDocs AI uses a hardware-abstracted virtualization layer so every model execution happens inside a cryogenically sealed, ephemeral environment.",
    auditCta: "Audit Logs",
    sandboxTitle: "Agentic Sandbox Isolation",
    sandboxSub: "Zero-persistence execution environment for AI agents.",
    layers: [
      {
        num: "LAYER 01",
        name: "Compute",
        desc: "Restricted POSIX syscalls & isolated VMM threads.",
      },
      {
        num: "LAYER 02",
        name: "Network",
        desc: "Outbound air-gapped proxy with domain allowlisting.",
      },
      { num: "LAYER 03", name: "Storage", desc: "RAM-only filesystem wiped every 300 seconds." },
    ],
    encryptionTitle: "Encryption",
    encryption: [
      { name: "AES-256-GCM", desc: "At-rest encryption protocol" },
      { name: "TLS 1.3 + mTLS", desc: "End-to-end transit tunnel" },
    ],
    whitepaperCta: "Technical Whitepaper",
  },
  resources: {
    eyebrow: "Developer Hub",
    title: "Build at the speed of thought.",
    lead: "Explore our comprehensive suite of SDKs, high-performance API endpoints, and community-driven tools designed for the next generation of AI-native applications.",
    quickStart: "Quick Start Guide",
    integrationKits: "Integration Kits",
    viewAllSdks: "View all 12 SDKs",
    sdks: [
      {
        lang: "Python",
        name: "Python SDK",
        desc: "Robust async support for data-heavy AI workflows.",
        version: "v3.4.1",
        install: "pip install vibedocs",
      },
      {
        lang: "Node.js",
        name: "Node.js SDK",
        desc: "Optimized for Edge functions and real-time streaming.",
        version: "v2.9.0",
        install: "npm i @vibedocs/sdk",
      },
      {
        lang: "Rust",
        name: "Rust Crate",
        desc: "Memory-safe, high-concurrency bindings for core logic.",
        version: "v0.12.3",
        install: "cargo add vibedocs",
      },
    ],
    apiTitle: "API Reference",
    apiDesc: "Interactive OpenAPI documentation with a live testing sandbox.",
    apiCta: "Explore Endpoints",
    learnEyebrow: "Learn",
    learnTitle: "Master the Protocol",
    learnDesc:
      "Our step-by-step guides walk you through everything from basic authentication to complex RAG architectures and custom model fine-tuning.",
    learnCta: "Go to Guides",
    videoCta: "Video Tutorials",
    communityTitle: "Community Hub",
    communityDesc: "Join 15,000+ developers on Discord.",
    communityCta: "Join Discord",
  },
  support: {
    title: "How can we vibe today?",
    lead: "Search our technical repository or engage with our AI support agent for real-time troubleshooting of Vibe Coding protocols.",
    askPlaceholder: "Ask the Vibe agent anything...",
    askCta: "Ask",
    categories: [
      {
        name: "Environment Setup",
        faqs: [
          {
            q: "Configuring Nocturne Glass shaders in production?",
            a: "To initialize the Nocturne Glass profile, ensure your vibe.config.js has the refraction: true flag enabled. This triggers the hardware-accelerated blur engine. For production we recommend a minimum blur radius of 20px to maintain legible contrast ratios.",
          },
          {
            q: "Dependency conflict with legacy Tailwind versions?",
            a: "VibeDocs AI requires Tailwind CSS v3.4+ to support dynamic opacity values within utility classes. If you are on v2.x, use our @vibe-coding/legacy-adapter to shim the color tokens and elevation levels.",
          },
        ],
      },
      {
        name: "API & Data Architecture",
        faqs: [
          {
            q: "Rate limiting on the Vibe Protocol endpoint?",
            a: "Free-tier API keys are limited to 5,000 requests per hour. For high-frequency Vibe Streams we recommend a WebSocket connection to reduce overhead. Check the network status for real-time throughput metrics.",
          },
          {
            q: "Handling hydration errors in SSR environments?",
            a: "Hydration mismatches typically occur when the glass layer's dynamic background-blur is calculated on the server. Wrap your glass components in the client wrapper provided in the Vibe UI SDK.",
          },
        ],
      },
    ],
    whitepaperTitle: "Technical Whitepaper",
    whitepaperDesc:
      "Deep dive into the architecture of Vibe Coding and our glassmorphic rendering engine.",
    whitepaperCta: "Read the paper",
    discordTitle: "Community Discord",
    discordCta: "Join Server",
  },
  changelog: {
    eyebrow: "Protocol Updates",
    title: "Evolutionary Log",
    lead: "Tracking the technical progression of the Vibe Coding Protocol. High-density updates for engineering minds.",
    latestLabel: "Latest",
    releasedLabel: "Released",
    releases: [
      {
        version: "v2.1.0-alpha.4",
        latest: true,
        date: "October 24, 2024",
        groups: [
          {
            label: "Engine Improvements",
            items: [
              "Implemented jit-refraction logic for real-time glass surface calculations, reducing GPU overhead by 40%.",
              "Optimized the state management tree for massive Bento grid structures with over 100 concurrent observers.",
            ],
          },
          {
            label: "UI Refinements",
            items: [
              "Refined Nocturne color tokens to ensure accessibility compliance without sacrificing the immersive atmosphere.",
            ],
          },
        ],
      },
      {
        version: "v2.0.8-stable",
        latest: false,
        date: "September 12, 2024",
        groups: [
          {
            label: "Engine Improvements",
            items: [
              "Migration to the unified Vibe Semantic Engine, enabling context-aware component generation.",
            ],
          },
          {
            label: "Bug Fixes",
            items: [
              "Resolved a critical memory leak in the backdrop-blur intersection observer on Firefox.",
              "Fixed z-index collision between the top nav bar and nested glass modals.",
            ],
          },
        ],
      },
      {
        version: "v2.0.4-alpha",
        latest: false,
        date: "August 01, 2024",
        groups: [
          {
            label: "Foundation",
            items: [
              "Core architectural foundation establishment and initial glassmorphic token mapping.",
            ],
          },
        ],
      },
    ],
    subscribeTitle: "Stay at the cutting edge",
    subscribeDesc:
      "Get notified the second we push new engine improvements or protocol refinements.",
    subscribeCta: "Subscribe to Logs",
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
    tagline: "The premium standard for technical documentation and developer vibes.",
    copyright: "© 2024 Vibe Coding Protocol. Engineered for the Internet-Scale Era.",
    builtBy: "Designed & built by",
    developerName: "Mostafa Gholami",
    developerRole: "Full-stack engineer",
    developerUrl: "https://mst-ghi.github.io/",
    developerCta: "View portfolio",
    columns: [
      {
        title: "Protocol",
        links: [
          { label: "Documentation", href: "/handbook" },
          { label: "Roadmap", href: "/roadmap" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
      {
        title: "Ecosystem",
        links: [
          { label: "Resources", href: "/resources" },
          { label: "Skill Guides", href: "/skill-guides" },
          { label: "Support", href: "/support" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Security", href: "/security" },
          { label: "Privacy Policy", href: "/security" },
          { label: "Status", href: "/changelog" },
        ],
      },
    ],
  },
}

export type Dict = typeof en

const fa: Dict = {
  nav: {
    brand: "وایب‌داکس AI",
    docs: "مستندات",
    skillGuides: "راهنمای مهارت‌ها",
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
    badge: "موتور وایب نسخه ۲.۰.۴ فعال",
    titleLead: "پروتکل مستندسازی",
    titleHighlight: "در مقیاس",
    titleTail: "اینترنت",
    subtitle:
      "وایب‌داکس AI سیستم‌های پیچیده و «جعبه‌سیاه» را به مستنداتی روان، بصری و عامل‌محور تبدیل می‌کند. ساخته‌شده برای عصر وایب‌کدینگِ پرسرعت.",
    ctaPrimary: "شروع ساخت",
    ctaSecondary: "مطالعه‌ی راهنما",
    stats: [
      { value: "~۰.۰۰۲ث", label: "تأخیر" },
      { value: "+۳٬۶۹۷", label: "گره‌ها" },
      { value: "۹.۲۱م", label: "اشیاء" },
    ],
    principlesEyebrow: "پروتکل‌های اصلی",
    principlesTitle: "بیایید مستندات را برای تیم شما روان کنیم",
    principles: [
      {
        title: "نقش‌ها در برابر مهارت‌ها",
        desc: "دستورهای هوش مصنوعی را به نقش‌های همیشه‌فعال و مهارت‌های درخواستی تقسیم کنید. هر پرسش را به تواناترین عامل بسپارید و گلوگاه‌های مستندسازی را از بین ببرید.",
      },
      {
        title: "بهره‌وری توکن",
        desc: "فایل‌های کوچک ویژگی‌محور و ایمپورت‌های صریح، زمینه را متراکم و کم‌هزینه نگه می‌دارند.",
      },
      {
        title: "تقسیم وضعیت",
        desc: "مستندات توزیع‌شده و مقیاس‌پذیر افقی که هرگز کهنه نمی‌شوند.",
      },
      {
        title: "عامل‌های هوش مصنوعی",
        desc: "مستنداتی که خودش را نگه می‌دارد؛ با پیوندهای خودترمیم و نگه‌داری خودکار.",
      },
    ],
    featuredTag: "آزمایشی",
    featuredTitle: "پروتکل مستقل وایب‌کدینگ",
    featuredDesc:
      "رابطی یکپارچه برای برنامه‌نویسی بصریِ پراثر. با هماهنگ‌سازی هوش مصنوعی و مصورسازی بی‌درنگ، به سرعت اندیشه بسازید.",
    featuredCta: "پیوستن به پروتکل",
    ecosystemTitle: "اکوسیستم را کشف کنید",
    ecosystemDesc: "پروژه‌ها و شرکای سراسر جهان را که با فناوری وایب‌داکس AI ساخته‌اند کاوش کنید.",
    ecosystemCta: "کاوش اکوسیستم",
    ecosystemStats: [
      {
        value: "۲٬۳۲۴",
        label: "پروژه‌ها",
        desc: "بُعدی تازه از کارایی که روی وایب‌داکس ساخته و عرضه شده است.",
      },
      { value: "۱۲۶", label: "شرکا", desc: "متصل به برترین پلتفرم‌ها و پروتکل‌های جهان." },
      { value: "۳٬۵۲۱", label: "اعتبارسنج‌ها", desc: "تأمین امنیت شبکه‌ی مستندات و کسب پاداش." },
      {
        value: "۱۴هزار",
        label: "ارائه‌دهندگان",
        desc: "هوش مهندسی خود را به شبکه‌ی وایب‌داکس متصل کنید.",
      },
    ],
    newsletterTitle: "باخبر بمانید و هیچ به‌روزرسانی‌ای را از دست ندهید",
    newsletterPlaceholder: "یک نشانی ایمیل معتبر وارد کنید",
    newsletterCta: "ثبت‌نام",
    newsletterFineprint:
      "ما به حریم خصوصی شما متعهدیم. وایب‌داکس از اطلاعات شما تنها برای اطلاع‌رسانی محتوا و رویدادها استفاده می‌کند. هر زمان می‌توانید لغو اشتراک کنید.",
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
    title: "راهنمای وایب‌کدینگ",
    subtitle:
      "هنر مهندسی عامل‌محور را بیاموزید. این راهنما استاندارد توسعه‌ی روان و بصری در عصر مدل‌های زبانی بزرگ را تعریف می‌کند.",
    status: [
      { label: "وضعیت هوش مصنوعی", value: "آماده" },
      { label: "زمان مطالعه", value: "۱۲ دقیقه" },
    ],
    philosophy: {
      num: "۰۱",
      title: "فلسفه",
      lead: "وایب‌کدینگ تغییری بنیادین است که در آن توسعه‌دهنده بر نیت، معماری و الگوهای سطح‌بالا تمرکز می‌کند و پیاده‌سازی جزئی را به عامل‌های خودمختار می‌سپارد. هدف، حفظ حالت «جریان» با رابط‌های حسی‌ای است که بازخورد فوری می‌دهند.",
      cards: [
        {
          title: "دقت بصری",
          desc: "با دیدن اشکال‌زدایی کنید. با مصورسازهای بی‌درنگ، رفتار عامل و سلامت سیستم را در فضای سه‌بعدی مشاهده کنید.",
        },
        {
          title: "نیت عامل‌محور",
          desc: "با زمینه کد بنویسید. دستورهای سطح‌بالا توسط ازدحام هوش مصنوعی محلی شما به کنش‌های عملیاتی ترجمه می‌شوند.",
        },
      ],
    },
    roles: {
      num: "۰۲",
      title: "نقش‌ها در برابر مهارت‌ها",
      lead: "دستورهای خود را به نقش‌های همیشه‌فعال (قواعد) و مهارت‌های درخواستی (گردش‌کارها) تقسیم کنید تا هوش مصنوعی در هر پروژه قابل‌پیش‌بینی رفتار کند.",
      items: [
        {
          title: "نقش‌ها (قواعد)",
          desc: "محدودیت‌های ثابت که در CLAUDE.md یا .cursorrules قرار می‌گیرند. آن‌ها را کوتاه نگه دارید و بر اساس حوزه تقسیم کنید تا ابزارها به‌صورت شرطی اعمالشان کنند.",
        },
        {
          title: "مهارت‌ها (گردش‌کارها)",
          desc: "کارهای گام‌به‌گامِ کاربرمحور در .agents/skills/<name>/SKILL.md همراه با فرادادهٔ YAML و دستورهای صریح.",
        },
      ],
    },
    implementation: {
      num: "۰۳",
      title: "پیاده‌سازی",
      lead: "ادغام پروتکل وایب در پشته‌ی شما به پیکربندی ویژه‌ای نیاز دارد. در ادامه یک اسکریپت استاندارد راه‌اندازی عامل با vibe-kit اختصاصی ما آمده است.",
      codeFile: "agent_init.js",
      code: [
        "import { AgentSwarm } from '@vibecos/core'",
        "",
        "// یک نمونه‌ی عامل پر‌وایب بساز",
        "const nexus = new AgentSwarm({",
        "  mode: 'ultra-fluid',",
        "  intent_depth: 0.95,",
        "  visualize: true,",
        "})",
        "",
        "nexus.on('thought', (vibe) => {",
        "  // رد هولوگرافیک را رندر کن",
        "  NexusVis.push(vibe.geometric_representation)",
        "})",
        "",
        "nexus.deploy()",
      ],
    },
    documentation: {
      num: "۰۴",
      title: "مستندسازی برای عامل‌ها",
      lead: "مدل‌های هوش مصنوعی پنجره‌ی زمینه‌ی محدودی دارند. مستندات را طوری توزیع کنید که اسکن‌پذیر و کم‌هزینه باشند.",
      items: [
        {
          title: "تنها منبع حقیقت",
          desc: "یک ROADMAP.md نگه دارید که عامل آن را تیک می‌زند تا بدون خواندن کل پروژه از پیشرفت آگاه شود.",
        },
        {
          title: "تحویل طراحی",
          desc: "code.html صادرشده را برای چیدمان و متن بخوانید، اما هرگز HTML خام را نچسبانید — نیت را به کامپوننت‌های بومی ترجمه کنید.",
        },
        {
          title: "فایل‌های معماری",
          desc: "قواعد ساختاری را در ARCHITECTURE.md و ui-architecture.md جدا کنید، نه در یک فایل غول‌پیکر.",
        },
      ],
    },
    maps: {
      num: "۰۵",
      title: "نقشه‌های هولوگرافیک",
      traceLabel: "رد معماری",
      traceSub: "نقشه‌ی گره‌ی وایب‌کدینگ نسخه ۲.۰",
      agentsLabel: "عامل‌های فعال",
      agents: ["ARCHITECT-01", "DEBUGGER-X", "REFACTOR_BOT"],
    },
  },
  roadmap: {
    badge: "پیشرفت زنده",
    version: "نسخه ۲.۰.۴-آلفا",
    title: "نقشه‌راه وایب‌کدینگ",
    titleHighlight: "نقشه‌راه",
    lead: "پروتکلی چندمرحله‌ای برای مهندسی عامل‌های هوش مصنوعی در مقیاس اینترنت. از راه‌اندازی محیط پایه تا استقرارهای تولیدی خودمختار، مسیر پرسرعت ما را دنبال کنید.",
    statusLabels: { done: "تکمیل‌شده", active: "در حال انجام", upcoming: "برنامه‌ریزی‌شده" },
    phases: [
      {
        num: "مرحله ۱",
        tag: "راه‌اندازی",
        title: "پایه‌ی محیط",
        status: "done",
        items: [
          {
            title: "جداسازی سندباکس عامل",
            desc: "پیکربندی محیط‌های امن داکرشده برای اجرای کد نامطمئن.",
          },
          { title: "نگاشت زمینه‌ی LLM", desc: "ایجاد پایگاه‌های دانش پروژه با تعبیه‌ی برداری." },
        ],
      },
      {
        num: "مرحله ۲",
        tag: "کدنویسی",
        title: "مهندسی عامل‌محور",
        status: "active",
        items: [
          {
            title: "هم‌نهی بازآرایی",
            desc: "حلقه‌های بهینه‌سازی پیوسته که با بازتاب عامل هدایت می‌شوند.",
          },
          { title: "دست‌دادن چندعاملی", desc: "هماهنگی همگام میان نقش‌های تخصصی هوش مصنوعی." },
        ],
      },
      {
        num: "مرحله ۳",
        tag: "آزمون",
        title: "اعتبارسنجی و مقیاس",
        status: "upcoming",
        items: [
          {
            title: "شبیه‌سازی خصمانه",
            desc: "آزمون فشار نهایی منطق تولیدشده توسط هوش مصنوعی با روش‌های تأیید صوری.",
          },
        ],
      },
    ],
    phaseStats: [
      { value: "۹۹.۸٪", label: "نرخ موفقیت" },
      { value: "کامل", label: "پوشش" },
    ],
    ctaTitle: "برای همگام‌سازی با پروتکل آماده‌اید؟",
    ctaPrimary: "شروع ساخت",
    ctaSecondary: "پیوستن به انجمن",
  },
  skillGuides: {
    related: ["الگوهای هم‌گام عصبی", "اشکال‌زدایی بازگشتی"],
    relatedLabel: "مهارت‌های مرتبط",
    title: "گردش‌کارهای درخواستی",
    lead: "هماهنگ‌سازی محیط‌های عامل‌محور گذرا را بیاموزید. این راهنما بر پروتکل راه‌اندازی، اعتبارسنجی و استقرار پشته‌های مهارتی تمرکز دارد.",
    liveActivityLabel: "فعالیت زنده",
    liveActivitySub: "کاربران حاضر در این بخش",
    liveActivityCount: "+۱۴ در حال تماشا",
    step1: {
      num: "۰۱",
      title: "راه‌اندازی محیط",
      desc: "مانیفست فضای کاری را تعریف کنید. عامل هوش مصنوعی پیش از پردازش محیط محلی برای وایب‌کدینگ به تزریق زمینه‌ی مشخص نیاز دارد.",
      terminalLabel: "ترمینال: KITTNE_FIRE",
      terminal: [
        '$ vibe init --stack "agentic-v2"',
        ">> در حال راه‌اندازی هسته...",
        ">> دست‌دادن موفق بود. عامل «Specter» آنلاین شد.",
        ">> در انتظار prompt_",
      ],
      instructionsLabel: "دستورهای عامل",
      instructions: [
        "از فعال‌بودن هسته‌ی نسخه ۲.۰.۴ مطمئن شوید.",
        "تعاریف مهارتی محلی را همگام کنید.",
        "منتظر تأیید دستی بمانید.",
      ],
    },
    step2: {
      num: "۰۲",
      title: "اعتبارسنجی هولوگرافیک",
      desc: "پشته را پیش از اجرا مصور کنید. پروتکل از استدلال هندسی سه‌بعدی برای بررسی تداخل‌های منطقی بهره می‌برد.",
      badge: "در حال شبیه‌سازی گردش‌کار...",
    },
  },
  security: {
    sidebarTitle: "مستندات",
    sidebarVersion: "نسخه ۲.۱.۰-آلفا",
    sidebarItems: [
      { id: "intro", label: "مقدمه" },
      { id: "policy", label: "سیاست امنیتی" },
      { id: "sandbox", label: "سندباکس عامل" },
      { id: "api", label: "مرجع API" },
      { id: "compliance", label: "نقشه‌راه انطباق" },
    ],
    badge: "انطباق در سطح سازمانی",
    title: "هوش مستحکم. جداسازی عامل‌محور.",
    lead: "وایب‌داکس AI از یک لایه‌ی مجازی‌سازیِ سخت‌افزارمستقل بهره می‌برد تا هر اجرای مدل درون محیطی گذرا و کاملاً مهر‌و‌موم‌شده انجام شود.",
    auditCta: "گزارش‌های ممیزی",
    sandboxTitle: "جداسازی سندباکس عامل",
    sandboxSub: "محیط اجرای بدون‌ماندگاری برای عامل‌های هوش مصنوعی.",
    layers: [
      { num: "لایه ۰۱", name: "محاسبه", desc: "فراخوان‌های سیستمی محدود POSIX و نخ‌های VMM ایزوله." },
      { num: "لایه ۰۲", name: "شبکه", desc: "پراکسی خروجی ایرگپ با فهرست مجاز دامنه‌ها." },
      { num: "لایه ۰۳", name: "ذخیره‌سازی", desc: "سیستم‌فایل فقط‌حافظه که هر ۳۰۰ ثانیه پاک می‌شود." },
    ],
    encryptionTitle: "رمزنگاری",
    encryption: [
      { name: "AES-256-GCM", desc: "پروتکل رمزنگاری در حالت سکون" },
      { name: "TLS 1.3 + mTLS", desc: "تونل انتقال سرتاسری" },
    ],
    whitepaperCta: "وایت‌پیپر فنی",
  },
  resources: {
    eyebrow: "مرکز توسعه‌دهندگان",
    title: "به سرعت اندیشه بسازید.",
    lead: "مجموعه‌ی جامع SDKها، نقاط پایانی API پرسرعت و ابزارهای جامعه‌محور ما را که برای نسل بعدی برنامه‌های هوش‌مصنوعی‌بنیان طراحی شده‌اند کاوش کنید.",
    quickStart: "راهنمای شروع سریع",
    integrationKits: "کیت‌های یکپارچه‌سازی",
    viewAllSdks: "مشاهده‌ی هر ۱۲ SDK",
    sdks: [
      {
        lang: "Python",
        name: "SDK پایتون",
        desc: "پشتیبانی قدرتمند ناهمگام برای گردش‌کارهای داده‌محور.",
        version: "v3.4.1",
        install: "pip install vibedocs",
      },
      {
        lang: "Node.js",
        name: "SDK نود",
        desc: "بهینه‌شده برای توابع Edge و پخش بی‌درنگ.",
        version: "v2.9.0",
        install: "npm i @vibedocs/sdk",
      },
      {
        lang: "Rust",
        name: "کرِیت راست",
        desc: "اتصالات حافظه‌امن و پرهم‌روند برای منطق هسته.",
        version: "v0.12.3",
        install: "cargo add vibedocs",
      },
    ],
    apiTitle: "مرجع API",
    apiDesc: "مستندات تعاملی OpenAPI همراه با سندباکس آزمون زنده.",
    apiCta: "کاوش نقاط پایانی",
    learnEyebrow: "یادگیری",
    learnTitle: "پروتکل را به تسلط درآورید",
    learnDesc:
      "راهنماهای گام‌به‌گام ما همه‌چیز را از احراز هویت پایه تا معماری‌های پیچیده‌ی RAG و تنظیم دقیق مدل آموزش می‌دهند.",
    learnCta: "رفتن به راهنماها",
    videoCta: "آموزش‌های ویدئویی",
    communityTitle: "مرکز انجمن",
    communityDesc: "به بیش از ۱۵٬۰۰۰ توسعه‌دهنده در دیسکورد بپیوندید.",
    communityCta: "پیوستن به دیسکورد",
  },
  support: {
    title: "امروز چطور می‌توانیم کمک کنیم؟",
    lead: "مخزن فنی ما را جست‌وجو کنید یا برای رفع اشکال بی‌درنگِ پروتکل‌های وایب‌کدینگ با عامل پشتیبانی هوش مصنوعی ما گفت‌وگو کنید.",
    askPlaceholder: "هرچه می‌خواهید از عامل وایب بپرسید...",
    askCta: "بپرس",
    categories: [
      {
        name: "راه‌اندازی محیط",
        faqs: [
          {
            q: "پیکربندی شیدرهای Nocturne Glass در تولید؟",
            a: "برای راه‌اندازی نمایه‌ی Nocturne Glass مطمئن شوید vibe.config.js شما پرچم refraction: true را فعال دارد. این کار موتور بلور سخت‌افزاری را فعال می‌کند. برای محیط تولید حداقل شعاع محو ۲۰ پیکسل را برای حفظ کنتراست خوانا توصیه می‌کنیم.",
          },
          {
            q: "تعارض وابستگی با نسخه‌های قدیمی Tailwind؟",
            a: "وایب‌داکس AI به Tailwind CSS نسخه ۳.۴ یا بالاتر نیاز دارد تا مقادیر شفافیت پویا در کلاس‌های کاربردی پشتیبانی شوند. اگر روی نسخه ۲ هستید از @vibe-coding/legacy-adapter برای تطبیق توکن‌های رنگ و سطوح ارتفاع استفاده کنید.",
          },
        ],
      },
      {
        name: "API و معماری داده",
        faqs: [
          {
            q: "محدودیت نرخ روی نقطه‌پایان پروتکل وایب؟",
            a: "کلیدهای API رایگان به ۵٬۰۰۰ درخواست در ساعت محدودند. برای «جریان‌های وایب» پرتکرار اتصال WebSocket را برای کاهش سربار توصیه می‌کنیم. برای متریک‌های گذردهی بی‌درنگ وضعیت شبکه را بررسی کنید.",
          },
          {
            q: "مدیریت خطاهای هیدراسیون در محیط‌های SSR؟",
            a: "ناسازگاری هیدراسیون معمولاً وقتی رخ می‌دهد که محو پس‌زمینه‌ی پویای لایه‌ی شیشه روی سرور محاسبه شود. کامپوننت‌های شیشه‌ای خود را در رپر کلاینت ارائه‌شده در Vibe UI SDK بپیچید.",
          },
        ],
      },
    ],
    whitepaperTitle: "وایت‌پیپر فنی",
    whitepaperDesc: "کاوشی ژرف در معماری وایب‌کدینگ و موتور رندر گلسمورفیک ما.",
    whitepaperCta: "مطالعه‌ی مقاله",
    discordTitle: "دیسکورد انجمن",
    discordCta: "پیوستن به سرور",
  },
  changelog: {
    eyebrow: "به‌روزرسانی‌های پروتکل",
    title: "گزارش تکاملی",
    lead: "ردیابی پیشرفت فنی پروتکل وایب‌کدینگ. به‌روزرسانی‌های پرمحتوا برای ذهن‌های مهندسی.",
    latestLabel: "آخرین",
    releasedLabel: "منتشرشده در",
    releases: [
      {
        version: "v2.1.0-alpha.4",
        latest: true,
        date: "۲۴ اکتبر ۲۰۲۴",
        groups: [
          {
            label: "بهبود موتور",
            items: [
              "پیاده‌سازی منطق jit-refraction برای محاسبه‌ی بی‌درنگ سطوح شیشه‌ای و کاهش ۴۰٪ سربار GPU.",
              "بهینه‌سازی درخت مدیریت وضعیت برای ساختارهای بزرگ Bento با بیش از ۱۰۰ ناظر هم‌زمان.",
            ],
          },
          {
            label: "اصلاحات رابط کاربری",
            items: [
              "پالایش توکن‌های رنگ Nocturne برای رعایت دسترس‌پذیری بدون قربانی‌کردن فضای همه‌جانبه.",
            ],
          },
        ],
      },
      {
        version: "v2.0.8-stable",
        latest: false,
        date: "۱۲ سپتامبر ۲۰۲۴",
        groups: [
          {
            label: "بهبود موتور",
            items: [
              "مهاجرت به موتور معنایی یکپارچه‌ی وایب که تولید کامپوننت زمینه‌آگاه را ممکن می‌سازد.",
            ],
          },
          {
            label: "رفع اشکال",
            items: [
              "رفع نشت حافظه‌ی حیاتی در ناظر تقاطع backdrop-blur روی فایرفاکس.",
              "رفع تداخل z-index میان نوار ناوبری بالا و مودال‌های شیشه‌ای تو‌در‌تو.",
            ],
          },
        ],
      },
      {
        version: "v2.0.4-alpha",
        latest: false,
        date: "۱ اوت ۲۰۲۴",
        groups: [
          {
            label: "پایه",
            items: ["استقرار پایه‌ی معماری اصلی و نگاشت اولیه‌ی توکن‌های گلسمورفیک."],
          },
        ],
      },
    ],
    subscribeTitle: "در لبه‌ی فناوری بمانید",
    subscribeDesc: "به‌محض انتشار بهبودهای موتور یا اصلاحات پروتکل، باخبر شوید.",
    subscribeCta: "اشتراک گزارش‌ها",
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
    tagline: "استاندارد ممتاز برای مستندسازی فنی و وایب توسعه‌دهنده.",
    copyright: "© ۲۰۲۴ پروتکل وایب‌کدینگ. ساخته‌شده برای عصر مقیاس اینترنت.",
    builtBy: "طراحی و توسعه توسط",
    developerName: "مصطفی غلامی",
    developerRole: "مهندس فول‌استک",
    developerUrl: "https://mst-ghi.github.io/",
    developerCta: "مشاهده نمونه‌کار",
    columns: [
      {
        title: "پروتکل",
        links: [
          { label: "مستندات", href: "/handbook" },
          { label: "نقشه‌راه", href: "/roadmap" },
          { label: "تغییرات", href: "/changelog" },
        ],
      },
      {
        title: "اکوسیستم",
        links: [
          { label: "منابع", href: "/resources" },
          { label: "راهنمای مهارت‌ها", href: "/skill-guides" },
          { label: "پشتیبانی", href: "/support" },
        ],
      },
      {
        title: "حقوقی",
        links: [
          { label: "امنیت", href: "/security" },
          { label: "سیاست حریم خصوصی", href: "/security" },
          { label: "وضعیت", href: "/changelog" },
        ],
      },
    ],
  },
}

export const dictionaries: Record<Locale, Dict> = { en, fa }

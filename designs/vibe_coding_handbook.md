# The Vibe Coding & AI-Assisted Development Handbook

Welcome to the definitive guide for maximizing productivity with AI coding assistants (Gemini, Claude, Deepseek, OpenAI) and modern IDEs (Cursor, Zed, VS Code with CloudCode).

This document is designed to be framework-agnostic. You can use it as the foundational documentation for any project or use it to generate a static documentation website (using Nextra, VitePress, or Docusaurus).

---

## 1. Writing Roles vs. Skills

To guide AI behavior effectively across any project, divide your instructions into **Roles (Rules)** and **Skills**.

### How to Write Roles (Rules)
Roles define the **"Always On" constraints** of the project. These live in global configuration files like `.cursorrules`, `CLAUDE.md`, or specific folder-level rule files.
*   **How to write them:** Keep them concise. Focus on invariant patterns (e.g., "Always use standard UI library X," "Never leave floating promises," "Strictly use this specific ORM pattern for database queries").
*   **Best Practice:** Avoid massive global rule files. Instead, split them by domain (e.g., `backend/.agents/rules/db-rules.md`). Modern AI IDEs index these and apply them conditionally based on the files you edit.

### How to Write Skills (On-Demand Workflows)
Skills are **on-demand workflows**. They tell the AI *how to perform a specific action* from start to finish.
*   **How to write them:**
    1. Create a dedicated directory (e.g., `.agents/skills/<skill-name>/`).
    2. Create a markdown file (`SKILL.md`) containing YAML frontmatter with a `name` and `description`.
    3. Write explicit, step-by-step instructions. (e.g., Step 1: Read the design folder, Step 2: Scaffold the routing file, Step 3: Implement components).
*   **Example:** A `scaffold-api-endpoint` skill that instructs the AI to create a controller, service, and data access object based on project templates.

### When to Use a Role vs. a Skill
*   **Role/Rule:** The AI needs to know it *every time it writes a line of code in that directory* (e.g., code formatting, architectural constraints).
*   **Skill:** A multi-step, user-initiated task (e.g., "Initialize a new database migration", "Translate a design into a page").

---

## 2. Documenting the Project for AI Interoperability

AI models have limited context windows. To save tokens and prevent hallucinations, documentation must be distributed and easily scannable.

### Documenting the Frontend
*   **State Management:** Maintain a single source of truth (like a `ROADMAP.md` or `TODO.md`). Instruct the AI to check off tasks here so it instantly knows project progress without reading the entire source directory.
*   **Architecture:** Keep UI structural rules isolated (e.g., `docs/ui-architecture.md`).
*   **Code Comments:** Use standard JSDoc/TSDoc comments for complex hooks and shared components.

### Documenting the Backend
*   **Architecture Files:** Keep structural explanations in dedicated markdown files (`ARCHITECTURE.md`).
*   **API Documentation Comments:** Write standard comments above controllers specifically formatted for automated API documentation generators (like Swagger/OpenAPI). The AI can parse the generated `swagger.json` to understand the entire API surface efficiently.

---

## 3. Dealing with Implemented Designs and UI Libraries

The absolute best way to ensure pixel-perfect AI generation and reduce token bloat is a structured **Design Handoff Pattern**.

1. **The Design Export:** Designers (using Figma, Stitch, or Cloud Design) export layouts to a specific `design/<page_name>/` folder containing structural code (`code.html`) and visual references (`screen.png`).
2. **The Prompt:** "Use the design in `design/login_page` to build the `/login` route."
3. **The Execution Rule:** The AI is strictly instructed via `.cursorrules` to **read the exported HTML to understand layout and text content**, but to **never paste raw HTML/CSS**. It must translate the semantic intent into the project's native UI components (e.g., React/Vue components using Tailwind, MUI, or Mantine).

This process guarantees the AI doesn't "hallucinate" UI layouts and strictly matches the designer's intent.

---

## 4. Structuring Code for Token Efficiency

To "burn fewer tokens" and improve an AI's contextual reasoning:

*   **Feature-Sliced Design / Modularity:** Group code by feature (e.g., `modules/auth/`) instead of by type (`controllers/`, `services/`). When asked to fix an auth bug, the AI only needs to read the `auth` module.
*   **Explicit Exports/Imports:** Avoid deep nesting or wildcard exports (e.g., `export * from ...`). The AI relies on clear imports to map out dependency graphs accurately.
*   **Keep Files Small:** If a file exceeds 300 lines, refactor it. Smaller files allow the AI to read the entire file using minimal tokens without relying on lossy summaries or truncations.

---

## 5. Starting a Session with AI Models

To get the best results out of Gemini, Claude, Deepseek, or IDEs:

1. **Be Specific:** Don't say "Fix the app." Say: *"I am working on Phase 1 (Landing Pages). Please review `ROADMAP.md` and build the `/about-us` route based on `design/about_us`."*
2. **Limit Context:** Only `@` tag or attach the specific files needed. Dumping an entire project into the context window confuses the AI and wastes tokens.
3. **Use Terminal Discovery:** Allow the AI to run `grep`, `find`, or `tree` before it writes code. Letting it explore the codebase dynamically is drastically more token-efficient.

---

## 6. Essential Programmer OS Tools for AI

To make the AI faster and smarter, install these CLI tools on your operating system:

1. **`ripgrep` (rg):** The fastest way for an AI to search through codebase text.
2. **`jq`:** Allows the AI to parse, filter, and read large JSON files efficiently in the terminal.
3. **`tree`:** Helps the AI visualize directory structures without reading hundreds of individual file paths.
4. **Python (3.x):** Crucial for quick automation. The AI can write a short `.py` script, run it in the terminal, and parse the output instead of struggling with complex API limits.
5. **`make`:** Use Makefiles (like `make build` or `make test`). This provides standardized commands the AI can invoke safely without guessing syntax.

---

## 7. Best Practices for Vibe Coding

### 1. Setup and Planning
*   **Start from a Template:** Begin your project by cloning a template from GitHub or another source to provide a solid foundation (e.g., use the *Start from Repo* feature in Cursor).
*   **Create a Comprehensive Plan:** Use an AI assistant to create a detailed plan in markdown. Ask it clarifying questions and have it critique its own plan, then regenerate until it's solid. Save this in `plan.md` (or `CLAUDE.md`) so the AI can reference it anytime.
*   **Secure Your Secrets:** Always store API keys and tokens in `.env` files. Never hard-code them. Ensure `.env*` and `/secrets` are in `.gitignore`.

### 2. Assisted Coding and Prompting
*   **Use Agent Mode:** Turn on Agent mode to perform file-wide edits, generate tests, manage files, and run CLI commands via natural language.
*   **Prompt with Clarity:** Be specific. Instead of *fix the sidebar*, use *Update Sidebar to include X behavior under Y condition*. Provide sample inputs and edge cases.
*   **Encourage Deep Thinking:** For major refactors, use phrases like *Think hard, Think deep, Think longer*. Keep a record of prompts that work best.
*   **Keep Chats Focused:** Create a new, clean chat for each distinct task to prevent hallucinations and context bloat.
*   **Reset Context When Needed:** If the AI starts acting confused or referencing irrelevant errors, start a fresh chat immediately.

### 3. Testing and Debugging
*   **Run and Test Frequently:** Use local servers to test your app. Catch issues as soon as they appear.
*   **Let the AI Fix Errors:** When you hit an error, copy the exact stack trace/message and paste it to the AI. If the first fix fails, explain the outcome and try again.
*   **Iterate and Refine:** Embrace rapid iteration. Don't worry about perfect designs initially; improve them step by step.

### 4. Version Control and Deployment
*   **Commit Early and Often:** Push to GitHub regularly. You can even ask the agent to handle the Git commits for you.
*   **Deploy Early:** Use continuous deployment platforms (Vercel, Netlify, Railway) to catch deployment issues early in the lifecycle.

### Important Note on Learning
When using AI-generated code, focus on learning, not just running:
*   Learn on the go.
*   Don't just paste code that works without understanding it.
*   Pause and ask yourself why it does what it does.
*   If you're unsure, ask the AI: *"Explain how this code works step-by-step."*

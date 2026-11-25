# React Forge

A structured, clean-code **React 19 + TypeScript** learning repository and engineering reference. Every concept, interactive example, and coding challenge is written with strict static typing, accessible HTML semantics, JSDoc documentation, and **SOLID** design principles.

---

## Overview

**React Forge** organizes React concepts into standalone Vite workspaces using natural, prefix-free directory names while preserving a clear progressive curriculum from core JSX rendering to advanced reconciliation and hooks.

### Key Engineering Principles

- **Single Responsibility (SRP):** Side effects, timers, and browser APIs (such as Clipboard I/O in `useClipboardCopy`) live in dedicated hooks, keeping components focused on UI state and rendering.
- **Open/Closed (OCP):** Reusable primitives (`Card`, `Portal`, `ToastNotification`) expose typed props and `children` composition rather than hardcoded markup.
- **Dependency Inversion (DIP):** Overlay components render through the `<Portal>` abstraction instead of querying DOM selectors directly during render.
- **Strict TypeScript:** Explicit prop interfaces, union types, immutable state updates, and zero `any` escapes.
- **Web Accessibility:** Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), programmatic `<label htmlFor>` bindings via `useId()`, keyboard-safe toast controls, and polite ARIA live regions (`role="status"`).

---

## Repository Structure

```text
react-forge/
├── fundamental/          # Core React 19 concepts, state patterns, portals & challenges
│   ├── public/           # Static assets & icons
│   ├── src/              # Topic modules (15 progressive lessons + challenges)
│   ├── index.html        # App shell (#root + #portal-root notification region)
│   └── README.md         # Detailed curriculum & topic guide for Fundamentals
├── hooks/                # Dedicated workspace for React Hooks & custom hook patterns
│   ├── public/           # Static assets & icons
│   ├── src/              # Hooks playground entry
│   └── README.md         # Hooks workspace guide & learning roadmap
├── LICENSE               # MIT License
└── README.md             # Repository overview & quickstart
```

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **UI Library** | React `^19.3.1`, React DOM `^19.3.1` |
| **Language** | TypeScript `~7.0.2` (strict bundler mode) |
| **Build Tool** | Vite `^8.3.5` (`@vitejs/plugin-react`) |
| **Styling** | Tailwind CSS `^4.3.3` (`@tailwindcss/vite`), CSS Modules / Scoped CSS |
| **Icons** | `react-icons` `^5.7.0` |
| **Linting** | ESLint `^10.13.0`, `typescript-eslint`, `eslint-plugin-react-hooks` |
| **Package Manager** | Bun (`bun.lock`) |

---

## Getting Started

### Prerequisites

- **[Bun](https://bun.sh/)** `>= 1.1` (recommended) or **Node.js** `>= 20`

### Run a Workspace

Choose the module you want to explore (`fundamental` or `hooks`):

```bash
# 1. Navigate into a module
cd fundamental

# 2. Install dependencies
bun install

# 3. Start the Vite development server
bun run dev
```

### Available Scripts

Each workspace provides the same standardized scripts in `package.json`:

| Command | Description |
| :--- | :--- |
| `bun run dev` | Start the local Vite dev server with HMR |
| `bun run build` | Run `tsc -b` type-checking followed by production Vite bundle |
| `bun run lint` | Analyze `.ts` and `.tsx` sources with ESLint |
| `bun run preview` | Preview the production build locally |

---

## Learning Path

### 1. [`fundamental/`](./fundamental/README.md) — React Fundamentals (Completed)

1. **Basic Components** — `src/basic`
2. **JSX Syntax** — `src/jsx`
3. **JSX Rules** — `src/jsx-rules`
4. **Multiple Components** — `src/multiple-components`
5. **Dynamic Content** — `src/dynamic-content`
6. **List of Data** — `src/list-of-data`
7. **Props** — `src/props`
8. **Props Destructuring** — `src/props-destructuring`
9. **Props Children** — `src/props-children`
10. **Conditional Rendering** — `src/conditional-rendering`
11. **Styling & Icons** — `src/styles`
12. **DOM Events** — `src/event`
13. **State (`useState`)** — `src/state` (counters, arrays, objects, lifting state, lazy initializers & challenges)
14. **React Portals** — `src/portal`
15. **Advanced Keys** — `src/advanced-keys`

> See [`fundamental/README.md`](./fundamental/README.md) for the complete file-by-file breakdown and challenge index.

### 2. [`hooks/`](./hooks/README.md) — React Hooks (In Progress)

Dedicated workspace covering `useEffect`, Context API & `useContext`, `useReducer`, `useRef`, custom hooks, and `useId`.

---

## Development Workflow

- **Branching:** Short-lived branches off `main` (`feature/<name>`, `fix/<name>`, `hotfix/<name>`, `docs/<name>`). `main` always stays clean and release-ready.
- **Commits:** Follows [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
- **Quality Gate:** Run `bun run lint` and `bun run build` inside any modified workspace before opening a Pull Request.

---

## License

Released under the [MIT License](./LICENSE).

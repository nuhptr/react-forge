# React Hooks (`hooks`)

Dedicated Vite + React 19 + TypeScript workspace for mastering built-in React Hooks and custom hook composition.

---

## Quick Start

```bash
cd hooks
bun install
bun run dev
```

---

## Planned Curriculum

Folders in `src/` follow natural, prefix-free naming:

1. **Side Effects (`use-effect`)** — Data fetching, subscriptions, dependency arrays, and cleanup functions.
2. **Context (`context` & `use-context`)** — Prop-drilling elimination and typed context providers.
3. **Complex State (`use-reducer`)** — Deterministic state transitions with discriminated-union actions.
4. **Mutable Refs (`use-ref`)** — Imperative DOM focus/scroll access and render-independent mutable values.
5. **Custom Hooks (`custom-hooks`)** — Extracting reusable stateful logic (`useFetch`, `useLocalStorage`, `useToggle`).
6. **Unique IDs (`use-id`)** — SSR-safe deterministic ID generation for accessible form controls.

---

## Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Start Vite development server |
| `bun run build` | Type-check (`tsc -b`) and build production assets |
| `bun run lint` | Run ESLint across all TypeScript/React files |
| `bun run preview` | Preview production bundle locally |

# React Fundamentals (`fundamental`)

Hands-on lessons and coding challenges covering core **React 19** concepts with **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## Quick Start

```bash
cd fundamental
bun install
bun run dev
```

To preview any lesson or challenge, open [`src/App.tsx`](./src/App.tsx) and render the desired topic component:

```tsx
import PortalShowcase from "./portal"
// import StateChallenge from "./state/challenge"
// import AdvancedKeys from "./advanced-keys"

const App = () => {
    return <PortalShowcase />
}

export default App
```

---

## Curriculum & Topic Order

Folders use clean, descriptive names without numeric prefixes, and every component file (`kebab-case.tsx`) matches its exported `PascalCase` component name:

| # | Topic | Entry File | Challenge File | Key Concepts Covered |
| :- | :--- | :--- | :--- | :--- |
| 1 | **Basic Components** | `src/basic/index.tsx` | — | Functional components, nesting (`GreetingMessage`) |
| 2 | **JSX** | `src/jsx/index.tsx` | `src/jsx/challenge.tsx` | Declarative HTML-in-TS, semantic tags |
| 3 | **JSX Rules** | `src/jsx-rules/index.tsx` | `src/jsx-rules/challenge.tsx` | Single root element, self-closing tags, `camelCase` attributes (`htmlFor`, `className`) |
| 4 | **Multiple Components** | `src/multiple-components/index.tsx` | — | Page composition with `<header>`, `<main>`, and `<footer>` landmarks |
| 5 | **Dynamic Content** | `src/dynamic-content/index.tsx` | `src/dynamic-content/challenge.tsx` | JS expressions `{}`, variables, helper calls (`GreetingContent`, `ProductInfo`) |
| 6 | **List of Data** | `src/list-of-data/index.tsx` | `src/list-of-data/challenge.tsx` | Array `.map()` rendering, stable `key` props (`UserList`, `ProductList`) |
| 7 | **Props** | `src/props/index.tsx` | `src/props/challenge.tsx` | Typed parent-to-child data flow (`Person`, `Product`) |
| 8 | **Props Destructuring** | `src/props-destructuring/index.tsx` | `src/props-destructuring/challenge.tsx` | Parameter destructuring & default values (`Dealer`, `Car`) |
| 9 | **Props Children** | `src/props-children/index.tsx` | — | Slot composition with `ReactNode` (`Card`) |
| 10 | **Conditional Rendering** | `src/conditional-rendering/index.tsx` | `src/conditional-rendering/challenge.tsx` | Ternary rendering, guard clauses (`Weather`, `UserStatus`, `Greeting`) |
| 11 | **Styles & Icons** | `src/styles/index.tsx` (`inline-style.tsx`, `separated-styles.tsx`, `icons.tsx`) | `src/styles/challenge.tsx` | Typed `CSSProperties`, external stylesheets, `react-icons` (`StyledCard`, `ProfileCard`, `BeerIcons`) |
| 12 | **Events** | `src/event/index.tsx` | `src/event/challenge.tsx` | `onClick`, `onCopy`, `onMouseEnter`, `onMouseLeave` (`EventPlayground`) |
| 13 | **State (`useState`)** | `src/state/*` | `src/state/challenge/index.tsx` | Counters, immutable array/object updates, lifting state, lazy `useState` initializers |
| 14 | **Portals** | `src/portal/index.tsx` | — | `createPortal`, reusable `<Portal>`, `useClipboardCopy` hook, `ToastNotification` |
| 15 | **Advanced Keys** | `src/advanced-keys/index.tsx` | — | Resetting component & DOM state intentionally via dynamic `key` changes (`ThemeSwitcher`) |

---

## Deep Dive: `state` Submodules

Inside `src/state/`, state management is broken down into focused lessons:

- `basic-counter/` — Functional state updates (`prevCount => prevCount + 1`) with non-negative bounds (`BasicCounter`).
- `updating-arrays/` — Immutable additions, removals (`filter`), and updates (`map`) on string arrays.
- `updating-object/` — Immutable object updates using spread syntax (`{ ...prevMovie, rating: 5 }`).
- `updating-array-of-objects/` — Targeted updates inside object collections by matching `id`.
- `sharing-state/` — Lifting state to a common parent so sibling components (`PrimaryCounter`, `SecondaryCounter`) stay synchronized.
- `passing-function-as-value/` — Lazy `useState(initializer)` patterns: `LazyCounter`, `RandomNumberGenerator`, and `localStorage`-backed `PersistentNameForm`.
- `challenge/` — Four practical state exercises: `Counter`, `Profile`, `ShoppingList`, and `TodoList`.

---

## Deep Dive: `portal` Architecture

`src/portal/` demonstrates how SOLID principles keep React overlays clean and reusable:

```text
src/portal/
├── components/
│   ├── clipboard-copy-form.tsx # Labeled form UI binding text state to clipboard actions
│   ├── portal.tsx              # Generic createPortal wrapper targeting #portal-root
│   └── toast-notification.tsx  # Presentational status toast with pause-on-focus support
├── hooks/
│   └── use-clipboard-copy.ts   # Isolated Clipboard API + auto-dismiss timer lifecycle
└── index.tsx                   # Topic showcase entry (PortalShowcase)
```

1. **Mount Container:** [`index.html`](./index.html) defines `<div id="portal-root" role="region" aria-label="Notifications"></div>` alongside `<div id="root"></div>`.
2. **Portal Abstraction (`portal.tsx`):** Resolves the container by `id` and renders `children` outside `#root` via `createPortal`.
3. **Hook Isolation (`use-clipboard-copy.ts`):** Exposes `{ isCopied, errorMessage, copyToClipboard, dismissNotification, pauseAutoDismiss, resumeAutoDismiss }` with automatic unmount cleanup.
4. **Accessible Feedback (`toast-notification.tsx` & `clipboard-copy-form.tsx`):** Announces copy confirmation politely via `role="status"` while also reflecting `"Copied!"` directly on the submit button.

---

## Verification

```bash
bun run lint
bun run build
```

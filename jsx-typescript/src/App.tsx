import ComponentPropsTyping from "./component-props-typing"

/**
 * Komponen utama (playground) untuk workspace React with TypeScript.
 *
 * Daftar modul berurutan abjad (A–Z) sesuai urutan pembelajaran:
 * - `./component-props-typing` — Component Props Typing
 * - `./declared-fc-types` — Function Component (FC) Typing
 * - `./extensible-reusable-types` — Reusable & Extensible Types
 * - `./generic-state-types` — Typed useState Patterns
 * - `./interactive-refs-events` — Typed useRef, Forms & Events
 * - `./managed-context-types` — Typed Context API
 * - `./reducer-union-types` — Typed useReducer & Action Unions
 * - `./remote-effect-types` — Typed useEffect Data Fetching
 *
 * @returns Komponen topik/proyek yang sedang aktif dikerjakan.
 */
const App = () => {
    return <ComponentPropsTyping />
}

export default App

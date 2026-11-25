import type { ComponentType } from "react"
import C0 from "./basic-state"
import C1 from "./effect-lifecycle"
import C2 from "./layered-prop-drilling"
import C3 from "./managed-context"
import C4 from "./reducer-dispatch"
import C5 from "./reference-values"
import C6 from "./reusable-hooks"
import C7 from "./unique-identifiers"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z) sesuai kurikulum.
 */
export const demos: Demo[] = [
    { id: "basic-state", title: "Basic State", description: "useState untuk nilai dan objek.", Component: C0 },
    { id: "effect-lifecycle", title: "Effect Lifecycle", description: "useEffect, cleanup, dan siklus hidup.", Component: C1 },
    { id: "layered-prop-drilling", title: "Layered Prop Drilling", description: "Prop drilling bertingkat.", Component: C2 },
    { id: "managed-context", title: "Managed Context", description: "Context API lintas komponen.", Component: C3 },
    { id: "reducer-dispatch", title: "Reducer Dispatch", description: "useReducer dan action bertipe.", Component: C4 },
    { id: "reference-values", title: "Reference Values", description: "useRef untuk nilai persisten.", Component: C5 },
    { id: "reusable-hooks", title: "Reusable Hooks", description: "Custom hook yang dapat dipakai ulang.", Component: C6 },
    { id: "unique-identifiers", title: "Unique Identifiers", description: "useId untuk ID aksesibel.", Component: C7 }
]

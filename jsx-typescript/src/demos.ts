import type { ComponentType } from "react"
import C0 from "./component-props-typing"
import C1 from "./declared-fc-types"
import C2 from "./extensible-reusable-types"
import C3 from "./generic-state-types"
import C4 from "./interactive-refs-events"
import C5 from "./managed-context-types"
import C6 from "./reducer-union-types"
import C7 from "./remote-effect-types"

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
    { id: "component-props-typing", title: "Component Props Typing", description: "Pengetikan props.", Component: C0 },
    { id: "declared-fc-types", title: "Declared FC Types", description: "Deklarasi FC<Props>.", Component: C1 },
    { id: "extensible-reusable-types", title: "Extensible Reusable Types", description: "Tipe reusable yang diperluas.", Component: C2 },
    { id: "generic-state-types", title: "Generic State Types", description: "useState bertipe generik.", Component: C3 },
    { id: "interactive-refs-events", title: "Interactive Refs & Events", description: "useRef, form, dan event.", Component: C4 },
    { id: "managed-context-types", title: "Managed Context Types", description: "Context API bertipe.", Component: C5 },
    { id: "reducer-union-types", title: "Reducer Union Types", description: "useReducer dengan union action.", Component: C6 },
    { id: "remote-effect-types", title: "Remote Effect Types", description: "useEffect data fetching.", Component: C7 }
]

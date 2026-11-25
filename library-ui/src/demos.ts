import type { ComponentType } from "react"
import C0 from "./daisy-ui"
import C1 from "./radix-themes"
import C2 from "./shadcn-ui"

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
    { id: "daisy-ui", title: "DaisyUI", description: "Komponen DaisyUI di atas Tailwind.", Component: C0 },
    { id: "radix-themes", title: "Radix Themes", description: "Tema dan komponen Radix UI.", Component: C1 },
    { id: "shadcn-ui", title: "shadcn/ui", description: "Primitif shadcn/ui yang dikustomisasi.", Component: C2 }
]

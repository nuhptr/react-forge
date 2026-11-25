import type { ComponentType } from "react"
import M0 from "./clsx"
import M1 from "./cva"
import M2 from "./style-dictionary-tokens"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z).
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
    {
        id: "clsx",
        title: "CLSX",
        description: "Gabung className conditionally.",
        Component: M0,
    },
    {
        id: "cva",
        title: "CVA",
        description: "Class Variance Authority.",
        Component: M1,
    },
    {
        id: "style-dictionary-tokens",
        title: "Style Dictionary",
        description: "Design token tokens.",
        Component: M2,
    },
]

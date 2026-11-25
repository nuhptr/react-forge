import type { ComponentType } from "react"
import M0 from "./monorepo-basics"
import M1 from "./naming-packages"

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
        id: "monorepo-basics",
        title: "Monorepo Basics",
        description: "Struktur workspace.",
        Component: M0,
    },
    {
        id: "naming-packages",
        title: "Naming Packages",
        description: "Konvensi nama paket.",
        Component: M1,
    },
]

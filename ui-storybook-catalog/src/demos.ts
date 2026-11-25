import type { ComponentType } from "react"
import M0 from "./arg-types"
import M1 from "./parameters"
import M2 from "./rendering-button"
import M3 from "./storybook-typescript"
import M4 from "./variations"

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
    { id: "arg-types", title: "ArgTypes", description: "Kontrol props di Storybook.", Component: M0 },
    { id: "parameters", title: "Parameters", description: "Parameter story.", Component: M1 },
    { id: "rendering-button", title: "Rendering Button", description: "Story pertama.", Component: M2 },
    { id: "storybook-typescript", title: "Storybook + TS", description: "Story bertipe.", Component: M3 },
    { id: "variations", title: "Variations", description: "Variasi & penamaan story.", Component: M4 }
]

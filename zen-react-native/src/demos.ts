import type { ComponentType } from "react"
import M0 from "./expo-router"
import M1 from "./input"
import M2 from "./prop-drilling"
import M3 from "./use-effect"

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
    { id: "expo-router", title: "Expo Router", description: "Navigasi berbasis file.", Component: M0 },
    { id: "input", title: "Input", description: "Input React Native.", Component: M1 },
    { id: "prop-drilling", title: "Prop Drilling", description: "Alur props.", Component: M2 },
    { id: "use-effect", title: "useEffect", description: "Efek samping.", Component: M3 }
]

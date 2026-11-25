import type { ComponentType } from "react"
import M0 from "./login-form"
import M1 from "./protected-route"
import M2 from "./register-form"

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
    { id: "login-form", title: "Login Form", description: "Formulir masuk.", Component: M0 },
    { id: "protected-route", title: "Protected Route", description: "Rute terlindungi.", Component: M1 },
    { id: "register-form", title: "Register Form", description: "Formulir daftar.", Component: M2 }
]

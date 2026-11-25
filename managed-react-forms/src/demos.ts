import type { ComponentType } from "react"

import { RegistrationFormDemo, SimpleFormDemo } from "./form-demos"

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
    {
        id: "registration-form",
        title: "Registration Form",
        description: "Form registrasi banyak field.",
        Component: RegistrationFormDemo,
    },
    {
        id: "simple-form",
        title: "Simple Form",
        description: "Form dasar React Hook Form.",
        Component: SimpleFormDemo,
    },
]

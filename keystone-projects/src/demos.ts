import type { ComponentType } from "react"
import C0 from "./client-table-filtering"
import C1 from "./profile-navigation-tabs"
import C2 from "./publishing-blog-platform"
import C3 from "./storefront-advanced-filtering"

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
        id: "client-table-filtering",
        title: "Client Table Filtering",
        description: "Filter tabel dashboard.",
        Component: C0,
    },
    {
        id: "profile-navigation-tabs",
        title: "Profile Navigation Tabs",
        description: "Profil dan tab navigasi.",
        Component: C1,
    },
    {
        id: "publishing-blog-platform",
        title: "Publishing Blog Platform",
        description: "Platform penerbitan blog.",
        Component: C2,
    },
    {
        id: "storefront-advanced-filtering",
        title: "Storefront Advanced Filtering",
        description: "Filter lanjut E-Commerce.",
        Component: C3,
    },
]

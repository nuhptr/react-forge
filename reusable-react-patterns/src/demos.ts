import type { ComponentType } from "react"

import CompoundComponent from "./compound-component"
import ContainerPresentational from "./container-presentational"
import ControlledVsUncontrolled from "./controlled-vs-uncontrolled"
import CustomHooks from "./custom-hooks"
import Factory from "./factory"
import Hoc from "./hoc"
import LayoutComponent from "./layout-component"
import RenderProps from "./render-props"
import Slots from "./slots"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z) sesuai urutan kurikulum.
 *
 * Single Responsibility: hanya mendefinisikan daftar modul; tidak merender UI.
 */
export const demos: Demo[] = [
    {
        id: "compound-component",
        title: "Compound Component",
        description: "Tabs dengan Context API.",
        Component: CompoundComponent,
    },
    {
        id: "container-presentational",
        title: "Container / Presentational",
        description: "Pemisahan data dan tampilan.",
        Component: ContainerPresentational,
    },
    {
        id: "controlled-vs-uncontrolled",
        title: "Controlled vs Uncontrolled",
        description: "useState vs useRef pada input.",
        Component: ControlledVsUncontrolled,
    },
    {
        id: "custom-hooks",
        title: "Custom Hooks",
        description: "Logika state reusable lewat hooks.",
        Component: CustomHooks,
    },
    {
        id: "factory",
        title: "Factory",
        description: "Komponen dibuat dari preset.",
        Component: Factory,
    },
    {
        id: "hoc",
        title: "HOC",
        description: "Higher-Order Component withLoading.",
        Component: Hoc,
    },
    {
        id: "layout-component",
        title: "Layout Component",
        description: "Layout dipakai ulang untuk konten apa pun.",
        Component: LayoutComponent,
    },
    {
        id: "render-props",
        title: "Render Props",
        description: "Fungsi render sebagai prop.",
        Component: RenderProps,
    },
    {
        id: "slots",
        title: "Slots",
        description: "Konten disuntik ke slot bernama.",
        Component: Slots,
    },
]

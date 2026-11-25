import type { ComponentType } from "react"

import ArgTypes from "./arg-types"
import Args from "./args"
import Decorators from "./decorators"
import Docs from "./docs"
import Parameters from "./parameters"
import RenderingButton from "./rendering-button"
import StoriesWithinStories from "./stories-within-stories"
import StorybookTypescript from "./storybook-typescript"
import Variations from "./variations"

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
        id: "arg-types",
        title: "ArgTypes",
        description: "Kontrol props di Storybook.",
        Component: ArgTypes,
    },
    {
        id: "args",
        title: "Args",
        description: "Ubah props story lewat Controls.",
        Component: Args,
    },
    {
        id: "decorators",
        title: "Decorators",
        description: "Bungkus story dengan layout tambahan.",
        Component: Decorators,
    },
    {
        id: "docs",
        title: "Docs",
        description: "Dokumentasi komponen dan props.",
        Component: Docs,
    },
    {
        id: "parameters",
        title: "Parameters",
        description: "Parameter story.",
        Component: Parameters,
    },
    {
        id: "rendering-button",
        title: "Rendering Button",
        description: "Story pertama.",
        Component: RenderingButton,
    },
    {
        id: "stories-within-stories",
        title: "Stories Within Stories",
        description: "Story dari komposisi story lain.",
        Component: StoriesWithinStories,
    },
    {
        id: "storybook-typescript",
        title: "Storybook + TS",
        description: "Story bertipe.",
        Component: StorybookTypescript,
    },
    {
        id: "variations",
        title: "Variations",
        description: "Variasi & penamaan story.",
        Component: Variations,
    },
]

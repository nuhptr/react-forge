import type { ComponentType } from "react"

import AtomicComponents from "./atomic-components"
import BaseJsx from "./base-jsx"
import CoreJsxRules from "./core-jsx-rules"
import DecomposedComponents from "./decomposed-components"
import EmbeddedExpressions from "./embedded-expressions"
import FormattedLists from "./formatted-lists"
import GeneralProps from "./general-props"
import HandyDestructuring from "./handy-destructuring"
import InjectedChildren from "./injected-children"
import LogicalRendering from "./logical-rendering"
import ModernStyles from "./modern-styles"
import NativeEvents from "./native-events"
import ReactiveState from "./reactive-state"
import TeleportedPortals from "./teleported-portals"
import UniqueKeys from "./unique-keys"

/** Kontrak satu entri katalog topik. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog 15 topik dasar berurutan abjad (A-Z) sesuai urutan kurikulum.
 *
 * Single Responsibility: hanya mendefinisikan daftar topik; tidak merender UI.
 */
export const demos: Demo[] = [
    {
        id: "atomic-components",
        title: "Atomic Components",
        description: "Functional component dan penyusunan komponen anak.",
        Component: AtomicComponents,
    },
    {
        id: "base-jsx",
        title: "Base JSX",
        description: "Markup deklaratif dan elemen HTML semantik.",
        Component: BaseJsx,
    },
    {
        id: "core-jsx-rules",
        title: "Core JSX Rules",
        description: "Satu elemen induk, self-closing, atribut camelCase.",
        Component: CoreJsxRules,
    },
    {
        id: "decomposed-components",
        title: "Decomposed Components",
        description: "Dekomposisi halaman menjadi header, main, dan footer.",
        Component: DecomposedComponents,
    },
    {
        id: "embedded-expressions",
        title: "Embedded Expressions",
        description: "Ekspresi JS {}, variabel, dan pemanggilan fungsi.",
        Component: EmbeddedExpressions,
    },
    {
        id: "formatted-lists",
        title: "Formatted Lists",
        description: "Iterasi array .map() dan key yang stabil.",
        Component: FormattedLists,
    },
    {
        id: "general-props",
        title: "General Props",
        description: "Aliran data bertipe dari induk ke anak.",
        Component: GeneralProps,
    },
    {
        id: "handy-destructuring",
        title: "Handy Destructuring",
        description: "Destructuring props beserta nilai default.",
        Component: HandyDestructuring,
    },
    {
        id: "injected-children",
        title: "Injected Children",
        description: "Proyeksi konten fleksibel dengan ReactNode.",
        Component: InjectedChildren,
    },
    {
        id: "logical-rendering",
        title: "Logical Rendering",
        description: "Ternary dan guard clause untuk conditional rendering.",
        Component: LogicalRendering,
    },
    {
        id: "modern-styles",
        title: "Modern Styles",
        description: "CSSProperties, CSS terpisah, dan react-icons.",
        Component: ModernStyles,
    },
    {
        id: "native-events",
        title: "Native Events",
        description: "onClick, onCopy, dan event mouse.",
        Component: NativeEvents,
    },
    {
        id: "reactive-state",
        title: "Reactive State",
        description: "useState, array/objek immutable, dan lazy initializer.",
        Component: ReactiveState,
    },
    {
        id: "teleported-portals",
        title: "Teleported Portals",
        description: "createPortal, Clipboard hook, dan ToastNotification.",
        Component: TeleportedPortals,
    },
    {
        id: "unique-keys",
        title: "Unique Keys",
        description: "Reset state dengan mengubah key secara sengaja.",
        Component: UniqueKeys,
    },
]

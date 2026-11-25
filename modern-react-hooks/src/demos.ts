import type { ComponentType } from "react"
import ContextTheme from "./context-theme"
import DataFetching from "./data-fetching"
import FormAction from "./form-action"
import FormStatus from "./form-status"
import ReactActionState from "./react-action-state"
import TabTransition from "./tab-transition"

/** Kontrak satu entri katalog topik. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog topik berurutan abjad (A-Z) sesuai kurikulum.
 *
 * Single Responsibility: hanya mendefinisikan daftar topik.
 */
export const demos: Demo[] = [
    {
        id: "context-theme",
        title: "Context Theme",
        description: "Bandingkan useContext vs React 19 use() untuk toggle tema.",
        Component: ContextTheme,
    },
    {
        id: "data-fetching",
        title: "Data Fetching",
        description: "Bandingkan useEffect vs React 19 use() untuk ambil data.",
        Component: DataFetching,
    },
    {
        id: "form-action",
        title: "Form Action",
        description: "React Actions: submit form tanpa event handler manual.",
        Component: FormAction,
    },
    {
        id: "form-status",
        title: "Form Status",
        description: "useFormStatus untuk status pending saat submit.",
        Component: FormStatus,
    },
    {
        id: "react-action-state",
        title: "React Action State",
        description: "useActionState untuk state yang diupdate via form action.",
        Component: ReactActionState,
    },
    {
        id: "tab-transition",
        title: "Tab Transition",
        description: "useTransition untuk transisi tab non-blocking.",
        Component: TabTransition,
    },
]

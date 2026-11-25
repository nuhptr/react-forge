import type { ComponentType } from "react"

import DataFetching from "./data-fetching"
import GetByRole from "./get-by-role"
import QueryFunctions from "./query-functions"
import SetupTesting from "./setup-testing"
import TestingComponents from "./testing-components"
import UserInteraction from "./user-interaction"

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
        id: "data-fetching",
        title: "Data Fetching",
        description: "Test async dengan findBy dan mock server.",
        Component: DataFetching,
    },
    {
        id: "get-by-role",
        title: "Get By Role",
        description: "Query berdasarkan aksesibilitas.",
        Component: GetByRole,
    },
    {
        id: "query-functions",
        title: "Query Functions",
        description: "getBy/queryBy/findBy.",
        Component: QueryFunctions,
    },
    {
        id: "setup-testing",
        title: "Setup Testing",
        description: "Konfigurasi test environment.",
        Component: SetupTesting,
    },
    {
        id: "testing-components",
        title: "Testing Components",
        description: "Render komponen dengan props.",
        Component: TestingComponents,
    },
    {
        id: "user-interaction",
        title: "User Interaction",
        description: "Simulasi ketik dan klik.",
        Component: UserInteraction,
    },
]

import { createContext, useContext } from "react"

export interface TabContextValue {
    active: string
    setActive: (id: string) => void
}

/** Konteks internal Tabs; tidak diekspor ke konsumen modul. */
export const TabContext = createContext<TabContextValue | undefined>(undefined)

/**
 * Hook untuk mengonsumsi konteks Tabs.
 *
 * Single Responsibility: hanya mengambil dan memvalidasi konteks.
 */
export const useTabs = (): TabContextValue => {
    const ctx = useContext(TabContext)

    if (!ctx) {
        throw new Error("Komponen Tab harus berada di dalam <Tabs>")
    }

    return ctx
}

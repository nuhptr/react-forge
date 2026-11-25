import { useState, type ReactNode } from "react"

import { TabContext, useTabs } from "./tabs-context"

interface TabsProps {
    children: ReactNode
    initial?: string
}

interface TabItemProps {
    id: string
    children: ReactNode
}

/**
 * Compound Component: Tabs menyediakan konteks, sub-komponen mengonsumsinya.
 *
 * Open/Closed: sub-komponen baru bisa ditambah tanpa mengubah Tabs.
 */
const Tabs = ({ children, initial = "satu" }: TabsProps) => {
    const [active, setActive] = useState(initial)
    return (
        <TabContext.Provider value={{ active, setActive }}>
            <section className="panel" aria-label="Contoh compound component">
                {children}
            </section>
        </TabContext.Provider>
    )
}

const TabList = ({ children }: { children: ReactNode }) => (
    <div role="tablist" className="flex gap-2">
        {children}
    </div>
)

const Tab = ({ id, children }: TabItemProps) => {
    const { active, setActive } = useTabs()
    return (
        <button
            type="button"
            role="tab"
            aria-selected={active === id}
            onClick={() => setActive(id)}
            className={`btn ${active === id ? "ring-2 ring-blue-400" : "opacity-70"}`}>
            {children}
        </button>
    )
}

const TabPanel = ({ id, children }: TabItemProps) => {
    const { active } = useTabs()

    if (active !== id) return null

    return (
        <div role="tabpanel" className="p-4 rounded-lg bg-slate-900/50">
            {children}
        </div>
    )
}

Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panel = TabPanel

export { Tabs }

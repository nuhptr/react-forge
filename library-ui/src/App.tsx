import { useState } from "react"
import { Theme } from "@radix-ui/themes"

import SectionList from "./section-list"
import { demos } from "./demos"

/**
 * Komponen utama playground React UI Libraries.
 *
 * @returns Halaman pemilih modul dan demo aktif.
 */
const App = () => {
    const [activeId, setActiveId] = useState(demos[0].id)
    const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0]
    const ActiveComponent = activeDemo.Component

    return (
        <Theme>
            <main className="playground">
                <header className="playground-header">
                    <h1 className="text-2xl font-bold">React UI Libraries</h1>
                    <p>Pilih modul yang ingin dibuka. Demo aktif dirender di bawah.</p>
                </header>
                <SectionList demos={demos} activeId={activeId} onSelect={setActiveId} />
                <section aria-labelledby="active-title" className="grid gap-2">
                    <h2 id="active-title" className="text-xl font-semibold text-blue-600">
                        {activeDemo.title}
                    </h2>
                    <ActiveComponent />
                </section>
            </main>
        </Theme>
    )
}

export default App

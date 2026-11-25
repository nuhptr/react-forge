import { useState } from "react"

import ModulePicker from "./components/module-picker"
import { demos } from "./demos"

/**
 * Komponen utama playground React Hook Form.
 *
 * @returns Halaman pemilih modul dan demo aktif.
 */
const App = () => {
    const [activeId, setActiveId] = useState(demos[0].id)
    const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0]
    const ActiveComponent = activeDemo.Component

    return (
        <main className="playground">
            <header className="playground-header">
                <h1 className="text-2xl font-bold">React Hook Form</h1>
                <p>Pilih modul yang ingin dibuka. Demo aktif dirender di bawah.</p>
            </header>
            <ModulePicker demos={demos} activeId={activeId} onSelect={setActiveId} />
            <section aria-labelledby="active-title" className="grid gap-2">
                <h2 id="active-title" className="text-xl font-semibold text-blue-600">{activeDemo.title}</h2>
                <ActiveComponent />
            </section>
        </main>
    )
}

export default App

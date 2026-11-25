import { useState } from "react"

import SectionList from "./section-list"
import { demos } from "./demos"

/**
 * Komponen utama playground React Fundamentals.
 *
 * Topik dipilih lewat dropdown/kartu tanpa menyunting file ini.
 *
 * @returns Halaman pemilih topik dan materi aktif.
 */
const App = () => {
    const [activeId, setActiveId] = useState(demos[0].id)
    const activeDemo = demos.find((demo) => demo.id === activeId) ?? demos[0]
    const ActiveComponent = activeDemo.Component

    return (
        <main className="playground">
            <header className="playground-header">
                <h1 className="text-2xl font-bold">React Fundamentals</h1>
                <p>
                    Pilih topik dasar yang ingin dipelajari. Materi aktif dirender di bawah tanpa
                    mengubah kode App.
                </p>
            </header>

            <SectionList demos={demos} activeId={activeId} onSelect={setActiveId} />

            <section aria-labelledby="active-title" className="grid gap-2">
                <h2 id="active-title" className="text-xl font-semibold text-blue-400">
                    {activeDemo.title}
                </h2>
                <ActiveComponent />
            </section>
        </main>
    )
}

export default App

import { useState } from "react"

import { createActionButton } from "./button-factory"
import { presets } from "./config"

/** Komponen dibuat sekali di luar render agar identitasnya stabil. */
const buttons = presets.map((preset) => ({
    label: preset.label,
    Component: createActionButton(preset.label, preset.tone),
}))

/**
 * Demo Factory: varian komponen dibuat dari konfigurasi, bukan duplikat JSX.
 *
 * @returns Deretan tombol hasil pabrik beserta jumlah klik.
 */
export default function Factory() {
    const [clicks, setClicks] = useState(0)

    return (
        <section className="panel" aria-label="Factory">
            <h3 className="text-lg font-semibold text-blue-400">Factory</h3>
            <p className="text-sm text-slate-400">
                createActionButton membentuk komponen dari konfigurasi preset.
            </p>
            <div className="flex flex-wrap items-center gap-2">
                {buttons.map(({ label, Component }) => (
                    <Component key={label} onClick={() => setClicks((current) => current + 1)} />
                ))}
            </div>
            <p className="text-sm text-slate-300" aria-live="polite">
                Total klik: <strong className="text-blue-300">{clicks}</strong>
            </p>
        </section>
    )
}

import { useState } from "react"

/**
 * Demo Select.
 *
 * @returns Dropdown dengan pilihan yang tersimpan di state.
 */
export default function Select() {
    const [value, setValue] = useState("react")
    return (
        <section className="panel" aria-label="Select">
            <h3 className="text-lg font-semibold text-blue-400">Select</h3>
            <label className="text-sm font-semibold text-slate-400" htmlFor="framework">
                Framework
            </label>
            <select
                id="framework"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100">
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="svelte">Svelte</option>
            </select>
            <p className="text-sm text-slate-400">Pilihan: {value}</p>
        </section>
    )
}

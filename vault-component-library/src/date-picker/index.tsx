import { useState } from "react"

/**
 * Demo DatePicker.
 *
 * @returns Input tanggal beserta nilai yang dipilih.
 */
export default function DatePicker() {
    const [value, setValue] = useState("")
    return (
        <section className="panel" aria-label="Date picker">
            <h3 className="text-lg font-semibold text-blue-400">Date Picker</h3>
            <label className="text-sm font-semibold text-slate-400" htmlFor="date">
                Tanggal
            </label>
            <input
                id="date"
                type="date"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100"
            />
            <p className="text-sm text-slate-400">Nilai: {value || "(belum dipilih)"}</p>
        </section>
    )
}

import { useState } from "react"

/**
 * Input dengan state terkontrol (adaptasi pola React Native ke web).
 *
 * @returns Input teks dengan karakter terhitung.
 */
export default function Input() {
    const [value, setValue] = useState("")

    return (
        <section className="panel" aria-label="Input demo">
            <h3 className="text-lg font-semibold text-blue-400">Input</h3>
            <div className="field">
                <label htmlFor="rn-input">Nama</label>
                <input
                    id="rn-input"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Masukkan nama"
                />
            </div>
            <p className="text-sm text-slate-400">Panjang teks: {value.length}</p>
        </section>
    )
}

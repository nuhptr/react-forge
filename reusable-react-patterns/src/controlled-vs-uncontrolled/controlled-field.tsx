import { useState } from "react"

/**
 * Input controlled: nilai dipegang oleh React state.
 *
 * @returns Input dengan nilai dari state.
 */
export default function ControlledField() {
    const [value, setValue] = useState("")

    return (
        <div className="field">
            <label htmlFor="controlled">Controlled (useState)</label>
            <input
                id="controlled"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <p className="text-sm text-slate-400">Nilai: {value || "(kosong)"}</p>
        </div>
    )
}

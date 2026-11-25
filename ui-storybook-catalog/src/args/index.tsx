import { useState } from "react"

import { initialArgs, variantClass, variants, type Variant } from "./config"

interface PreviewButtonProps {
    label: string
    variant: Variant
    disabled: boolean
}

/**
 * Tombol pratinjau yang menerima args seperti halnya sebuah story.
 *
 * @param props - Args label, varian, dan status disabled.
 * @returns Tombol dengan gaya sesuai varian.
 */
const PreviewButton = ({ label, variant, disabled }: PreviewButtonProps) => (
    <button
        type="button"
        disabled={disabled}
        className={`rounded-lg px-4 py-2 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${variantClass[variant]}`}>
        {label}
    </button>
)

/**
 * Demo Args: mengubah args lewat kontrol akan mengubah story secara langsung.
 *
 * @returns Panel kontrol dan pratinjau tombol beserta args aktif.
 */
export default function Args() {
    const [label, setLabel] = useState(initialArgs.label)
    const [variant, setVariant] = useState<Variant>(initialArgs.variant)
    const [disabled, setDisabled] = useState(initialArgs.disabled)

    return (
        <section className="panel" aria-label="Args">
            <h3 className="text-lg font-semibold text-blue-400">Args</h3>
            <p className="text-sm text-slate-400">
                Args adalah props story yang bisa diubah dari panel Controls.
            </p>

            <div className="field">
                <label htmlFor="args-label">label</label>
                <input
                    id="args-label"
                    value={label}
                    onChange={(event) => setLabel(event.target.value)}
                />
            </div>

            <div className="field">
                <label htmlFor="args-variant">variant</label>
                <select
                    id="args-variant"
                    value={variant}
                    onChange={(event) => setVariant(event.target.value as Variant)}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100">
                    {variants.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-300">
                <input
                    type="checkbox"
                    checked={disabled}
                    onChange={(event) => setDisabled(event.target.checked)}
                />
                disabled
            </label>

            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6" role="preview">
                <PreviewButton label={label} variant={variant} disabled={disabled} />
            </div>

            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 text-xs text-blue-300">
                {`args: { label: "${label}", variant: "${variant}", disabled: ${disabled} }`}
            </pre>
        </section>
    )
}

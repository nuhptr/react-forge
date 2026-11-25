import type { TextareaHTMLAttributes } from "react"
import type { FieldError, UseFormRegisterReturn } from "react-hook-form"

interface TextAreaFieldProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
    id: string
    label: string
    registration: UseFormRegisterReturn
    error?: FieldError
}

/**
 * Textarea dengan label, pesan error, dan atribut aksesibilitas.
 *
 * Interface Segregation: props dibatasi ke kebutuhan textarea saja,
 * terpisah dari `TextField` agar tiap komponen punya kontrak yang jelas.
 *
 * @param props - Konfigurasi textarea (id, label, registration, error).
 * @returns Elemen textarea beserta label dan pesan error aksesibel.
 */
const TextAreaField = ({
    id,
    label,
    registration,
    error,
    ...textAreaProps
}: TextAreaFieldProps) => {
    const errorId = `${id}-error`

    return (
        <div className="grid gap-1">
            <label className="text-sm font-semibold text-slate-400" htmlFor={id}>
                {label}
            </label>
            <textarea
                id={id}
                {...textAreaProps}
                {...registration}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? errorId : undefined}
                className="w-full resize-y rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            {error && (
                <p className="text-sm text-rose-400" id={errorId} role="alert">
                    {error.message}
                </p>
            )}
        </div>
    )
}

export default TextAreaField

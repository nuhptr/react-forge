import { useId, useRef } from "react"

/**
 * Challenge 1 `useRef`: memfokuskan kursor ke elemen `<input>` saat tombol ditekan.
 *
 * @returns Kartu latihan fokus input menggunakan `useRef`.
 */
const FocusInput = () => {
    const inputId = useId()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        inputRef.current?.focus()
    }

    return (
        <div className="card">
            <h2>1. Focus Input</h2>
            <div className="controls">
                <label htmlFor={inputId}>Kolom Teks:</label>
                <input id={inputId} ref={inputRef} type="text" placeholder="Fokus lewat tombol" />
                <button type="button" onClick={handleFocus}>
                    Focus Input
                </button>
            </div>
        </div>
    )
}

export default FocusInput

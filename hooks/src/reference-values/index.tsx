import { useId, useRef } from "react"

/**
 * Mendemonstrasikan akses elemen DOM secara imperatif menggunakan `useRef<HTMLInputElement>(null)`
 * untuk memindahkan fokus dan mengisi nilai input tanpa memicu render ulang.
 *
 * @returns Halaman contoh penggunaan `useRef`.
 */
const ReferenceValues = () => {
    const targetInputId = useId()
    const inputElementRef = useRef<HTMLInputElement>(null)

    const handleFocusAndPopulate = () => {
        if (!inputElementRef.current) return
        inputElementRef.current.focus()
        inputElementRef.current.value = "Anmastery"
    }

    return (
        <main>
            <h1>Reference Values (useRef)</h1>
            <div className="card">
                <label htmlFor={targetInputId}>Target Input:</label>
                <div className="controls">
                    <input
                        id={targetInputId}
                        ref={inputElementRef}
                        type="text"
                        placeholder="Klik tombol untuk fokus otomatis"
                    />
                    <button type="button" onClick={handleFocusAndPopulate}>
                        Focus &amp; Isi Nama
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ReferenceValues

import { useId, useState } from "react"

/**
 * Mendemonstrasikan pemanfaatan prop `key` untuk mereset paksa state internal elemen DOM
 * ketika mode tampilan berpindah (`"dark"` vs `"light"`).
 *
 * Mengubah nilai `key` memerintahkan React untuk meng-unmount elemen `<input />` lama
 * dan me-mount instans baru sehingga isian tidak terkontrol ikut ter-reset.
 *
 * @returns Komponen pengubah tema dengan input yang ter-reset saat `key` berubah.
 */
const ThemeSwitcher = () => {
    const noteInputId = useId()
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="space-y-4 p-6">
            <div>
                {isDarkMode ? (
                    <span className="inline-block rounded bg-black px-4 py-2 text-white">Dark</span>
                ) : (
                    <span className="inline-block rounded border border-slate-300 bg-white px-4 py-2 text-black">
                        Light
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3">
                <label htmlFor={noteInputId} className="text-sm font-medium">
                    Transient note:
                </label>
                <input
                    id={noteInputId}
                    type="text"
                    key={isDarkMode ? "dark" : "light"}
                    placeholder="Resets when mode switches"
                    className="rounded border-2 border-slate-400 px-3 py-1.5"
                />
                <button
                    type="button"
                    onClick={() => setIsDarkMode((prevMode) => !prevMode)}
                    className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white">
                    Switch to {isDarkMode ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    )
}

export default ThemeSwitcher

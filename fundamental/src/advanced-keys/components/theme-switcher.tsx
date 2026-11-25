import { useId, useState } from "react"

/**
 * Demonstrates using React's `key` prop to force-reset uncontrolled/internal DOM state
 * when switching modes (`"dark"` vs `"light"`).
 *
 * Changing `key` instructs React to unmount the previous `<input />` instance
 * and mount a fresh one instead of reusing the existing DOM node.
 *
 * @returns Theme switcher with key-reset input.
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
                    className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white"
                >
                    Switch to {isDarkMode ? "Light" : "Dark"}
                </button>
            </div>
        </div>
    )
}

export default ThemeSwitcher

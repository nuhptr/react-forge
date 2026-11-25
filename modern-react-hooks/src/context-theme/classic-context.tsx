import { useContext } from "react"
import { ThemeContext, type Theme } from "./theme-provider"

/**
 * Kartu tema yang mengonsumsi konteks via `useContext`.
 *
 * Interface Segregation: tidak terima props apa pun; semua data dibaca dari konteks.
 */
export const ThemeCardClassic = () => {
    const { theme, toggleTheme } = useContext(ThemeContext) as {
        theme: Theme
        toggleTheme: () => void
    }

    const isDark = theme === "dark"

    return (
        <section className="theme-card" aria-labelledby="theme-card-classic-title">
            <h3 id="theme-card-classic-title">Tema (useContext)</h3>
            <div className={`theme-surface ${isDark ? "theme-dark" : "theme-light"}`}>
                <h4>Theme Card</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque.
                    Numquam exercitationem quae vitae vel veritatis similique illum repellat.
                </p>
                <button type="button" onClick={toggleTheme} aria-pressed={isDark}>
                    {isDark ? "Berpindah ke Light Mode" : "Berpindah ke Dark Mode"}
                </button>
            </div>
        </section>
    )
}

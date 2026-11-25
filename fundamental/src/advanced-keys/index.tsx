import ThemeSwitcher from "./components/theme-switcher"

/**
 * Demonstrates advanced reconciliation behavior using dynamic `key` props
 * to reset component state on identity change.
 *
 * @returns Advanced keys showcase component.
 */
const AdvancedKeys = () => {
    return (
        <main>
            <ThemeSwitcher />
        </main>
    )
}

export default AdvancedKeys

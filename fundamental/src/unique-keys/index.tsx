import ThemeSwitcher from "./components/theme-switcher"

/**
 * Mendemonstrasikan perilaku rekonsiliasi lanjutan React menggunakan prop `key` dinamis
 * untuk mereset state komponen ketika identitasnya berubah.
 *
 * @returns Komponen materi Advanced Keys.
 */
const UniqueKeys = () => {
    return (
        <main>
            <ThemeSwitcher />
        </main>
    )
}

export default UniqueKeys

import DaisyUi from "./daisy-ui"

/**
 * Komponen utama (playground) untuk workspace React UI Libraries.
 *
 * Daftar modul berurutan abjad (A–Z) sesuai urutan pembelajaran:
 * - `./daisy-ui` — DaisyUI Components
 * - `./radix-themes` — Radix UI Themes
 * - `./shadcn-ui` — shadcn/ui Primitives
 *
 * @returns Komponen topik/proyek yang sedang aktif dikerjakan.
 */
const App = () => {
    return <DaisyUi />
}

export default App

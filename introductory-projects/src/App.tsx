import BasicCounter from "./basic-counter"

/**
 * Komponen utama (playground) untuk workspace Introductory Projects.
 *
 * Daftar modul berurutan abjad (A–Z) sesuai urutan pembelajaran:
 * - `./basic-counter` — Counter Project
 * - `./checklist-todos` — Todo List Project
 * - `./culinary-meals` — Seafood Meals API Project
 * - `./desktop-calculator` — Calculator Project
 * - `./dynamic-theme-toggler` — Theme Color Toggler
 * - `./expandable-search-bar` — Expandable Search Bar
 * - `./feedback-testimonials` — Testimonials Carousel
 * - `./foldable-accordions` — FAQ Accordions
 * - `./form-validation` — Form Validation
 * - `./shoe-store-filtering` — E-Commerce Shoe Store Filtering
 *
 * @returns Komponen topik/proyek yang sedang aktif dikerjakan.
 */
const App = () => {
    return <BasicCounter />
}

export default App

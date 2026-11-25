import type { ComponentType } from "react"
import C0 from "./basic-counter"
import C1 from "./checklist-todos"
import C2 from "./culinary-meals"
import C3 from "./desktop-calculator"
import C4 from "./dynamic-theme-toggler"
import C5 from "./expandable-search-bar"
import C6 from "./feedback-testimonials"
import C7 from "./foldable-accordions"
import C8 from "./form-validation"
import C9 from "./shoe-store-filtering"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog modul berurutan abjad (A-Z) sesuai kurikulum.
 */
export const demos: Demo[] = [
    { id: "basic-counter", title: "Basic Counter", description: "Penghitung dasar.", Component: C0 },
    { id: "checklist-todos", title: "Checklist Todos", description: "Daftar tugas dengan checklist.", Component: C1 },
    { id: "culinary-meals", title: "Culinary Meals", description: "Filter makanan dari API.", Component: C2 },
    { id: "desktop-calculator", title: "Desktop Calculator", description: "Kalkulator interaktif.", Component: C3 },
    { id: "dynamic-theme-toggler", title: "Dynamic Theme Toggler", description: "Pengalih tema warna.", Component: C4 },
    { id: "expandable-search-bar", title: "Expandable Search Bar", description: "Bilah pencarian fleksibel.", Component: C5 },
    { id: "feedback-testimonials", title: "Feedback Testimonials", description: "Karousel testimoni.", Component: C6 },
    { id: "foldable-accordions", title: "Foldable Accordions", description: "Akordeon FAQ.", Component: C7 },
    { id: "form-validation", title: "Form Validation", description: "Validasi formulir.", Component: C8 },
    { id: "shoe-store-filtering", title: "Shoe Store Filtering", description: "Filter toko sepatu.", Component: C9 }
]

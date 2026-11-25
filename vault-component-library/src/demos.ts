import type { ComponentType } from "react"

import Accordion from "./accordion"
import Button from "./button"
import Card from "./card"
import DatePicker from "./date-picker"
import Input from "./input"
import Pagination from "./pagination"
import Select from "./select"

/** Kontrak satu entri katalog modul. */
export interface Demo {
    id: string
    title: string
    description: string
    Component: ComponentType
}

/**
 * Katalog 7 komponen library berurutan abjad (A-Z).
 */
export const demos: Demo[] = [
    {
        id: "accordion",
        title: "Accordion",
        description: "Section yang bisa dibuka tutup.",
        Component: Accordion,
    },
    {
        id: "button",
        title: "Button",
        description: "Tombol dengan varian dan status disabled.",
        Component: Button,
    },
    {
        id: "card",
        title: "Card",
        description: "Kartu dengan judul dan deskripsi.",
        Component: Card,
    },
    {
        id: "date-picker",
        title: "Date Picker",
        description: "Input tanggal terkontrol.",
        Component: DatePicker,
    },
    { id: "input", title: "Input", description: "Input dengan label aksesibel.", Component: Input },
    {
        id: "pagination",
        title: "Pagination",
        description: "Navigasi halaman.",
        Component: Pagination,
    },
    {
        id: "select",
        title: "Select",
        description: "Dropdown dengan opsi bertipe.",
        Component: Select,
    },
]

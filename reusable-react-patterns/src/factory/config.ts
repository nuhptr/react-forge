import type { ButtonTone } from "./button-factory"

/** Satu preset tombol yang dihasilkan pabrik. */
export interface ButtonPreset {
    label: string
    tone: ButtonTone
}

/** Konfigurasi varian yang dibuat sekali saat modul dimuat. */
export const presets: ButtonPreset[] = [
    { label: "Utama", tone: "primary" },
    { label: "Bahaya", tone: "danger" },
    { label: "Hampa", tone: "ghost" },
]

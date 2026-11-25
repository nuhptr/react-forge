/** Varian tombol yang tersedia di panel Controls. */
export const variants = ["primary", "secondary", "danger"] as const

/** Tipe varian turunan dari konfigurasi. */
export type Variant = (typeof variants)[number]

/** Nilai awal args pada demo. */
export const initialArgs = {
    label: "Ubah Saya",
    variant: "primary" as Variant,
    disabled: false,
}

/** Kelas Tailwind untuk tiap varian. */
export const variantClass: Record<Variant, string> = {
    primary: "bg-blue-600 hover:bg-blue-500",
    secondary: "bg-slate-600 hover:bg-slate-500",
    danger: "bg-rose-600 hover:bg-rose-500",
}

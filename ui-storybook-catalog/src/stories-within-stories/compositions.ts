/** Satu komposisi yang menggabungkan dua story yang sudah ada. */
export interface Composition {
    id: string
    label: string
    placeholder: string
    catatan: string
}

/** Data komposisi dipisah dari komponen pratinjau. */
export const compositions: Composition[] = [
    {
        id: "form-sederhana",
        label: "Kirim",
        placeholder: "Nama Anda",
        catatan: "Button di dalam MyInput story membentuk satu form story baru.",
    },
    {
        id: "form-panjang",
        label: "Simpan Profil",
        placeholder: "Alamat email lengkap",
        catatan: "Args diteruskan ke kedua komponen tanpa mengubahnya.",
    },
]

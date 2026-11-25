/** Dokumentasi satu prop komponen. */
export interface PropDoc {
    name: string
    type: string
    defaultValue: string
    description: string
}

/** Data dokumentasi dipisah dari tampilan tabel. */
export const propDocs: PropDoc[] = [
    {
        name: "label",
        type: "string",
        defaultValue: '"Click Me"',
        description: "Teks yang ditampilkan pada tombol.",
    },
    {
        name: "variant",
        type: "primary | secondary | danger",
        defaultValue: '"primary"',
        description: "Varian warna tombol.",
    },
    {
        name: "disabled",
        type: "boolean",
        defaultValue: "false",
        description: "Menonaktifkan interaksi tombol.",
    },
]

/** Contoh konfigurasi parameter docs pada meta story. */
export const contohParameter =
    'parameters: { docs: { description: { component: "Tombol reusable." } } }'

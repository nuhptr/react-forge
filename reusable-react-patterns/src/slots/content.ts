/** Konten satu kartu bertema slot bernama. */
export interface CardContent {
    id: string
    judul: string
    isi: string
    aksi: string
    catatan: string
}

/** Data dipisah dari komponen Card dan Slot. */
export const cards: CardContent[] = [
    {
        id: "slot-header",
        judul: "Header Slot",
        isi: 'Bagian header dikirim lewat <Slot slot="header">.',
        aksi: "Tandai",
        catatan: "Slot dan isi dipisahkan oleh komponen Card.",
    },
    {
        id: "slot-footer",
        judul: "Footer Slot",
        isi: "Anak tanpa penanda slot menjadi konten utama kartu.",
        aksi: "Pilih",
        catatan: "Card hanya mengenali slot header dan footer.",
    },
]

/** Satu artikel yang ditampilkan layout. */
export interface Article {
    id: string
    judul: string
    ringkasan: string
    isi: string
}

/** Data artikel dipisah dari komponen layout. */
export const articles: Article[] = [
    {
        id: "komposisi",
        judul: "Komposisi UI",
        ringkasan: "Menyusun antarmuka dari bagian kecil yang dapat dipakai ulang.",
        isi: "Layout menerima konten melalui props sehingga tidak perlu tahu detail tiap artikel.",
    },
    {
        id: "state",
        judul: "Aliran State",
        ringkasan: "State dikelola pemiliknya dan mengalir ke bawah lewat props.",
        isi: "Sidebar memilih artikel aktif; panel utama hanya merender apa yang dipilih.",
    },
    {
        id: "aksesibilitas",
        judul: "Aksesibilitas",
        ringkasan: "Penanda semantik membantu pembaca layar memahami struktur.",
        isi: "Elemen aside, article, dan aria-pressed memberi konteks tanpa mengubah tampilan.",
    },
]

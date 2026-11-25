/** Penjelasan satu bagian sintaks test. */
export interface SintaksItem {
    kata: string
    contoh: string
    arti: string
}

/** Referensi sintaks: describe, test/it, expect, dan pola AAA. */
export const sintaks: SintaksItem[] = [
    {
        kata: "describe",
        contoh: 'describe("penjumlahan", () => { ... })',
        arti: "Mengelompokkan beberapa test dalam satu blok.",
    },
    {
        kata: "test / it",
        contoh: 'it("menjumlahkan dua angka", () => { ... })',
        arti: "Satu kasus uji dengan nama dan fungsi.",
    },
    {
        kata: "expect",
        contoh: "expect(tambah(1, 2)).toBe(3)",
        arti: "Assertion yang membandingkan aktual dan ekspektasi.",
    },
    {
        kata: "AAA",
        contoh: "Arrange → Act → Assert",
        arti: "Siapkan data, jalankan fungsi, lalu periksa hasil.",
    },
]

/** Pasangan angka yang dipakai contoh Arrange-Act-Assert. */
export const contohAngka: [number, number, number][] = [
    [1, 2, 3],
    [2, 3, 5],
    [4, 4, 8],
]

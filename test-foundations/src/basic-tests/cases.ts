import { ambilNama, kebabCase, tambah, unik } from "./utils"

/** Satu kasus test dasar dengan nilai aktual dan ekspektasi. */
export interface TestCase {
    nama: string
    aktual: () => unknown
    expected: unknown
}

/** Daftar kasus: tiga lulus dan satu sengaja gagal sebagai contoh test merah. */
export const cases: TestCase[] = [
    { nama: "tambah(2, 3)", aktual: () => tambah(2, 3), expected: 5 },
    {
        nama: 'kebabCase("Halo Dunia")',
        aktual: () => kebabCase("Halo Dunia"),
        expected: "halo-dunia",
    },
    { nama: "unik([1, 1, 2])", aktual: () => unik([1, 1, 2]), expected: [1, 2] },
    {
        nama: 'ambilNama({ nama: "Ana" })',
        aktual: () => ambilNama({ nama: "Ana" }),
        expected: "Ana",
    },
    {
        nama: "tambah(2, 2) → 5 (sengaja salah)",
        aktual: () => tambah(2, 2),
        expected: 5,
    },
]

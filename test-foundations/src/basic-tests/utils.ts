/**
 * Menjumlahkan dua bilangan.
 *
 * @param a - Bilangan pertama.
 * @param b - Bilangan kedua.
 * @returns Hasil penjumlahan.
 */
export const tambah = (a: number, b: number) => a + b

/**
 * Mengubah teks menjadi format kebab-case.
 *
 * @param teks - Teks sumber.
 * @returns Teks huruf kecil dengan tanda hubung.
 */
export const kebabCase = (teks: string) => teks.trim().toLowerCase().replace(/\s+/g, "-")

/**
 * Menghapus nilai duplikat dari array.
 *
 * @param items - Daftar nilai.
 * @returns Daftar nilai unik dengan urutan tetap.
 */
export const unik = <T>(items: T[]) => [...new Set(items)]

/**
 * Mengambil nama dari objek pengguna.
 *
 * @param user - Objek dengan properti nama.
 * @returns Nama pengguna.
 */
export const ambilNama = (user: { nama: string }) => user.nama

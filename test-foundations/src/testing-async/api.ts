import { ID_GAGAL, JEDA } from "./config"

/** Data pengguna tiruan yang dikembalikan API. */
export interface User {
    id: number
    nama: string
}

/**
 * Menunda eksekusi selama jeda yang ditentukan.
 *
 * @param ms - Jeda dalam milidetik.
 * @returns Promise yang selesai setelah jeda.
 */
const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/**
 * Mengambil data pengguna secara asynchronous (tiruan API).
 *
 * @param id - Id pengguna yang dicari.
 * @returns Data pengguna setelah jeda singkat.
 * @throws Error ketika id tidak ditemukan.
 */
export async function fetchUser(id: number): Promise<User> {
    await wait(JEDA)
    if (id === ID_GAGAL) {
        throw new Error("Pengguna tidak ditemukan")
    }
    return { id, nama: `Pengguna ${id}` }
}

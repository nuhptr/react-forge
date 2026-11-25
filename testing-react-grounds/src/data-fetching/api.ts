import { DAFTAR_TODO, JEDA } from "./config"

/** Satu todo hasil API tiruan. */
export interface Todo {
    id: number
    title: string
    completed: boolean
}

/**
 * Menunda eksekusi selama jeda tertentu.
 *
 * @param ms - Jeda dalam milidetik.
 * @returns Promise yang selesai setelah jeda.
 */
const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/**
 * Mengambil daftar todo dari API tiruan.
 *
 * @returns Daftar todo setelah jeda singkat.
 */
export async function fetchTodos(): Promise<Todo[]> {
    await wait(JEDA)
    return DAFTAR_TODO.map((todo) => ({ ...todo }))
}

import { useState } from "react"

/**
 * Menghitung nilai awal penghitung secara malas (lazy) hanya saat pertama kali komponen dipasang (mount).
 */
const getInitialCount = (): number => 10

/**
 * Mendemonstrasikan lazy state initialization dengan meneruskan referensi fungsi ke `useState`.
 *
 * Meneruskan `getInitialCount` (tanpa memanggilnya langsung di tiap render) memastikan proses
 * inisialisasi hanya dijalankan satu kali pada render pertama.
 *
 * @returns Komponen penghitung dengan inisialisasi malas.
 */
const LazyCounter = () => {
    const [count, setCount] = useState<number>(getInitialCount)

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>
        </div>
    )
}

export default LazyCounter

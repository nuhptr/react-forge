import { useState } from "react"

/**
 * Mendemonstrasikan pengelolaan state angka dasar menggunakan `useState` dengan batas bawah nol.
 *
 * @returns Komponen penghitung tambah/kurang.
 */
const BasicCounter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount((prevCount) => prevCount + 1)
    const handleDecrement = () => setCount((prevCount) => Math.max(0, prevCount - 1))

    return (
        <div>
            <h1>Count: {count}</h1>
            <button type="button" onClick={handleIncrement}>
                +
            </button>
            <button type="button" onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}

export default BasicCounter

import { useState } from "react"

/**
 * Komponen penghitung sederhana menggunakan `useState` dengan pembaruan fungsional.
 *
 * @returns Kartu penghitung interaktif.
 */
const StateCounter = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => setCount((prevCount) => prevCount + 1)
    const handleDecrement = () => setCount((prevCount) => prevCount - 1)
    const handleReset = () => setCount(0)

    return (
        <div className="card">
            <h2>Counter: {count}</h2>
            <div className="controls">
                <button type="button" onClick={handleIncrement}>
                    +
                </button>
                <button type="button" onClick={handleDecrement}>
                    -
                </button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StateCounter

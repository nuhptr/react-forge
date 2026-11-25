import { useState } from "react"

/**
 * State challenge 1: pembaruan penghitung fungsional dengan batas minimum nol.
 *
 * @returns Komponen challenge penghitung.
 */
const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount((currentCount) => currentCount + 1)
    const decrement = () => setCount((currentCount) => Math.max(0, currentCount - 1))

    return (
        <div>
            <p>You clicked {count} times</p>
            <button type="button" onClick={increment}>
                Increment
            </button>
            <button type="button" onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}

export default Counter

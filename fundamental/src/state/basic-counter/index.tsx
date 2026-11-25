import { useState } from "react"

/**
 * Demonstrates basic numeric state management with `useState` and non-negative bounds.
 *
 * @returns Increment/decrement counter widget.
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

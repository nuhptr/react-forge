import { useState } from "react"

/**
 * Computes the initial counter value lazily on mount only.
 */
const getInitialCount = (): number => 10

/**
 * Demonstrates lazy state initialization by passing an initializer function to `useState`.
 *
 * Passing `getInitialCount` (without invoking it on every render) ensures expensive
 * initialization logic runs only during the initial mount.
 *
 * @returns Lazy-initialized counter component.
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

import { useState } from "react"

/**
 * State challenge 1: functional counter updates with a zero floor.
 *
 * @returns Counter challenge component.
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

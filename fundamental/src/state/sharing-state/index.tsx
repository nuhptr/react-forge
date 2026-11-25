import { useState } from "react"

import PrimaryCounter from "./components/primary-counter"
import SecondaryCounter from "./components/secondary-counter"

/**
 * Demonstrates lifting state up so sibling components (`PrimaryCounter` and `SecondaryCounter`)
 * read and update a single source of truth.
 *
 * @returns Synchronized sibling counter section.
 */
const SharingState = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = (step = 1) => {
        setCount((currentCount) => currentCount + step)
    }

    return (
        <section>
            <PrimaryCounter count={count} onIncrement={() => handleIncrement(1)} />
            <SecondaryCounter count={count} onIncrement={() => handleIncrement(1)} />
        </section>
    )
}

export default SharingState

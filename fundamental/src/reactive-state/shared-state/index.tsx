import { useState } from "react"

import PrimaryCounter from "./components/primary-counter"
import SecondaryCounter from "./components/secondary-counter"

/**
 * Mendemonstrasikan pola Lifting State Up agar dua komponen sejajar (`PrimaryCounter` dan `SecondaryCounter`)
 * membaca serta memperbarui satu sumber data yang sama.
 *
 * @returns Section dua penghitung yang tersinkronisasi.
 */
const SharedState = () => {
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

export default SharedState

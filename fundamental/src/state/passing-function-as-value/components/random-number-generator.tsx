import { useState } from "react"

/**
 * Generates a random integer between `0` and `99`.
 */
const generateRandomInteger = (): number => Math.floor(Math.random() * 100)

/**
 * Demonstrates lazy `useState` initialization with a non-deterministic generator (`Math.random`).
 *
 * @returns Random number generator widget.
 */
const RandomNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState<number>(generateRandomInteger)

    const handleRegenerate = () => {
        setRandomNumber(generateRandomInteger())
    }

    return (
        <div>
            <h2>Random number: {randomNumber}</h2>
            <button type="button" onClick={handleRegenerate}>
                Generate random number
            </button>
        </div>
    )
}

export default RandomNumberGenerator

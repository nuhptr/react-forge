import { useState } from "react"

/**
 * Menghasilkan bilangan bulat acak di antara `0` sampai `99`.
 */
const generateRandomInteger = (): number => Math.floor(Math.random() * 100)

/**
 * Mendemonstrasikan inisialisasi malas pada `useState` menggunakan fungsi generator angka acak (`Math.random`).
 *
 * @returns Komponen generator angka acak.
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

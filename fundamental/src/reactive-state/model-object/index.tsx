import { useState } from "react"

/**
 * Struktur data film beserta nilai rating-nya.
 */
interface Movie {
    title: string
    rating: number
}

const INITIAL_MOVIE: Movie = {
    title: "Equalizer 3",
    rating: 7,
}

/**
 * Mendemonstrasikan pembaruan state objek secara immutable menggunakan spread syntax (`{ ...prevMovie }`).
 *
 * @returns Komponen pengubah rating film.
 */
const ModelObject = () => {
    const [movie, setMovie] = useState<Movie>(INITIAL_MOVIE)

    const handleRatingChange = () => {
        setMovie((prevMovie) => ({ ...prevMovie, rating: 5 }))
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Rating: {movie.rating}</p>
            <button type="button" onClick={handleRatingChange}>
                Change Rating
            </button>
        </div>
    )
}

export default ModelObject

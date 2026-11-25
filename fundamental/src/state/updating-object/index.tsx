import { useState } from "react"

/**
 * Represents a movie record with a numeric rating.
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
 * Demonstrates immutable object state updates using object spread syntax (`{ ...prev }`).
 *
 * @returns Movie rating updater component.
 */
const UpdatingObject = () => {
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

export default UpdatingObject

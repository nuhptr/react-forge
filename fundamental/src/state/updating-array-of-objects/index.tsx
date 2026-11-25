import { useState } from "react"

/**
 * Represents a movie entry inside a stateful collection.
 */
interface MovieItem {
    id: number
    title: string
    rating: number
}

const INITIAL_MOVIES: MovieItem[] = [
    { id: 1, title: "Spider-Man", rating: 3 },
    { id: 2, title: "Superman", rating: 6 },
]

/**
 * Demonstrates immutably updating a single object inside an array of objects via `.map()`.
 *
 * @returns Movie list component with title update action.
 */
const UpdatingArrayOfObjects = () => {
    const [movies, setMovies] = useState<MovieItem[]>(INITIAL_MOVIES)

    const handleRenameFirstMovie = () => {
        setMovies((currentMovies) =>
            currentMovies.map((movie) =>
                movie.id === 1 ? { ...movie, title: "John Wick" } : movie,
            ),
        )
    }

    return (
        <div>
            <ul style={{ listStyle: "none" }} role="list">
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} (Rating: {movie.rating})
                    </li>
                ))}
            </ul>

            <button type="button" onClick={handleRenameFirstMovie}>
                Change First Movie Title
            </button>
        </div>
    )
}

export default UpdatingArrayOfObjects

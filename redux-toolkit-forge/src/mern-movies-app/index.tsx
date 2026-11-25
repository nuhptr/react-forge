import { Provider, useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import { toggleFavorite } from "./movies-slice"
import { moviesStore, type MoviesRootState } from "./store"

const useMoviesSelector: TypedUseSelectorHook<MoviesRootState> = useSelector

const movies = [
    { id: "m1", title: "Inception", year: 2010 },
    { id: "m2", title: "Interstellar", year: 2014 },
    { id: "m3", title: "The Matrix", year: 1999 },
] as const

/**
 * Daftar film dengan tombol favorit.
 *
 * @returns Katalog film dan jumlah favorit.
 */
const MoviesView = () => {
    const favorites = useMoviesSelector((state) => state.movies.favorites)
    const dispatch = useDispatch()

    return (
        <div className="panel">
            <h3 className="text-lg font-semibold text-blue-400">Movies App — Favorit</h3>
            <p className="text-sm text-slate-400">Favorit: {favorites.length} film</p>
            <div className="grid gap-2 sm:grid-cols-3">
                {movies.map((movie) => {
                    const isFavorite = favorites.includes(movie.id)
                    return (
                        <div
                            key={movie.id}
                            className="grid gap-2 rounded-lg border border-slate-700 bg-slate-900/50 p-3">
                            <p className="font-medium">{movie.title}</p>
                            <p className="text-sm text-slate-400">{movie.year}</p>
                            <button
                                type="button"
                                aria-pressed={isFavorite}
                                className="btn"
                                onClick={() => dispatch(toggleFavorite(movie.id))}>
                                {isFavorite ? "Hapus favorit" : "Tambah favorit"}
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

/**
 * Demo Movies App dengan Provider lokal.
 *
 * @returns Provider slice film berisi katalog film.
 */
export default function MernMoviesApp() {
    return (
        <Provider store={moviesStore}>
            <MoviesView />
        </Provider>
    )
}

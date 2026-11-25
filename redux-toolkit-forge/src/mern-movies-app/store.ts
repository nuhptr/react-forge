import { configureStore } from "@reduxjs/toolkit"

import moviesReducer from "./movies-slice"

/**
 * Store khusus Movies App.
 */
export const moviesStore = configureStore({
    reducer: { movies: moviesReducer },
})

export type MoviesRootState = ReturnType<typeof moviesStore.getState>

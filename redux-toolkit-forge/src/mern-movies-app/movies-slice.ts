import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface MoviesState {
    favorites: string[]
}

const initialState: MoviesState = { favorites: [] }

/**
 * Slice film favorit.
 *
 * Single Responsibility: hanya mengelola daftar ID film favorit.
 */
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<string>) => {
            const id = action.payload

            state.favorites = state.favorites.includes(id)
                ? state.favorites.filter((item) => item !== id)
                : [...state.favorites, id]
        },
    },
})

export const { toggleFavorite } = moviesSlice.actions

export default moviesSlice.reducer

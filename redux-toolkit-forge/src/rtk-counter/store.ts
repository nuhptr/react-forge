import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "./counter-slice"

/**
 * Store khusus modul counter.
 *
 * Dependency Inversion: komponen bergantung pada hook bertipe yang diekspor
 * di sini, bukan pada instance store secara langsung.
 */
export const counterStore = configureStore({
    reducer: { counter: counterReducer },
})

export type CounterRootState = ReturnType<typeof counterStore.getState>
export type CounterAppDispatch = typeof counterStore.dispatch

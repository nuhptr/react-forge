import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./cart-slice"

/**
 * Store khusus E-Commerce (keranjang).
 *
 * Open/Closed: reducer lain bisa ditambahkan tanpa mengubah UI yang sudah ada.
 */
export const ecommerceStore = configureStore({
    reducer: { cart: cartReducer },
})

export type EcommerceRootState = ReturnType<typeof ecommerceStore.getState>

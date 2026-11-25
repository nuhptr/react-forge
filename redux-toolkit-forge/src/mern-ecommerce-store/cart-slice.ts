import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

/**
 * Slice keranjang belanja.
 *
 * Single Responsibility: hanya mengelola state keranjang;
 * katalog produk dan UI berada di tempat lain.
 */
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "qty">>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

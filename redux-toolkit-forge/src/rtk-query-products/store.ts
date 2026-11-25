import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { productsApi } from "./api";

/**
 * Store khusus modul RTK Query dengan middleware API.
 */
export const queryStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(queryStore.dispatch);

export type QueryRootState = ReturnType<typeof queryStore.getState>;

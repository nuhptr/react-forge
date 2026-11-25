import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface Product {
    id: number
    title: string
    price: number
    category?: string
    thumbnail?: string
}

export interface ProductInput {
    title: string
    price: number
}

/**
 * API slice untuk produk DummyJSON.
 *
 * Single Responsibility: hanya mendefinisikan endpoint query & mutation;
 * store dan UI berada di file terpisah.
 */
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getAllProducts: builder.query<Product[], void>({
            query: () => "/products?limit=8",
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation<Product, ProductInput>({
            query: (body) => ({
                url: "/products/add",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation<{ id: number }, number>({
            query: (id) => ({ url: `/products/${id}`, method: "DELETE" }),
            invalidatesTags: ["Product"],
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
} = productsApi

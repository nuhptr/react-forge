import { useState } from "react"
import { Provider } from "react-redux"

import { useAddProductMutation, useDeleteProductMutation, useGetAllProductsQuery } from "./api"
import { queryStore } from "./store"

/**
 * Daftar produk dari RTK Query.
 *
 * Single Responsibility: hanya menampilkan data + aksi tambah/hapus.
 */
const ProductList = () => {
    const { data, isLoading, isError } = useGetAllProductsQuery()
    const [addProduct] = useAddProductMutation()
    const [deleteProduct] = useDeleteProductMutation()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("10")

    const handleAdd = async () => {
        if (!title.trim()) return
        await addProduct({ title: title.trim(), price: Number(price) })
        setTitle("")
    }

    return (
        <div className="panel">
            <h3 className="text-lg font-semibold text-blue-400">RTK Query — Produk</h3>
            <div className="flex flex-wrap items-end gap-2">
                <div className="field">
                    <label htmlFor="product-title">Judul</label>
                    <input
                        id="product-title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Produk baru"
                    />
                </div>
                <div className="field">
                    <label htmlFor="product-price">Harga</label>
                    <input
                        id="product-price"
                        type="number"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>
                <button type="button" className="btn" onClick={handleAdd}>
                    Tambah
                </button>
            </div>

            {isLoading && <p className="text-slate-400">Memuat produk...</p>}
            {isError && <p className="text-rose-400">Gagal memuat produk.</p>}

            <ul className="grid gap-2 sm:grid-cols-2">
                {data?.map((product) => (
                    <li
                        key={product.id}
                        className="flex items-center justify-between gap-2 rounded-lg border border-slate-700 bg-slate-900/50 p-3">
                        <div>
                            <p className="font-medium">{product.title}</p>
                            <p className="text-sm text-slate-400">${product.price}</p>
                        </div>
                        <button
                            type="button"
                            className="btn-danger"
                            onClick={() => deleteProduct(product.id)}>
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
            <p className="text-xs text-slate-500">
                Data dikelola oleh RTK Query cache (tag: Product).
            </p>
        </div>
    )
}

/**
 * Demo RTK Query dengan Provider lokal agar modul berdiri sendiri.
 *
 * @returns Provider RTK Query berisi daftar produk.
 */
export default function RtkQueryProducts() {
    return (
        <Provider store={queryStore}>
            <ProductList />
        </Provider>
    )
}

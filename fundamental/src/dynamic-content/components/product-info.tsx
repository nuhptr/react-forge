/**
 * Struktur data informasi katalog produk tunggal.
 */
interface Product {
    name: string
    price: number
    availability: string
}

/**
 * Merender properti objek produk (nama, harga, dan ketersediaan stok) secara dinamis di dalam JSX.
 *
 * @returns Blok rincian informasi produk.
 */
const ProductInfo = () => {
    const product: Product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock",
    }

    return (
        <div>
            <h2>Name: {product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Availability: {product.availability}</p>
        </div>
    )
}

export default ProductInfo

/**
 * Props untuk komponen {@link Product}.
 */
export interface ProductProps {
    name: string
    price: number
}

/**
 * Menampilkan nama dan harga produk yang diterima melalui `props`.
 *
 * @param props Properti data produk.
 * @returns Blok ringkasan produk.
 */
const Product = (props: ProductProps) => {
    return (
        <div>
            <h2>Product Name: {props.name}</h2>
            <p>Product Price: ${props.price}</p>
        </div>
    )
}

export default Product

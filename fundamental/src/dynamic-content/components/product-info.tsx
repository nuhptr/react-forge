/**
 * Represents catalog metadata for a single product.
 */
interface Product {
    name: string
    price: number
    availability: string
}

/**
 * Renders dynamic object properties (name, price, and stock availability) inside JSX.
 *
 * @returns Product details block.
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

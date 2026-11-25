/**
 * Represents a catalog item displayed in {@link ProductList}.
 */
interface Product {
    id: number
    name: string
    price: string
}

const PRODUCTS: Product[] = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
]

/**
 * Renders a collection of products mapped with stable `product.id` keys.
 *
 * @returns Unordered list of product entries.
 */
const ProductList = () => {
    return (
        <ul>
            {PRODUCTS.map((product) => (
                <li key={product.id}>
                    <h2>Name: {product.name}</h2>
                    <p>Price: {product.price}</p>
                </li>
            ))}
        </ul>
    )
}

export default ProductList

/**
 * Props for the {@link Product} component.
 */
export interface ProductProps {
    name: string
    price: number
}

/**
 * Displays a product's name and price passed through `props`.
 *
 * @param props Product display properties.
 * @returns Product summary block.
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

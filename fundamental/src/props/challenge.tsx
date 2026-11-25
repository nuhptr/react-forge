import Person from "./components/person"
import Product from "./components/product"

/**
 * Props challenge solution rendering typed `Person` and `Product` components.
 *
 * @returns Composed person and product cards.
 */
const PropsChallenge = () => {
    return (
        <>
            <Person name="Alex Morgan" age={28} />
            <Product name="Wireless Headphones" price={79.99} />
        </>
    )
}

export default PropsChallenge

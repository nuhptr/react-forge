import ProductList from "./components/product-list"
import UserList from "./components/user-list"

/**
 * List-of-data challenge solution rendering typed user and product collections.
 *
 * @returns Composed user and product list components.
 */
const ListOfDataChallenge = () => {
    return (
        <>
            <UserList />
            <ProductList />
        </>
    )
}

export default ListOfDataChallenge

import ProductList from "./components/product-list"
import UserList from "./components/user-list"

/**
 * Solusi challenge List of Data yang merender daftar pengguna dan daftar produk bertipe ketat.
 *
 * @returns Komposisi komponen `UserList` dan `ProductList`.
 */
const FormattedListsChallenge = () => {
    return (
        <>
            <UserList />
            <ProductList />
        </>
    )
}

export default FormattedListsChallenge

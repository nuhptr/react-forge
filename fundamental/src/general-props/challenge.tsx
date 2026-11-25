import Person from "./components/person"
import Product from "./components/product"

/**
 * Solusi challenge Props yang merender komponen `Person` dan `Product` dengan tipe eksplisit.
 *
 * @returns Gabungan tampilan profil orang dan informasi produk.
 */
const GeneralPropsChallenge = () => {
    return (
        <>
            <Person name="Alex Morgan" age={28} />
            <Product name="Wireless Headphones" price={79.99} />
        </>
    )
}

export default GeneralPropsChallenge

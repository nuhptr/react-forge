import GreetingContent from "./components/greeting-content"
import ProductInfo from "./components/product-info"

/**
 * Solusi challenge Dynamic Content yang menggabungkan komponen `GreetingContent` dan `ProductInfo`.
 *
 * @returns Tampilan gabungan challenge konten dinamis.
 */
const DynamicContentChallenge = () => {
    return (
        <>
            <GreetingContent />
            <ProductInfo />
        </>
    )
}

export default DynamicContentChallenge
